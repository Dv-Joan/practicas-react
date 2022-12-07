import React from "react";

function EditPrideForm({ editing, setEditing, currentPride, updatePride }) {
  return (
    <div className="">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          updatePride(currentPride.id, {
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
          value={currentPride.name}
        />
        <label className=" font-Roboto ">Description</label>
        <input
          className="m-4 py-2 px-5 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
          type="text"
          name="description"
          value={currentPride.description}
        />
        <button className="m-4 py-1 px-5 rounded-xl border-2 bg-slate-700 text-white border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent">
          Update pride
        </button>
        <button
          onClick={() => setEditing(false)}
          className="m-4 py-1 px-5 rounded-xl border-2 bg-red-500 text-white border-rose-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditPrideForm;
