import ActivarMesa from "@/app/components/mobile/screens/ActivarMesa";
import MesaActiva from "@/app/components/mobile/screens/MesaActiva";

async function checkMesa(mesaid) {
  console.log(`Chequeando Mesa numero ${mesaid}`)
  const res = await fetch(`http://localhost:3000/api/mesas/${mesaid}`, {cache: 'no-store'})
  return res.json()
}

export default async function Mesa({ params }) {
  const { mesa } = await checkMesa(params.mesaid)
  if(mesa.isActive) {
    return <MesaActiva mesaid={mesa.id} descripcion={mesa.nombre} />
  } else  {
    return <ActivarMesa mesaid={mesa.id} descripcion={mesa.nombre} />
  }
  

}
