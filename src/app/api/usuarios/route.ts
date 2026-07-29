import { NextResponse } from 'next/server';
import { supabase } from '@/../lib/supabase';

// GET: Obtener todos los usuarios o por correo
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const correo = searchParams.get('correo');

  try {
    let query = supabase.from('usuarios').select('*');
    if (correo) {
      query = query.eq('correo', correo);
    }
    const { data, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ usuarios: data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST: Crear usuario (siguiendo schema.sql)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, apellido, correo, password, telefono, departamento, municipio, comunidad } = body;

    if (!nombre || !correo) {
      return NextResponse.json({ error: 'Nombre y correo son obligatorios' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('usuarios')
      .insert([{ nombre, apellido, correo, password: password || '123456', telefono, departamento, municipio, comunidad }])
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ usuario: data[0] }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
