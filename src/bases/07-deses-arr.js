const personajes = ['Goku', 'Vegeta', 'Trunks'];
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [, , p3 ] = personajes;
console.log( p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros)

// Tarea
//  1. El primer valor del arr se llamará nombre
//  2. El segundo se llamara setNombre
const State = ( valor ) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

const arr = State('Eduardo');
const [nombre, setNombre] = State();
console.log(nombre);
setNombre();
