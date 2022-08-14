import React, { useState, useEffect } from "react";
import Sidebar from "./UI/Sidebar";
import { UiContext } from "./DistributableContext";
import Feed from "./UI/Feed";
import Widgets from "./UI/Widgets";
import "./App.css";
function HomeScreen() {
  const [showpostinput, setshowpostinput] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      // setshowpostinput(showpostinput  false );
    });
  }, []);
  return (
    <UiContext.Provider value={{ showpostinput, setshowpostinput }}>
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </UiContext.Provider>
  );
}

export default HomeScreen;
