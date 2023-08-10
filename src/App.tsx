import React, { useEffect} from "react";
import "./App.css";

import LoadingWrapper from "./pages/LoadingWrapper";
import { GlobalContextProvider } from "./context/GlobalContext";


function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <LoadingWrapper></LoadingWrapper>
      </GlobalContextProvider>
    </div>
  );
}

export default App;

