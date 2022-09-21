import { createContext, useState, useContext } from "react";

const State = createContext();

export const ManageState = () => {
  return useContext(State);
};

export function StateManager({ children }) {
  const [addToCart, setAddToCart] = useState();
  return (
    <State.Provider value={{ addToCart, setAddToCart }}>
      {children}
    </State.Provider>
  );
}
