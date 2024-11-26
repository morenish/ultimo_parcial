let decimal = parseInt(prompt("Ingrese un numero decimal para convertirlo en binario:"));
function decimalToBinary(decimal) {
    // Validar entrada
    if (decimal === 0) return "0";
    
    let N = Math.abs(decimal); // Trabajamos con el valor absoluto
    let BIN = "";
    
    // Loop principal para la conversión
    while (N > 0) {
        // Verificar si N es 0
        if (N === 0) break;
        
        // Verificar si N MOD 2 es 0
        if (N % 2 === 0) {
            BIN = "0" + BIN; // Agregar 0 al inicio
        } else {
            BIN = "1" + BIN; // Agregar 1 al inicio
        }
        
        // Dividir N por 2 y tomar el valor entero
        N = Math.floor(N / 2);
    }
    
    // Si el número original era negativo, agregar el signo
    return decimal < 0 ? "-" + BIN : BIN;
    
}

// Ejemplos de uso
console.log(decimalToBinary(10));  // Salida: "1010"
//console.log(decimalToBinary(-10)); // Salida: "-1010"
//console.log(decimalToBinary(0));   // Salida: "0"
//console.log(decimalToBinary(255)); // Salida: "11111111"