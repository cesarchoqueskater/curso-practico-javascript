const $calculatePerimetro = document.getElementById("calculate-perimetro");
const $calculateArea = document.getElementById("calculate-area");
const $resultSquare = document.getElementById("resultsquare");


$calculatePerimetro.addEventListener("click", function() {
    const $sideSquare = document.getElementById("sideSquare").value;

    if ($sideSquare == 0) {
        $resultSquare.innerHTML = '<h3 class="result-error">El campo LADO A es requerido o tiene que ser mayor de 0</h3>';
    } else {
        const $resultado = calcularPerimetro($sideSquare);
        $resultSquare.innerHTML = '<h3 class="result-ok">El perímetro es ' + $resultado + '</h3>';
    }
});

$calculateArea.addEventListener("click", function() {
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