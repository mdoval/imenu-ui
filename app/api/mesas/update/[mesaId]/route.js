import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export async function POST(request, { params }) {
    const mesaId = parseInt(params.mesaId)
    const data = await request.json()
    let res = { mensaje: "Actualizando Mesa"}
    try {
        const updateMesa = await prisma.mesa.update({
            where: {
              id: mesaId,
            },
            data: data,
          })        
        res = updateMesa
    } catch(error) {
        console.log(error)
        res = { mensaje: "Error al actualizar Mesa"}
    } finally {
        await prisma.$disconnect(); // Cierra la conexión a la base de datos cuando hayas terminado
      }
        
    return NextResponse.json( { res } )
}