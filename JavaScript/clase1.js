// VARIABLES MUTEABLES
var numeroUno = 1;
let numeroDos = 2;

numeroUno = 5;
numeroDos = 8;

numeroUno = false;
numeroDos = true;

console.log(numeroUno);
console.log(numeroDos);

// VARIABLES INMUTABLES
const configuracionArchivos = "PDF";
//configuracionArchivos = "Hola"
console.log(configuracionArchivos);

// TIPOS DE VARIABLES
const numero = 1
const sueldo = 1.2;
const texto = "Alexis";
const apellido = "Vizuete";
const booleanos = false;
const hijos = null;
const zapatos = undefined;

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleanos);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof Number("asd"));
console.log(Number("asd"));

// CONDICIONES
if (true == true){
    console.log("Es verdadero") //!
} else {
    console.log("Es falso")
}

if (true == false){
    console.log("Es verdadero")
} else {
    console.log("Es falso") //!
}

//CONDICIONES CON STRINGS
if (""){
    console.log("String vacio - Es verdadero")
} else {
    console.log("String vacio - Es falso") //!
}
if ("Alexis"){
    console.log("String con datos - Es verdadero") //!
} else {
    console.log("String con datos - Es falso")
}

//CONDICIONES CON NÚMEROS
if (-1){
    console.log("Negativos - Es verdadero") //!
} else {
    console.log("Negativos - Es falso")
}
if (0){
    console.log("Cero - Es verdadero")
} else {
    console.log("Cero - Es falso") //!
}

if (25){
    console.log("Positivos - Es verdadero") //!
} else {
    console.log("Positivos - Es falso")
}

//CONDICIONES CON NULL - UNDEFINED
if(null){
    console.log("Null - Es verdadero")
}else{
    console.log("Null - Es falso")//!
}
if(undefined){
    console.log("Undefined - Es verdadero")
}else{
    console.log("Undefined - Es falso")//!
}

//OBJETOS
const myself = {
    nombre: "Alexis", // llave:valor
    apellido: "Vizuete",
    edad: 23,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: { // objeto
        color: "negra",
        talla: "38",
    },
    mascotas: [ "Laika", "Steve"] //arreglo
};

console.log(myself)

//ACCEDER A LAS PROPIEDADES DEL OBJETO
myself.nombre; //Alexis
myself.apellido; //Vizuete
myself["nombre"]; //Alexis
console.log(myself);

myself.nombre = "Fabrizzio"; //Cambio el valor
console.log(myself);
myself["nombre"]= "Lex";

myself.sueldo; //No existia pero se puede usar
console.log(myself.sueldo);
myself.sueldo = 1.2;
console.log(myself.sueldo); //1.2

myself["gastos"] = 0.8;
console.log(myself.gastos); //0.8

myself.nombre = undefined;
console.log(myself);
console.log(Object.keys(myself));
console.log(Object.values(myself));

delete myself.nombre; //Eliminar llabe de un objeto
console.log(myself);

// VARIABLES POR VALOR
let myAge = 23;
let myAgeCopy = myAge;

console.log(myAge);
console.log(myAgeCopy);

myAgeCopy = myAgeCopy + 1;
console.log(myAgeCopy);
console.log(myAge);

//VARIABLES POR REFERENCIA
let myOtherSelf = {
    nombre: "Alexis",
};

let copyOfMySelf = Object.assign({}, myOtherSelf);
console.log(copyOfMySelf);
console.log(myOtherSelf);

copyOfMySelf.nombre = "Fabrizzio";
delete myOtherSelf.nombre;
console.log(copyOfMySelf);
console.log(myOtherSelf);

let arregloumeros = [1,2,3,4,5];
let arregloClonado = Object.assign([], arregloumeros);
console.log(arregloumeros);
console.log(arregloClonado);

arregloumeros[0] = 200;
arregloClonado[0] = 100;
console.log(arregloumeros);
console.log(arregloClonado);

//ARREGLOS
arreglo = [6,7,8,9,10];
//for of
for (let numero of arreglo){ //Valores
    console.log('numero', numero);
}
//for in
for (let indice in arreglo){ //Indices
    arreglo[indice];
    console.log('indice', indice)
}

//Arreglos por objeto
let objetoPrueba = {
    a: '1',
    b: '2',
    c:'3',
};

for(let llave in objetoPrueba) { //indices
    console.log('llave', llave);
}

//Operaciones
arreglo.push(11); //anadir al final
arreglo.pop(); //eliminar el ultimo
arreglo.unshift(5); //agregar al inicio
console.log(arreglo);

//Splice: (indice, # elementos eliminados, items a agregar)
arreglo.splice(0,0,4);
console.log(arreglo);

const indiceNueve = arreglo.indexOf(9);
arreglo.splice(indiceNueve, 2);

console.log(arreglo);

// Operadores con Objetos
const products = [
    {
        id: 1,
        name: "CPU",
        price: 250,
    },
    {
        id: 2,
        name: "MOUSE",
        price: 35,
    },
    {
        id: 3,
        name: "Screen",
        price: 140,
    },
]

//console.log(products)

// FUNCIONES COMO PARAMETROS
// FIND
    // Devuelve el primero que cumpla esa condicion 

const respuestaFind = products.find(function (
valorActual,
indiceActual,
arregloCompleto
) {
    console.log("valorActual", valorActual); 
    console.log("indiceActual", indiceActual);
    console.log("arregloCompleto", arregloCompleto);
    return valorActual.name === "CPU"; // EXPRESION = = =
});

console.log("respuestaFind", respuestaFind); // CPU // Si no encuentra devuelve undefined

// Ejercicios para encontrar el primero producto con precion >= 100
const respuestaFind100 = products.find(function (
    valorActual,
    indiceActual,
    arregloCompleto
    ) {
        console.log("valorActual", valorActual); 
        console.log("indiceActual", indiceActual);
        console.log("arregloCompleto", arregloCompleto);
        return valorActual.price >= 100; // EXPRESION = = =
    });
    
    console.log("respuestaFind100", respuestaFind100); 

//FUNCION FIND INDEX
    // Nos devuelve el indice del objeto
    // En caso de no encontrar retorna -1
const respuestaIndex = products.findIndex(function (
    valorActual,
    indiceActual,
    arregloCompleto
){
    return valorActual.name === "CPU";
});

console.log("respuestaIndex", respuestaIndex);


//FOR EACH
const respuestaForEach = products.forEach(function (
    valorActual,
    indiceActual,
    productsCompleto
){
    console.log("ValorActual", valorActual);
});

console.log("respuestaForEach", respuestaForEach);

//Calcular el precio total de todos los elementos
let suma = 0;
//se debe considera que se debe crear la variable fuera del for each
const respuestaSumaPrecios = products.forEach(function (
    valorActual,
    indiceActual,
    productsCompleto
){
    console.log("ValorActual", valorActual);

    suma += valorActual.price;
});

console.log("respuestaSumaPrecios", suma);