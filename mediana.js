// const array = [
//     100,
//     200,
//     500,
//     700,
//     400000,
// ];

let array = [];
// let mitadArray = parseInt(array.length / 2);
// console.log("🚀 La mitad del arraya es :" + mitadArray);

let mediana;

function onClickAdd() {
    const input = parseInt(document.getElementById("inputMediana").value);

    let addArray = array.push(input);
    // console.log(addArray);
    listarArray();
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
    // console.log("🚀 La mitad del arraya es :" + mitadArray);
    let resultado = document.getElementById("resultado-mediana");
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

function listarArray() {
    // const li = document.getElementById("lista").innerHTML;
    var arrayData = array.map(function(element) {
        // let liValue = element;

        let liValue = "<li>" + element + "</li>"
        return liValue;
    }).join(" ");
    document.getElementById("lista-data").innerHTML = arrayData;

}

function calcularMediana() {
    console.log("Boton Mediana Funcion");
    // console.log(array.length);
    // console.log("El array nuevo : " + array);
    const titulo_listaOrdenada = document.getElementById("lista-ordenada");
    if (array.length === 0) {
        console.log("No Tiene data");
    } else {
        console.log("Tiene data el array");
        arrayOrdenado = array.sort();
        console.log("🚀arrayOrdenado " + arrayOrdenado)
        titulo_listaOrdenada.innerText = "Se ordena la lista";
        listarArray(arrayOrdenado);
        calculoMediana(arrayOrdenado);
    }
}