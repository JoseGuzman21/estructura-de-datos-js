// En JavaScript las declaraciones de las variables y funciones se asignan en memoria
// en tiempo de compilación; a nivel práctico es como si el intérprete moviera dichas
// declaraciones al principio de su ámbito. Este comportamiento es conocido como
// hoisting. Gracias al hoisting podríamos ejecutar una función antes de su declaración

greet1(); //”Hello world”;
function greet1() {
    let greeting = 'Hello world!';
    console.log(greeting);
}


//Es como si se ejecutara esto
function greet() {
    let greeting = 'Hello world';
    console.log(greeting);
}
greet(); 