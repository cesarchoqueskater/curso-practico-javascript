// Funciones Helpers
function esPar(numerito) {
    //Retornara true or false, sea el caso
    return (numerito % 2 === 0);
}

// Calculadora de Mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// Calculando la Mediana General
const salariosCol = colombia.map(
    function(personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
// splice -> Resive 2 argumentos, el primero la posicion donde empezara, y el otro argumento es la cantidad de elementos que va a tomar
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
);