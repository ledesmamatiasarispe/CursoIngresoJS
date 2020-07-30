function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch (mesDelAño){
		case "Julio":
		case "Agosto":  
			mesDelAño = "Abrigate que hace frio.";
			break;		
		case "Septiembre":
			 mesDelAño ="Ya pasamos el frio, ahora calor!!!.";
		 	break;
		 default :
		 mesDelAño = "Falta para el invierno.";
	
	}
	alert(mesDelAño);




}//FIN DE LA FUNCIÓN