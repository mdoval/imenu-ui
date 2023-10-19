'use client'

import { useRouter } from 'next/navigation'
import { useContext } from 'react'

async function cerrarMesa(mesaid) {
  console.log(`Activando Mesa ${mesaid}`)
  const res = await fetch(`http://localhost:3000/api/mesas/cerrar/${mesaid}`, {cache: 'no-store'})
  return res.json()
}


export default function ButtonCerrarMesa({mesaId}) {
  const router = useRouter()
  let contexto = useContext(AppContext)

  const handleCerrar = async (id) => {
    //console.log(`Cerrando la mesa con Id ${id}`)
    try {
      const mesa = await cerrarMesa(id)
      contexto.mesa = mesa
    } catch(e) {
      console.log(e)
    }
    router.refresh()
    router.push(`/mobile/mesa/${id}`)
  }
  

  return (
    <button className="button2" onClick={() => handleCerrar(mesaId)}>
      Cerrar Mesa
    </button>
  );
}