import React from "react";
import memesData from "../memeData";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const randomUrl = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImg: randomUrl,
      };
    });
  }
  return (
    <div className="py-20 md:px-10 min-h-full flex flex-col flex-grow md:text-xl">
      <div action="" className="w-5/6 md:w-1/2 mx-auto">
        <div className="shadow-xl rounded-xl">
          <div className="flex items-center bg-gray-200 rounded-t-lg border-b border-gray-300">
            <input
              className="flex-1 p-3 bg-transparent outline-none"
              type="text"
              name="text1"
              placeholder="Text 1"
            />
          </div>
          <div className="flex items-center bg-gray-200 rounded-b-lg mb-6">
            <input
              className="flex-1 p-3 bg-transparent outline-none"
              type="text"
              name="text2"
              placeholder="Text 2"
            />
          </div>
        </div>

        <button
          className="bg-yellow-500 py-2 px-4 rounded-lg text-yellow-900 hover:bg-yellow-400
         hover:text-yellow-800 transition duration-300 block w-full shadow-xl font-bold"
          onClick={getMemeImage}
        >
          Generate
        </button>
      </div>
      <div className="max-h-94 w-94 flex justify-center border border-red-500 mt-12 ">
        <img className="" src={meme.randomImg} alt="#"></img>
      </div>
    </div>
  );
};

export default Meme;
