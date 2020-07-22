function mostrar()
{
	var edad
	var estadocivil

	edad = txtIdEdad.value;	
	estadocivil = estadoCivil.value;

	if (   !(estadocivil == "Soltero") && edad < 18)
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
}//FIN DE LA FUNCIÓN