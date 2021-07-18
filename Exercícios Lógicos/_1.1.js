function CalcularFatorial(num){
    let resultado = num;
    for (let i = 1; i < num; i++) {
        resultado *= i;
    }
console.log("Fatorial:"+resultado);
}
CalcularFatorial(5);