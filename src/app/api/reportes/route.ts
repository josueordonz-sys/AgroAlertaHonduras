import { NextResponse } from 'next/server';
import { supabase } from '@/../lib/supabase';

// GET: Obtener reportes de plagas
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get('region');

  try {
    let query = supabase.from('reportes_plagas').select('*, usuarios(*), plagas(*)');
    if (region && region !== 'TODAS') {
      // Filtrar por departamento si existe en la consulta
    }
    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ reportes: data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST: Registrar un reporte de plaga
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { usuario_id, parcela_id, plaga_id, descripcion, gravedad, latitud, longitud, foto } = body;

    const { data, error } = await supabase
      .from('reportes_plagas')
      .insert([{
        usuario_id,
        parcela_id,
        plaga_id,
        descripcion,
        gravedad: gravedad || 'Medio',
        latitud: latitud || 14.6349,
        longitud: longitud || -86.5162,
        foto
      }])
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ reporte: data[0] }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
