import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'
import getUser from '@/lib/getUserId'

export async function GET(request) {
   
    let productos = []
    try {
         productos = await prisma.producto.findMany({
        });
      } catch (error) {
        console.error('Error al obtener los Productos', error);
      } finally {
        await prisma.$disconnect(); // Cierra la conexión a la base de datos cuando hayas terminado
      }

    return NextResponse.json( { productos } )
}