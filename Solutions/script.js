//JAVASCRIPT- Logica y algoritmos
//Ejercicio 1: Invertir una cadena de texto
function invertirCadena(cadena) {
  let cadenaInvertida = "";
  return cadena.split("").reverse().join("");
}
console.log("Primera Opción:" + invertirCadena("Hola Mundo")); // Output: 'odnuM aloH'

function invertirCadena2() {
  let cadena = "Hola a todos";
  return cadena.split("").reverse().join("");
}
console.log("Segunda Opción: " + invertirCadena2()); // Output: 'sodot a aloH'

//Ejercicio 2: verificar si una palabra es un palíndromo
const esPalindromo = (palabra) => {
  const palabraLimpia = palabra.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Eliminar espacios y caracteres especiales, y convertir a mayúsculas. En caso de utilizar lowerCase, las letras a z deben ir en minúscula.
  const palabraInvertida = palabraLimpia.split("").reverse().join(""); // Invertir la cadena
  return palabraLimpia === palabraInvertida;
};
console.log(esPalindromo("Anita lava la tina")); // Output: true
console.log(esPalindromo("Hola michi")); // Output: false

/* tener en cuenta que: "HOLA".split('') 
// Resultado: ['H', 'O', 'L', 'A']
"HOLA".split('').reverse()
// Resultado: ['A', 'L', 'O', 'H']
"HOLA".split('').reverse().join('')
// Resultado: 'ALOH'*/

//Ejercicio 3: FizzBuzz (números divisibles por 3 y 5)
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
fizzBuzz(45);

//Ejercicio 4: Calcular el factorial de un número
/*Es decir, el factorial multiplica el número por todos los enteros positivos menores que él.

🔹 Ejemplos
n	n!
0	1
1	1
2	2 × 1 = 2
3	3 × 2 × 1 = 6
4	4 × 3 × 2 × 1 = 24
5	5 × 4 × 3 × 2 × 1 = 120
*/
const factorial = (number) => {
  if (number < 0)
    return null; // El factorial no está definido para números negativos
  else if (number === 0) return 1; // El factorial de 0 es 1
  let resultado = 1;
  for (let i = 1; i <= number; i++) {
    resultado *= i; // Multiplica resultado por i en cada iteración
  }
  return resultado;
};
console.log("ejercicio factorial " + factorial(5)); // Output: 120

//Ejercicio 5: Encontrar el número más grande en un array

const encontrarMaximo = (numeros) => {
  if (numeros.length === 0) return null;
  return Math.max(...numeros); // El operador spread (...) descompone el array en elementos individuales
};
console.log(
  "ejercicio encontrar el Número Máximo " + encontrarMaximo([3, 5, 7, 2, 8])
); // Output: 8
console.log(encontrarMaximo([])); // Output: null
