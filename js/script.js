/*codigo javascript*/ 
//variable
//var |let |const
//var :global
//let:local
//const:constante

var edad= 10;
let edad2= 105;
const edad3= 205;

//console:consola |alert:pantalla

console.log(edad);//funcion
alert(edad);//funciona ya credas

const alto = false;
const nombre = "carlos";
edad= nombre;

console.log(typeof edad);
console.log(typeof nombre);
console.log(typeof alto);

const edadStr = "ABC";
const edadNUmber = Number(edadStr);//Convertir edad NaN

console.log(edadNUmber);

//Texto a NUmero
//+
const edadmas = +edadStr;
console.log(edadmas);

//Parse int
const edadParseInt = parseInt(edadStr);
console.log(edadParseInt);

//String
const apellido = "lopez";
//upercasç
console.log(apellido.toUpperCase());
console.log(apellido.toLowerCase());
//length
console.log(apellido.length);
//repetir
console.log("hola".repeat(5));

const apellido2 = apellido.replace("op","ooooop");
console.log(apellido2);
 
//si no defino el tipo es global
otra = 10;
console.log(otra);
//objetos
const persona={
dni:'33213123',
nombre:'carlos',
edad:36
};
console.log(persona);
//cambiar el valor de sus atributos
persona.dni='3333333';

console.log(persona);

let vx;//que valor tiene? ninguno|undefined
console.log(vx);

//tipo null
const nulo = null;
console.log(nulo);

//operadores
//aritmeticos + - * /
console.log(1+1);
console.log(1-1);
console.log(1*1);
console.log(1/0);
console.log(1/1);

//relacionales
//< > <= >=
console.log('1 < 1 ',1 < 1 );//false
console.log('1===1',1===1); //true
console.log('1<=1',1<=1);//true
console.log('2 !==3', 2 !==3);

//=== Esto es por la carcteristica que tiene javascritp de moficiar el tipo de variable 
//en esta comparacion compara valor y tipo string/number
console.log("2" == 2);
console.log("2" === 2);

//tipado debil
//logico
// && || ! xor

const username = 'user000';
const password = '1234';
//username === 'user000' && password === '1234'

const valido = (username === 'user000' && password ==='1234');//true
console.log(valido);

const ovalido = (username === 'user000' || password ==='123');//true
console.log(ovalido);

//funciones
function saludar(){
    console.log("hola");
}

//invocar funcion
saludar();

function saludar2(){
     return "adios";
}

const retorno = saludar2();
console.log(retorno);

//funciones con parametros
function calcular(param1,param2,op){
    //si op = + sumar
    //si op = - restar...
    //Usamos Number para asegurarnos el tipo de dato ya que no lo sabemos
    let res;
    if(op==='+'){
       res=  Number(param1)+Number(param2);
    }
    if (op === '-') {
       res= Number(param1)-Number(param2);
    }
    if (op === '/') {
       res =   Number(param1)/Number(param2);
    }
    if (op === '*') {
        res =  Number(param1)*Number(param2);
    }
    return res || `${op} operacion invalida`; //alt+96
}

const resultado = calcular(100,200,'/');
console.log(resultado);

function padre(var1) {
    const aux = var1 *10;
    function hija(){
        return aux *20;
    }
    return hija();
}
const redHija = padre(10);
//debugger; //Para debuguear en este punto se para.

//switch else falta

//array arreglos vectores
const edad1 = 10;
const edadEli = 20;
const edadJose = 25; //En vez de definir 3 variables
//lo hacemos en un veztor

const edadVector = [10,20,30];
edadVector.push(40);
console.log(edadVector[3]);

//recorremos un vector con for,for-each,while,do.
console.log('Recorremos vector');
edadVector.forEach(aux => console.log(aux));

//Definicion de funciones
//1
function fx() {}
//2
fx = function(){}
//3
fx = () => {}

fg = (param1,param2) =>
{
    console.log(param1,param2);
}
const algo = fg('a','b');
console.log(algo);

//funcion que recibe funcion (fy)
const x = (fy,px) => {
    console.log('ejecutando x(fy,px)')
    return fy(px)
}

//invocar x
const f = (px) =>{
    console.log("no hace nada")
};

//filter map recuce every some

const apellidos2 = ['CAMPS', 'REYES', 'GOMEZ','ZAMORA'];
const listaGomez = apellidos2.filter(aux => aux === 'GOMEZ');
console.log(listaGomez);

//metodo map()
const apellidos = [
    {
        id:1,
        apellido:'CAMPS',
        direccion: {
            calle: 'calle 13',
            altura: 1234
        }
    },
    {
        id:2,
        apellido:'REYES',
        direccion: {
            calle: 'calle 13',
            altura: 1234
        }
    },
    {
        id:3,
        apellido:'GOMEZ',
        direccion: {
            calle: 'calle 13',
            altura: 1234
        }
    },
    {
        id:4,
        apellido:'ZAMORA',
        direccion: {
            calle: 'calle 13',
            altura: 1234
        }
    }
];

apellidos.push(
    {
        id:5,  
        apellido:'ZAMORA',      
    }
);

console.log('apellidos',apellidos);
//metodo map() del array
const ids = apellidos.map(x => x.apellido);
console.log(ids);

//every
const todosZamora = apellidos.every(x => x.id > 0);//boolean
console.log(todosZamora);

//some
const existeZamora = apellidos.some(x => x.apellido ==='ZAMORA');
console.log(existeZamora);


const apellidosSinEli = apellidos.splice(1);
console.log(apellidosSinEli);

const apellidosSinEli1 = apellidos.shift(1);
console.log(apellidosSinEli1);
console.log(apellidos);