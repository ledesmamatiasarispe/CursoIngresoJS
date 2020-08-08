function mostrar()
{
var numeroIngresado;
var contadorDeDivisores

do{
	numeroIngresado=prompt("ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);
}while(numeroIngresado < 1 ||isNaN(numeroIngresado))
	
for( var i = 0; i < numeroIngresado ; i ++){
	if(numeroIngresado % i == 0){
		document.write( "<br>"+i+" es divisor de "+numeroIngresado ) 
		contadorDeDivisores++;
	}

}
document.write( "<br>el numero tiene"+contadorDeDivisores+"divisores" )
}//FIN DE LA FUNCIÓN