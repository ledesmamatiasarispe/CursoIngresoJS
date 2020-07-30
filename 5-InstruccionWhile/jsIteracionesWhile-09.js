/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero=true;
	respuesta=true;
	while(respuesta){
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero==true){
			banderaDelPrimero = false;
			
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;

			console.log("maximo "+numeroMaximo);
			console.log("minimo "+numeroMinimo);
		} 
		if(isNaN(numeroIngresado)){
			confirm("Error!.ingrese el numero nuevamente");
		}else{
			if( numeroIngresado < numeroMinimo){
				numeroMinimo = numeroIngresado;
				console.log("maximo "+ numeroMaximo);
				console.log("minimo "+numeroMinimo);
			}else if(numeroIngresado > numeroMaximo){
				numeroMaximo = numeroIngresado;
				console.log("maximo "+ numeroMaximo);
				console.log("minimo "+numeroMinimo);
			}
		}
		
		respuesta=confirm("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN