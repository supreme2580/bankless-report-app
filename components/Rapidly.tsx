import Image from "next/image";

export default function Rapidly() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex justify-center items-center">
            <div className="flex flex-col items-center max-w-4xl space-y-4 md:flex-row md:space-y-0 md:space-x-10 md:px-5">
                <div className="relative min-w-[300px]">
                    <Image src={"/hand.png"} width={300} height={300} alt={"image"} />
                    <Image src={"/balls.png"} width={100} height={100} alt={"image"} className="absolute top-10 left-10" />
                    <Image src={"/balls.png"} width={100} height={100} alt={"image"} className="absolute top-10 right-10" />
                    <Image src={"/balls.png"} width={100} height={100} alt={"image"} className="absolute bottom-20 left-[104px] sm:left-[100px]" />
                </div>
                <div className="space-y-2.5 px-3.5 sm:px-5 md:px-0">
                    <h3 className="font-semibold text-white h3 text-start">
                        Web3 changes rapidly, <span className="text-red-700">we help you to stay on top</span>
                    </h3>
                    <div className="text-white space-y-2">
                        <ol className="list-disc space-y-1">
                            <li className="p">Funding internal research teams requires significant time, resource and coordination commitments.</li>
                            <li className="p">Take advantage of a decentralized network of professional researchers who are experts in their field.</li>
                            <li className="p">Obtain insight-driven knowledge in a timely fashion to take advantage of time-sensitive opportunities.</li>
                        </ol>
                        <div>
                            <button className="text-white bg-red-700 p-2 rounded-lg">ASK US</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}