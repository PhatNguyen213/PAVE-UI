import { useContext } from "react";
import List from "./List";
import { LayoutContext } from "../../App";

const PanelTitle = () => {
  return (
    <div className="py-4 px-3 font-['Proto Mono'] font-semibold text-xl text-[#1f2937] border-b border-[#e5e7eb]">
      VEHICLE DETAIL
    </div>
  );
};

const FinishButton = () => {
  return (
    <button className="w-full rounded-lg border border-[#1445A8] bg-[#1F66F1] py-[10px] px-3 flex gap-2 justify-center">
      <span className="font-['JetBrains Mono'] font-semibold text-[15px] text-[#F9FAFB]">
        Finish
      </span>
      <span className="font-['JetBrains Mono'] font-semibold text-[15px] text-[#F8FAFCA3]">
        [F]
      </span>
    </button>
  );
};

export default function SidePanel() {
  const expanded = useContext(LayoutContext);

  return (
    <div
      className={`relative flex flex-col h-full transition-all duration-300 border-l border-[#e5e7eb] ${
        expanded ? "ease-in w-[25%]" : "ease-out w-0"
      }`}
    >
      <PanelTitle />
      <List />
      <div className="absolute bottom-0 bg-white w-full py-4 px-3">
        <FinishButton />
      </div>
    </div>
  );
}
