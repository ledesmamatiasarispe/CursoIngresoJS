function mostrar()
{

	var nombre;
	var edad;
	var genero;
	var estadoCivil;
	var temperaturaCorporal;
	var temperaturaCorporalMasAlta;
	var nacionalidadDelInfectado;
	var nacionalidad;
	var solteroYMayorDeEdad= 0;
	var mujeresViudasSolteras=0;
	var abuelosConCoronavirus=0;
	var mujeresCasadas=0;
	var acumuladorEdadMujeresCasadas=0;
	var promedioDeEdadDeMujeresCasadas;
	var seguirIngresando;
 do{
	nombre = prompt("ingrese su nombre");
	nacionalidad =prompt("ingrese su nacionalidad")
 
	do{
		edad = prompt("ingrese su edad");
		edad = parseInt(edad);
	}while(isNaN(edad||edad < 0 ));
	do{
		genero=prompt("ingrese su genero,","m o f");

	}while(genero != "m" && genero !="f");
	do{
		estadoCivil=prompt("ingrese su estadoCivil","soltero casado viudo");

	}while(estadoCivil!="soltero"&&estadoCivil!="casado"&&estadoCivil!="viudo");
	do{
		temperaturaCorporal  = prompt("ingrese su temperaturaCorporal ");
		temperaturaCorporal  = parseInt(temperaturaCorporal );
	}while(isNaN(temperaturaCorporal) || temperaturaCorporal  < 36 );
	
	//a) la Nacionalidad de la persona con mas temperatura.
	var i = 0
	if(i<2){
		i++;
		temperaturaCorporalMasAlta=temperaturaCorporal;
	}else if(temperaturaCorporal>temperaturaCorporalMasAlta){
		temperaturaCorporalMasAlta = temperaturaCorporal;
		nacionalidadDelInfectado=nacionalidad;
	}
	if(edad>17&&estadoCivil=="soltero"){
		solteroYMayorDeEdad++;
	}
	if(genero=="m"){
		if(estadoCivil=="viudo"||estadoCivil=="soltero"){
			mujeresViudasSolteras++;
		}else{
			mujeresCasadas++;
			acumuladorEdadMujeresCasadas += edad;
		}	
	}
	if(edad>60 && temperaturaCorporal>38){
		abuelosConCoronavirus++;
	}
	seguirIngresando = confirm("seguir ingresando datos")
 }while(seguirIngresando)
	promedioDeEdadDeMujeresCasadas= acumuladorEdadMujeresCasadas/mujeresCasadas;
document.write("<br>la nacionalidad de la persona con mas temperatura es = "+nacionalidadDelInfectado);

document.write("<br>hay = "+solteroYMayorDeEdad+" solteros y mayores de edad");

document.write("<br>hay = "+ mujeresViudasSolteras+" mujeres viudads y solteras");

document.write("<br>hay "+ abuelosConCoronavirus+ " mayores de edad con mas de 38°c");

document.write("<br>el promedio de edad entre las mujeres casadas es = "+ promedioDeEdadDeMujeresCasadas)



}
