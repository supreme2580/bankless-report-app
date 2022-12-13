import Image from "next/image";

export default function Theoretical() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex justify-center items-center">
            <div className="max-w-4xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
                <Image src={"/date.png"} width={300} height={300} alt={"image"} />
                <div className="space-y-2.5 px-3.5 sm:px-5 md:px-0">
                    <h3 className="h3 text-white font-semibold text-center md:text-start">
                        <span className="text-red-700">Action Oriented</span> {">"} Theoretical
                    </h3>
                    <div className="space-y-2 text-white">
                        <p className="p">
                            Since we create reports custom to your needs, you can control what outcomes you{"’"}d like to see. 
                            We create each report to meet your specific objectives and focus on making action-oriented 
                            recommendations based on the landscape and the research.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}