const Meme = () => {
    return (
        <div className="py-20 md:px-10 min-h-full flex flex-grow md:text-xl">
            <form action="" className="md:w-1/2 mx-auto  ">
                <div className="shadow-xl">
                    <div className="flex items-center bg-gray-200 rounded-t-lg border-b border-gray-300">
                        <label
                            className="w-20 text-right mr-8 text-gray-500"
                            htmlFor="Text 1"
                        >
                            {" "}
                            Text 1
                        </label>
                        <input
                            className="flex-1 p-3 pl-0 bg-transparent outline-none"
                            type="text"
                            id="text1"
                        />
                    </div>
                    <div className="flex items-center bg-gray-200 rounded-b-lg mb-6">
                        <label
                            className="w-20 text-right mr-8 text-gray-500"
                            htmlFor="Text 2"
                        >
                            Text 2
                        </label>
                        <input
                            className="flex-1 p-3 pl-0 bg-transparent outline-none"
                            type="text"
                            id="text2"
                        />
                    </div>
                </div>

                <button className="bg-yellow-500 py-2 px-4 rounded-lg text-yellow-900 hover:bg-yellow-400 hover:text-yellow-800 transition duration-300 block w-full shadow-xl font-bold">
                    Generate
                </button>
            </form>
        </div>
    );
};

export default Meme;
