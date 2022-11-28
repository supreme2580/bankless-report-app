export default function Contact() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex flex-col justify-center items-center space-y-3.5">
            <h3 className="h3 text-white font-semibold">Wanna talk? Let{"’"}s do it!</h3>
            <p className="p text-white max-w-xl text-center">
                Looking to start a new research project or just want to say hi? Send us an email and we gonna contact you!
            </p>
            <form className="max-w-2xl space-y-2.5">
                <div className="w-full flex space-x-2.5">
                    <div className="w-full flex-1">
                        <p className="p text-white">Your name</p>
                        <input type="text" className="w-full p-2.5 border-2 border-white bg-transparent rounded-md outline-none text-white" placeholder="Mr smith" />
                    </div>
                    <div className="w-full flex-1">
                        <p className="p text-white">Your mail *</p>
                        <input type="text" className="w-full p-2.5 border-2 border-white bg-transparent rounded-md outline-none text-white" placeholder="smith@company" />
                    </div>
                </div>
                <div className="w-full flex space-x-2.5">
                    <div className="w-full flex-1">
                        <p className="p text-white">Discord handle</p>
                        <input type="text" className="w-full p-2.5 border-2 border-white bg-transparent rounded-md outline-none text-white" placeholder="smith#123" />
                    </div>
                    <div className="w-full flex-1">
                        <p className="p text-white">Organization</p>
                        <input type="text" className="w-full p-2.5 border-2 border-white bg-transparent rounded-md outline-none text-white"
                            placeholder="hello@arnau.design" />
                    </div>
                </div>
                <div className="w-full flex flex-col space-y-2.5">
                    <p className="w-full text-white">Tell us about your project or idea *</p>
                    <textarea className="w-full h-32 border-2 border-white bg-transparent outline-none text-white rounded-md p-2.5" placeholder="Hello..." />
                </div>
            </form>
            <div className="flex flex-col md:flex-row items-center space-x-2.5 space-y-2.5 md:space-y-0">
                <p className="p text-white text-center md:text-start">Do you wanna aggend a directly meeting and break the ice? </p>
                <button className="bg-red-700 text-white px-3.5 py-2.5 rounded-lg tracking-wide">AGGEND A CALL</button>
            </div>
        </div>
    )
}