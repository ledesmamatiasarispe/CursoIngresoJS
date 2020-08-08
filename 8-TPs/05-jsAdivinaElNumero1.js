/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
  contadorIntentos = 0
  var max; 
  var min;
    max =101;
    min =1 ;
    
    numeroSecreto = Math.floor(Math.random() * (max - min)) + min;//generador de numeros random

  console.log(numeroSecreto);
}

function verificar()
{
  var numeroIngresado;

  numeroIngresado = txtIdNumero.value;
  if(numeroIngresado<0 || numeroIngresado>100){
    alert("vos son boludo man? Es entre 0 y 100.")

  }else if (numeroIngresado > numeroSecreto){
    alert("el numero secreto es mas pequeño");
  }else if(numeroIngresado < numeroSecreto){
    alert("el numero secreto es mas grande");
  }else{
    alert("Usted es un ganador!!! y en solo en "+contadorIntentos+" intentos")
   window.open( "https://krisdice.wordpress.com/2018/04/06/felicidades-has-ganado-un-iphone-x/" );
  }
	
  contadorIntentos++;
  console.log(contadorIntentos);
  txtIdIntentos.value = contadorIntentos;
}

