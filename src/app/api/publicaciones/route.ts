import { NextResponse } from 'next/server';
import { supabase } from '@/../lib/supabase';

// GET: Obtener publicaciones con información de usuario y comentarios
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('publicaciones')
      .select('*, usuarios(*), comentarios(*, usuarios(*)), likes(*)')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ publicaciones: data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST: Crear nueva publicación
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { usuario_id, titulo, descripcion, imagen } = body;

    if (!usuario_id || !titulo) {
      return NextResponse.json({ error: 'usuario_id y titulo son obligatorios' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('publicaciones')
      .insert([{ usuario_id, titulo, descripcion, imagen }])
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ publicacion: data[0] }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
