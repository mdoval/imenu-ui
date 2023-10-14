import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export async function GET(request, { params }) {
    const mesaId = parseInt(params.productoId)
    let res = { mensaje: "Borrando Mesa"}
    try {
        const deleteMesa = await prisma.mesa.deleteMany({
            where: {
              id: mesaId,
            }
          })        
        res = deleteMesa
    } catch(error) {
        console.log(error)
        res = { mensaje: "Error al eliminar Mesa"}
    } finally {
        await prisma.$disconnect(); // Cierra la conexión a la base de datos cuando hayas terminado
      }
        
    return NextResponse.json( { res } )
}