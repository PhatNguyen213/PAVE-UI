import CarOverview from "../assets/Car Overview Map.svg";
import FilterIcon from "../assets/colorfilter.svg";
import CarIcon from "../assets/Car.svg";
import AnchorIcon from "../assets/Anchor.svg";
import CursorIcon from "../assets/Cursor.svg";
import SearchIcon from "../assets/search-normal.svg";
import RotateIcon from "../assets/rotate-right.svg";
import SupportImage from "../assets/support-1.png";

const ActionBar = () => {
  return (
    <div className="mx-auto mt-auto mb-4 items-center h-fit gap-[20px] rounded-xl flex border-2 border-[#F3F4F6] py-2 px-3 shadow-[0px_8px_14px_-4px_#110C2214]">
      <img className="h-[24px] w-[24px]" src={CursorIcon} />
      <div className="w-[1px] self-stretch bg-[#E5E7EB]" />
      <img className="h-[24px] w-[24px]" src={AnchorIcon} />
      <img className="h-[24px] w-[24px]" src={CarIcon} />
      <div className="w-[1px] self-stretch bg-[#E5E7EB]" />
      <img className="h-[24px] w-[24px]" src={SearchIcon} />
      <img className="h-[24px] w-[24px]" src={FilterIcon} />
      <img className="h-[24px] w-[24px]" src={RotateIcon} />
    </div>
  );
};

const CarInfoOverview = () => {
  return (
    <div className="flex flex-col gap-2 font-['Proto Mono'] font-semibold text-[15px] uppercase">
      <img className="max-w-[80px] max-h-[80px]" src={CarOverview} />
      <p className="text-[#06070EE0]">2020-Ford-Transit Asüna</p>
      <p className="text-[#06070E61]">Cargo Van-Extended Cargo Van</p>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="flex-2 flex justify-center px-6">
      <CarInfoOverview />
      <ActionBar />
      <div className="flex gap-3 items-center mt-auto mb-4">
        <img className="max-w-[72px]" src={SupportImage} />
        <img className="max-w-[72px]" src={SupportImage} />
        <img className="max-w-[72px]" src={SupportImage} />
      </div>
    </div>
  );
}
