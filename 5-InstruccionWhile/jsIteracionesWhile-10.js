/*
Al presionar el botón pedir  números hasta que el usuario quiera, mostrar:
1-Suma de los negativos.4-Cantidad de negativos.8-Promedios de negativos
2-Suma de los positivos.3-Cantidad de positivos.7-Promedio de positivos.

5-Cantidad de ceros.
6-Cantidad de números pares.


.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var numerosIngresados;
	var condicionWhile = true;
	var acumuladorDeNegativos;
	var acumumuladorPositivos;
	var contadorNegativos;
	var contadorPositivos;
	var promedioNegativos;
	var promedioPositivos;
	var contadorCeros;
	var contadorPares;
	var diferenciasPositivosNegativos

	while(condicionWhile){
		numerosIngresados  =	prompt("ingrese numeros");
		numerosIngresados  =	parseInt(numerosIngresados);

		if (isNaN(numerosIngresados)){
			
			condicionWhile = confirm("Error!.¿Quiere usted seguir ingresando numeros?");
			continue;
		}





	}

}//FIN DE LA FUNCIÓN