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
    <div>
      <h1>useEffect</h1>
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
      <div className="mt-4">
        <h3 className="text-2xl">
          Fetch RandomImage Status :
          <span className="bg-green-500 text-white px-3 mx-1 rounded">
            {images.status}
          </span>
        </h3>
        {loading ? (
          <Loader />
        ) : (
          <img src={images} alt="random image" className="w-1/2" />
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-2xl">
          Fetch ArtWork Status :
          <span className="bg-green-500 text-white px-3 mx-1 rounded">
            Great Success
          </span>
        </h3>
        {loading ? (
          <Loader />
        ) : (
          <ul className="text-left">
            {artworks.map((artwork) => (
              <li className="mb-10" key={artwork.id}>
                <h2>Title: {artwork.title}</h2>
                <h3>Origin : {artwork.place_of_origin}</h3>
                {/*  <img
                  src={artwork.thumbnail.lqip}
                  alt={artwork.thumbnail.alt_text}
                /> */}
                <hr />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UseEffect;
