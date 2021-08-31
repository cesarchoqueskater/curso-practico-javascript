const lista = [
    100,
    200,
    300,
    500,
];


function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    // sumaLista = sumaLista + lista[i];
    // }

    // reduce -> Es un metodo que recibe una funcion
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            //Para esta caso estamos haciendo una suma, como si fuera un for
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}