function TransformarEmMatriz(String){
    let elemetos;
    let k=0;
   matriz= new Array( elemetos);
   let i=0;
   while(i<(String.length)){
        let arr=new Array(3);
        for(let j=0;j<=2||i<(String.length);j++){
            arr[j]=String[i];
            i++;
        }
        i++;
        matriz[k]=arr;
   } 
   matriz.forEach(item =>{
        console.log(item);

    });
}
TransformarEmMatriz("1,2,3,4,5,6");