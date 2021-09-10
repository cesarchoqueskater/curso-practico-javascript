const addValueTaller3 = document.getElementById("addValueTaller3");
const getMedian = document.getElementById('getMedian');
const getHalf = document.getElementById('getHalf');
const getAverage = document.getElementById('getAverage');

let arrayValue = [];

addValueTaller3.addEventListener("click", function() {
    addValueArray();
    listValueArray();
});

function addValueArray() {
    const agregarValueList = parseInt(document.getElementById("number").value);
    let valores = arrayValue.push(agregarValueList);
    console.log(agregarValueList);
}

function listValueArray() {
    let newArrayData = arrayValue.map(function(element) {
        let liHTML = '<li>' + element + '</li>';
        return liHTML;
    }).join(" ");
    document.getElementById("list-data").innerHTML = newArrayData;
}

function calcularMediaAritmetica(arrayElementos) {
    console.log("Lo que estoy pasando : " + arrayElementos)
    const sumaLista = arrayElementos.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    console.log("🚀sumaLista", sumaLista)
    const promedioLista = sumaLista / arrayElementos.length;
    console.log("🚀promedioLista", promedioLista)
    return promedioLista;
}

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calculoMediana(arrayOrdenado) {
    let mitadArray = parseInt(arrayOrdenado.length / 2);
    let resultado = document.getElementById("resultGetCalculate");
    if (esPar(arrayOrdenado.length)) {
        console.log("Es par");
        console.log(" Tamaño " + arrayOrdenado.length);

        const elemento1 = arrayOrdenado[mitadArray - 1];
        const elemento2 = arrayOrdenado[mitadArray];

        const promedioElement1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        mediana = promedioElement1y2;
        console.log("🚀La mediana", mediana);
        resultado.innerText = "La mediana es: " + mediana;
    } else {
        console.log("Es IMPAR");
        mediana = arrayOrdenado[mitadArray];
        console.log("🚀 La mediana", mediana);
        resultado.innerText = "La mediana es: " + mediana;
    }
}

getMedian.addEventListener("click", function() {
    console.log("Boton Mediana Funcion");
    if (arrayValue.length === 0) {
        console.log("No Tiene data");
    } else {
        console.log("Tiene data el array");
        arrayOrdenado = arrayValue.sort(function(a, b) {
            return a - b;
        });
        console.log("🚀arrayOrdenado " + arrayOrdenado);
        listValueArray(arrayOrdenado);
        calculoMediana(arrayOrdenado);
    }
});