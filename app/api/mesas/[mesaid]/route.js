import { NextResponse } from "next/server";

export async function GET(request , {params}) {
    //console.log(params)
    return NextResponse.json({mesa: params.mesaid, isActive: true})
}