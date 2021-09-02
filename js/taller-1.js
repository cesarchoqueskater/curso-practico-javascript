const $calculatePerimetroCuadrado = document.getElementById("calcPerimetroCuadrado");
const $calculateAreaCuadrado = document.getElementById("calcAreaCuadrado");
const $calculatePerimetroTriangulo = document.getElementById("calcPerimetroTriangulo");
const $calculateAreaTriangulo = document.getElementById("calcAreaTriangulo");
const $calculatePerimetroCircunferencia = document.getElementById("calcPerimetroCircunferencia");
const $calculateAreaCircunferencia = document.getElementById("calcAreaCircunferencia");
const $calculateDiametroCircunferencia = document.getElementById("calcDiametroCircunferencia");
const $resultSquare = document.getElementById("resultsquare");
const $resultTriangle = document.getElementById("resultTriangle");
const $resultCircumference = document.getElementById("resultCircumference");
const PI = Math.PI;

//Cuadrado
$calculatePerimetroCuadrado.addEventListener("click", function() {
    const $sideSquare = document.getElementById("sideSquare").value;

    if ($sideSquare == 0) {
        $resultSquare.innerHTML = '<h3 class="result-error">El campo LADO A es requerido o tiene que ser mayor de 0</h3>';
    } else {
        const $resultado = calcularPerimetro($sideSquare);
        $resultSquare.innerHTML = '<h3 class="result-ok">El perímetro es ' + $resultado + '</h3>';
    }
});

$calculateAreaCuadrado.addEventListener("click", function() {
    const $sideSquare = document.getElementById("sideSquare").value;

    if ($sideSquare == 0) {
        $resultSquare.innerHTML = '<h3 class="result-error">El campo LADO A es requerido o tiene que ser mayor de 0</h3>';
    } else {
        const $resultado = areaCuadrado($sideSquare);
        $resultSquare.innerHTML = '<h3 class="result-ok">El área es ' + $resultado + '</h3>';
    }
});

function calcularPerimetro(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

//Triangulo
$calculatePerimetroTriangulo.addEventListener("click", function() {
    const $ladoATriangle = document.getElementById("sideATriangle").value;
    const $ladoBTriangle = document.getElementById("sideBTriangle").value;
    const $baseCTriangle = document.getElementById("baseTriangle").value;

    if ($ladoATriangle == 0 || $ladoBTriangle == 0 || $baseCTriangle == 0) {
        $resultTriangle.innerHTML = '<h3 class="result-error">Ningun lado del Triangulo puede quedar vacio o ser igual a 0</h3>';
    } else {
        const $resultado = perimetroTriangulo(parseInt($ladoATriangle), parseInt($ladoBTriangle), parseInt($baseCTriangle));
        $resultTriangle.innerHTML = '<h3 class="result-ok">El perímetro es ' + $resultado + '</h3>';
    }
});

$calculateAreaTriangulo.addEventListener("click", function() {
    const $baseCTriangle = document.getElementById("baseTriangle").value;
    const $heightTriangle = document.getElementById("heightTriangle").value;

    if ($baseCTriangle == 0 || $heightTriangle == 0) {
        $resultTriangle.innerHTML = '<h3 class="result-error">La base o altura no pueden estar vacios o ser igual a 0</h3>';
    } else {
        const $resultado = areaTriangulo(parseInt($baseCTriangle), parseInt($heightTriangle));
        $resultTriangle.innerHTML = '<h3 class="result-ok">El área es ' + $resultado + '</h3>';
    }
});

function perimetroTriangulo(ladoA, ladoB, base) {
    return ladoA + ladoB + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//Circunferencia

$calculatePerimetroCircunferencia.addEventListener("click", function() {
    const $radio = document.getElementById("radio").value;

    if ($radio == 0) {
        $resultCircumference.innerHTML = '<h3 class="result-error">El radio no puede estar vacio o ser igual que 0</h3>';
    } else {
        const $resultado = perimetroCirculo(parseInt($radio));
        $resultCircumference.innerHTML = '<h3 class="result-ok">El área es ' + $resultado + '</h3>';
    }
});

//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}