//   Declara dos variables booleanas condicion1 y condicion2.
//   Pide al usuario que ingrese dos valores booleanos (true o false)
//   muestra el resultado de diversas combinaciones lógicas.

const prompt = require (`prompt-sync`)(); // esto hace que me muestre en consola.

let condicion1 = true;
let condicion2 = false;
//

// 1) pedir al usuario
let booleano1 = (prompt(
    "Ingrese el primer valor booleano: "  )) === "true"; 
    //esto significa que si es estrictamente igual a true lo guarda como valor boobleano true 
    // caso contrario es false

let booleano2 = (prompt(
    "Ingrese el segundo valor booleano: "  )) === "true"; 

//   muestra el resultado de diversas combinaciones lógicas.

console.log("_________Resultados logicos__________");
console.log("AND (&&): " + (condicion1 && condicion2));
console.log("OR (||): " + (condicion1 || condicion2));
console.log("NOT (!)): " + (!condicion1));
console.log("NOT (!)): " + (!condicion2));

//   muestra el resultado de diversas combinaciones lógicas.
// ahora con los del usuario

console.log("_________Resultados logicos__________");
console.log("AND (&&): " + (booleano1 && booleano2));
console.log("OR (||): " + (booleano1 || booleano2));
console.log("NOT (!)): " + (!booleano1));
console.log("NOT (!)): " + (!booleano2));