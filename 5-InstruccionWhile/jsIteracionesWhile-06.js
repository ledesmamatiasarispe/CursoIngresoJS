function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	while(contador < 5){ 
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if(isNaN(numeroIngresado)){
			alert("Error! uno de sus valores ingresados no es un numero");
			break;
		}
		acumulador = acumulador + numeroIngresado;
		
		contador++ ;
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN