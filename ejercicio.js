let num1=prompt("Escriba el primer numero");
let num2=prompt("Escriba el segundo numero");
let num3=prompt("Escriba el tercer numero");

console.log("Tu primer numero es " + num1);
console.log("Tu segundo numero es " + num2);
console.log("Tu tercer numero es " + num3);

let numbers = [parseFloat(num1),parseFloat(num2),parseFloat(num3)];

numbers.sort(function (a, b) {
    return a - b;
  }
);
console.log("Los numeros ordenados de mayor a menor son " + numbers);
console.log("Los numeros ordenados de menor a mayor son " + numbers.reverse());

let repetido =[];
    for (let i = 0; i < numbers.length; i++){
        if(repetido.includes(numbers[i])){
            console.log("El numero " + numbers[i] + " se repite");
        } else{
            repetido.push(numbers[i]);
        };
    };