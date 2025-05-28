import React from "react";
import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";

export default function App() {
  return (
    <div className="flex h-full py-4 px-2">
      <MainPanel />
      <SidePanel />
    </div>
  );
}
