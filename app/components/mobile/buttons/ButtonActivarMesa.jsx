'use client'

import { AppContext } from '@/app/context/AppProvider'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

async function activarMesa(mesaid) {
  //console.log(`Activando Mesa ${mesaid}`)
  const res = await fetch(`http://localhost:3000/api/mesas/activar/${mesaid}`, {cache: 'no-store'})
  return res.json()
}


export default function ButtonActivarMesa({mesaId}) {
  const router = useRouter()
  let contexto = useContext(AppContext)

  const handleActivar = async (id) => {
    //console.log(`Activando la mesa con Id ${id}`)
    try {
      const mesa = await activarMesa(id)
      contexto.mesa = mesa
    } catch(e) {
      console.log(e)
    }
    //console.log(mesa)
    router.refresh()
    router.push(`/mobile/mesa/${id}`)
  }
  

  return (
    <button className="button1" onClick={() => handleActivar(mesaId)}>
      Ingresar a la Mesa
    </button>
  );
}
