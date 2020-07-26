/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
     var gradosCentigrados;
     var gradosFarenheit;
     
     gradosFarenheit = txtIdTemperatura.value;
     gradosFarenheit = parseFloat(gradosFarenheit);
     gradosCentigrados = (gradosFarenheit -32)*(5/9);

     txtIdTemperatura.value =(gradosFarenheit+"° farenheit son " +gradosCentigrados+"° grados centigrados");
}

function CentigradosFahrenheit () 
{
	 var gradosFarenheit;
     var gradosCentigrados;
     
     gradosCentigrados = txtIdTemperatura.value;
     gradosCentigrados = parseFloat(gradosCentigrados);
     gradosFarenheit = (gradosCentigrados * (9/5))+32;

     txtIdTemperatura.value = (gradosCentigrados+"° grados centigrados son "+ gradosFarenheit+"° farenheit");
}
