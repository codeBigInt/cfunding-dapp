import { useState } from "react"

const FundingArea = () => {
  const [value, setValue] = useState<number>(5)
  
  return (
    <form className='flex flex-col min-h-full rounded-xl gap-10 w-1/3 items-center px-10 py-20 bg-white/10 backdrop-blur-md'>
      <h3 className="text-2xl text-center">Join Fundees aroud the globe build Web3 Infra</h3>
      <span className="text-xs">Enter a fund amount of tUSDT below(min: 5 tUSDT)</span>
      <div className="flex flex-col w-full gap-8 items-center">
        <div>
          <label>amount</label>
          <input
            id="amount"
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="outline-none font-bold text-center remove-arrow w-max bg-transparent border-none text-[100px] text-white" />
          <div></div>
        </div>
        <button className="w-max bg-white p-4 text-black px-6 rounded-lg">Fund Pool</button>
      </div>
    </form>
  )
}

export default FundingArea
