import reactLogo from "./assets/react.svg";
import ReducerFunction from "./components/ReducerFunction";
import UseEffect from "./components/UseEffect";
import Fetch from "./components/Fetch";
import UseFormHook from "./components/UseFormHook";
function App() {
  return (
    <div className="App text-center">
      <div className="flex gap-4 justify-center m-5 mb-36">
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
      <div className="mt-4 text-xl">
        <UseEffect />
      </div>
      <div className="mt-4 text-xl">
        <Fetch />
      </div>
      <div className="mt-4 text-xl">
        <UseFormHook />
      </div>
    </div>
  );
}

export default App;
