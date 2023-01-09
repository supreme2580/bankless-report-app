import Navbar from "./Navbar";
import { SaveIcon } from "@heroicons/react/outline"

export default function Hero() {
    return(
        <div className="w-full h-screen bg-[url('/background.png')] bg-no-repeat bg-center bg-cover px-3.5 py-5 lg:px-10 lg:py-8 flex flex-col">
            <Navbar />
            <div className="flex-1 h-full flex flex-col items-center justify-center space-y-3.5">
                <h1 className="font-semibold text-white h1 text-center">WE MAKE RESEARCH <span className="text-red-700">ACTIONABLE</span></h1>
                <p className="text-white px-2.5 text-center sm:max-w-lg p">
                    by providing the highest quality research in web3
                </p>
                <div className="space-y-1.5 sm:space-y-0 sm:space-x-2.5 sm:flex">
                    <button className="flex space-x-1 border-2 border-white p-2 rounded-lg items-center justify-center w-56">
                        <span>
                            <SaveIcon className="w-6 h-6 text-white flex-1" />
                        </span>
                        <span className="text-white p flex-1">
                            OUR PITCH DECK
                        </span>
                    </button>
                    <button className="bg-red-700 p-2 rounded-lg items-center text-white w-56 text-center">
                        WATCH OUR VIDEO
                    </button>
                </div>
            </div>
        </div>
    )
}
