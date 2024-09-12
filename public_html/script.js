// Función regular para determinar si un número es par o impar.
function checkEvenOddRegular(number) {
    if (number % 2 === 0) {
        return `${number} es un número par.`;
    } else {
        return `${number} es un número impar.`;
    }
}

const checkEvenOddArrow = (number) => {
    if (number % 2 === 0) {
        return `${number} es un número par.`;
    } else {
        return `${number} es un número impar.`;
    }
}; 


// Función para insertar el botón.
function checkNumber() {
    const number = document.getElementById('numberInput').value; // Obtiener el valor ingresado
    const resultText = checkEvenOddArrow(Number(number)); // Función flecha usada
    document.getElementById('result').textContent = resultText; // Muestra el resultado en la página web
}
