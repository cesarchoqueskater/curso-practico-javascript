const addValueTaller4 = document.getElementById("addValueTaller4");
const getSalary = document.getElementById("getSalary");

let arrayValueSalary = [];

addValueTaller4.addEventListener("click", function() {
    addValueArraySalary();
    listValueArraySalary();
    document.getElementById("name-analysis").value = '';
    document.getElementById("number-analysis").value = '';
});

function addValueArraySalary() {
    const valueNameAnalysis = document.getElementById("name-analysis").value;
    const valueNumberAnalysis = document.getElementById("number-analysis").value;
    if (valueNameAnalysis.length != '' & valueNumberAnalysis.length != '') {

        const agregarValueListSalaryName = document.getElementById("name-analysis").value;
        const agregarValueListSalaryNumber = parseInt(document.getElementById("number-analysis").value);
        let valores = arrayValueSalary.push({ name: agregarValueListSalaryName, salary: agregarValueListSalaryNumber });

    } else {
        // console.log('No se puede agregar elementos vacios');
        let resultado = document.getElementById("resultSalary");
        resultado.innerText = "No se puede agregar elementos vacios";
    }
}

function listValueArraySalary() {
    let newArrayData = arrayValueSalary.map(function(element) {
        let liHTML = '<li>' + element.name + ' - ' + element.salary + '</li>';
        return liHTML;
    }).join(" ");
    document.getElementById("list-data-analysis").innerHTML = newArrayData;
}

getSalary.addEventListener("click", function() {

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
    const salariosCol = arrayValueSalary.map(
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
    let resultado = document.getElementById("resultSalary");
    // Mediana del top 10%
    // splice -> Resive 2 argumentos, el primero la posicion donde empezara, y el otro argumento es la cantidad de elementos que va a tomar
    const spliceStart = (salariosColSorted.length * 90) / 100;
    const spliceCount = salariosColSorted.length - spliceStart;

    const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

    const medianaTop10Col = medianaSalarios(salariosColTop10);

    // console.log(
    //     medianaGeneralCol,
    //     medianaTop10Col,
    // );
    resultado.innerText = "EL mediana General es  " + medianaGeneralCol + " y la Mediana Top es " + medianaTop10Col;
    // resultSalary
});