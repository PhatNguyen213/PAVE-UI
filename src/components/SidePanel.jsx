import DamageItem from "./DamageItem";
import data from "../mock/data.json";

export default function SidePanel() {
  return (
    <div className="relative flex flex-col h-full flex-1 border-l border-[#e5e7eb]">
      <div className="py-4 px-3 font-['Proto Mono'] font-semibold text-xl text-[#1f2937] border-b border-[#e5e7eb]">
        VEHICLE DETAIL
      </div>
      <div className="flex-1 overflow-auto py-4 px-3 gap-2 flex flex-col">
        {data.map(
          (
            { id, score, damageDescription, componentName, agentName },
            index
          ) => (
            <DamageItem
              key={id}
              index={index}
              score={score}
              componentName={componentName}
              damageDescription={damageDescription}
              agentName={agentName}
            />
          )
        )}
      </div>
      <div className="absolute bottom-0 bg-white w-full py-4 px-3">
        <button className="w-full rounded-lg border border-[#1445A8] bg-[#1F66F1] py-[10px] px-3 flex gap-2 justify-center">
          <span className="font-['JetBrains Mono'] font-semibold text-[15px] text-[#F9FAFB]">
            Finish
          </span>
          <span className="font-['JetBrains Mono'] font-semibold text-[15px] text-[#F8FAFCA3]">
            [F]
          </span>
        </button>
      </div>
    </div>
  );
}
