import { useState, useEffect } from "react";
import Loader from "./Loader";

const acces_token =
  "6eb7450739c638cf7c2f3787fa92a123b202e2bd489ff73d114ce7416cf4a10bf95667d96398db52714d1b2f03b84b0c93688c439812841544d4b57d71920be9";

function UseEffect() {
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    alert(`Hola ${name}`);
  };

  const getArtData = async () => {
    const response = await fetch(
      "https://v1.api.amethyste.moe/image/wallpaper",

      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${acces_token}`,
        },
      }
    );
    const imagesData = await response.json();
    setImages(imagesData);
  };
  const getArtworksData = async () => {
    const artWorksresponse = await fetch(
      "https://api.artic.edu/api/v1/artworks/"
    );
    const artworksData = await artWorksresponse.json();

    setArtworks(artworksData.data);
  };

  useEffect(() => {
    getArtworksData();
    getArtData();
  }, []);
  return (
    <>
      <span className="text-3xl bg-slate-500 text-white py-1.5 pl-3 pr-3 rounded-lg drop-shadow-lg">
        ❌ useEffect
      </span>
      <div className="mb-36 mt-10 bg-slate-200 w-1/3 py-4 rounded-lg shadow-xl">
        <form onSubmit={handelSubmit}>
          <label htmlFor="name" className="text-gray-500 mr-3 ">
            Name
          </label>
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl ml-3"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default UseEffect;
