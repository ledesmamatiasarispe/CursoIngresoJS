/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)
repetir hasta que la clave correcta sea ingresada*/
function mostrar()
{
	var claveIngresada;
	var contador;
	contador = 0
	claveIngresada = prompt("ingrese el número clave.");
	while( contador >= 0 ){
		contador++;
		claveIngresada = prompt("Error! Ingrese La Clave Nuevamente");
		if(claveIngresada == "utn750"){
			break;

		}else if ( contador == 3){
		alert("Error ! ingreso la clave incorrecta mas 3 veces intente nuevamente");
		break;
		}
}
	
}//FIN DE LA FUNCIÓN
