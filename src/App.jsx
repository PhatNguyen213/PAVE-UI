import SidePanel from "./components/side/SidePanel";
import MainPanel from "./components/main/MainPanel";
import { createContext, useState } from "react";

export const LayoutContext = createContext();
export const ChangeLayoutContext = createContext();

export default function App() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="flex h-full py-4 px-2">
      <LayoutContext.Provider value={expanded}>
        <ChangeLayoutContext.Provider value={setExpanded}>
          <MainPanel />
          <SidePanel />
        </ChangeLayoutContext.Provider>
      </LayoutContext.Provider>
    </div>
  );
}
