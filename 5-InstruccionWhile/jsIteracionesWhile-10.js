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
	var numeroIngresado;
	var condicionWhile = true;
	var acumuladorDeNegativos = 0 ;
	var acumumuladorPositivos = 0 ;
	var contadorNegativos = 0 ;
	var contadorPositivos = 0 ;
	var promedioNegativos = 0 ;
	var promedioPositivos = 0 ;
	var contadorCeros = 0 ;
	var contadorPares = 0 ;
	var diferenciaEntrePositivosNegativos = 0 ;

	while(condicionWhile){
		numeroIngresado  =	prompt("ingrese numeros");
		numeroIngresado  =	parseInt(numeroIngresado);

		if (isNaN(numeroIngresado)){
			
			condicionWhile = confirm("Error!.¿Quiere usted seguir ingresando numeros?");
			continue;
		}
		if(numeroIngresado > 0){
			acumumuladorPositivos +=numeroIngresado ;
			contadorPositivos++;

		}else if(numeroIngresado < 0 ){
			acumuladorDeNegativos += numeroIngresado;
			contadorNegativos++;
		}else{
			contadorCeros++;
		}
		if(numeroIngresado % 2 == 0){
			contadorPares++;
		}
	console.log("acumuladorDeNegativos   "+ acumuladorDeNegativos);
	console.log("acumumuladorPositivos   "+ acumumuladorPositivos);
	console.log("contadorNegativos  "+ contadorNegativos);
	console.log("contadorPositivos   "+ contadorPositivos);
	console.log("contadorCeros  "+ contadorCeros);
	console.log("contadorPares  "+ contadorPares);
	}
	promedioNegativos= acumuladorDeNegativos / contadorNegativos;
	promedioPositivos= acumumuladorPositivos / contadorPositivos;
	diferenciaEntrePositivosNegativos= acumumuladorPositivos + acumuladorDeNegativos;

	document.write("suma de los negativos = "+acumuladorDeNegativos+
	" suma de los positivos= "+acumumuladorPositivos+
	" cantidad de los negativos = "+ contadorNegativos+ 
	" cantidad de positivos = "+ contadorPositivos +
	" cantidad de ceros = "+ contadorCeros+
	" cantidad de numeros pares = "+contadorPares+
	" promedio de negarivos = "+ promedioNegativos+
	" promedio de positivos = " + promedioPositivos+ 
	" diferencia entre positivos y negativos = "+ diferenciaEntrePositivosNegativos);

}//FIN DE LA FUNCIÓN