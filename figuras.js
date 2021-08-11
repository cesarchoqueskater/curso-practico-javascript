// Código del Cuadrado

console.group("Cuadrados")


const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

//Perimetro del cuadrado
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cm");

//Area del cuadrado
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + " cm^2");


console.groupEnd();


//Código del Triangulo
console.group("Triangulo");


const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5;

console.log(
    "Los lados del triángulo miden: " +
    ladoTriangulo1 +
    " cm, " +
    ladoTriangulo2 +
    " cm, " +
    baseTriangulo +
    "cm."
);

console.log("La altura del triangulo mide: " + alturaTriangulo + " cm");

//Perimetro del triangulo
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cm");


//Area del triangulo
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo mide: " + areaTriangulo + " cm^2");


console.groupEnd();


//Código del Circulos
console.group("Circulos");


//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + " cm.");


//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + " cm.");


// PI
const PI = Math.PI;
console.log("PI es " + PI + ".");


// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es " + perimetroCirculo + " cm.");


//Area
const areaCirculo = PI * (radioCirculo ** 2);
console.log("El area del circulo es " + areaCirculo + " cm^2.");


console.groupEnd();