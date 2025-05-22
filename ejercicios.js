//1) Crear el script .js con la creación de la base de datos y las colecciones.
//use cafeteria
load('script.js')

//2 Buscar cuántos cafés contienen chocolate entre sus ingredientes. rev
db.cafesEspeciales.aggregate([{$match:{'ingredientes': 'chocolate'}}, {$group:{_id:0, count:{$sum:1}}}])

//3 Buscar cuántos cafés son de tipo “cold brew”· y contienen “vainilla” entre sus ingredientes.
db.cafesEspeciales.aggregate([{$match:{'tipo': 'cold brew','ingredientes': 'vainilla'}}, {$group:{_id:0, count:{$sum:1}}}])

//4 Listar tipo y peso de los cafés que tienen una intensidad “media”.
db.cafesEspeciales.find({intensidad: 'media'}, {_id:0,tipo:1, peso:1})

//5 Obtener tipo, peso e intensidad de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.
db.cafesEspeciales.find({peso: {$gt:200, $lt:260}}, {_id:0,tipo:1, peso:1, intensidad:1})

//6 Mostrar los cafés que fueron tostados en localidades que contengan “san”, permitiendo buscar por “san”
//y que se muestren también los de “santos”, “san justo”, etc. Ordenar el resultado por peso de manera
//descendente.
db.cafesEspeciales.find({'tostador.localidad': /san/i}).sort({peso:-1})

//7 Mostrar la sumar del peso de cada tipo de Café.
db.cafesEspeciales.aggregate([{$group: {_id:'$tipo', count:{$sum:'$peso'}}}])

//8 Agregar el ingrediente “whisky” todos los cafés cuya intensidad es alta.
db.cafesEspeciales.updateMany({intensidad:'alta'}, {$push: {ingredientes: 'whisky'}})

//9 Sumarle 10 al peso de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.
db.cafesEspeciales.updateMany({peso: {$gte:200, $lte:260}}, {$inc: {peso:10}})

//10 Eliminar los cafés cuyo peso sea menor o igual a 210
db.cafesEspeciales.deleteMany({peso: {$lte:210}})