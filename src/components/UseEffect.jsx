import { useState, useEffect } from "react";

function UseEffect() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>useEffect</h1>
      <form
        onSubmit={() => {
          alert(`Hola ${name}`);
        }}
      >
        <label htmlFor="name" className="text-gray-500 mr-3 ">
          Name
        </label>
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl ml-3"
        >
          Submit
        </button>
      </form>
      <p>{name}</p>
    </div>
  );
}

export default UseEffect;
