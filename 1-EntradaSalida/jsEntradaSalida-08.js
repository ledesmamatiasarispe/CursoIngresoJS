/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	 var divisor;
	 var dividendo;
	 var resto;

	 divisor = txtIdNumeroDivisor.value;
	 dividendo = txtIdNumeroDividendo.value;

	 divisor = parseInt(divisor);
	 dividendo = parseInt(dividendo);

	 resto = dividendo % divisor;

	 alert("el resto es =" + resto );

}
