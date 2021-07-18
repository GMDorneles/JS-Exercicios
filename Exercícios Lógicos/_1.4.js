function CalcularVogais(str){
    let string = str.toString();
    let count=0;
    for (let i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            count += 1;
        }
    }
    console.log('numero de vogais:'+count);

}
CalcularVogais("Luby Software");