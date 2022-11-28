import Image from "next/image";
import Link from "next/link";
import { MenuAlt3Icon } from "@heroicons/react/outline"

export default function Navbar() {
    return(
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <Image src={"/logo.png"} alt="logo" width={100} height={100} className="hidden md:block" />
                    <Image src={"/logo.png"} alt="logo" width={75} height={75} className="block md:hidden" />
                </div>
                <div>
                    <div className="hidden md:flex space-x-5 items-center">
                        <Link href="/" className="text-xl text-white hover:text-red-700 tracking-wide">Services</Link>
                        <Link href="/" className="text-xl text-white hover:text-red-700 tracking-wide">Free Reports</Link>
                        <Link href="/" className="text-xl text-white hover:text-red-700 tracking-wide">Partnerships</Link>
                        <Link href="/" className="text-xl text-white hover:text-red-700 tracking-wide">Launch App</Link>
                        <button className="bg-red-700 text-white px-3.5 py-2.5 rounded-lg tracking-wide">CONTACT US</button>
                    </div>
                    <div className="block md:hidden">
                        <button onClick={() => {
                            document.querySelector(".sidebar")?.classList.toggle("-translate-x-full")}
                        }><MenuAlt3Icon className="h-12 w-12 text-white" /></button>
                    </div>
                </div>
            </div>
            <div className="bg-black w-64 h-screen fixed top-0 left-0 transition duration-200 ease-in-out transform -translate-x-full sidebar md:hidden z-20">
                <div className="p-3.5"><Image src={"/logo.png"} alt="logo" width={75} height={75} className="block md:hidden" /></div>
                <div className="px-3.5 space-y-0.5">
                    <div className="hover:cursor-pointer hover:bg-red-700 p-2.5 rounded-lg">
                        <Link href="/" className="text-xl text-white tracking-wide">Services</Link>
                    </div>
                    <div className="hover:cursor-pointer hover:bg-red-700 p-2.5 rounded-lg">
                        <Link href="/" className="text-xl text-white tracking-wide">Free Reports</Link>
                    </div>
                    <div className="hover:cursor-pointer hover:bg-red-700 p-2.5 rounded-lg">
                        <Link href="/" className="text-xl text-white tracking-wide">Partnerships</Link>
                    </div>
                    <div className="hover:cursor-pointer hover:bg-red-700 p-2.5 rounded-lg">
                        <Link href="/" className="text-xl text-white tracking-wide">Launch App</Link>
                    </div>
                    <div className="hover:cursor-pointer hover:bg-red-700 p-2.5 rounded-lg">
                        <Link href="/" className="text-xl text-white tracking-wide">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}