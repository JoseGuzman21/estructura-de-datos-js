// El scope, que se traduce como “ámbito” o "alcance” en español, hace referencia a la visibilidad y a la vida útil de una variable.
// El ámbito, en esencia, determina en qué partes de nuestro programa tenemos acceso a una cierta variable. En JavaScript existen
// principalmente tres tipos de ámbitos: el ámbito global, el ámbito local o de función y el ámbito de bloque.

//1. Ambito Global

let greeting = 'Hola mundo';

function greet() {
    console.log(greeting);
}

greet(); // "Hola mundo"


//Ámbito de bloque
//Los bloques en Javascript se delimitan mediante llaves, una de apertura ‘{‘, y otra de cierre ‘}’. Como comentamos en el
// apartado de “Uso correcto de var, let y const”, para definir variables con alcance de bloque debemos hacer uso de let o const:

{
    let greeting = 'Hello world!';
    var lang = 'English';
    console.log(greeting); //Hello world!
}
console.log(lang);//”English”
console.log(greeting);//// Uncaught ReferenceError: greeting is not defined