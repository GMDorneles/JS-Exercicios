function CalcularValorComDescontoFormatado(string, str){

    string=string.substring(string.indexOf("$")+1);
    string=string.replace('.', '');
    string=string.replace(',', '.');
    string=parseFloat(string);
    str= str.replace(/[^0-9]/g,'');
    let result= string-((string*str)/100);
    console.log('desconto:'+result);
}
CalcularValorComDescontoFormatado("R$ 6.800,00", "30%");