import data from "../../mock/data.json";
import DamageItem from "./DamageItem";

export default function List() {
  return (
    <div className="flex-1 overflow-auto py-4 px-3 gap-2 flex flex-col">
      {data.map(
        ({ id, score, damageDescription, componentName, agentName }, index) => (
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
  );
}
