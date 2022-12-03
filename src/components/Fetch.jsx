import { useState, useEffect } from "react";
import Loader from "./Loader";
const acces_token =
  "6eb7450739c638cf7c2f3787fa92a123b202e2bd489ff73d114ce7416cf4a10bf95667d96398db52714d1b2f03b84b0c93688c439812841544d4b57d71920be9";

function Fetch() {
  const [images, setImages] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(false);

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
  const closeArtWorks = () => {
    setArtworks([]);
  };
  const closeImages = () => {
    setImages([]);
  };

  return (
    <>
      <span className="text-3xl bg-slate-500 text-white py-1.5 pl-3 pr-3 rounded-lg drop-shadow-lg">
        ✔️ Fetch API's
      </span>
      <div className="mt-10">
        <button
          className="py-1 px-3 m-2 bg-green-500 rounded-lg text-white active:bg-gray-400"
          onClick={getArtData}
        >
          Open Random Image
        </button>
        <button
          className="py-1 px-3 m-2 bg-red-500 rounded-lg text-white active:bg-gray-400"
          onClick={closeImages}
        >
          Close This
        </button>
        <div className="flex flex-wrap gap-4 justify-center">
          <div key={images.id}>
            <img src={images.url} alt="art" className="w-64 h-64" />
          </div>
        </div>

        <div className=" px-5 py-20 my-10">
          {loading ? (
            <Loader />
          ) : (
            <div className=" flex flex-wrap gap-4 justify-center bg-neutral-200 rounded-xl ">
              {artworks.map((artwork) => (
                <div className="mt-16" key={artwork.id}>
                  <img
                    src={artwork.thumbnail.lqip}
                    alt="artwork"
                    className="w-64 h-64 rounded-xl drop-shadow-lg hover:scale-110 transform transition duration-500 ease-in-out mx-5"
                  />
                  <div className="my-5 bg-neutral-100 rounded-lg px-3 py-1">
                    <h2 className="text-sm italic">{artwork.title}</h2>
                    <h2 className="text-sm italic">
                      {artwork.date_start} - {artwork.date_end}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mb-24">
          <button
            className="py-1 px-3 m-2 bg-green-500 rounded-lg text-white active:bg-gray-400"
            onClick={getArtworksData}
          >
            Open ART Museum
          </button>
          <button
            className="py-1 px-3 m-2 bg-red-500 rounded-lg text-white active:bg-gray-400"
            onClick={closeArtWorks}
          >
            Close Museum
          </button>
        </div>
      </div>
    </>
  );
}

export default Fetch;
