import { useContext } from "react";
import expandedDefault from "../../assets/expanded-default.svg";
import topLeft from "../../assets/Top_Left.svg";
import { ChangeLayoutContext } from "../../App";

export default function Header() {
  const setExpanded = useContext(ChangeLayoutContext);
  return (
    <div className="flex-1 flex justify-between">
      <img className="max-w-[340px]" src={topLeft} />
      <button
        className="cursor-pointer"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <img className="max-h-[55px] ml-auto" src={expandedDefault} />
      </button>
    </div>
  );
}
