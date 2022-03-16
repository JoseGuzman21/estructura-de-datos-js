// Evitar el uso de "else"
const getPayAmount = () => {
    let result;
    if (isDead) {
        result = deadAmount();
    }
    else {
        if (isSeparated) {
            result = separatedAmount();
        }
        else {
            if (isRetired) {
                result = retiredAmount();
            }
            else {
                result = normalPayAmount();
            }
        }
    }
    return result;
}

// Cláusulas de guarda, Las cláusulas de guarda, también conocidas como aserciones o precondiciones, son
// una pieza de código que comprueba una serie de condiciones antes de continuar con la ejecución de la función.
// En el ejemplo anterior, como puedes observar, tenemos demasiados condicionales anidados.
// Para resolverlo podríamos sustituir los casos edge por cláusulas de guarda:

const getPayAmount2 = () => {
    if (isDead) return deadAmount();

    if (isSeparated) return separatedAmount();

    if (isRetired) return retiredAmount();

    return normalPayAmount();
}

// OPERADOR TERNARIO
//if/else
const isRunning = true;
if (isRunning) {
    stop();
}
else {
    run();
}
//operador ternario
isRunning ? stop() : run();

//Prioriza las condiciones asertivas
//Negative
if (!canNotFormat) {
    format()
}
//Positive
if (canFormat) {
    format()
}


