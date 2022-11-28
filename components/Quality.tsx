import Image from "next/image";

export default function Quality() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex justify-center items-center">
            <div className="max-w-4xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
                <div className="space-y-2.5 px-3.5 sm:px-5 md:px-5">
                    <h3 className="h3 text-white font-semibold text-center md:text-start">
                        Web3 with the <span className="text-red-700">highest quality research</span> in Web3.
                    </h3>
                    <div className="text-white space-y-2">
                        <p className="p">We empower you and your team to make informed decisions through high quality, insightful and actionable research.</p>
                        <p className="p">Our offerings cover analysis with both original and secondary research, using qualitative & quantitative methodologies</p>
                    </div>
                </div>
                <Image src={"/quality.png"} width={300} height={300} alt={"image"} />
            </div>
        </div>
    )
}