import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

export default function MainPanel() {
  return (
    <div className="flex-[3] flex flex-col justify-between gap-10">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
