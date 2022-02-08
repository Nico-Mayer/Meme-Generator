const Meme = () => {
  function handleClick() {}
  return (
    <div className="py-20 md:px-10 min-h-full flex flex-grow md:text-xl">
      <div action="" className="w-5/6 md:w-1/2 mx-auto">
        <div className="shadow-xl rounded-xl">
          <div className="flex items-center bg-gray-200 rounded-t-lg border-b border-gray-300">
            <input
              className="flex-1 p-3 bg-transparent outline-none"
              type="text"
              id="text1"
              placeholder="Text 1"
            />
          </div>
          <div className="flex items-center bg-gray-200 rounded-b-lg mb-6">
            <input
              className="flex-1 p-3 bg-transparent outline-none"
              type="text"
              id="text2"
              placeholder="Text 2"
            />
          </div>
        </div>

        <button
          className="bg-yellow-500 py-2 px-4 rounded-lg text-yellow-900 hover:bg-yellow-400 hover:text-yellow-800 transition duration-300 block w-full shadow-xl font-bold"
          onClick={handleClick}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Meme;
