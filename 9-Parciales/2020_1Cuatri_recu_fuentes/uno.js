
function mostrar()
{
 var objetoIngresado;
 var precioIngresado;
 var cantidadDeUnidades;
 var Fabricante;
 var marca;
 var validacionProducto = true;
 var contadorBarbijo =0;
 var contadorJabon =0;
 var contadorAlcohol =0;
 var contadorDeComprasBarbijo =0;
 var contadorDeComprasJabon =0;
 var contadorDeComprasAlcohol =0;
 var jabonMasCaroFabricante;
 var jabonMasCaroCantidadDeUnidades;
 var jabonmascaro;
 var jabonmascaroflag=true;
 var ProductoConMascantidad;

 for(var i = 0;i>5;i++){
	do{
		objetoIngresado=prompt("ingrese el producto","barbijo, jabón, alcohol");

		switch(objetoIngresado){
			 case "barbijo":
				 contadorDeComprasBarbijo++;
				break;
			case "jabón":
				contadorDeComprasJabon++;
				break;
			case "alcohol":
				contadorDeComprasAlcohol++;
				break;
			default:
			 continue;
		}
	 	validacionProducto = false
	}while(validacionProducto);

	do{
		 precioIngresado = prompt("ingrese el valor del producto");
		 precioIngresado =parseInt(precioIngresado);
	}while(isNaN(precioIngresado)|| precioIngresado < 100 || precioIngresado > 300);

	do{
		cantidadDeUnidades=prompt("ingrese la cantidad de unidades",1);
		cantidadDeUnidades=parseInt(cantidadDeUnidades);
	}while(isNaN(cantidadDeUnidades)|| cantidadDeUnidades< 1 ||cantidadDeUnidades>1000);

	
	
	Fabricante = prompt("ingrese la marca del producto");

	marca = prompt("ingrese la marca del prducto");

	if(objetoIngresado == "jabón"){//A
		
		if(jabonmascaroflag){
			jabonmascaro = precioIngresado;
			jabonMasCaroFabricante = Fabricante;
			jabonMasCaroCantidadDeUnidades = cantidadDeUnidades;
			jabonmascaroflag=false;
		}
		if(precioIngresado>jabonmascaro){
			jabonmascaro = precioIngresado;
			jabonMasCaroFabricante = Fabricante;
			jabonMasCaroCantidadDeUnidades=cantidadDeUnidades;
		}else if(precioIngresado == jabonmascaro){
			jabonMasCaroFabricante+= " y "+ Fabricante;
			jabonMasCaroCantidadDeUnidades+=cantidadDeUnidades;
		}


	}
	switch(objetoIngresado){
		case "barbijo":
			contadorBarbijo += cantidadDeUnidades;
		   break;
	   case "jabón":
		   contadorJabon += cantidadDeUnidades;
		   break;
	   case "alcohol":
		   contadorAlcohol += cantidadDeUnidades;
    }

	if(contadorBarbijo>contadorJabon&&contadorBarbijo>contadorAlcohol){
		ProductoConMascantidad = contadorBarbijo/contadorDeComprasBarbijo;
	}else if(contadorJabon>contadorAlcohol){
		ProductoConMascantidad=contadorJabon/contadorDeComprasJabon;
	}else{
		ProductoConMascantidad= contadorAlcohol/contadorDeComprasAlcohol;
	}




		
 	}



 	if( jabonmascaroflag==false){
	 document.write("<br>el jabon mas caro es"+jabonMasCaroFabricante+" y se compraron "+ 
	 jabonMasCaroCantidadDeUnidades+ "unidades" ) ;
 	}
	 document.write("<br>el promedio de unidades por"+ 
	 "compra del producto con mas unidades es"+
	 ProductoConMascantidad
	 );
	if(contadorBarbijo!=0){
		document.write("<br>se compraron "+contadorBarbijo+"barbijos");
	}
}

