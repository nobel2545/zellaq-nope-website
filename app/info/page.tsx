export default function history() {
    return (
        <div>
            <div className="w-max-[1000px] h-[688px] mt-2 mx-1 bg-gray-400 rounded-2xl"> 
                <h1 className="absolute mt-7 ml-10 text-7xl"> Information </h1>
                <a href="/" className="absolute button right-5 top-5 bg-gray-400 text-2xl rounded-5xl"> back </a>
                <div className="absolute line mt-28 ml-10"></div>

              <div className="flex flex-row">
                <div className="border-solid border-6 w-[400px]">
                    <div className="absolute mt-40 ml-10">
                        <img src="tul_info.svg" className="w-[300px]"/>
                        <div className="mt-6 ml-5 space-y-3"> 
                            <div className="text-3xl">Tul</div>
                            <div className="text-3xl">Water element</div>
                        </div>
                    </div>
                </div>

                <div className="border-solid border-6">
                    <div className="absolute mt-40 ml-10">
                        <img src="chan_info.svg" className="w-[300px]"/>
                        <div className="mt-6 ml-5 space-y-3"> 
                            <div className="text-3xl">Chan</div>
                            <div className="text-3xl">Wind Element</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col ml-96">
                    <div className="absolute mt-40 ml-10 flex flex-row">
                        <img src="ongsa_piece.png" className="w-[200px]"/>
                        <div className="mt-6 ml-5 space-y-3"> 
                            <div className="text-3xl">Ongsa piece</div>
                            <div className="text-3xl">none Element</div>
                        </div>
                    </div>

                    <div className="absolute mt-40 ml-10 flex flex-row tag-mid-down">
                        <img src="machima_piece.png" className="w-[200px]"/>
                        <div className="mt-6 ml-5 space-y-3"> 
                            <div className="text-3xl">machima piece</div>
                            <div className="text-3xl">none Element</div>
                        </div>
                    </div>

                    <div className="absolute mt-40 ml-10 flex flex-row tag-mid-downmak">
                        <img src="machima_piece.png" className="w-[200px]"/>
                        <div className="mt-6 ml-5 space-y-3"> 
                            <div className="text-3xl">machima piece</div>
                            <div className="text-3xl">none Element</div>
                        </div>
                    </div>
                </div>
              </div>
            </div>       
        </div>
    );
}