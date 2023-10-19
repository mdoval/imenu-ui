import ButtonCerrarMesa from "@/app/components/mobile/buttons/ButtonCerrarMesa";
import DataGrid from "@/app/components/DataGrid/DataGrid";
import ButtonMostrarContext from "../buttons/ButtonMostrarContext";

export default function MesaActiva({mesaid, descripcion}) {
    return (
        <div className="themeMesaActiva">
          <div className="themeMesaActivaTitle">
            <h1>Mesa: {mesaid}</h1>
          </div>
          <div className="themeInicioLogo">
            <DataGrid />
          </div>
          <div className="themeInicioMesa">
            <h2>Mesa <b>{descripcion}</b></h2>
          </div>
          <div className="themeInicioBoton">
            <ButtonCerrarMesa mesaId={mesaid} />
            <ButtonMostrarContext />
          </div>
        </div>
      );
}