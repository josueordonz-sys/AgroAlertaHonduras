// Script de utilidad local — requiere variables de entorno
// Copia .env.example a .env.local y rellena tus valores antes de usar este script
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('ERROR: Define NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY en .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function fixName() {
  const targetId = '4e0d98bc-3e67-4346-80f4-4158aa0dd0b9';
  console.log("Updating name...");
  const { data, error } = await supabase.from('usuarios').update({ nombre: "Cesia" }).eq('id', targetId);
  console.log("Update result:", data, error);
}

fixName();
