import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'
import getUser from '@/lib/getUserId'

export async function GET(request,{ params }) {
    const mesaId = parseInt(params.mesaid)

    let updateMesa = {}
    try {
        updateMesa = await prisma.mesa.update({
            where: {
                    id: mesaId,
                },
            data: {
                    isActive: true
                }
            }
        );
      } catch (error) {
        console.error('Error al Activar una Mesa', error);
      } finally {
        await prisma.$disconnect(); // Cierra la conexión a la base de datos cuando hayas terminado
      }

    return NextResponse.json( { updateMesa } )
}