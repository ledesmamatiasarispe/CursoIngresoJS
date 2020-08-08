/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;

contadorIntentos = 0;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto = Math.floor(Math.random() * (100 - 1) + 1);
	console.log(numeroSecreto);

}

function verificar()
{	
	numeroIngresado = txtIdNumero.value;
	numeroIngresado = parseInt(numeroIngresado);
	contadorIntentos++ ;
	txtIdIntentos.value = contadorIntentos;
	if(numeroIngresado > numeroSecreto){
		confirm("el numero secreto es mas pequeño");
	}else if(numeroIngresado < numeroSecreto){
		confirm("el numero secreto es mas grande");
	}else if(numeroIngresado == numeroSecreto) {
		alert("usted ha ganado y solo en "+contadorIntentos+"intentos");
	}

}