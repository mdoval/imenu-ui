import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export async function GET(request, { params }) {
    const productoId = parseInt(params.productoId)
    let res = { mensaje: "Borrando Producto"}
    try {
        const deleteProducto = await prisma.producto.deleteMany({
            where: {
              id: productoId,
            }
          })        
        res = deleteProducto
    } catch(error) {
        console.log(error)
        res = { mensaje: "Error al eliminar Producto"}
    } finally {
        await prisma.$disconnect(); // Cierra la conexión a la base de datos cuando hayas terminado
      }
        
    return NextResponse.json( { res } )
}