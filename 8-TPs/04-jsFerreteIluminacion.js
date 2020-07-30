///Arispe Ledesma Matias

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

//swich
 */
/*
function CalcularPrecio () {

var cantidad ;
     var marcaDeLasLamparas;
     var importe;
     var importeFinal;
     var valorDeLasLamparas;
     var impuestoIIBB;
     var descuento;
     cantidad= txtIdCantidad.value;
     marcaDeLasLamparas= Marca.value;
     valorDeLasLamparas= 35;
switch(cantidad){
    case "1":
    case "2":
        descuento = 1;
        break;
    case "5" :
        switch(marcaDeLasLamparas){
            case "ArgentinaLuz":
                descuento= 0.6;
                break;
            default:
              descuento =  0.7
              console.log ("caso5")
              break;

        }
        break;
    case "4" :
        switch(marcaDeLasLamparas){
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento= 0.75;
                break;
            default:
               descuento= 0.8
               console.log ("caso4")
               break;
        }
        break;
    case "3" :
        switch(marcaDeLasLamparas){
            case "ArgentinaLuz":
                descuento= 0.85;
            break;
            case "FelipeLamparas":
                descuento= 0.90;
                break;
            default:
               descuento= 0.95
               console.log ("caso3")
               break;
        }
        break;
    default:
        descuento = 0.5;    
        console.log ("default");
        break;
}

importe = (cantidad * valorDeLasLamparas) * descuento;

if (importe >120){
    importeFinal = importe*1.10;
    impuestoIIBB = importeFinal - importe;
    alert("Usted pago"+ impuestoIIBB +"de IIBB.");
}else{
    importeFinal = importe;
}
txtIdprecioDescuento.value = importeFinal


}//final de funcion

/*/

function CalcularPrecio () 
{
	var precioLampara;
	precioLampara = 35;
	var cantidadDeLamparasCompradas;
	cantidadDeLamparasCompradas = parseInt(txtIdCantidad.value);
	var marcaLampara;
	marcaLampara = Marca.value;
	var subTotal;
	subTotal = cantidadDeLamparasCompradas * precioLampara;
	var precioConDescuento;
	txtIdPrecioDescuento.value = precioConDescuento;
	var iibb;
	var precioTotal;
	precioTotal = precioConDescuento + iibb;/// esto aca no sirve porque el valor que guarda es undefined

	if (cantidadDeLamparasCompradas>=6) {
		precioConDescuento = subTotal * 0.50;
		console.log(precioConDescuento)
	} else {
		if (cantidadDeLamparasCompradas===5) {
			if (marcaLampara==="ArgentinaLuz") {
				precioConDescuento = subTotal * 0.60;
			} else {
				precioConDescuento = subTotal * 0.70;
			}
			console.log(precioConDescuento);
		} else {
			if (cantidadDeLamparasCompradas===4) {
				if (marcaLampara==="ArgentinaLuz" || marcaLampara==="FelipeLamparas") {
					precioConDescuento = subTotal * 0.75;
				} else {
					precioConDescuento = subTotal * 0.80;
				}
				console.log(precioConDescuento);
			} else {
				if (cantidadDeLamparasCompradas===3) {
					if (marcaLampara==="ArgentinaLuz") {
						precioConDescuento = subTotal * 0.85;
					}
					if (marcaLampara==="FelipeLamparas") {
						precioConDescuento = subTotal * 0.90;
					} else {
						precioConDescuento = subTotal * 0.95;
					}
					console.log(precioConDescuento);
				}
 			}
		}
	}
    precioTotal = precioConDescuento + iibb;// pero aca el valor que guarda es el de los calculos del if

	//tema IIBB
	if (precioConDescuento>=120) {
		iibb = precioConDescuento * 0.10;
		alert("Usted pago " + iibb + " de IIBB.")
	}
	txtIdPrecioDescuento.value = precioTotal;
}