import Image from "next/image";

export default function Rapidly() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex justify-center items-center">
            <div className="max-w-4xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 md:px-5">
                <div className="relative">
                    <Image src={"/hand.png"} width={300} height={300} alt={"image"} />
                    <Image src={"/balls.png"} width={75} height={75} alt={"image"} className="absolute top-10 left-10" />
                    <Image src={"/balls.png"} width={75} height={75} alt={"image"} className="absolute top-10 right-10" />
                    <Image src={"/balls.png"} width={75} height={75} alt={"image"} className="absolute bottom-16 left-24" />
                </div>
                <div className="space-y-2.5 px-3.5 sm:px-5 md:px-0">
                    <h3 className="h3 text-white font-semibold text-center md:text-start">
                        Web3 changes rapidly, <span className="text-red-700">you need up to date</span>
                    </h3>
                    <div>
                        <ul className="text-white list-disc space-y-2">
                            <li className="p">Collecting reliable information from users that who are decentralized becomes difficult</li>
                            <li className="p">Funding internal research teams takes time and a lot of resources.</li>
                            <li className="p">Don't lose opportunities out of ignorance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}