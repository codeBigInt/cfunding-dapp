const Contributors = () => {
  const contributors = [
    {
      addrs: "323czgjccbkbabkjbajbj12jkcj3kk4kkbkjk4j21j33334kkjk5jj6",
      amnt: "30"
    }
  ]

  return (
    <div className='flex flex-col min-h-full rounded-xl gap-10 w-[60%] items-start px-6 py-10 bg-white/10 backdrop-blur-md'>
      <p>Contributors in the pool</p>
      <div className="w-full">
        {
          contributors.map((contributor, index) => (
            <div key={index} className='flex items-center border-y-[1px] py-3 border-white/65 gap-2'>
              <span className='p-1 px-3 w-max text-xs bg-white/30 rounded-full'>{index + 1}</span>
              <div className="flex-1 flex justify-between items-center gap-2">
                <span className='w-[85%] truncate'>{contributor.addrs}</span>
                <span className="w-[15%] font-bold" >{contributor.amnt}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Contributors
