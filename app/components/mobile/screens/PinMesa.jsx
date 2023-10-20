'use client'

import ButtonEnviarPin from "@/app/components/mobile/buttons/ButtonEnviarPin";
import ButtonMostrarContext from "../buttons/ButtonMostrarContext";
import ButtonNumber from "../buttons/ButtonNumber";
import PanelPin from "../misc/PanelPin";
import { useState } from "react";

export default function PinMesa({ mesaid, descripcion }) {
    const [pin, setPin] = useState("")

    const handleClick = (numero) => {
        if (pin.length < 4) {
            let nuevoPin = pin
            nuevoPin = pin + String(numero)
            setPin(nuevoPin)
        } else {
            alert("Pin supero los 4 digitos")
        }
    }

    const handleClickBorrar = () => {
        if (pin.length > 0) {
            let nuevoPin = pin.slice(0,-1)
            setPin(nuevoPin)
        } else {
            alert("Pin Vacio")
        }
    }


    return (
        <div className="themeInicio">
            <div className="themeinicioTitle">
                <h1>Ingrese un PIN de 4 Digitos para iniciar la mesa</h1><br />
                <b>{descripcion}</b>
            </div>
            <div className="themeInicioLogo flex-col">
                <div className="flex-col">
                    <PanelPin pin={pin} />
                    <div className="flex">
                        <ButtonNumber numero={1} handleClick={() => handleClick(1)} />
                        <ButtonNumber numero={2} handleClick={() => handleClick(2)} />
                        <ButtonNumber numero={3} handleClick={() => handleClick(3)} />
                    </div>
                    <div className="flex">
                        <ButtonNumber numero={4} handleClick={() => handleClick(4)} />
                        <ButtonNumber numero={5} handleClick={() => handleClick(5)} />
                        <ButtonNumber numero={6} handleClick={() => handleClick(6)} />
                    </div>
                    <div className="flex">
                        <ButtonNumber numero={7} handleClick={() => handleClick(7)} />
                        <ButtonNumber numero={8} handleClick={() => handleClick(8)} />
                        <ButtonNumber numero={9} handleClick={() => handleClick(9)} />
                    </div>
                    <div className="flex">
                        <ButtonNumber numero={0} handleClick={() => handleClick(0)} />
                        <ButtonNumber numero={"Borrar"} handleClick={() => handleClickBorrar()} />
                    </div>
                </div>
                <div className="themeInicioBoton">
                    <ButtonEnviarPin pin={pin} />
                    <ButtonMostrarContext />
                </div>
            </div>
        </div>
    );
}