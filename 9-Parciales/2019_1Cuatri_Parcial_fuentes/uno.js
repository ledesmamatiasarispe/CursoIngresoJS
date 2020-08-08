
function mostrar()
{
var lado;
var perimetro;


do{
 lado=prompt("ingrese el lado");
 lado=parseInt(lado);
}while(isNaN(lado));


perimetro=lado*3;

alert("el perimetro es = "+perimetro);



}
