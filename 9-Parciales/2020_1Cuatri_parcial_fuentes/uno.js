
function mostrar()
{
	var contador = 0;
	var tipoDeProducto;
	var precio;
	var cantidadDeUnidades
	var marcaYFabricante;
	var contadorPuntoA=0;
	var precioMasBaratoA;
	var cantidadDeUnidadesPuntoA;
	var fabricantePuntoA;

	var contadorAlcohol=0;
	var  contadorBarbijo=0;
	var contadorJabon=0;
	var  cantidadDeUnidadesTotalBarbijo	=0;
	var cantidadDeUnidadesTotalAlcohol =0;
	var  cantidadDeUnidadesTotaljabon =0;
	var promedioPorCompra;
	do{
		do{
			tipoDeProducto=prompt("ingrese el producto"+contador+1);

		}while(tipoDeProducto !="barbijo" && tipoDeProducto!="jabón" &&tipoDeProducto!="alcohol" );

		do{
			precio=prompt("ingrese el valor");
			precio=parseInt(precio);
		}while(isNaN(precio)||precio>300||precio<100);

		do{
			cantidadDeUnidades=prompt("ingrese cantidad de unidades");
			cantidadDeUnidades=parseInt(cantidadDeUnidades);
		}while(isNaN(cantidadDeUnidades)||cantidadDeUnidades<1||cantidadDeUnidades>1000);

		marcaYFabricante=prompt("ingrese la marca y el fabricante");4


		if(tipoDeProducto=="alcohol"){///A

			if(contadorAlcohol==0){
				precioMasBaratoA = precio;
				fabricantePuntoA = marcaYFabricante;
				cantidadDeUnidadesPuntoA = cantidadDeUnidades;
			}

			if(precioMasBaratoA<precio){
				precioMasBaratoA=precio;
				fabricantePuntoA=marcaYFabricante;
				cantidadDeUnidadesPuntoA = cantidadDeUnidades;
			}
		}
/**
 * punto b
 */
		switch(tipoDeProducto){///aca saco los valores del punto b. el promedio por compra es la cantidad total de unidades compradas
			// dividido por la cantidad de veces que se ingreso el producto
			case "alcohol":
				cantidadDeUnidadesTotalAlcohol += cantidadDeUnidades;//un acumulador que guarda la cantidad total de productos
				contadorAlcohol++;//el contador
				break;
			case "barbijo":
				contadorBarbijo++;
				cantidadDeUnidadesTotalBarbijo+= cantidadDeUnidades;
				break;
			case "jabón":
				contadorJabon++;
				cantidadDeUnidadesTotaljabon+= cantidadDeUnidades;

		}

		if(contadorBarbijo>contadorJabon&&contadorBarbijo>contadorAlcohol){
			promedioPorCompra = cantidadDeUnidadesTotalBarbijo/contadorBarbijo;
		}else if(contadorJabon>contadorAlcohol){
			promedioPorCompra=cantidadDeUnidadesTotaljabon/contadorJabon;//<-------- aca saco el promedio de cada uno lo guarde en promedioPorCompra
		}else{
			promedioPorCompra= cantidadDeUnidadesTotalAlcohol/contadorAlcohol;
		}

		contador++
	}while(contador<5);

	document.write("A<br> el fabricante del mas barato es = "+ fabricantePuntoA+"<br> y se compraron "+
	cantidadDeUnidadesPuntoA+" unidades")//A

	document.write("<br>el tipo con mas unidades el promedio por compra  es = " + promedioPorCompra )//B y aca lo imprimo en document.write

	//c
	if(contadorJabon!=0){
		document.write("<br>hay "+cantidadDeUnidadesTotaljabon+" unidades de jabon")
	}






}
