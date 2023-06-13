//Variables
var nombre: string = "Anahi";
var score1: number = 52;
var score2: number = 32.5;
var suma = score1 + score2;
console.log("nombre: ", nombre);
console.log("score1: ", score1);
console.log("score2: ", score2);
console.log("suma: ", suma);

/*
var num = 2;
console.log("value of num "+ num)
num = "12";
console.log(num)
*/

//Herencia
class Animal{
    name: string;

    public constructor(name: string){
        this.name = name;
    }

    public move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}


class Snake extends Animal {
    constructor(name: string) { super(name); }

    move(distanceInMeters = 5){
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}


class Horse extends Animal {
    constructor (name: string) { super(name); }

    move(distanceInMeters = 45){
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse ("Tommy the Palomino");
sam.move();
tom.move(34);




//Modificadores
//Publico
class Animal1{
    name: string;

    public constructor(name: string){
        this.name = name;
    }

    public move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

//Privado
class Animal2{
    private name: string;
    constructor(name: string){ this.name = name; }

}

let cat: Animal2 = new Animal2 ("Cat");
//console.log(cat.name) //Error: name is private


//Modificador Protected
class Person {
    protected name: string;
    constructor(name: string) {this.name = name; }
}

//class Employee extends Person { ... }

//Modificador Readonly
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}

let dad = new Octopus ("Man with the 8 string legs");
//dad.name = "Man with the 3 piece suit"; //error! name is readonly

//Shortcut para constructor
class Animal3 {
    constructor(private name: string){}
}

let cat2: Animal3 = new Animal3("Cat")
//console.log(cat2.name) //error private


//Interfaces
interface Animal4 {
    readonly name: string;
    age: number;
}

//var animal = new Animal4(); //error used like a value


interface SquareConfig {
    color?: string;
    width?: number,
}

let mySquare = createSquare({color: "black"});

function createSquare(config: SquareConfig): {color: string; area: number }{
    let newSquare = {color: "white", area: 100};
    if (config.color) { //distinto de null o undefined
        //Error: Property 'color' does not exist on type 'SquareConfig'
        //newSquare.color = config.clor;
        newSquare.color = config.color;
    }
    if (config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}


/*
class Cat2 implements Animal {
    //compilation error: Animal does not implement Animal
}

class Cat3 implements Animal {
    public readonly name: string;  //privado además de solo permitir lectura
    public age: number;
}
*/


//GENERICS

function identity<T>(arg: T):T {
    return arg;
}

console.log(identity<string>("Pesho")) //Prints Pesho
console.log(identity(new Person("Pesho"))) //Type is inferred in typescript


//Otra forma de definir 
function log<T>(message: T): void{
    console.log(message.toString());
}

log("\nPesho");
log(new Person("Pesho")); //impresión es detalle del compilador


//NUEVO EJEMPO GENERICS ---PENDIENTE DE SOLUCIONAR (no tomar en cuenta para el deber)
/*
class Animal5{
    numLegs: number;
}

class BeeKeeper{
    constructor(public hasMask: string){}
}

class Bee extends Animal5{
    keeper: BeeKeeper;
}

class ZooKeeper{
    constructor(public nametag: boolean){}
}

class Lion extends Animal{
    keeper: ZooKeeper;
}


//Patrón de diseño Factory
//solo podrá instanciar el objeto si este extiende de la clase Animal5
function createInstance<A extends Animal5>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  //typechecks!
createInstance(Bee).keeper.hasMask  //typechecks!
*/


interface Usuario{
    nombre: string;
    apellido: string;
    edad?: number | undefined; //opcional
    sueldo?: number; //opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
    //calcularImpuesto parámetro numeor impuesto, sueldo + sueldo * impuesto
    //estadoActual no reciba parámetros, 'AP' 'AF' 'AT'
}


let user: Usuario = {
    nombre: 'Anahi',
    apellido: 'Vasquez',
    casado: 0,
    sueldo: 11.2,
    estado: 'AC',
    imprimirUsuario: (mensaje) => {
        return 'El mensaje es: ' + mensaje;
        },
    calcularImpuesto: impuesto => {
        return this.sueldo + this.sueldo * impuesto;
        },
    estadoActual: () => {
        switch (this.estado){
            case 'AC':
                return 'AP';
                case 'IN':
                    return 'AF';
                    case 'BN':
                        return 'AT';

        }
    }
}