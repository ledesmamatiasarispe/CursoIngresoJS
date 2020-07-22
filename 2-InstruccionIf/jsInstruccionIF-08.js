function mostrar()
{
	var edad
	var estadocivil

	edad = txtIdEdad.value;	
	estadocivil = estadoCivil.value;

	if (estadocivil == "Soltero" && edad > 17)
	{
		alert('Es soltero y no es menor.');
	}

}//FIN DE LA FUNCIÓN