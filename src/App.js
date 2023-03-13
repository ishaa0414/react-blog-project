import React from "react";
import { BrowserRouter } from "react-router-dom";
import DataContextProvider from "./Context";
import RouterComponent from "./Router";

function App() {
  return (
    <div >
      <BrowserRouter>
      <DataContextProvider>
       <RouterComponent/>
       </DataContextProvider>
       </BrowserRouter>
    </div>
  );
}

export default App;
