function ObterElementosPares(vetor){
    let n;
    var vetor2= new Array(n);
    let j=0;
      for(let i=0;i<vetor.length;i++){
          if(vetor[i]%2==0){
              vetor2[j]=vetor[i];
              j++;
          }
      }
      console.log('Vetor Par:'+vetor2);
  }
  let vetor=[1,2,3,4,5];
  ObterElementosPares(vetor); 