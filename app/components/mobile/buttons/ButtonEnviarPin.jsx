'use client'

//import { AppContext } from '@/app/context/AppProvider'
import { useRouter } from 'next/navigation'
//import { useContext } from 'react'

/*
    async function enviarPin(pin) {
    //console.log(`Activando Mesa ${mesaid}`)
    const res = await fetch(`http://localhost:3000/api/mesas/pin/${pin}`, {cache: 'no-store'})
    return res.json()
}*/


export default function ButtonEnviarPin({ pin }) {
    const router = useRouter()
    //let contexto = useContext(AppContext)

    const handleEnviarPin = async (pin) => {
        //console.log(`Activando la mesa con Id ${id}`)
        alert(pin)
        /*try {
          const mesa = await activarMesa(id)
          contexto.mesa = mesa
        } catch(e) {
          console.log(e)
        }
        //console.log(mesa)
        router.refresh()
        router.push(`/mobile/mesa/${id}`)
    */
    }

    return (
        <button className="button1" onClick={() => handleEnviarPin(pin)}>
            Enviar Pin
        </button>
    );
}
