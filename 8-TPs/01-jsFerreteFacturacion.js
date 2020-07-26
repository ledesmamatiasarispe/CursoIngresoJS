/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{  
    var producto1;
    var producto2;
    var producto3;
    var resultado;

    producto1 = txtIdPrecioUno.value;
    producto2 = txtIdPrecioDos.value;
    producto3 = txtIdPrecioTres.value;
    
    producto1 = parseInt(producto1);
    producto3 = parseInt(producto3);
    producto2 = parseInt(producto2);

    resultado= producto3+producto2+producto1;

    txtIdPrecioDos.value= ("la suma es =" + resultado);
    txtIdPrecioUno.value= ("los precios son = " +producto1+","+producto2+","+producto3);
    txtIdPrecioTres.value=("");

	
}
function Promedio () 
{  
    var producto1;
    var producto2;
    var producto3;
    var resultado;

    producto1 = txtIdPrecioUno.value;
    producto2 = txtIdPrecioDos.value;
    producto3 = txtIdPrecioTres.value;

    producto1 = parseInt(producto1);
    producto3 = parseInt(producto3);
    producto2 = parseInt(producto2);
   
    resultado= (producto3+producto2+producto1)/3 ;
    
    txtIdPrecioDos.value= ("El promedio es =" + resultado);
    txtIdPrecioUno.value= ("los precios son = " +producto1+","+producto2+","+producto3);
    txtIdPrecioTres.value=("");
	
}
function PrecioFinal () 
{  
    var producto1;
    var producto2;
    var producto3;
    var resultado;
    var iva = 21//"%" ;
    var resultadoConIva;

    producto1 = txtIdPrecioUno.value;
    producto2 = txtIdPrecioDos.value;
    producto3 = txtIdPrecioTres.value;   
    
    producto1 = parseInt(producto1);
    producto3 = parseInt(producto3);
    producto2 = parseInt(producto2);
   
    resultado= producto3+producto2+producto1;
    var resultadoConIva = resultado+ resultado* (iva/100);

    txtIdPrecioDos.value= ("la suma es es =" + resultado);
    txtIdPrecioUno.value= ("los precios son = " +producto1+","+producto2+","+producto3);
    txtIdPrecioTres.value=("el precion con iva es ="+resultadoConIva);
	
}