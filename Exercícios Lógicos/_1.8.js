
function BuscarPessoa(vetor, string){
    let resp='';
   for(i=0;i<vetor.length;i++){
    if(vetor[i].match(string)){
        resp=resp+' '+vetor[i];

      }
   
   }
   console.log(resp);
}

let vetor = ["John Doe",
"Jane Doe",
"Alice Jones",
"Bobby Louis",
"Lisa Romero"];
BuscarPessoa(vetor, "Doe");
