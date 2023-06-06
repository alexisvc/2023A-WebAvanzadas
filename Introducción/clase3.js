//Callback
/*const { error } = require("console");
const fs = require("fs");
const path = require("path");

console.log("PRIMERO");
fs.readFile(
    path.join(__dirname, "ejemplo.txt"),
    "utf-8",
    (error, contenido) => {
        if (error) {
            console.error({
                mensaje: "error leyendo contenido de ejemplo.txt",
                error: error,
            });

        } else {
            fs.readFile(
                path.join(__dirname, "ejemplo.js"),
                "utf-8",
                (errorVariable, contenidoVariable) => {
                    if(errorVariable){
                        console.error({
                            mensaje: "error leyendo contenido de ejemplos.js",
                            error: errorVariable,
                        });
                    } else {
                        console.log(contenido, contenidoVariable);
                    }
                }
            );
        }
    }
);

console.log("TERCERO");

//PROMISES
//const fs = require("fs");
const { resolve } = require("path");

function promesaEsPar(numero) {
    const miPrimeraPromesa = new Promise (
        (
            resolve, //return
            reject //throw
        ) => {
            if (numero % 2 == 0) {
                resolve(numero); // return numero -> resolve() : return undefined
            } else {
                reject('No es par :(') // throw 'No es par :('
            }
        }
    )
    return miPrimeraPromesa
}

//Promesa para elevar un número al cuadrado
function promesaElevarAlCuadrado(numero) {
    const miPrimerPromesa = new Promise (
        (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado)
        }
    );
    return miPrimerPromesa
}


//Invocamos la promesa
promesaEsPar(6)
    .then(
        (datosPromesa) => {
            console.log('datosPromesa', datosPromesa);
            return promesaElevarAlCuadrado(datosPromesa);
        }
    )
    .then(
        (datosElevarAlCuadrado)=>{
            console.log('datosElevarAlCuadrado', datosElevarAlCuadrado);
        }
    )
    .catch(
        (error)=>{
            console.log(error);
        }
    )
    .finally()


//EJERCICIO
//Crear una promesa para retornar una lista de estudiantes
const estudiantes = [
    {
        id: 1,
        name: "Alexis",
        nota: 8,
    },
    {
        id: 2,
        name: "Leo",
        nota: 8,
    },
    {
        id: 3,
        name: "Anahí",
        nota: 8,
    },
]

function obtenerListaEstudiantes(code){ 
    const promesa = new Promise (
        (
            resolve,
            reject
        ) => {
            if (code > 0) {
                resolve(estudiantes);
            } else {
                reject('Id de un estudiante es negativo')
            }
        }
    );
    return promesa
}

obtenerListaEstudiantes(10)
    .then(
        (datosPromesa) => {
            console.log('datosPromesa', datosPromesa);
        }
    )
    .catch(
        (error)=>{
            console.log(error);
        }
    )
    .finally()

obtenerListaEstudiantes(-10)
.then(
    (datosPromesa) => {
        console.log('datosPromesa', datosPromesa);
    }
)
.catch(
    (error)=>{
        console.log(error);
    }
)
.finally()*/

//JSON
const arreglousuarios = [
    {
        id: 1,
        nombre: "Alexis",
    },
];

const arregloGuardado = JSON.stringify(arreglousuarios);

const usuario = {
    id: 1,
    name: "Fabrizzio",
};

const objetoGuardado = JSON.stringify(usuario);

console.log('arregloGuardado', arregloGuardado);
console.log('objetoGuardado', objetoGuardado);

const arregloRestaurado = JSON.parse(arregloGuardado);
const objetoRestaurado = JSON.parse(objetoGuardado);

console.log('arregloRestaurado', arregloRestaurado);
console.log('objetoRestaurado', objetoRestaurado);