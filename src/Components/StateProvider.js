import React, { createContext, useContext, useReducer } from "react";


export const StateContext = createContext();


export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


export const useStateValue = () => useContext(StateContext);




// import React, { useReducer, createContext } from "react";

// const StateContext = createContext();

// export const StateProvider = ({ reducer, initialState, children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <StateContext.Provider value={{ state, dispatch }}>
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useStateValue = () => React.useContext(StateContext);



// This code is largely the same as the original code, with a few modern improvements:

// The StateContext is now declared as a constant, rather than a named export.

// The useStateValue hook no longer needs to be imported, as it is already included in the React library.

// The value prop of the StateContext.Provider now contains both the state and the dispatch function, making it easier for components to access both without having to destructure the value multiple times.
