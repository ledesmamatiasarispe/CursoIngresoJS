function mostrar()
{
	var edad = txtIdEdad.value // tomo la edad

	 if (edad > 12)
	{
		 if(edad < 18)
		{
			console.log("adolecente")
		}
		else
		{
			console.log("adulto") 
		}
			
	}
	else
	{
		console.log("niño")
	}
}//FIN DE LA FUNCIÓN