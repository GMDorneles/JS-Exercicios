function ContarNumerosPrimos(num){
    let divN=2;
    let quant=0;
  while(divN<=num){
      let Nprimo=true;
       for(let i = 2; i <divN; i++){
            if( divN % i== 0) {
                Nprimo=false;
                i=divN;
            }
        }
        if(Nprimo==true){
            quant++;
        }
        divN++;
    }
    console.log("numeros primos: "+quant);
}
ContarNumerosPrimos(20);
