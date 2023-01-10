import Image from "next/image";

export default function Decisions() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex justify-center items-center">
            <div className="max-w-6xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
                <Image src={"/right-decision.png"} width={300} height={300} alt={"image"} />
                <div className="space-y-2.5 px-1 sm:px-5 md:px-0 md:max-w-2xl">
                    <h3 className="h3 text-white font-semibold text-center md:text-start">
                        <span className="text-red-700">Your partner</span> for making the right decisions <span className="text-red-700">in web3</span>
                    </h3>
                    <div className="space-y-2 text-white">
                        <p className="p">We are a decentralised web3 native entity providing you with the desired information for your business needs.</p>
                        <p className="p">Our onboarding identifies the most suitable methodology for your organization and adapts the framework to your needs</p>
                        <p className="p">We work agile, ensuring results and meaningful, focused iterations.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}