'use client'

import { useRouter } from 'next/navigation'

async function activarMesa(mesaid) {
  console.log(`Activando Mesa ${mesaid}`)
  const res = await fetch(`http://localhost:3000/api/mesas/activar/${mesaid}`, {cache: 'no-store'})
  return res.json()
}


export default function ButtonActivarMesa({mesaId}) {
  const router = useRouter()

  const handleActivar = async (id) => {
    console.log(`Activando la mesa con Id ${id}`)
    const mesa = await activarMesa(id)
    router.refresh()
    router.push(`/mobile/mesa/${id}`)
  }
  

  return (
    <button className="button1" onClick={() => handleActivar(mesaId)}>
      Activar Mesa
    </button>
  );
}
