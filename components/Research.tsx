import Image from "next/image";

export default function Research() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex flex-col justify-center items-center space-y-3.5">
            <h3 className="h3 text-white font-semibold">High-Quality <span className="text-red-700">Reseach Reports</span></h3>
            <p className="p text-white max-w-xl text-center">
                In order to make use of the full potential of a DAO we have tailored our services and offerings in in 3 packages
            </p>
            <div className="max-w-4xl grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
                <div className="w-[300px] h-auto border border-white rounded-lg p-3.5 space-y-1.5 flex flex-col">
                    <Image src={"/charts.png"} width={50} height={50} alt="icon" />
                    <h4 className="h4 text-white">BR Insight Reports</h4>
                    <p className="p text-white flex-1">
                        Research report for informed overview of a particular subject. 1500 word article. Shared through 
                        bDAOs media channels and set up to be shared through clients media outlets. Infographic provided 
                        along with the Bankless Research Logo for client use on the document.
                    </p>
                    <button className="border-2 border-white p-2.5 text-white w-full rounded-lg">COMING SOON</button>
                </div>
                <div className="w-[300px] h-auto border border-white rounded-lg p-3.5 space-y-1.5 flex flex-col">
                    <Image src={"/write.png"} width={50} height={50} alt="icon" />
                    <h4 className="h4 text-white">Strategy Research Report</h4>
                    <p className="p text-white flex-1">
                        Research report for informed overview of a particular subject. 1500 word article. Shared through 
                        bDAOs media channels and set up to be shared through clients media outlets. Infographic provided 
                        along with the Bankless Research Logo for client use on the document.
                    </p>
                    <button className="bg-red-700 p-2.5 text-white w-full rounded-lg">COMING SOON</button>
                </div>
                <div className="w-[300px] h-auto border border-white rounded-lg p-3.5 space-y-1.5 flex flex-col">
                    <Image src={"/grants.png"} width={50} height={50} alt="icon" />
                    <h4 className="h4 text-white">Common Grants Report</h4>
                    <p className="p text-white flex-1">
                        Research report for informed overview of a particular subject. 1500 word article. Shared through 
                        bDAOs media channels and set up to be shared through clients media outlets. Infographic provided 
                        along with the Bankless Research Logo for client use on the document.
                    </p>
                    <button className="border-2 border-white p-2.5 text-white w-full rounded-lg">COMING SOON</button>
                </div>
            </div>
        </div>
    )
}