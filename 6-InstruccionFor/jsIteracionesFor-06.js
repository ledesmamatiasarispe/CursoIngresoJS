function mostrar()
{
	var numeroIngresado;
	var contadorPares = 0;
	do{
	numeroIngresado = prompt("ingrese un numero mayor a 1");
	numeroIngresado =  parseInt(numeroIngresado);
	}while(numeroIngresado <= 0 || isNaN(numeroIngresado));

	for(var i = 1; i <= numeroIngresado; i++){
		
		if(i%2 == 0 ){
			document.write( "<br>  numero par"+i)
			contadorPares++
		}
	}

	document.write("<br><br>hay "+contadorPares+" numeros pares")
	


}//FIN DE LA FUNCIÓN