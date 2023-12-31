import Image from "next/image";
import logoPic from "@/public/images/logo_bar.png";
import ButtonActivarMesa from "@/app/components/mobile/buttons/ButtonActivarMesa";
import ButtonMostrarContext from "../buttons/ButtonMostrarContext";

export default function ActivarMesa({mesaid, descripcion}) {
    return (
        <div className="themeInicio">
          <div className="themeinicioTitle">
            <h1>Bienvenidos a</h1>
          </div>
          <div className="themeInicioLogo">
            <Image src={logoPic} alt="Logo del Bar" className=" w-3/4" />
          </div>
          <div className="themeInicioMesa">
            <h2>Mesa {descripcion}</h2>
          </div>
          <div className="themeInicioBoton">
            <ButtonActivarMesa mesaId={mesaid} />
            <ButtonMostrarContext />
          </div>
        </div>
      );
}