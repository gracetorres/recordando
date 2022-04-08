const variables = {
    string: "abc",
    number: 123,
    boolean: true,
    objeto: {},
    array:[],
    funcion: function abc(){},
}

/**
 * 1. strings 
 * concatenar, separar por letra clave, unir, obtener un caracter segun la posicion,
 */

const n = 1
const separar = "betsy.gmail.com";
const separacion = separar.split(".")

const final= ["betsy", "gmail","com"]
const unir = final.join("/")//

const posicion = separar.charAt(2);
const cadena = separar.substring(0,4);

const convertir = n.toString();


/**
 * 2. numeros
 * a dos decimales, parseInt,
 */
const s="4";
const precio  = 27.324523;
const decimales = precio.toFixed(4);//27.3245
const convertir2 = parseInt(s);
const math = Math.sqrt(9);



/**
 * 3.boolean
 * operador terciario(?)
 */

const boo = !true;
const op = boo ? "galleta" : "helado";


/**
 * 4.objetos
 * tienen propiedades, atributos
 * añadir nueva propiedad(varias formas _ 5)
 * actualizar propiedad
 * eliminar propiedad
 * sacar un clon
 */

let user = {
    usuario: "abc",
    pass: "asd",
    eliminar : true,
    segundonivel: {},
    "user-agent": '',
    "122": ''
}

// añadir

user.nuevaPropiedad = 2;

user = { ...user, nuevaPropiedad: 2 }

// user = Object.assign(user, nuevaPropiedad )

const nuevo = new Object({
    usuario: ""
})

const obusuario = user["usuario"];

user.email = separar;
user.pass = "ooo";
delete user.eliminar;
const clon = { ...user }

// "hay caracteres especiales que necesariamente necesitan ser string si quieren ser propiedades o numericos" *-/+.-.
const lista = [];

/**
 * 5.array
 * tienen elementos 
 * añadir elemento nuevo, 
 * actualizar el elemento,
 * elimina el elemento,
 * obtener el elemento,
 */

const array = [
    1,
    "dos",
    true,
    user,
    
]
// lonfy
const longitud = array.length;

//obtener
const tercer = array[2];
const cuarto = array[3].usuario;
//crear create
const añadir = array.push("nuevo");//output: [1,"dos",true,user,"nuevo"]
const añadir2 = array.unshift("inicio");
//actualkizar update
array[1] = "tres";
array[3].pass = "julio";
//borrar delete
array.splice(2,1);



/**
condicionales: determina una accion
if, switch y case 
*/

const edad = 20;
if (edad >= 18) {
    console.log("ya puedes tener dni")
}else{
    console.log("aun no puedes tener")
}

const estudiante = true;

if (edad >= 18 && !estudiante ) {
    console.log("ira al ejercito")
}else{
    console.log("ira a la universidad")
}

const beca = false;

if (estudiante || beca) {
    console.log("puede ir a estudios tecnicos")
}

const alumno = {
    edad: 14,
    nombre: "gus",
    estudiante: true,
    trabaja: true,
    beca: false,
    equipoFutbol: true,
}

if ((alumno.equipoFutbol && alumno.estudiante) || (alumno.trabaja && !alumno.beca)) {
    console.log("aumento de notas")
}
//los estados pueden ser : en oferta, precio regular, vendido, defectuoso
const estadoProducto = "EnOferta";
switch (estadoProducto) {
    case "EnOferta":
        console.log("producto en oferta")
        break;
    case "Precioregular":
        console.log("producto normal")
        break;
    case "Vendido":
        console.log("producto vendido")
        break;
    case "Defectuoso":
        console.log("producto defectuoso")
        break;
        
    default:

        break;
}


switch (estadoProducto) {
    case "EnOferta":
    case "Defectuoso":
        console.log("aplicar 40%")
        break;
}


/**
 * bucle o iteraciones
 * repite una accion u operacion las veces que se desee según sea la necesidad.
 * while, do while, for, forEach, for in, for of
 */

const arrayEstudiantes = [];

let inicial = 14;
for (let index = 1; index <= 10; index++) {


    const alumno = {
        edad: inicial,
        nombre: "nombre"+index,
    }

    if (index%2== 0) {
        alumno.ciudad = "ica"
    }else{
        alumno.ciudad = "lima"
    }

    if (alumno.edad<18 ) {
       alumno.esEstudiante = true
    }else{
        alumno.esEstudiante = false
    }

    if (index == 5) {
        alumno.beca = true
    }else{
        alumno.beca = false
    }

    if (alumno.ciudad == "lima" && !alumno.beca ) {
        alumno.equipoFutbol = true
    }else{
        alumno.equipoFutbol = false
    }

    if (alumno.edad >= 22) {
        alumno.trabaja = true
    }else{
        alumno.trabaja = false
    }

    inicial = inicial+2;



    arrayEstudiantes.push(alumno)

    
}


console.log(arrayEstudiantes)



const trabajaLima = [];

for (let index = 0; index < arrayEstudiantes.length; index++) {
    const element = arrayEstudiantes[index];
    
    if (element.trabaja && element.ciudad == "lima") {
        trabajaLima.push(element)
    }
}
console.log(trabajaLima)

//["nombre1", "nombre2"]


/*
 * solo el primer articulo vale 40, 
el siguiente : ((40+10 )*2)-40 ,a partir de los demás se multiplicaran x2 y restar el precio del anterior. 
 */
const articulos = []
let precioInicial = 40;
let precioAnterior = 0;
for (let index = 1; index <= 10; index++) {
    const articulo = {
        nombre: "articulo"+index,
    }

    if (index == 1) {
        articulo.precio = precioInicial;
    }else{
        articulo.precio = ((precioInicial+10)*2)-(precioAnterior-index);
    }
    articulos.push(articulo)
    precioAnterior = articulo.precio;
    console.log(precioAnterior)

}

console.log(articulos)

/**
 * solo estudiantes que viven en lima van a comprar el articulo con precio mayor a 45
*/

for (let index = 0; index < arrayEstudiantes.length; index++) {
    arrayEstudiantes[index].articulo = [];
    if (arrayEstudiantes[index].ciudad == "lima") {

        for (let o = 0; o < articulos.length; o++) {
            const precioarticulo= articulos[o].precio
            if (precioarticulo > 45) {
                arrayEstudiantes[index].comprar = true;
                arrayEstudiantes[index].articulo.push(articulos[o])
            }else{
                arrayEstudiantes[index].comprar = false;
            }
        }
    }else{
        
    }
}
console.log(arrayEstudiantes)

