import Image from "next/image";
import logoPic from "@/public/images/logo_bar.png";
import ButtonActivarMesa from "@/app/components/mobile/buttons/ButtonActivarMesa";
import ButtonMostrarContext from "../buttons/ButtonMostrarContext";
import ButtonNumber from "../buttons/ButtonNumber";

export default function PinMesa({ mesaid, descripcion }) {
    return (
        <div className="themeInicio">
            <div className="themeinicioTitle">
                <h1>Ingrese un PIN de 4 Digitos para iniciar la mesa</h1>
            </div>
            <div className="themeInicioLogo flex-col">
                <div className="flex-col">
                    <div className="w-full bg-black h-20">0000</div>
                    <div className="flex">
                        <ButtonNumber numero={1} />
                        <ButtonNumber numero={2} />
                        <ButtonNumber numero={3} />
                    </div>
                    <div className="flex">
                        <ButtonNumber numero={4} />
                        <ButtonNumber numero={5} />
                        <ButtonNumber numero={6} />
                    </div>
                    <div className="flex">
                        <ButtonNumber numero={7} />
                        <ButtonNumber numero={8} />
                        <ButtonNumber numero={9} />
                    </div>
                    <div className="flex">
                        <ButtonNumber numero={1} />
                        <ButtonNumber numero={"Borrar"} />
                    </div>
                </div>
                <div className="themeInicioMesa">
                    <h2>Mesa {descripcion}</h2>
                </div>
                <div className="themeInicioBoton">
                    <ButtonActivarMesa mesaId={mesaid} />
                    <ButtonMostrarContext />
                </div>
            </div>
        </div>
    );
}