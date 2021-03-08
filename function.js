
function add(p1,p2){
    return `Toplama isleminin sonucu: ${p1+p2}`
}

function subtract(p1,p2){
    return `Cikarma isleminin sonucu: ${p1-p2}`
}

function multiply(p1,p2){
    return `Carpma isleminin sonucu: ${p1*p2}`
}

function divide(p1,p2){
    return `Bölme isleminin sonucu: ${Math.round(p1-p2)}`
}

function fourOperation(p1,p2) {
    return ` Dört islem bir arada:
    ${add(p1,p2)}
    ${subtract(p1,p2)}
    ${multiply(p1,p2)}
    ${divide(p1,p2)}`
}

module.exports = {
    additionalProcess: add,
    subtractProcess: subtract,
    multiplyProcess: multiply,
    divideProcess: divide,
    fourOperationProcess: fourOperation
}