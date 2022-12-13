import Image from "next/image";

export default function CustomizedContent() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex justify-center items-center">
            <div className="max-w-4xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
                <div className="space-y-2.5 px-3.5 sm:px-5 md:px-5">
                    <h3 className="h3 text-white font-semibold text-center md:text-start">
                        We produce <span className="text-red-700">high quality content customized to your needs</span>
                    </h3>
                    <div className="text-white">
                        <p className="p">
                            We empower you and your team to make informed decisions through high quality, 
                            insightful and actionable research. Our offerings cover analysis with both 
                            original and secondary research, using qualitative & quantitative methodologies.
                        </p>
                    </div>
                </div>
                <Image src={"/quality.png"} width={300} height={300} alt={"image"} />
            </div>
        </div>
    )
}