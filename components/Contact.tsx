export default function Contact() {
    return(
        <div className="bg-black w-full px-3.5 py-5 lg:p-10 flex flex-col justify-center items-center space-y-3.5">
            <h3 className="h3 text-white font-semibold">Contact Us</h3>
            <form className="max-w-2xl space-y-2.5">
                <div className="w-full flex space-x-2.5">
                    <div className="w-full flex-1">
                        <p className="p text-white h-12">What should we call you?</p>
                        <input type="text" className="w-full p-2.5 border-2 border-red-700 bg-transparent rounded-md outline-none text-white" placeholder="Robin Smith" />
                    </div>
                    <div className="w-full flex-1 h-full">
                        <p className="p text-white h-12">Your mail *</p>
                        <input type="text" className="w-full p-2.5 border-2 border-red-700 bg-transparent rounded-md outline-none text-white" placeholder="robin.smith@xyz.io" />
                    </div>
                </div>
                <div className="w-full flex space-x-2.5">
                    <div className="w-full flex-1">
                        <p className="p text-white">Discord handle</p>
                        <input type="text" className="w-full p-2.5 border-2 border-red-700 bg-transparent rounded-md outline-none text-white" placeholder="smith#1234" />
                    </div>
                    <div className="w-full flex-1">
                        <p className="p text-white">Organization</p>
                        <input type="text" className="w-full p-2.5 border-2 border-red-700 bg-transparent rounded-md outline-none text-white" placeholder="ABC Ltd." />
                    </div>
                </div>
                <div className="w-full flex flex-col space-y-2.5">
                    <p className="w-full text-white">Tell us about your problems and needs *</p>
                    <textarea className="w-full h-32 border-2 border-red-700 bg-transparent outline-none text-white rounded-md p-2.5" placeholder="Hello..." />
                </div>
            </form>
            <div className="w-full flex justify-center">
                <button className="bg-red-700 text-white px-3.5 py-2.5 rounded-lg">LET{"'"}S GO!</button>
            </div>
        </div>
    )
}