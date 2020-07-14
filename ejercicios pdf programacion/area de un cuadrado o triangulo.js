var base,altura,flagTriangulo,resultado
flagTriangulo= prompt("es un triangulo",true)
base=5
altura=5
function area (x,y,z){
    resultado=x*y
    if (z){resultado/=2}
    else{}
    return resultado

}
var respuesta=area(base,altura,flagTriangulo)
console.log(resultado)