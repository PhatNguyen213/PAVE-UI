import car4Image from "../../assets/car-4.png";
import car4Preview from "../../assets/preview-4.png";

const PreviewImage = ({ selected = false }) => {
  return (
    <div className="w-full">
      <img
        className={`rounded  ${
          selected ? "border-2 border-[#FFC400] opacity-100" : "opacity-[24%]"
        }`}
        src={car4Preview}
        alt="Car Preview Image"
      />
    </div>
  );
};

export default function MainContent() {
  return (
    <div className="flex-7 max-h-[calc(70%_-_32px)] px-6 flex justify-between gap-6">
      <div className="flex-1 flex flex-col justify-center gap-3">
        <PreviewImage />
        <PreviewImage />
        <PreviewImage selected />
        <PreviewImage />
        <PreviewImage />
      </div>
      <div className="flex items-center justify-center flex-10 max-h-full">
        <img
          className="max-h-full max-w-full rounded-xl"
          src={car4Image}
          alt="Car Preview Image"
        />
      </div>
    </div>
  );
}
