// function mostrar()
// {
// 	var max; // variables
// 	var min;
// 	var calificacion;

// 	max = 11; // seteo los valores
// 	min = 0;
	
// 	calificacion = Math.floor(Math.random() * (max - min)) + min;
// 	 //Genero el número RANDOM entre 1 y 10 
	
// 	console.log(calificacion); //para ver que numero da

// 	if(calificacion>3 ){
// 		if (calificacion>8){
// 			alert("exelente")
// 		}else{

// 		}
// 	}
	  
// }//FIN DE LA FUNCIÓN


// // if (calificacion > 8)
// // {
// // 	alert ("su calificacion es exelente");
// // }
// // if (calificacion > 3 && calificacion < 9)
// // {
// // 	alert("usted aprobó");
// // }
// // if(calificacion<4)
// // {
// // 	alert("A diciembreeeeeeeeeeeeeeeeeee");
// // };  



// *calcular dos numeros Random	entre 1 y 51
// *si son pares multiplicarlos 
// si son impares restarlos 
// si alguno es divisible por 5 elevarlo al cubo 
// si no ocurrio ningun caso mostrar "no paso nada"
function mostrar(){

var numero1;//creacion de variables
var numero2;
var esNumero1par;
var esNumero2par;
var max;
var min;
var esNumero1DivisiblePor5;
var esNumero2DivisiblePor5;
var numero1AlCubo;
var numero2AlCubo;
var respuestaDeMultiplicacionOResta;//fin
var respuestaParaAlertDeNumerosAlCubo;

max =52;//maximo y minimo de random number
min =1 ;

numero1 = calificacion = Math.floor(Math.random() * (max - min)) + min;//generador de numeros random
numero2 = calificacion = Math.floor(Math.random() * (max - min)) + min;

esNumero1par = numero1 % 2 == 0 ; //veo si son pares
esNumero2par = numero2 % 2 == 0 ;
esNumero1DivisiblePor5= numero1 % 5 == 0 ;//veo si son divisibles por 5
esNumero2DivisiblePor5= numero2 % 5 == 0 ;

console.log(numero1);//para ver que numeros salen
console.log(numero2);


if((esNumero1par != esNumero2par)&& esNumero1DivisiblePor5 == false && esNumero2DivisiblePor5 ==false){//caso  que no pasa nada

	   alert("los numeros son "+numero1 +" y "+numero2 +" pero no paso nada")
	   	
	}else if (((esNumero2DivisiblePor5 || esNumero1DivisiblePor5) != false)&&(esNumero1par != esNumero2par)){//solo hay multiplos de 5
			if (( esNumero1DivisiblePor5==true && esNumero2DivisiblePor5 == true)){//los dos son divisibles por 5
				
				numero1AlCubo = Math.pow(numero1,3);

				numero2AlCubo = Math.pow(numero2,3);

				alert("los numeros = "+numero1+" y " +numero2+" son divisibles por 5 y su valor al cubo es "+numero1AlCubo+" y "+numero2AlCubo);

			}else if (esNumero2DivisiblePor5==true){//numero2 es divisible por 5
				numero2AlCubo = Math.pow(numero2,3);

				alert("el numero 2 "+numero2+" es divisible por 5 y su valor al cubo es "+numero2AlCubo);

			}else{ //solo 1 es divisible por5
				numero1AlCubo = Math.pow(numero1,3);

				alert("el numero 1 = "+numero1+" es divisible por 5 y su valor al cubo es "+ numero1AlCubo);
			}
	}else if ((esNumero1par == esNumero2par) && (esNumero2DivisiblePor5 || esNumero1DivisiblePor5) == false){//caso de solo hay pares e impares	
			if(esNumero2par&&esNumero1par==true){//caso de pares
				
				respuestaDeMultiplicacionOResta=numero1*numero2;
				alert("la multiplicacion de los numeros "+ numero1 + " y " + numero2+" pares es "+respuestaDeMultiplicacionOResta);

			}else{//caso de impares

				respuestaDeMultiplicacionOResta=numero1-numero2;
				alert("la resta de los numeros impares "+ numero1 + " y " + numero2+ " es "+respuestaDeMultiplicacionOResta);
	
			}
				
	}else {// solo queda el caso en que hay pares e impares y divisibles por 5 al mismo tiempo
			
			if (( esNumero1DivisiblePor5==true && esNumero2DivisiblePor5 == true)){//los dos son divisibles por 5
					
				numero1AlCubo = Math.pow(numero1,3);//guardo el valor1
				numero2AlCubo = Math.pow(numero2,3);//guardo el valor2

				respuestaParaAlertDeNumerosAlCubo = (" y sus valores al cubo son = " +numero1AlCubo +"y"+numero2AlCubo);

			}else if (esNumero2DivisiblePor5==true){//numero2 es divisible
				
				numero2AlCubo = Math.pow(numero2,3);//guardo el valor2
				respuestaParaAlertDeNumerosAlCubo = (" y su valor de 2 al cubo es = "+numero2AlCubo);

			}else{//numero1 es divisible por 5 
				 
				numero1AlCubo = Math.pow(numero1,3);//guardo el valor1
				respuestaParaAlertDeNumerosAlCubo = (" y el valor de 1 al cubo es = " +numero1AlCubo);
					
			}if(esNumero2par&&esNumero1par==true){//caso de pares
			
				respuestaDeMultiplicacionOResta=numero1*numero2;
				alert("la multiplicacion de los numeros "+ numero1 + " y " + numero2+" pares es "+respuestaDeMultiplicacionOResta+ respuestaParaAlertDeNumerosAlCubo );
					
			}else{

				respuestaDeMultiplicacionOResta=numero1-numero2;
				alert("la resta de los numeros impares "+ numero1 + " y " + numero2+ " es "+respuestaDeMultiplicacionOResta+ respuestaParaAlertDeNumerosAlCubo);
			
			}
		}				







}//fin de la function