/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
	 var numeroDos;
     var respuesta;

     numeroUno= txtIdNumeroUno.value;
	 numeroDos= txtIdNumeroDos.value;
	 
     numeroUno=parseInt(numeroUno);
     numeroDos=parseInt(numeroDos);

	 respuesta= numeroUno + numeroDos;

	 alert("la suma es= "+respuesta)
}

function restar()
{
     var numeroDos;
	 var respuesta;

	 numeroUno= txtIdNumeroUno.value;
	 numeroDos= txtIdNumeroDos.value;

	 numeroUno=parseInt(numeroUno);
	 numeroDos=parseInt(numeroDos);

	 respuesta= numeroUno - numeroDos;

	 alert("la suma es= "+respuesta)
}

function multiplicar()
{ 
	 var numeroDos;
	 var respuesta;

	 numeroUno= txtIdNumeroUno.value;
	 numeroDos= txtIdNumeroDos.value;

	 numeroUno=parseInt(numeroUno);
	 numeroDos=parseInt(numeroDos);

	 respuesta= numeroUno * numeroDos;

	 alert("la suma es= "+respuesta)
}

function dividir()
{
	 var numeroDos;
	 var respuesta;

	 numeroUno= txtIdNumeroUno.value;
	  numeroDos= txtIdNumeroDos.value;
	  
 	 numeroUno=parseInt(numeroUno);
	 numeroDos=parseInt(numeroDos);

	 respuesta= numeroUno / numeroDos;
	 
	 alert("la suma es= "+respuesta)
} 

