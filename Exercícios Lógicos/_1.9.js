function TransformarEmMatriz(String){
    let elemetos;
   matriz= new Array( elemetos);
   let i=0;
   String=String.replace(/[^0-9]/g,'');
   console.log(String);
   while(i<(String.length)){
        new Array();
        for(let j=0;j<=1;j++){
            console.log(String[i]);
            Array[j]=String[i]; 
            i++;
        }
        matriz.push(Array((String[i-2]),(String[i-1])));

   } 
      console.log(matriz);
}
TransformarEmMatriz("1,2,3,4,5,6");
