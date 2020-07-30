/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumuladorPositivos=0;
	acumuladorNegativos=1
	respuesta=true;


while (respuesta == true){	

	numeroIngresado = prompt("ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	if(isNaN(numeroIngresado)){
		respuesta = confirm("quiere seguir ingresando numeros?");
		continue;
	}
	if(numeroIngresado < 0){
		acumuladorNegativos  *= numeroIngresado;
		
	}else if (numeroIngresado >= 0){
		acumuladorPositivos += numeroIngresado;
	}
}
	txtIdSuma.value = acumuladorPositivos ;
	txtIdProducto.value = acumuladorNegativos;

}//FIN DE LA FUNCIÓN