function mostrar()
{
var numero1;
var numero2;
var resultado;

numero1=prompt("ingrese numero 1");
numero2=prompt("ingrese numero 2");
numero1=parseInt(numero1);
numero2=parseInt(numero2);

if(numero1==numero2){
    resultado= numero1+""+numero2;
}else if(numero1>numero2){

    

    resultado = numero1-numero2;
    resultado=  resultado;

    if(resultado > 10){
        resultado="la resta es" +resultado+" y supero el 10";
    }else{
        resultado="la resta es" +resultado
    }
}else if(numero1<numero2){
    resultado=numero2+numero1;
    resultado= "la suma es"+ resultado;
}

alert(resultado);
}
