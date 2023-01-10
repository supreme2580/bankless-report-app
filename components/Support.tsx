import Image from "next/image";

export default function Support() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex flex-col justify-center items-center space-y-3.5">
            <h3 className="h3 text-white font-semibold">How we can <span className="text-red-700">support you</span></h3>
            <p className="p text-white max-w-xl text-center">
                With our selection of research services:
            </p>
            <div className="max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
                <div className="w-[300px] h-auto border border-white rounded-lg p-3.5 space-y-1.5 flex flex-col">
                    <Image src={"/charts.png"} width={50} height={50} alt="icon" />
                    <h4 className="h4 text-white">Analysis</h4>
                    <p className="p text-white flex-1">
                        Data driven research, including  tokenomics modelling, on- chain analysis and data driven marketing research
                    </p>
                    <button className="border-2 border-white p-2.5 text-white w-full rounded-lg">COMING SOON</button>
                </div>
                <div className="w-[300px] h-auto border border-white rounded-lg p-3.5 space-y-1.5 flex flex-col">
                    <Image src={"/write.png"} width={50} height={50} alt="icon" />
                    <h4 className="h4 text-white">Reports</h4>
                    <p className="p text-white flex-1">
                        In-depth research reports covering web3 topics  that are key to operating successfully in web3
                    </p>
                    <button className="bg-red-700 p-2.5 text-white w-full rounded-lg">COMING SOON</button>
                </div>
                <div className="w-[300px] h-auto border border-white rounded-lg p-3.5 space-y-1.5 flex flex-col">
                    <Image src={"/advisory.png"} width={50} height={50} alt="icon" />
                    <h4 className="h4 text-white">Advisory</h4>
                    <p className="p text-white flex-1">
                        Providing light-touch research to address your project or campaign needs in web3
                    </p>
                    <button className="border-2 border-white p-2.5 text-white w-full rounded-lg">COMING SOON</button>
                </div>
            </div>
        </div>
    )
}