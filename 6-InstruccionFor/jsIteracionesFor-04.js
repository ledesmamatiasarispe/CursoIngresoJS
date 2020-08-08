function mostrar()
{
	var numeroIngresado;
	do{
	numeroIngresado = prompt("ingrese un numero mayor a 1");
	numeroIngresado =  parseInt(numeroIngresado);
	}while(numeroIngresado <= 0 || isNaN(numeroIngresado));

	for(var i = 0; i < numeroIngresado; i++){
		if(numeroIngresado%2 == 0 ){
			document.write( "<br>  numero par"+i)
		}
	}
	


}//FIN DE LA FUNCIÓN