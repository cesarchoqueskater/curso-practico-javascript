const addValueTaller3 = document.getElementById("addValueTaller3");
const getMedian = document.getElementById('getMedian');
const getHalf = document.getElementById('getHalf');
const getAverage = document.getElementById('getAverage');

// Mediana
let arrayValue = [];

addValueTaller3.addEventListener("click", function() {
    addValueArray();
    listValueArray();
    document.getElementById("number").value = '';
});

function addValueArray() {
    const valueAdd = document.getElementById("number").value;
    if (valueAdd.length != '') {
        const agregarValueList = parseInt(document.getElementById("number").value);
        let valores = arrayValue.push(agregarValueList);
        console.log(agregarValueList);
    } else {
        let resultado = document.getElementById("resultGetCalculate");
        resultado.innerText = "No se puede agregar elementos vacios";
    }
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
        // console.log("🚀arrayOrdenado " + arrayOrdenado);
        listValueArray();
        calculoMediana(arrayOrdenado);
    }
});


//Moda
getHalf.addEventListener("click", function() {
    let resultado = document.getElementById("resultGetCalculate");
    const arrayValueNew = {};

    arrayValue.map(
        // Funcion anonima, que recibira cada una de las itereaciones
        function(elemento) {
            if (arrayValueNew[elemento]) {
                arrayValueNew[elemento] += 1;
            } else {
                arrayValueNew[elemento] = 1;
            }
        }
    )
    const OjectArrayNew = Object.entries(arrayValueNew).sort(
        function(elementA, elementB) {
            return elementA[1] - elementB[1];
        }
    );
    arrayOrdenado = arrayValue.sort(function(a, b) {
        return a - b;
    });
    listValueArray();
    const moda = OjectArrayNew[OjectArrayNew.length - 1];
    resultado.innerText = "La moda es: " + moda[0];
    // console.log("🚀La moda es s: ", moda[0]);

});

// Promedio
getAverage.addEventListener("click", function() {
    let resultado = document.getElementById("resultGetCalculate");
    const sumaLista = arrayValue.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            //Para esta caso estamos haciendo una suma, como si fuera un for
            return valorAcumulado + nuevoElemento;
        }
    );
    arrayOrdenado = arrayValue.sort(function(a, b) {
        return a - b;
    });
    listValueArray();
    const promedioLista = sumaLista / arrayValue.length;
    // return promedioLista;
    resultado.innerText = "EL promedio es: " + promedioLista;
});