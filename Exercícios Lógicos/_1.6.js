function CalcularDiferencaData(data1, data2){
    let resultado1 =data1.substring(4)+"-"+data1.substr(2,2)+'-'+data1.substr(0,2);
    let resultado2 =data2.substring(4)+"-"+data2.substr(2,2)+'-'+data2.substr(0,2);
    resultado1= new Date(resultado1);
    resultado2= new Date(resultado2);
    console.log(resultado1);
    console.log(resultado2);
    const diff = Math.abs(resultado2.getTime() - resultado1.getTime()); 
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));     
    console.log('Se passaram ' + days + ' dias'); 
   
}
CalcularDiferencaData("10122020", "25122020");