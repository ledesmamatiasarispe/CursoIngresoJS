/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
   var valor1;
   var valor2;
   var resultado;

   valor1 = txtIdNumeroDos.value; 
   valor2 = txtIdNumeroUno.value;

   valor1 = parseInt(valor1)
   valor2 = parseInt(valor2)
  
   resultado = valor1+valor2;

   alert("el resultado de la suma es = " + resultado )
}

