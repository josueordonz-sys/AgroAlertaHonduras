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

async function fixUser() {
  const targetId = '4e0d98bc-3e67-4346-80f4-4158aa0dd0b9';
  console.log("Checking if user exists...");
  const { data, error } = await supabase.from('usuarios').select('*').eq('id', targetId);
  console.log("Query result:", data, error);
  
  if (data && data.length === 0) {
    console.log("User not found. Inserting default row for this UUID...");
    const { data: insData, error: insErr } = await supabase.from('usuarios').insert([{
      id: targetId,
      nombre: "Usuario de Prueba",
      correo: "prueba_" + Date.now() + "@example.com",
      departamento: "Comayagua",
      password: "temp-password-fix"
    }]);
    console.log("Insert result:", insData, insErr);
  }
}

fixUser();
