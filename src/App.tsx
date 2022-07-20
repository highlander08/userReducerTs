import React, { useReducer } from "react";
import "./App.css";

const initialState = {
  counter: 0,
  name: "",
  contact: { email: "", telephone: "" },
};

type State = {
  counter: number;
  name: string;
  contact: {
    email: string;
    telephone: string;
  };
};
type Action =
  | {
      type: "increment";
    }
  | { type: "decrement" }
  | { type: "updateName"; name: string }
  | {
      type: "updateContact";
      contact: {
        email: string;
        telephone: string;
      };
    }
  | { type: "resetState" };

const reducer = (state: State, action: Action) => {
  // console.log(state, action);

  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "updateName":
      return { ...state, name: action.name };
    case "updateContact":
      return { ...state, contact: action.contact };
    case "resetState":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [{counter}, dispatch] = useReducer(reducer, { counter: 0 });
  console.log(state.counter, state.name, state.contact.email, state.contact.telephone);

  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleText = (value: string) => {
    dispatch({ type: "updateName", name: value });
  };

  const handleContact = () => {
    dispatch({ type: "updateContact", contact: { email: "high@gmail.com", telephone: "085",} });
  }

  return (
    <div className="container">
      <p>
        Contador<span>{state.counter}</span>
      </p>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <input
        type="text"
        value={state.name}
        onChange={(e) => handleText(e.target.value)}
      />
      <button onClick={handleContact}>C</button>
      <button onClick={() => dispatch({ type: "resetState" })}>R</button>

    </div>
  );
}

export default App;
