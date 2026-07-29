import { NextResponse } from 'next/server';
import { supabase } from '@/../lib/supabase';

// GET: Obtener catálogo de plagas
export async function GET() {
  try {
    const { data, error } = await supabase.from('plagas').select('*');
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ plagas: data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
