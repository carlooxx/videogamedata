import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
