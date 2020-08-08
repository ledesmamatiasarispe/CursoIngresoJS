function mostrar()
{
  var validacionParaContinuar =true ;
  var tipo;
  var cantidadDeBolsas;
  var cantidadTotalDeBolsas=0 ;
  var precio;
  var importeSubTotal;
  var importeTotalBruto = 0;
  var importeConDescuento;
  var tipoMasCaro;
  var tipoMasCaroPrecio=0 ;
  var tipoMasComprado;
  var cantidadDeCal = 0;
  var cantidadDeCemento = 0;
  var cantidadDearena = 0;
 do{
//Tipo validad("arena";"cal";"cemento")

  do{
    tipo=prompt("ingrese el tipo de bolsa","arena,cal,cemento");
  }while(tipo!="arena"&&tipo!="cal"&&tipo!="cemento");

  do{//Cantidad de bolsas
    cantidadDeBolsas=prompt("ingrese la cantidad de bolsas");
    cantidadDeBolsas=parseInt(cantidadDeBolsas);
  }while(isNaN(cantidadDeBolsas)||cantidadDeBolsas<1);

  do{//Precio por bolsa (más de cero )
    precio=prompt("ingrese el precio por bolsa");
    precio=parseInt(precio);
  }while(isNaN(precio)||precio<1);

  importeSubTotal= cantidadDeBolsas*precio;
  importeTotalBruto += importeSubTotal;
  cantidadTotalDeBolsas+= cantidadDeBolsas;
  //d) Informar el tipo ("arena";"cal";"cemento")
  // con mas cantidad de bolsas en el total de la compra.
  switch(tipo){
    case"arena":
      cantidadDearena += cantidadDeBolsas;
      break;
    case"cal":
      cantidadDeCal += cantidadDeBolsas
      break;
    case"arena": 
      cantidadDeCemento += cantidadDeBolsas;
      break;
  }
  if(cantidadDearena>cantidadDeCal&&cantidadDearena>cantidadDeCemento){
    tipoMasComprado ="el que mas cantidad de compro fue arena";  
  }else if(cantidadDeCal > cantidadDeCemento){
    tipoMasComprado ="el que mas cantidad de compro fue cemento"
  }else if(cantidadDeCal < cantidadDeCemento){
    tipoMasComprado ="el que mas cantidad de compro fue cemento"
  }

  //f) El tipo mas caro
  if(precio>tipoMasCaroPrecio){
    tipoMasCaroPrecio=precio;
    tipoMasCaro = tipo;
    
  }

  validacionParaContinuar = confirm("quiere seguir ingresando dartos?");
 }while(validacionParaContinuar);//Realizar el algoritmo que permita ingresar los datos
 // de una compra de productos de la construccion, hasta que el cliente quiera

 if(cantidadTotalDeBolsas>30){
   importeConDescuento=importeTotalBruto*.75;//Si compro más de 30 bolsas
 }else if(cantidadTotalDeBolsas>10){
  importeConDescuento=importeTotalBruto*.85;//Si compro más de 10 bolsas
 }
  document.write("<br>el importe total en bruto es = "+importeTotalBruto);//El importe total a pagar , bruto sin descuento

 if(importeConDescuento > 0 ){//el importe total a pagar con descuento(solo si corresponde)
   document.write("<br>el importe con descuento es = "+importeConDescuento);
 }
 document.write("<br>"+tipoMasComprado);
 document.write("<br>el tipo mas caro es "+tipo+" vale "+tipoMasCaroPrecio);
}
