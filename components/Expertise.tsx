import Image from "next/image";

export default function Expertise() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex flex-col justify-center items-center space-y-3.5">
            <h3 className="h3 text-white font-semibold">Our Expertise</h3>
            <p className="p text-white max-w-xl text-center">
                Bankless Research Report offering incorporates all components that you need to make smart decisions, including:
            </p>
            <div className="max-w-4xl grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
                <div className="w-[300px] border-2 border-white rounded-lg p-5 space-y-1.5">
                    <Image src="/flag.png" width={30} height={30} alt="icon" />
                    <h4 className="h4 text-white">Governance</h4>
                    <p className="p text-white">Insert description here</p>
                </div>
                <div className="w-[300px] border-2 border-white rounded-lg p-5 space-y-1.5">
                    <Image src="/marketing.png" width={30} height={30} alt="icon" />
                    <h4 className="h4 text-white">Marketing</h4>
                    <p className="p text-white">Insert description here</p>
                </div>
                <div className="w-[300px] border-2 border-white rounded-lg p-5 space-y-1.5">
                    <Image src="/tokenomics.png" width={30} height={30} alt="icon" />
                    <h4 className="h4 text-white">Tokenomics</h4>
                    <p className="p text-white">Insert description here</p>
                </div>
                <div className="w-[300px] border-2 border-white rounded-lg p-5 space-y-1.5">
                    <Image src="/community.png" width={30} height={30} alt="icon" />
                    <h4 className="h4 text-white">Community</h4>
                    <p className="p text-white">Insert description here</p>
                </div>
                <div className="w-[300px] border-2 border-white rounded-lg p-5 space-y-1.5">
                    <Image src="/treasury.png" width={30} height={30} alt="icon" />
                    <h4 className="h4 text-white">Treasury</h4>
                    <p className="p text-white">Insert description here</p>
                </div>
                <div className="w-[300px] border-2 border-white rounded-lg p-5 space-y-1.5">
                    <Image src="/business.png" width={30} height={30} alt="icon" />
                    <h4 className="h4 text-white">Bussiness</h4>
                    <p className="p text-white">Insert description here</p>
                </div>
            </div>
        </div>
    )
}