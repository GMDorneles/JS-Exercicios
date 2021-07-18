function ObterElementosFaltantes(vetor1, vetor2){
    let tem1=0;
    let tem2=0;
    let n=0;
    let p=0;
    let vetor3=[];
    i=0;
    while(i<vetor1.length){
        for(let j=0;j<vetor2.length;j++){
            if(vetor1[i]==vetor2[j]){
                tem1=1;
            }  
            if(i==1){
                for(let k=0;k<vetor1.length;k++){
                    if(vetor1[k]==vetor2[j]){
                        tem2=1;
                    } 
                }
                if(tem2==0){
                    vetor3[n]=vetor2[j];
                    n++;
                    
                }
                tem2=0;

            } 
           
            

        }
        if(tem1==0){
            vetor3[n]=vetor1[i];
            n++
        }
        i++;
        tem1=0;
       
    }
    console.log('numeros faltantes:'+vetor3);

}
let vetor1=[1,2,3,4 ];
let vetor2=[2,3,4,5 ];
ObterElementosFaltantes(vetor1, vetor2);