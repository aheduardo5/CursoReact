// Desestructuración
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
    rango: 'Soldado'
}

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);
const Context = ({clave, nombre, edad, rango = 'Capitán' }) => {
    
    // console.log(edad, clave, nombre, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 15.324,
            lng: -12.3123,
        }
    }

}

const {nombreClave, anios, latlng:{lat, lng}} = Context( persona );
console.log(nombreClave, anios);
console.log(lat, lng);
