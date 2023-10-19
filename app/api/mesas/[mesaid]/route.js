import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'
import getUser from '@/lib/getUserId'

export async function GET(request,{ params }) {
    const mesaId = parseInt(params.mesaid)
    //console.log(mesaId)

    let mesa = []
    try {
        mesa = await prisma.mesa.findUnique({
            where: {
                    id: mesaId,
                }            
            }
        );
      } catch (error) {
        console.error('Error al obtener los Mesas', error);
      } finally {
        await prisma.$disconnect(); // Cierra la conexión a la base de datos cuando hayas terminado
      }

    return NextResponse.json( { mesa } )
}