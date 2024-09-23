const UserInput = () => {
    return (
        <div className="basis-1/2 flex flex-col gap-5">
            <div className="bill-wrap">
            <p className="font-semibold text-grayischCyan-500">Bill</p>
                <div className="w-full  relative ">
            <input  className="w-full text-2xl pr-3 text-right text-cyan-800 font-semibold  bg-grayischCyan-50 h-10  rounded-md" />
            <img src="./icon-dollar.svg" alt="dollar-icon" className="absolute left-2 top-1/2   translate-y-centerAbsoluteItem " />
                </div>
            </div>

        <div className="tip-wrapp">
            <p className="font-semibold text-grayischCyan-500">Select Tip %</p>
            <ul className="w-full gap-3 flex flex-wrap ">
    <li className="flex-grow basis-0">
        <input type="radio" id="fivepercent" name="tip"  className="hidden peer" required />
        <label htmlFor="fivepercent" className="w-full inline-flex items-center justify-center  min-w-24 py-1.5 px-1 text-white   rounded-md cursor-pointer hover:font-semibold  hover:text-cyan-800  hover:bg-cyan-100  bg-cyan-800  peer-checked:text-blue-600">                           
            <div className="block">
                <div className="w-full">5%</div>
            </div>
        
        </label>
    </li>
    <li className="flex-grow basis-0">
        <input type="radio" id="tenpercent" name="tip"  className="hidden peer" required />
        <label htmlFor="tenpercent" className="w-full inline-flex items-center justify-center  min-w-24 py-1.5 px-1 text-white   rounded-md cursor-pointer hover:font-semibold  hover:text-cyan-800  hover:bg-cyan-100  bg-cyan-800  peer-checked:text-blue-600">                           
            <div className="block">
                <div className="w-full">10%</div>
            </div>
        
        </label>
    </li>
    <li className="flex-grow basis-0">
        <input type="radio" id="fiveteen" name="tip"  className="hidden peer" required />
        <label htmlFor="fiveteen" className="w-full inline-flex items-center justify-center  min-w-24 py-1.5 px-1 text-white   rounded-md cursor-pointer hover:font-semibold  hover:text-cyan-800  hover:bg-cyan-100  bg-cyan-800  peer-checked:text-blue-600">                           
            <div className="block">
                <div className="w-full">15%</div>
            </div>
        
        </label>
    </li>
    <li className="flex-grow basis-0">
        <input type="radio" id="twentyfive" name="tip"  className="hidden peer" required />
        <label htmlFor="twentyfive" className="w-full inline-flex items-center justify-center  min-w-24 py-1.5 px-1 text-white   rounded-md cursor-pointer hover:font-semibold  hover:text-cyan-800  hover:bg-cyan-100  bg-cyan-800  peer-checked:text-blue-600">                           
            <div className="block">
                <div className="w-full">25%</div>
            </div>
        
        </label>
    </li>
    <li className="flex-grow basis-0">
        <input type="radio" id="fivety" name="tip"  className="hidden peer" required />
        <label htmlFor="fivety" className="w-full inline-flex items-center justify-center  min-w-24 py-1.5 px-1 text-white   rounded-md cursor-pointer hover:font-semibold  hover:text-cyan-800  hover:bg-cyan-100  bg-cyan-800  peer-checked:text-blue-600">                           
            <div className="block">
                <div className="w-full">50%</div>
            </div>

        </label>
    </li>
    <li className="flex-grow basis-0">
        <input type="number" placeholder="Custom" className="w-full px-1 py-0.5 min-w-24 p rounded-md bg-grayischCyan-50 placeholder:font-semibold flex justify-center placeholder:text-center  placeholder:text-xl text-xl text-cyan-800  font-semibold text-right peer-checked:border peer-checked:border-grayischCyan-300 focus: outline-none border-2 focus: border-cyan-200" />
    </li>
</ul>
</div>

<div className="people-num-wrap">
    <p className="font-semibold text-grayischCyan-500"> Number of People</p>
    <div className="relative w-full">
        <input type="text" className=" w-full rounded-lg bg-grayischCyan-50 h-10 text-right pr-3 text-2xl text-cyan-800  font-semibold" />
        <img src="./icon-person.svg" alt="icon-person" className="absolute top-1/2 translate-y-centerAbsoluteItem left-2" />
    </div>
</div>

  </div>
    )
}

export default UserInput 