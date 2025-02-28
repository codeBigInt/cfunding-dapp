import { useState } from 'react'
import { connectToWallet } from '../actions/action'
import toast from 'react-hot-toast'
import { Link } from "lucide-react"

const ConnectToWallet = () => {
    const [walletConnected, setWalletConnected] = useState<boolean>(false)
    const [walletAddrs, setWalletAddrs] = useState<string | undefined>(undefined)
    const [isConnecting, setIsConnecting] = useState<boolean>(false)
    const [_, setError] = useState<string | null>(null);

    // Trigger to connect to midnight lace wallet
    const handleConnectToWallet = async () => {
        setIsConnecting(true)
        try {
            const { wallet } = await connectToWallet();
            if (wallet) {
                const walletResult = await wallet.state();
                const pub_key = walletResult.encryptionPublicKey
                const connectedAddrs = walletResult.address
                setWalletAddrs(connectedAddrs)
                setIsConnecting(false);
                console.log(pub_key);

                setWalletConnected(true)
            }
            console.log("Found wallet state:", wallet)
        } catch (error) {
            setError((error as Error).message)
            toast.error("Failed to connect")
            setWalletConnected(false)
        } finally {
            setIsConnecting(false)
        }
    }

    return (
        <button onClick={handleConnectToWallet} className='bg-white/10 p-2 rounded-xl backdrop-blur-sm text-black'>
            {
                walletConnected ? (
                    <span className='flex items-center gap-2 px-2'>
                        <span className='truncate'>{walletAddrs?.slice(0, 15)}</span>
                        <img src={"/icon.png"} alt='' className='invert-100' width={50} height={50} />
                    </span>
                ) : (
                    <span className='flex flex-row-reverse gap-2 px-3'>
                        <span>{isConnecting ? "Connecting" : "Connect"}</span>
                        <Link />
                    </span>
                )
            }
        </button>
    )
}

export default ConnectToWallet
