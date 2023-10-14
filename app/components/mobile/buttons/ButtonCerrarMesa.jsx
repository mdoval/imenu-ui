'use client'

import { useRouter } from 'next/navigation'

async function cerrarMesa(mesaid) {
  console.log(`Activando Mesa ${mesaid}`)
  const res = await fetch(`http://localhost:3000/api/mesas/cerrar/${mesaid}`, {cache: 'no-store'})
  return res.json()
}


export default function ButtonCerrarMesa({mesaId}) {
  const router = useRouter()

  const handleCerrar = async (id) => {
    console.log(`Cerrando la mesa con Id ${id}`)
    const mesa = await cerrarMesa(id)
    router.refresh()
    router.push(`/mobile/mesa/${id}`)
  }
  

  return (
    <button className="button2" onClick={() => handleCerrar(mesaId)}>
      Cerrar Mesa
    </button>
  );
}