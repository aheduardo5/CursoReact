
const persona = {
    nombre: 'Tony',
    Apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 3321,
        lat: 13.2224,
        long: 43.22114
    }
};

// console.table( persona );
console.log( persona );

const persona2 = {...persona};
persona2.nombre = 'Eduardo';

console.log( persona2 );