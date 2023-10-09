import BarButton from "@/app/components/mobile/buttons/BarButton";
import { BiHomeAlt2 } from "react-icons/bi";

export default function BarButtonHome() {
  return (
        <BarButton text="Inicio" icon={<BiHomeAlt2 />} url="/mobile/" />
  );
}
