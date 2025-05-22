db.cafesEspeciales.drop()

db.cafesEspeciales.insertOne({
    tipo: 'espresso',
    ingredientes: ['chocolate','vainilla'],
    peso: 270,
    intensidad: 'media',
    precio: {tipo: 'efectivo', precio: 500},
    leche: true,
    tostador: {localidad: 'Caballito', nombre: 'Thiago', cuit: 42}
})

db.cafesEspeciales.insertOne({
    tipo: 'filtrado',
    ingredientes: ['chocolate','caramelo'],
    peso: 240,
    intensidad: 'alta',
    precio: {tipo: 'efectivo', precio: 700},
    leche: false,
    tostador: {localidad: 'Almagro', nombre: 'Minerva', cuit: 50}
})

db.cafesEspeciales.insertOne({
    tipo: 'cold brew',
    ingredientes: ['vainilla','caramelo'],
    peso: 120,
    intensidad: 'baja',
    precio: {tipo: 'tarjeta', precio: 800},
    leche: true,
    tostador: {localidad: 'Balvanera', nombre: 'Nerea', cuit: 51}
})

db.cafesEspeciales.insertOne({
    tipo: 'espresso',
    ingredientes: ['chocolate'],
    peso: 100,
    intensidad: 'media',
    precio: {tipo: 'tarjeta', precio: 400},
    leche: true,
    tostador: {localidad: 'Balvanera', nombre: 'Maria', cuit: 31}
})

db.cafesEspeciales.insertOne({
    tipo: 'descafeinado',
    ingredientes: ['caramelo'],
    peso: 210,
    intensidad: 'baja',
    precio: {tipo: 'tarjeta', precio: 400},
    leche: false,
    tostador: {localidad: 'Colegiales', nombre: 'Lucia', cuit: 56}
})

db.cafesEspeciales.insertOne({
    tipo: 'filtrado',
    ingredientes: ['vainilla'],
    peso: 250,
    intensidad: 'baja',
    precio: {tipo: 'efectivo', precio: 1000},
    leche: true,
    tostador: {localidad: 'Belgrano', nombre: 'Tomas', cuit: 21}
})

db.cafesEspeciales.insertOne({
    tipo: 'espresso',
    ingredientes: ['cold brew'],
    peso: 400,
    intensidad: 'alta',
    precio: {tipo: 'tarjeta', precio: 700},
    leche: false,
    tostador: {localidad: 'Flores', nombre: 'Tiara', cuit: 25}
})

db.cafesEspeciales.insertOne({
    tipo: 'filtrado',
    ingredientes: ['cold brew','chocolate'],
    peso: 210,
    intensidad: 'baja',
    precio: {tipo: 'tarjeta', precio: 1100},
    leche: true,
    tostador: {localidad: 'Santos', nombre: 'Dario', cuit: 26}
})

db.cafesEspeciales.insertOne({
    tipo: 'filtrado',
    ingredientes: ['caramelo'],
    peso: 140,
    intensidad: 'baja',
    precio: {tipo: 'efectivo', precio: 1200},
    leche: true,
    tostador: {localidad: 'San justo', nombre: 'Ayelen', cuit: 57}
})

db.cafesEspeciales.insertOne({
    tipo: 'descafeinado',
    ingredientes: ['caramelo','cold brew'],
    peso: 300,
    intensidad: 'baja',
    precio: {tipo: 'efectivo', precio: 1500},
    leche: false,
    tostador: {localidad: 'San telmo', nombre: 'Ojelo', cuit: 60}
})

