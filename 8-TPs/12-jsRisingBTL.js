/*
Arispe Matias
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	 var estadoCivilIngresado;
	 var respuestaEstadoCivilIngresado;
	 var estadoCivilValidacion = true;
	 var sueldoBruto;
	 var numeroDeLegajo;
	 var nacionalidad;
	 var respuestaNacionalidad;
	 var validacionNacionalidad = true;


	while( !(edadIngresada > 17 && edadIngresada < 91)){
		edadIngresada = prompt("ingrese su edad.");
		edadIngresada = parseInt(edadIngresada);

		if(isNaN(edadIngresada)){
			confirm("Error!, el valor ingresado no es un numero");
			continue;
		}
	}
	txtIdEdad.value =edadIngresada;

	while(!(sexoIngresado == "M" || sexoIngresado =="F" )){
		sexoIngresado = prompt(" “M” para masculino y “F” para femenino");
	}
	txtIdSexo.value = sexoIngresado;

	while(estadoCivilValidacion){
		estadoCivilIngresado = prompt("ingrese = 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
		switch(estadoCivilIngresado){
			case 1: 
				respuestaEstadoCivilIngresado = "Soltero";
				break;
			case 2:
				respuestaEstadoCivilIngresado = "Casado";
				break;
			case 3: 
				respuestaEstadoCivilIngresado = "Divorciado";
				break;
			case 4:
				respuestaEstadoCivilIngresado = "Viudo";
				break;
			default:
				confirm("Error!. ingrese un numero del 1 al 4");
				continue;
		}
		estadoCivilValidacion= false;
		txtIdEstadoCivil.value = respuestaEstadoCivilIngresado;
	}
	do{
		sueldoBruto = prompt("ingrese su sueldo en bruto, tiene que ser mayor a $8000", " 000");
		sueldoBruto = parseInt(sueldoBruto);
		if(isNaN(sueldoBruto)){
			confirm("Error!.ingrese un valor valido");
			continue
		}
	}while(sueldoBruto < 8000 );
	txtIdSueldo.value =sueldoBruto;

	do{
		numeroDeLegajo = prompt("ingrese su numero de legajo");
		numeroDeLegajo = parseInt(numeroDeLegajo);
		if(isNaN(numeroDeLegajo)){
			confirm("Error!.ingrese un valor valido");
			continue
		}
	}while(numeroDeLegajo < 1000 || numeroDeLegajo > 9999 );
	txtIdLegajo.value = numeroDeLegajo;

	while(validacionNacionalidad){
	 	nacionalidad =	prompt(" Ingrese su Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
		switch (nacionalidad){
			case "A":
			case "a":
				respuestaNacionalidad = " argentina ";
				break;
			case "E":
			case "e":
				respuestaNacionalidad= "extranjera ";
				break;
			case "N":
			case "n":
				respuestaNacionalidad = "nacionalizada";
				break;
			default:
				confirm("Error!. intente nuevamente");
				continue;
		}
		validacionNacionalidad=false;
		txtIdNacionalidad.value = respuestaNacionalidad;
	}
}
