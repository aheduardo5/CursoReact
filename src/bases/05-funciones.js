const { getSuggestedQuery } = require("@testing-library/react");

const saludar = function(nombre) {
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;


// console.log(saludar('Eduardo'));
console.log(saludar('Eduardo'));
console.log(saludar3('Eduardo'));
console.log(saludar4('Eduardo'));

const getUser = () => (
    {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
);

const user = ( getUser() );

console.log(user);


// TAREA
//  1. Transformar a una función de flecha
//  2. Tiene que retornar un objeto implicito
//  3. Pruebas
const getUsuarioActivo = (nombre) => (
    {
        uid: 'ABC567',
        username: nombre,
    }
);

const usuarioActivo = getUsuarioActivo('Eduardo');
console.log( usuarioActivo );