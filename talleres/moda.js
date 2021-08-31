const lista1 = [
    1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1,
];

// Objeto
const lista1Count = {};
console.log("🚀 lista1Count", lista1Count)

lista1.map(
    // Funcion anonima, que recibira cada una de las itereaciones
    function(elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
)


console.log("lista1Count ", lista1Count);

// Object.entries, se le envia el objeto para convertirlo en array
// Usamos la function .sort para buscar la posicion de la lista que tiene mayor canitidad
const lista1Array = Object.entries(lista1Count).sort(
    function(elementA, elementB) {
        return elementA[1] - elementB[1];
    }
);
console.log(lista1Array);
const moda = lista1Array[lista1Array.length - 1];
console.log("🚀La moda es: ", moda);