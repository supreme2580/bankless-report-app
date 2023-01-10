import Image from "next/image";

export default function How() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex justify-center items-center">
            <div className="max-w-6xl flex flex-col-reverse md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-10">
                <div className="space-y-2.5 px-3.5 sm:px-5 md:px-5">
                    <h3 className="h3 text-white font-semibold text-start">
                        How we <span className="text-red-700">work</span>
                    </h3>
                    <div className="text-white space-y-2 md:max-w-2xl">
                        <ol className="list-disc space-y-1">
                            <li className="p">Hive talent and resources: utilising partnerships within and outside the web3 space to identify matching research talent, specialised target groups and reliable data sources.</li>
                            <li className="p">Analysis using original and secondary research, applying qualitative & quantitative methodologies.</li>
                            <li className="p">A constantly expanding proprietary database to provide additional insights.</li>
                        </ol>
                        <div>
                            <button className="text-white bg-red-700 p-2 rounded-lg">Request further information</button>
                        </div>
                    </div>
                </div>
                <div className="pb-6 sm:pb-0 relative min-w-[300px]">
                    <Image src={"/quality.png"} width={300} height={300} alt={"image"} />
                </div>
            </div>
        </div>
    )
}