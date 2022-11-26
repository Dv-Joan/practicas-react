import { useReducer } from "react";
import reactLogo from "./assets/react.svg";
import ReducerFunction from "./components/ReducerFunction";

function App() {
  return (
    <div className="App text-center">
      <div className="flex gap-4 justify-center m-5 mb-12">
        <div>
          <img src={reactLogo} alt="react logo" className="w-10 mt-3" />
        </div>
        <div className="mt-4">
          <span className="text-3xl bg-cyan-500 text-white py-1 pl-10 pr-3 rounded-lg drop-shadow-lg">
            PRACTICING APP
          </span>
        </div>
      </div>
      <div className="mt-4 text-xl">
        <ReducerFunction />
      </div>
    </div>
  );
}

export default App;
