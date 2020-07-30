Enunciado:
/* Arispe Matias
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch(mesDelAño){
		case "Enero":
			mesDelAño = "que comiences bien el año!!!.";
			break;
		case "Marzo":
			 mesDelAño = "a clases!!!";
			break;
		case "julio":
			 mesDelAño = "se vienen las vacaciones!!!"
			break;
		case "Diciembre":
			 mesDelAño = "Felices fiestas!!!";
			break;
		default: 
			mesDelAño= "mes aburrido :("

	}
	alert(mesDelAño);

}//FIN DE LA FUNCIÓN