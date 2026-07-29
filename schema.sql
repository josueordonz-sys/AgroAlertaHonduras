-- ==========================================
-- AGROSMART DATABASE
-- PostgreSQL Local
-- ==========================================
-- ===============================
-- USUARIOS
-- ===============================

CREATE TABLE usuarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100),
    correo VARCHAR(255) UNIQUE NOT NULL,
    password TEXT,
    telefono VARCHAR(20),
    departamento VARCHAR(100),
    municipio VARCHAR(100),
    comunidad VARCHAR(100),
    foto TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ===============================
-- CULTIVOS
-- ===============================

CREATE TABLE cultivos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    nombre VARCHAR(100) NOT NULL,
    variedad VARCHAR(100),
    area_hectareas DECIMAL(10,2),
    fecha_siembra DATE,
    descripcion TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ===============================
-- PARCELAS
-- ===============================

CREATE TABLE parcelas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    nombre VARCHAR(150),
    latitud DECIMAL(10,7),
    longitud DECIMAL(10,7),
    tamano_hectareas DECIMAL(10,2),
    tipo_suelo VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
);

-- ===============================
-- ANALISIS DE SUELO
-- ===============================

CREATE TABLE analisis_suelo (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID REFERENCES usuarios(id),
    parcela_id UUID REFERENCES parcelas(id) ON DELETE CASCADE,
    ph DECIMAL(4,2),
    humedad DECIMAL(5,2),
    nitrogeno DECIMAL(5,2),
    fosforo DECIMAL(5,2),
    potasio DECIMAL(5,2),
    materia_organica DECIMAL(5,2),
    observaciones TEXT,
    archivo TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ===============================
-- PLAGAS
-- ===============================

CREATE TABLE plagas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    sintomas TEXT,
    tratamiento TEXT,
    imagen TEXT
);

-- ===============================
-- REPORTES DE PLAGAS
-- ===============================

CREATE TABLE reportes_plagas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID REFERENCES usuarios(id),
    parcela_id UUID REFERENCES parcelas(id),
    plaga_id UUID REFERENCES plagas(id),
    descripcion TEXT,
    gravedad VARCHAR(50),
    foto TEXT,
    latitud DECIMAL(10,7),
    longitud DECIMAL(10,7),
    created_at TIMESTAMP DEFAULT NOW()
);

-- ===============================
-- CLIMA
-- ===============================

CREATE TABLE clima (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    departamento VARCHAR(100),
    municipio VARCHAR(100),
    temperatura DECIMAL(5,2),
    humedad DECIMAL(5,2),
    lluvia DECIMAL(5,2),
    viento DECIMAL(5,2),
    descripcion VARCHAR(200),
    created_at TIMESTAMP DEFAULT NOW()
);

-- ===============================
-- PUBLICACIONES
-- ===============================

CREATE TABLE publicaciones (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID REFERENCES usuarios(id) ON DELETE CASCADE,
    titulo VARCHAR(200),
    descripcion TEXT,
    imagen TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ===============================
-- COMENTARIOS
-- ===============================

CREATE TABLE comentarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    publicacion_id UUID REFERENCES publicaciones(id) ON DELETE CASCADE,
    usuario_id UUID REFERENCES usuarios(id),
    comentario TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ===============================
-- LIKES
-- ===============================

CREATE TABLE likes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID REFERENCES usuarios(id),
    publicacion_id UUID REFERENCES publicaciones(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(usuario_id, publicacion_id)
);

-- ===============================
-- ALERTAS
-- ===============================

CREATE TABLE alertas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID REFERENCES usuarios(id),
    titulo VARCHAR(200),
    descripcion TEXT,
    leida BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ===============================
-- DIAGNOSTICOS IA
-- ===============================

CREATE TABLE diagnosticos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID REFERENCES usuarios(id),
    imagen TEXT,
    enfermedad VARCHAR(150),
    confianza DECIMAL(5,2),
    recomendacion TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ===============================
-- DATOS INICIALES
-- ===============================

INSERT INTO plagas
(nombre, descripcion, sintomas, tratamiento)
VALUES
('Gusano Cogollero', 'Plaga que afecta principalmente al maíz.', 'Hojas perforadas.', 'Aplicar insecticida recomendado.'),
('Mosca Blanca', 'Insecto que transmite enfermedades.', 'Hojas amarillas.', 'Control biológico.'),
('Pulgón', 'Insecto chupador.', 'Deformación de hojas.', 'Aplicar jabón potásico.'),
('Trips', 'Pequeño insecto que daña flores.', 'Manchas plateadas.', 'Aplicar insecticida.'),
('Roya del Café', 'Hongo que afecta cafetales.', 'Manchas anaranjadas.', 'Fungicidas específicos.');

-- ===============================
-- ÍNDICES
-- ===============================

CREATE INDEX idx_cultivos_usuario ON cultivos(usuario_id);
CREATE INDEX idx_parcelas_usuario ON parcelas(usuario_id);
CREATE INDEX idx_analisis_usuario ON analisis_suelo(usuario_id);
CREATE INDEX idx_publicaciones_usuario ON publicaciones(usuario_id);
CREATE INDEX idx_reportes_plagas ON reportes_plagas(plaga_id);
CREATE INDEX idx_comentarios_publicacion ON comentarios(publicacion_id);
CREATE INDEX idx_likes_publicacion ON likes(publicacion_id);

-- ===============================
-- DESACTIVAR RLS (PERMISOS DE LECTURA/ESCRITURA PÚBLICA)
-- ===============================
ALTER TABLE usuarios DISABLE ROW LEVEL SECURITY;
ALTER TABLE cultivos DISABLE ROW LEVEL SECURITY;
ALTER TABLE parcelas DISABLE ROW LEVEL SECURITY;
ALTER TABLE analisis_suelo DISABLE ROW LEVEL SECURITY;
ALTER TABLE plagas DISABLE ROW LEVEL SECURITY;
ALTER TABLE reportes_plagas DISABLE ROW LEVEL SECURITY;
ALTER TABLE clima DISABLE ROW LEVEL SECURITY;
ALTER TABLE publicaciones DISABLE ROW LEVEL SECURITY;
ALTER TABLE comentarios DISABLE ROW LEVEL SECURITY;
ALTER TABLE likes DISABLE ROW LEVEL SECURITY;
ALTER TABLE alertas DISABLE ROW LEVEL SECURITY;
ALTER TABLE diagnosticos DISABLE ROW LEVEL SECURITY;

