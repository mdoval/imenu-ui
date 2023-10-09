import BarButtonHome from "@/app/components/mobile/buttons/BarButtonHome";
import BarButtonCarta from "@/app/components/mobile/buttons/BarButtonCarta";

export default function MainBar() {
  return (
    <nav className="mainbar">
      <BarButtonHome />
      <BarButtonCarta />
    </nav>
  );
}
