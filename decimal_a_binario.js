// Función para convertir un número decimal a binario
function decimalABinario(numero) {
    let binario = ""; // Variable para almacenar el resultado binario

    while (numero > 0) {
        // Calcula el residuo de la división entre 2
        let residuo = numero % 2;
        // Prependemos el residuo al binario
        binario = residuo + binario;
        // Actualizamos el número dividiéndolo entre 2 y eliminando la parte decimal
        numero = Math.floor(numero / 2);
    }
    // Retornamos el resultado binario
    return binario || "0"; // Si el número era 0, devolvemos "0"
}
// Entrada: Pedir al usuario un número decimal
let numeroDecimal = parseInt(prompt("Ingrese el número decimal para convertir en binario:"));

// Verificar si la entrada es válida
if (isNaN(numeroDecimal) || numeroDecimal < 0) {
    console.log("Por favor, ingrese un número decimal válido.");
} else {
    // Llamar a la función y mostrar el resultado
    let resultadoBinario = decimalABinario(numeroDecimal);
    console.log(`El número binario del decimal ingresado (${numeroDecimal}) es: ${resultadoBinario}`);
}
