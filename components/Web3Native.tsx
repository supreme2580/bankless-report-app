import Image from "next/image";

export default function Web3Native() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex justify-center items-center">
            <div className="flex flex-col items-center max-w-4xl space-y-4 md:flex-row md:space-y-0 md:space-x-10 md:px-5">
                <div className="relative min-w-[300px]">
                    <Image src={"/hand.png"} width={300} height={300} alt={"image"} />
                    <Image src={"/balls.png"} width={75} height={75} alt={"image"} className="absolute top-10 left-10" />
                    <Image src={"/balls.png"} width={75} height={75} alt={"image"} className="absolute top-10 right-10" />
                    <Image src={"/balls.png"} width={75} height={75} alt={"image"} className="absolute bottom-20 left-28" />
                </div>
                <div className="space-y-2.5 px-3.5 sm:px-5 md:px-0">
                    <h3 className="font-semibold text-center text-white h3 md:text-start">
                        We are <span className="text-red-700">web3-native researchers</span>
                    </h3>
                    <p className="text-white p">
                        Funding internal research teams takes time and resources, but understanding the problem space is critical. 
                        We are your personal team of web3-native researchers to provide deep context so your team can make 
                        the right decisions quickly.
                    </p>
                </div>
            </div>
        </div>
    )
}