/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	var contador = 0;
	sexoIngresado = prompt("ingrese f ó m .");
	while(!(sexoIngresado == "m" || sexoIngresado == "f")){
		sexoIngresado = prompt("ingrese f ó m .");
		contador = contador ++;
	}


	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN