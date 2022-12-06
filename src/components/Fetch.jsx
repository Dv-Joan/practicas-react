import { useState, useEffect } from "react";
import Loader from "./Loader";
const acces_token =
  "6eb7450739c638cf7c2f3787fa92a123b202e2bd489ff73d114ce7416cf4a10bf95667d96398db52714d1b2f03b84b0c93688c439812841544d4b57d71920be9";

function Fetch() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <span className="text-3xl bg-slate-500 text-white py-1.5 pl-3 pr-3 rounded-lg drop-shadow-lg">
        ✔️ Fetch API's
      </span>

      <div className=" px-5 pb-10 pt-5 ">
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
                <div className="mt-5 mb-16 bg-neutral-100 rounded-lg px-3 py-1">
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
      <div className="mb-16 flex justify-center">
        <button
          onClick={getArtworksData}
          type="button"
          className="flex break-inside bg-black rounded-2xl px-5 py-2 mb-4 w-32 dark:bg-slate-800 dark:text-white active:bg-slate-400  text-sm shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150"
        >
          <div className="flex items-center justify-between flex-1">
            <span className="text-lg font-medium text-white">See</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
        </button>
        <button
          onClick={closeArtWorks}
          type="button"
          className="flex break-inside bg-red-500 rounded-2xl px-5 py-2 mb-4 mx-5 w-32 text-white active:bg-rose-300  text-sm shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150"
        >
          <div className="flex items-center justify-between flex-1">
            <span className="text-lg font-medium text-white">Close</span>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M17.882 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066L1.392 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31zM5.935 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.935 7.35zm6.979 6.978l-3.242-3.242a2.5 2.5 0 0 0 3.241 3.241zm7.893 2.264l-1.431-1.43A8.935 8.935 0 0 0 20.777 12 9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.769z" />
              </g>
            </svg>
          </div>
        </button>
      </div>
    </>
  );
}

export default Fetch;
