import "./App.css"
import ConnectToWallet from "./components/ConnectToWallet";
import FundingArea from "./components/Form";
import Contributors from "./components/Contributors";
import FundGoal from "./components/FundGoal";
import { Toaster } from "react-hot-toast";
import React from "react";
import useSingleDeployment from "./hooks/useSingleDeployment";


export default function App() {
  const [isDeploying, setIsDeploying] = React.useState<boolean>(false)
  const { deploy, status } = useSingleDeployment()
  const bg = {
    backgroundImage: `url(/logo-render.png)`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  const handleDeployment = async () => {
    setIsDeploying(true)
    try {
      await deploy();
      setIsDeploying(false)
    } catch (error) {
      setIsDeploying(false)
      throw error;
    }finally{
      setIsDeploying(false)
    }
  }


  return (
    <div style={bg} className="bg-black container border min-h-screen border-black flex flex-col text-white lg:px-20 px-10 py-10">
      <header className="flex justify-between  items-center">
        <div className="flex  items-center gap-3">
          <img src={"/icon.png"} alt='' width={50} height={50} />
          <span className="text-3xl font-semi-bold">Fundee</span>
        </div>
        <ConnectToWallet />
      </header>
      <button onClick={handleDeployment} className='bg-white/10 p-2 w-max rounded-xl text-black backdrop-blur-sm '>
        {isDeploying ? "Deploying" : `Deploy Contract: ${status}`}
      </button>
      <main className="flex-1 w-[100%] flex pt-10 gap-6">
        <FundingArea />
        <div className="w-full min-h-full flex gap-6">
          <Contributors />
          <FundGoal />
        </div>
      </main>
      <Toaster />
    </div>
  );
}
