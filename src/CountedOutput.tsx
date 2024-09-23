const CountedOutput = () => {
    return ( 
        <div className="basis-1/2 bg-cyan-800 rounded-xl p-8 flex gap-8 flex-col justify-between max-sm:p-5">
            <div className="">
            <div className="flex  justify-between max-sm:flex-wrap">
                <div className="leading-4">
                    <p className="text-white text-sm">Tip Amount</p>
                    <span className="text-gray-400 text-sm  ">/person</span>
                </div>
                <span className="text-cyan-200 text-3xl font-semibold ">$21.33</span>
            </div>
            <div className="flex justify-between  mt-10 max-sm:flex-wrap">
                <div className="leading-4 ">
                    <p className="text-white text-sm">Total</p>
                    <span className="text-gray-400 text-sm">/person</span>
                </div>
                <span className="text-cyan-200 text-3xl font-semibold">$32.43</span>
            </div>
            </div>
            <button className="bg-cyan-500 hover:bg-cyan-100 h-8 rounded-md font-semibold text-cyan-800">RESET</button>

        </div>
    )
}
export default CountedOutput