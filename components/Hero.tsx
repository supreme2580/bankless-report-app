import Navbar from "./Navbar";
import { SaveIcon } from "@heroicons/react/outline"

export default function Hero() {
    return(
        <div className="w-full h-screen bg-[url('/background.png')] bg-no-repeat bg-center px-3.5 py-5 lg:px-10 lg:py-8 flex flex-col">
            <Navbar />
            <div className="flex-1 h-full flex flex-col items-center justify-center space-y-3.5">
                <h1 className="font-semibold text-white h1">Bankless Labs</h1>
                <p className="text-white px-2.5 text-center sm:max-w-md p">
                    The highest quality research in Web3 that helps you cut through the noise and make smart decisions!
                </p>
                <div className="space-y-1.5 sm:space-y-0 sm:space-x-2.5 sm:flex">
                    <button className="flex space-x-1 border-2 border-white p-2 rounded-lg items-center">
                        <span>
                            <SaveIcon className="w-6 h-6 text-white" />
                        </span>
                        <span className="text-white p font-semibold">
                            OUR PITCH DECK
                        </span>
                    </button>
                    <button className="flex space-x-1 bg-red-700 py-2.5 px-3.5 rounded-lg items-center text-white font-semibold">
                        HIRE OUR SERVICES
                    </button>
                </div>
            </div>
        </div>
    )
}