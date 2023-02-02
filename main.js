// funciones flecha

const multiplicar = (num1, num2) => num1 * num2 


const saludo = nombre => `hola ${nombre}`


saludo( 'Florencia' ) 

const dividir = (num1, num2) => {
    if( num2 !== 0 ){
        return num1 / num2
    }
    return 'No se puede dividir por 0'
}

//Funciones de orden superior



function calculadora(fn, a, b){
    return fn(a,b)
}

function suma(num1, num2){
    return num1 + num2
}

const resta = (num1, num2) => num1 - num2


let result = calculadora( suma, 10, 15 )
let resultResta = calculadora( resta, 10, 15 )
let resultadoMultiplicacion = calculadora( function(num1, num2){
    return num1 * num2
}, 20, 5 )
let resultadoDividir = calculadora( (num1, num2) => num1 / num2 , 15, 5 )



const personas = [
    {
        nombre : 'Nicolas',
        rol : 'Mentor',
        edad : 28
    },
    {
        nombre : 'Lucre',
        rol : 'Mentor',
        edad : 27
    },
    {
        nombre : 'Lucas',
        rol : 'Mentor',
        edad : 23
    },
    {
        nombre : 'Romina',
        rol : 'Alumno',
        edad : 26
    },
    {
        nombre : 'Cami',
        rol : 'Mentor',
        edad : 28
    },
    {
        nombre : 'Agustin',
        rol : 'Alumno',
        edad : 22
    },
    {
        nombre : 'Silvi',
        rol : 'Coordinadora',
        edad : 22
    },
    {
        nombre : 'Jose',
        rol : 'Plataforma',
        edad : 22
    },
]
const numeros = [1,2,3,4,5,6,7,8,9,10]




const fitlrarPersonas = (lista, llave, valor ) => {
    let aux = []
    for( let elemento of lista ){
        if( elemento[ llave ] == valor ){
            aux.push( elemento )
        }
    }
    return aux
}

const mentores = fitlrarPersonas( personas, 'rol', 'Mentor' )
const lucre = fitlrarPersonas( mentores, 'nombre', 'Lucre' )[0]
const alumnos = fitlrarPersonas( personas, 'rol', 'Alumno')

lucre.nombre = 'Lucrecia'

console.log( numeros )


function multiplicarValores( lista, numero ){
    let aux = []
    for( let elemento of lista ){
        aux.push( elemento * numero )
    }
    return aux
}
/* 
console.log( multiplicarValores( numeros, 3 ) )
console.log( multiplicarValores( numeros, 7 ) ) */

// Metodos de array 

// forEach

const fnForEach = ( elementoActual )  => {
    console.log('-------------')
    console.log('elementoActual', elementoActual)
    console.log('indice', indice)
    console.log(arrayOriginal)
    console.log('-------------')
}
/* numeros.forEach( fnForEach ) */

// map
/* console.log( mentores ) */

const datosMentores = mentores.map( mentor => {
    return `nombre: ${ mentor['nombre'] }, edad: ${mentor['edad']}`
} )
/* console.log(datosMentores) */

// filter
/* console.log( personas ) */
let mentoresFiltrados = personas.filter( (persona) => {
    return persona.rol == 'Mentor'
} )
let alumnosFiltrados = personas.filter( persona => persona.rol == 'Alumno' )

/* console.log( mentoresFiltrados )
console.log( alumnosFiltrados )
 */

// find

const lucre2 = mentoresFiltrados.find( mentor => mentor.nombre.includes('Lucre') )

/* console.log( lucre2 ) */

// some

// every

// reduce
const fnReduce = (acumulador, actual) => {
    return acumulador + actual
}
const sumaNumeros = numeros.reduce( fnReduce, 0 )

console.log(sumaNumeros)

const personasSeparadas = personas.reduce( (acc, act) => {
    if( acc[act.rol] ){
        acc[act.rol].push( act)
    }else{
        acc[act.rol] = [act]
    }
    return acc
},{} )

let casas = Array.from( new Set( personajes.map( personaje => personaje.house ) ) ).filter( casa => casa )
console.log( casas )
console.log( personasSeparadas )