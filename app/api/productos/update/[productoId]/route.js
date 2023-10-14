import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export async function POST(request, { params }) {
    const productoId = parseInt(params.productoId)
    const data = await request.json()
    let res = { mensaje: "Actualizando Producto"}
    try {
        const updateProducto = await prisma.producto.update({
            where: {
              id: productoId,
            },
            data: data,
          })        
        res = updateProducto
    } catch(error) {
        console.log(error)
        res = { mensaje: "Error al actualizar Bar"}
    } finally {
        await prisma.$disconnect(); // Cierra la conexión a la base de datos cuando hayas terminado
      }
        
    return NextResponse.json( { res } )
}