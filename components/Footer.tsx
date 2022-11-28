import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <div className="w-full h-[400px] bg-[url('/footerImage.png')] bg-no-repeat bg-bottom bg-cover px-3.5 py-5 
            lg:px-10 lg:py-8 flex flex-col items-center justify-center space-y-5">
            <div className="flex flex-col items-center space-y-3.5">
                <h3 className="h3 font-semibold text-center">Join Bankless Research Community!</h3>
            </div>
            <div className="w-full flex justify-center max-w-xs">
                <div className="flex min-w-full">
                    <input type="email" className="w-full p-2 rounded-l-lg outline-none pl-4 pr-5" placeholder="Enter email" />
                    <button className="text-white py-2 px-4 rounded-lg bg-red-700 -ml-3.5">Subscribe</button>
                </div>
            </div>
            <div className="flex space-x-5">
                <Link href="/">
                    <Image src="/twitter.png" width={35} height={35} alt="icon" />
                </Link>
                <Link href="/">
                    <Image src="/linkedin.png" width={35} height={35} alt="icon" />
                </Link>
            </div>
        </div>
    )
}