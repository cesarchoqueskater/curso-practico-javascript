// Código del Cuadrado

console.group("Cuadrados")


// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

//Perimetro del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

// perimetroCuadrado();
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cm");

//Area del cuadrado
function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El área del cuadrado mide: " + areaCuadrado + " cm^2");


console.groupEnd();


//Código del Triangulo
console.group("Triangulo");


// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5;

// console.log(
//     "Los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     " cm, " +
//     ladoTriangulo2 +
//     " cm, " +
//     baseTriangulo +
//     "cm."
// );

// console.log("La altura del triangulo mide: " + alturaTriangulo + " cm");

//Perimetro del triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cm");


//Area del triangulo
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triangulo mide: " + areaTriangulo + " cm^2");


console.groupEnd();


//Código del Circulos
console.group("Circulos");


//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es " + radioCirculo + " cm.");


//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del circulo es " + diametroCirculo + " cm.");


// PI
const PI = Math.PI;
// console.log("PI es " + PI + ".");


// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perimetro del circulo es " + perimetroCirculo + " cm.");


//Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El area del circulo es " + areaCirculo + " cm^2.");


console.groupEnd();

// Aqui interactuamos con el HTML
// Logica del Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}

// Logica del Triangulo
function calcularPerimetroTriangulo() {
    const ladoTrianguloA = parseFloat(document.getElementById("ladoA").value);
    console.log("🚀 ladoA", ladoA)
    const ladoTrianguloB = parseFloat(document.getElementById("ladoB").value);
    const baseTriangulo = parseFloat(document.getElementById("base").value);

    const perimetro = perimetroTriangulo(ladoTrianguloA, ladoTrianguloB, baseTriangulo);
    // console.log("🚀 perimetro : ", perimetro)
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const baseTriangulo = document.getElementById("base").value;
    const alturaTriangulo = document.getElementById("altura").value;
    const area = areaTriangulo(baseTriangulo, alturaTriangulo);
    // console.log("Area es : " + area);
    alert(area);
}

function calcularPerimetroCircunferencia() {
    const radioCircunferencia = document.getElementById("radio").value;
    const perimetro = perimetroCirculo(radioCircunferencia);
    alert(perimetro);
}

function calcularAreaCircunferencia() {
    const radioCircunferencia = document.getElementById("radio").value;
    const area = areaCirculo(radioCircunferencia);
    alert(area);
}

function calcularDiametroCircunferencia() {
    const radioCircunferencia = document.getElementById("radio").value;
    const diametro = diametroCirculo(radioCircunferencia);
    alert(diametro);
}