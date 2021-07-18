
let res=false;
class drinks{
    constructor(nome,estoque,valor,vendas){
        this.nome=nome;
        this.estoque=estoque;
        this.valor=valor;
        this.vendas=vendas;
    }
    get getNome(){
        return this.nome;
    }
    set setNome(nome){
        this.nome=nome;
    }
    get getEstoque(){
        return this.estoque;
    }
    set setEstoque(estoque){
        this.estoque=estoque;
    }
    get getValor(){
        return this.valor;
    }
    set setValor(valor){
        this.valor=valor;
    }
    get getVendas(){
        return this.vendas;
    }
    set setVendas(vendas){
        this.vendas=vendas;
    }
    remove(){
        this.estoque--;
        this.vendas++;
        return true;
    }
    missing(money,val){
        money=prompt(`Insira R$${val} para completar o valor`);
        if(money>=1){
            if(money==val){
                res=this.remove();
                $('#val').html(`Valor exato! Retire a bebida`);
            }
            if(money>val){
                val=money-val;
                $('#val').html(`Seu troco é de R$${val}! Retire a bebida`);
                res=this.remove();
            }
            if(money<val){
               val= val-money;
                this.missing(money,val);
    
            }
        }else{
            this.missing(money,val);
        }
        
    }
    
};

 let soda = new drinks('Soda',10,10,0);
 $('#sodaE').html(` ${soda.estoque} un.`);
 $('#sodaV').html(`${soda.vendas} un.`);
 let juice =new drinks('juice',9,8,0);
 $('#juiceE').html(`${juice.estoque} un.`);
 $('#juiceV').html(`${juice.vendas} un.`);
 let water = new drinks('water',10,6,0);
 $('#waterE').html(`${water.estoque} un.`);
 $('#waterV').html(`${water.vendas} un.`);

 $('select').append($('<option>', {
    value: soda.nome,
    text:`${soda.nome} - R$${soda.valor}`,
}));
$('select').append($('<option>', {
    value: juice.nome,
    text:`${juice.nome} - R$${juice.valor}`,
}));
$('select').append($('<option>', {
    value: water.nome,
    text:`${water.nome} - R$${water.valor} `,
}));


$('#my-form').submit(function(event){
    event.preventDefault();
    let money = parseFloat($('#valor').val());
    let drink = $('#drinks option:selected').val();
  
    switch(drink){
        case soda.nome:
            if(soda.estoque>0){
                if(money>=1){
                    val=money-soda.valor;
                    if(val==0){
                        $('#val').html(`Valor exato! Retire a bebida`);    
                        res=soda.remove();
                    }else{
                        if(val>0){
                            $('#val').html(`Seu troco é de R$${val}! Retire a bebida`);
                            res=soda.remove();       
                        }else{
                            val= val* -1;
                            money=0;
                            
                            $('#val').html(`Insira mais R$${val} para completar o valor` );
                            soda.missing(money,val);
                        }
                    }
                    if(res==true){
                        $('#sodaE').html(`${soda.estoque} un.`);
                        $('#sodaV').html(`${soda.vendas} un.`);
                       
                    }
                }else{
                    $('#val').html(`Valor ivalido`);
                }
               
            }else{
                $('#val').html(`Bebida esgotada` );
                alert("Bebida esgotada!");
            }
   
        break;

        case juice.nome:
            if(juice.estoque>0){
                if(money>=1){
                    val=money-juice.valor;
                    if(val==0){
                        $('#val').html(`Valor exato! Retire a bebida`);
                        res=juice.remove();
                    }else{
                        if(val>0){
                            $('#val').html(`Seu troco é de R$${val}! Retire a bebida`);
                            res=juice.remove();       
                        }else{
                            val= val* -1;
                            money=0;
                            $('#val').html(`Insira mais R$${val} para completar o valor` );
                            juice.missing(money,val);
                        }
                    }
                    if(res==true){
                        $('#juiceE').html(`${juice.estoque} un.`);
                        $('#juiceV').html(`${juice.vendas} un.`);
                        
                    }
                }else{
                    $('#val').html(`Valor ivalido`);
                }
            }else{
                $('#val').html(`Bebida esgotada` );
                alert("Bebida esgotada!");
            }
        break;
        case water.nome:
           if(water.estoque>0){
                if(money>=1){
                    val=money-water.valor;
                    if(val==0){
                        res=water.remove();
                        $('#val').html(`Valor exato. Retire a bebida!`);
                    }else{
                        if(val>0){
                            $('#val').html(`Seu troco é de R$${val}. Retire a bebida!`);
                            res=water.remove();
                        }else{
                            val= val* -1;
                            $('#val').html(`Insira mais R$${val} para completar o valor.` );
                            water.missing(money,val);
                        }
                    }
                    if(res==true){
                        $('#waterE').html(`${water.estoque} un.`);
                        $('#waterV').html(`${water.vendas} un.`);
                    }
                }else{
                    $('#val').html(`Valor ivalido`);
                }
            
           }else{
                $('#val').html(`Bebida esgotada` );
                alert("Bebida esgotada!");
           }
        break;

    }
    
});