function mostrar()
{
var numeroIngresado;
var cantidadDeDivisores=0;
var numeroMaximoABuscar;

do{
	numeroMaximoABuscar = prompt("ingrese un numero");
	 numeroMaximoABuscar = parseInt(numeroMaximoABuscar);	
}while(isNaN(numeroMaximoABuscar));

	for(var p = 0; p < numeroMaximoABuscar; p++){
		numeroIngresado = p;
		cantidadDeDivisores = 0;
	 	// do{
	 	// 	numeroIngresado=prompt("ingrese un numero");
	 	//  	numeroIngresado = parseInt(numeroIngresado);	
	 	// }while(isNaN(numeroIngresado));
		  
	 	for(var i = 0; i<= numeroIngresado;i++ ){
	 	 	if(numeroIngresado % i == 0){
	 	 		cantidadDeDivisores++;
	 	 	}else if(cantidadDeDivisores>2){
	 	 		break;
	 	 	}
	 	}
	 	if(cantidadDeDivisores<= 2){
			 document.write("<br>"+numeroIngresado+" es primo <br> y tiene "+ cantidadDeDivisores +"divisores");
		 }else{
			document.write("<br>"+numeroIngresado+"  no es primo <br> y tiene "+ cantidadDeDivisores +"divisores");
		 }
		 setTimeout(() => {
			 
		 }, 1);
	}
		  

}//FIN DE LA FUNCIÓN