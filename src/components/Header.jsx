import expandedDefault from "../assets/expanded-default.svg";
import topLeft from "../assets/Top_Left.svg";
export default function Header() {
  return (
    <div className="flex-1 flex justify-between">
      <img className="max-w-[340px]" src={topLeft} />
      <img className="max-h-[55px] ml-auto" src={expandedDefault} />
    </div>
  );
}
