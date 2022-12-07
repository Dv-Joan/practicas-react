import React from "react";

function AddPrideForm({ addPride }) {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addPride({
            name: event.target.name.value,
            description: event.target.description.value,
          });
        }}
      >
        <label className=" font-Roboto ">Name</label>
        <input
          className="m-4 py-1.5 px-4 rounded-lg border-0 border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          type="text"
          name="name"
          placeholder="Ej: PiscoSour™"
        />
        <label className=" font-Roboto ">Description</label>
        <input
          className="m-4 py-1.5 px-4 rounded-lg border-0 border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          type="text"
          name="description"
          placeholder="Lobo / HS"
        />
        <button className="m-4 py-1 px-5 rounded-xl border-2 bg-slate-700 text-white border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent">
          Add new pride
        </button>
      </form>
    </div>
  );
}

export default AddPrideForm;
