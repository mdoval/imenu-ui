import ButtonActivarMesa from "@/app/components/mobile/buttons/ButtonActivarMesa";
import DataGrid from "@/app/components/DataGrid/DataGrid";

export default function MesaActiva({mesaid}) {
    return (
        <div className="themeMesaActiva">
          <div className="themeMesaActivaTitle">
            <h1>Mesa: {mesaid}</h1>
          </div>
          <div className="themeInicioLogo">
            <DataGrid />
          </div>
          <div className="themeInicioMesa">
            <h2>Mesa {mesaid}</h2>
          </div>
          <div className="themeInicioBoton">
            <ButtonActivarMesa />
          </div>
        </div>
      );
}