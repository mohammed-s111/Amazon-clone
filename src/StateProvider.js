import React, { createContext, useContext, useReducer } from "react";

import reducer from "./reducer";

import { initialState } from "./reducer";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider
      value={{ basket: state.basket, user: state.user, dispatch: dispatch }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
export const useStateValue = () => {
  return useContext(StateContext);
};
