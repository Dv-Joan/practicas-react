import React, { useState } from "react";
import PrideTable from "./Table";
import AddPrideForm from "./AddPrideForm";
import EditPrideForm from "./EditPrideForm";

const initialPrides = [
  {
    id: 1,
    name: "Old Wolves",
    description: "Loberos",
  },
  {
    id: 2,
    name: "FazeCLAN",
    description: "Loberos",
  },
  {
    id: 3,
    name: "Gods Vnzla",
    description: "Humaneros",
  },
];
function PrideCrudApp() {
  const [prides, setPrides] = useState(initialPrides);
  const [editing, setEditing] = useState(false);
  const [currentPride, setCurrentPride] = useState({
    id: null,
    name: "",
    description: "",
  });
  const addPride = (pride) => {
    pride.id = prides.length + 1;
    setPrides([...prides, pride]);
  };
  const deletePride = (id) => {
    setPrides(prides.filter((pride) => pride.id !== id));
  };
  const updatePride = (id, updatedPride) => {
    setEditing(false);
    setPrides(prides.map((pride) => (pride.id === id ? updatedPride : pride)));
  };
  const editRow = (pride) => {
    setEditing(true);
    setCurrentPride({
      id: pride.id,
      name: pride.name,
      description: pride.description,
    });
  };
  return (
    <div className="container">
      <span className="text-3xl bg-slate-500 text-white py-1.5 pl-3 pr-3 rounded-lg drop-shadow-lg">
        ✔️ Crud APP with Hooks
      </span>{" "}
      <br />
      <br />
      <br />
      <div className="flex justify-center"></div>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <EditPrideForm
                editing={editing}
                setEditing={setEditing}
                currentPride={currentPride}
                updatePride={updatePride}
              />
            </div>
          ) : (
            <div>
              <AddPrideForm addPride={addPride} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2 className="my-7 font-Saira text-2xl font-bold text-zinc-600">
            Wolfteam LS -{" "}
            <span className="bg-cyan-400 px-3 pb-0.5 rounded-xl text-white">
              Ladder
            </span>
          </h2>

          <PrideTable
            prides={prides}
            editRow={editRow}
            deletePride={deletePride}
          />
        </div>
      </div>
      <div />
    </div>
  );
}

export default PrideCrudApp;
