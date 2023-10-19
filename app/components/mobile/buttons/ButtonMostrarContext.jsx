'use client'

import { AppContext } from "@/app/context/AppProvider";
import { useContext } from "react";

export default function ButtonMostrarContext() {
  const contexto = useContext(AppContext)

  const handleClick = () => {
    alert(JSON.stringify(contexto))
  }

  return (
    <button className="button3" onClick={handleClick}>
      Mostrar Contexto
    </button>
  );
}
