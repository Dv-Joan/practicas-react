import { useReducer, useState } from "react";
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};
function ReducerFunction() {
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex justify-center gap-8">
      <div className="bg-slate-200 mt-3 w-96 py-4 rounded-lg shadow-xl">
        <h3> Reducer Function</h3>
        <div className=" m-5 mb-12">
          <div className="mt-4">
            <span className="text-3x text-slate-700 bg-neutral-300 rounded-full px-6  py-2 border-2  drop-shadow-lg">
              {state.count}
            </span>
            <button
              type="button"
              className="py-1 px-3 m-2 bg-slate-500 rounded-lg text-white active:bg-gray-400"
              onClick={() => dispatch({ type: "INCREMENT" })}
            >
              +
            </button>
            <button
              type="button"
              className="py-1 px-3 m-2 bg-slate-500 rounded-lg text-white active:bg-gray-400"
              onClick={() => dispatch({ type: "DECREMENT" })}
            >
              -
            </button>
            <button
              type="button"
              className="py-1 px-3 m-2 bg-red-500 rounded-lg text-white active:bg-gray-400"
              onClick={() => dispatch({ type: "RESET" })}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 mt-3 w-96 py-4 rounded-lg shadow-xl">
        <h3> useState Hook</h3>
        <div className=" m-5 mb-12">
          <div className="mt-4">
            <span className="text-3x text-slate-700 bg-neutral-300 rounded-full px-6  py-2 border-2  drop-shadow-lg">
              {counter}
            </span>
            <button
              type="button"
              className="py-1 px-3 m-2 bg-slate-500 rounded-lg text-white active:bg-gray-400"
              onClick={() => setCounter(counter + 1)}
            >
              +
            </button>
            <button
              type="button"
              className="py-1 px-3 m-2 bg-slate-500 rounded-lg text-white active:bg-gray-400"
              onClick={() => setCounter(counter - 1)}
            >
              -
            </button>
            <button
              type="button"
              className="py-1 px-3 m-2 bg-red-500 rounded-lg text-white active:bg-gray-400"
              onClick={() => setCounter(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReducerFunction;
