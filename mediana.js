function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    100,
    200,
    500,
    400000,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElement1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElement1y2;
} else {
    mediana = lista1[mitadLista1];
}

let array = [];


function listar() {
    // const li = document.getElementById("lista").innerHTML;
    var arrayData = array.map(function(element) {
        // let liValue = element;

        let liValue = "<li>" + element + "</li>"
        return liValue;
    }).join(" ");
    document.getElementById("lista-data").innerHTML = arrayData;

}


function onClickAdd() {
    const input = parseInt(document.getElementById("inputMediana").value);

    let addArray = array.push(input);
    console.log(addArray);
    listar();
}