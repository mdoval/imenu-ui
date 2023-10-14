import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'
import getUser from '@/lib/getUserId'

export async function GET(request) {
   
    let mesas = []
    try {
         mesas = await prisma.mesa.findMany({
        });
      } catch (error) {
        console.error('Error al obtener los Mesas', error);
      } finally {
        await prisma.$disconnect(); // Cierra la conexión a la base de datos cuando hayas terminado
      }

    return NextResponse.json( { mesas } )
}