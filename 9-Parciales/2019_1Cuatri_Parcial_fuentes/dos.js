function mostrar()
{
  
var PromedioDePeso;
var nombre1;
var nombre2;
var peso1;
var peso2;
var PesoTotal;
var intentarOtraVez
do{

    do{
        nombre1=prompt("ingrese el primer nombre");
        do{
            peso1=prompt("ingrese su peso");
            peso1= parseInt(peso1);
        }while(isNaN(peso1)||peso1<0);
    }while(typeof( nombre1) != "string");


    do{
        nombre2=prompt("ingrese el segundo nombre");
        do{
            peso2=prompt("ingrese su peso");
            peso2= parseInt(peso2);
        }while(isNaN(peso2) || peso2<0);
    }while(typeof( nombre2) != "string");


    
   intentarOtraVez= confirm("intentar otra vez?")
}while(intentarOtraVez);

PesoTotal= peso1+peso2;

PromedioDePeso=PesoTotal / 2;

alert("ustedes se llaman = "+nombre1+" y "+nombre2+
" y pesan = "+peso1+" y "+peso2+". que sumados son "+
PesoTotal+" y en promedio es = "+ PromedioDePeso );






}
