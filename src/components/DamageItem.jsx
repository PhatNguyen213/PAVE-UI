import Icon from "../assets/Vector.svg";

const getColorThemeForScore = (score) => {
  if (score === 5) {
    return {
      dotColor: "bg-[#B62424]",
      bgColor: "bg-[#FDEAEA]",
      borderColor: "border-[#ED8B8B]",
    };
  } else if (score < 5 && score > 1) {
    return {
      dotColor: "bg-[#D6AA00]",
      bgColor: "bg-[#FFF9E5]",
      borderColor: "border-[#FFDB59]",
    };
  }
  return {
    dotColor: "bg-[#1F66F1]",
    bgColor: "bg-[#EAF2FF]",
    borderColor: "border-[#80ABFF]",
  };
};

const DamageStatus = ({ index, score }) => {
  const { dotColor, bgColor, borderColor } = getColorThemeForScore(score);
  return (
    <div className="status">
      <div
        className={`py-1 px-2 flex gap-1 items-center border ${borderColor} ${bgColor} rounded-sm w-fit`}
      >
        <div className={`rounded-full w-1.5 h-1.5 ${dotColor}`}></div>
        <div className="text-[10px] font-medium leading-[125%] font-['JetBrains Mono'] text-[#1F2937E0]">
          {`${index}`.padStart(2, 0)}
        </div>
        <div className="w-[1px] self-stretch bg-[#0000004D]" />
        <div className="text-[10px] font-medium leading-[125%] font-['JetBrains Mono'] text-[#1F2937E0]">
          SCORE={score}
        </div>
      </div>
    </div>
  );
};

const DamageDetails = ({ componentName, damageDescription }) => {
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="flex items-center gap-1">
        <div className="w-[20px] h-[16px] px-1 py-[2px]">
          <img src={Icon} alt="React Logo" />
        </div>
        <div className="font-['Proto Mono'] font-semibold text-[10px] text-[#1F2937A3]">
          {componentName}
        </div>
      </div>
      <div className="font-['Proto Mono'] font-semibold text-[15px] text-[#1F2937E0]">
        {damageDescription}
      </div>
    </div>
  );
};

const Agent = ({ agentName }) => {
  return (
    <div className="text-[10px] font-medium leading-[125%] font-['JetBrains Mono'] text-[#1F2937A3]">
      {agentName}
    </div>
  );
};

const DamageItem = ({
  index,
  score,
  componentName,
  damageDescription,
  agentName,
}) => {
  return (
    <div className="flex flex-col gap-1 bg-[#f3f4f6] rounded-lg py-4 px-2">
      <DamageStatus index={index + 1} score={score} />
      <DamageDetails
        componentName={componentName}
        damageDescription={damageDescription}
      />
      <Agent agentName={agentName} />
    </div>
  );
};

export default DamageItem;
