const FundGoal = () => {
    return (
        <div className="flex w-[40%] flex-col justify-between gap-8">
            <div className='flex flex-col flex-1 rounded-xl gap-8 w-full items-center justify-center px-6 py-10 bg-white/10 backdrop-blur-md'>
                <span>Fund Goal</span>
                <div>
                    <span className='text-[60px] px-2 font-bold'>30</span>
                    <span>tDUST</span>
                </div>
            </div>
            <div className='flex flex-col flex-1 rounded-xl gap-8 w-full items-center justify-center px-6 py-10 bg-white/10 backdrop-blur-md'>
                <span>Total Fund Pool</span>
                <div>
                    <span className='text-[60px] px-2 font-bold'>10</span>
                    <span>tDUST</span>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default FundGoal
