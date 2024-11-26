let n = parseInt(prompt("Ingrese el número decimal para convertir en binario:")); // Entrada
let bin = ""; // Inicialización del binario

while (n > 0) { // Bucle hasta que n sea 0
    bin = (n % 2) + bin; // Concatenar el residuo al inicio de bin
    n = Math.floor(n / 2); // Actualizar n con la división entera entre 2
}

console.log(`El número binario es: ${bin || "0"}`); // Mostrar el resultado


