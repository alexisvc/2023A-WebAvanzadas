const products = [
    {
        id: 1,
        name: "CPU",
        price: 120
    },
    {
        id: 2,
        name: "Mouse",
        price: 32.23
    },
    {
        id: 3,
        name: "Keyboard",
        price: 42.1
    },
];

// MAP
const responseMap = products.map(function(
    currentValue,
    currentIndex,
    array
    ){
        const newElement = {
            currentId: currentValue.id,
            name: currentValue.name + "_CODE",
            price: currentValue.price - 1,
            allowTax: true
            };
    })
console.log("product", products);
console.log("responseMap", responseMap);


// Filter
const responseFilter = products.filter(function(
    currentValue,
    currentIndex,
    originalObject
    ){
        return currentValue.price > 40;
    });
console.log("product", products);
console.log("resposeFilter", responseFilter);

// Some
const responseSome = products.some(function(
    currentValue,
    currentIndex,
    originalObject
    ){
        return currentValue.price > 200;
    });
console.log("product", products);
console.log("resposeSome", responseSome);

// Every
const resultEvery = products.every(function(
    currentValue,
    currentIndex,
    originalObject
    ){
        return currentValue.price > 40;
    });
console.log("product", products);
console.log("resultEvery", resultEvery);

// Reduce
const responseReduce = products.reduce(function(
    valorAcumulador,
    valorActual,
    indiceActual,
    arregloCompleto)
    {
        return valorAcumulador + valorActual.price;
    }, 0);
console.log("product", products);
console.log("responseReduce", responseReduce);

const responseReduceObject = products.reduce(
    function(
        valorAcumulador,
        valorActual,
        indiceActual,
        arregloCompleto
        ){
            return {
                id: valorAcumulador.id + valorActual.id,
                currentValue: valorAcumulador.currentValue + valorActual.price
            }
        },
        {
            id: 0,
            currentValue: 0
        });
console.log("product", products);
console.log("responseReduce", responseReduceObject);

function soloNumerico(a, b, c){
    return a - b + c;
}
console.log(soloNumerico(2, 3, 5));

function soloLetras(a, b, c){
    console.log(a, b, c);
}
console.log(soloLetras('a', 'b', 'c'));

// Funciones nombradas
function namedFunction(){}

// Funciones anonimas
const functionSinNombre = function(){};

[3, 5, 7].forEach(function(){});

functionSinNombre();

//FAT ARROW -> ANONIMAS
const functionFatArrow = () => {}

const functionFatArrow1 = (parametro) => {
    return parametro + 1;
}
console.log("result functionFatArrow1", functionFatArrow1(3));

const functionFatArrow2 = (parametro) => parametro + 1;
console.log("result functionFatArrow2", functionFatArrow2(3));

const functionFatArrow3 = (parametro) => parametro + 1;
console.log("result functionFatArrow3", functionFatArrow3(3));

const functionFatArrow4 = (numberOne, numberTwo, numberThree) => numberOne + numberTwo + numberThree;
console.log("functionFatArrow4", functionFatArrow4(1, 2, 3));

function sumarNumeros(...allNumbers){
    let total = 0;
    allNumbers.forEach((valorActual) => {
        total += valorActual;
    });
    return total;
}
console.log("sumarNumeros", sumarNumeros(1,2,3,4,5,6,7,8,9,10,11));

//Ejercicio: utilizar el metodo filter para que me retorne todos 
const resposeFilter = products.filter((product) => product.price > 40);
console.log("product", products);

// Destructuracion
const alexis = {
    name: "Alexis"
};

const sister = {
    name: "Dayana",
    lastName: "Vizuete"
};

const alexisSister = {
    ...sister,  // -> {name: 'Dayana', lastName: 'Vizuete'}
    ...alexis   // -> {name: 'Alexis'}
};

const alexisSister2 = {
    ...alexis,
    ...sister
};

console.log('alexisSister', alexisSister);
console.log('alexisSister2', alexisSister2);

const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9];

const combinedArray = [
    ...arregloUno, // 1, 2, 3, 4, 5
    ...arregloDos // 6, 7, 8, 9
    ];
console.log("combinedArray", combinedArray);