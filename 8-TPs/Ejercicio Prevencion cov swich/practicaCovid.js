/**
 * 
 * Arispe Ledesma Matas /////////////////////////////////////////////////////////////////////////
 Se necesita informar dependiendo las opciones llenadas en el formulario quien puede movilizarse o resguardarse.
           * Si es la residencia es de buenos aires consultar por confirm si pertenece a la zona de amba. 
           * Si la persona es mayor de 60, no importa la profesión que tenga, el mensaje a mostrar es : No puede transitar, es persona de riesgo quédese en su casa.
           * Si la persona es Médico y menor de 25 : Usted es muy joven para ser médico
            *Si la persona es enfermero o almacenero entre 27 y 60 años: Usted puede transitar
            *Si la persona es entrenador, profesor, abogado o programador y reside en la zona de amba y tiene entre 20 y 60 años, el mensaje es : Solo salí para compras esenciales.
            Si la persona es menor de 15 años, no importa donde resida, y tiene una profesión distinta a ser alumno: Es muy chico para tener una profesión
            Si la persona es menor de 15 años, no importa donde resida, y es alumno: Respeta y colabora en tu casa, ya pronto volveremos a la escuela
            Si la persona es mayor de 15 años y reside en otro lugar q no sea el amba: Usa el barbijo para transitar
 */
function probarEjercicio(){
	var edad;
	var profecion;
	var recidencia;
	var perteneceAAMBA;
	edad = edadTxtId.value;
	profecion = profesionSelectId.value;
	recidencia = residenciaSelectId.value;
	//Si es la residencia es de buenos aires consultar por confirm si pertenece a la zona de amba. 
	
	switch(edad) {
		case "3": 
			console.log("activo");
			break;
		case "2":
			console.log("activo2");
			break;
		case "1": 
			 console.log("activo3");
			break;
	}
}