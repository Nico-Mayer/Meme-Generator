import React from "react";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleFormChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const randomUrl = allMemes[randomNumber].url;
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
              name="topText"
              value={meme.topText}
              onChange={handleFormChange}
              placeholder="Text 1"
            />
          </div>
          <div className="flex items-center bg-gray-200 rounded-b-lg mb-6">
            <input
              className="flex-1 p-3 bg-transparent outline-none"
              type="text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleFormChange}
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
      <div className="max-h-94 w-94 flex justify-center border border-red-500 mt-12 relative">
        <h2 className="absolute top-0 meme-text">{meme.topText}</h2>
        <img className="" src={meme.randomImg} alt="#"></img>
        <h2 className="absolute bottom-0 meme-text">{meme.bottomText}</h2>
      </div>
    </div>
  );
};

export default Meme;
