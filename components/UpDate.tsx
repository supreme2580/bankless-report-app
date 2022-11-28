import Image from "next/image";

export default function UpDate() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex justify-center items-center">
            <div className="max-w-4xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
                <Image src={"/date.png"} width={300} height={300} alt={"image"} />
                <div className="space-y-2.5 px-3.5 sm:px-5 md:px-0">
                    <h3 className="h3 text-white font-semibold text-center md:text-start">
                        Web3 changes rapidly, <span className="text-red-700">you need up to date</span>
                    </h3>
                    <div className="space-y-2 text-white">
                        <p className="p">A native Web3 project creating research reports for projects & protocols in the ecosystem.</p>
                        <p className="p">
                            We want our partners to be able to cut through the noise, enabling them to make smart business decisions by providing 
                            them with the highest quality product for their Web3 project. We aim to position ourselves as thought leaders in the ecosystem.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}