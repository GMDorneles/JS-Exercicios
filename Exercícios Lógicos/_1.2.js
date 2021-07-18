function CalcularPremio(premio, tipo, fator){
    let res=0;
    if(fator!=null && fator>0){
        tipo=fator;
        res=premio*tipo;
        console.log('Premiação:'+res);
    }else{
        if(fator==null){
            switch (tipo){
                case "basic":
                    res=premio*1;
                break;
                case "vip":
                    res=premio*1.2;
                break;
                case "premium":
                    res=premio*1.5;
                break;
                case "deluxe":
                    res=premio*1.8;
                break;
                case "special":
                    res=premio*2;
                break;
                default:
                    res='Tipo de premiação inválido infrome novamente';
            }
            console.log('Premiação:'+res);

        }else{
            console.log('valor invalido');
        }
    }

}
CalcularPremio(10,"vip",5);