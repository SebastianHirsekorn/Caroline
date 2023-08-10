import React, { useState } from "react";
import "./App.css";
import Timer from "./pages/Countdown";
import Drawer from "./Components/NavDrawer";
import CalendarPage from "./pages/CalendarPage";
import Album from "./pages/Album";


type page = "Countdown" | "Calendar" | "Album";

function renderSwitch(page: page) {
  switch (page) {
    case "Countdown":
      return <Timer></Timer>;
    case "Calendar":
      return <CalendarPage></CalendarPage>;
    case "Album":
      return <Album></Album>;
    default:
      return <Timer></Timer>;
  }
}

function App() {
  const [page, setPage] = useState<page>("Countdown");

  const handlePageChange = (page: page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <Drawer handlePageChange={handlePageChange}></Drawer>
      {renderSwitch(page)}
    </div>
  );
}

export default App;
