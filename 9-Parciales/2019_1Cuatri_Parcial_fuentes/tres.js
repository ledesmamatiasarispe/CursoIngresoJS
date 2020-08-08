function mostrar()
{
var importeConDescuento;
 var descuento;
var precio;

do{
    precio=prompt("ingrese el precio");
    precio= parseInt(precio);
}while(isNaN(precio));


do{
    descuento=prompt("ingrese el descuento","25");
    descuento= parseInt(descuento);
}while(isNaN(descuento));

importeConDescuento=precio*((-descuento/100)+1);


elPrecioFinal.value=importeConDescuento;

}
