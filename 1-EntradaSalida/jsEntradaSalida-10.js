/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento()
{

var importe;

var importeConDescuento;

importe=txtIdImporte.value;


importe=parseInt(importe);

importeConDescuento= importe - importe / 4;


txtIdResultado.value = "$" +importe + "+ 25% off = $"+ importeConDescuento ;
}