const operation= require("./function");

const firstNumber = 10;
const secondNumber = 2;

/**Dört islem bir arada */
console.log(operation.fourOperationProcess(firstNumber,secondNumber))
/**Toplama */
console.log(operation.additionalProcess(firstNumber,secondNumber))
/**Cikarma */
console.log(operation.subtractProcess(firstNumber,secondNumber))
/**Carpma */
console.log(operation.multiplyProcess(firstNumber,secondNumber))
/**Bölme */
console.log(operation.divideProcess(firstNumber,secondNumber))

