import { NextResponse } from 'next/server'
import prisma from '@/db/prisma'

export async function POST(request) {
    const data = await request.json()
    let res = { mensaje: "Agregando Mesa"}
    try {
        const mesa = await prisma.mesa.create({data: data})    
        res = mesa
    } catch(error) {
        console.log(error)
        res = { mensaje: "Error al crear Mesa"}
    }
        
    return NextResponse.json( { res } )
}