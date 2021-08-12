const precioOriginal = 3000;

const descuento = 12;

const porcentajePrecioConDescuento = 100 - descuento;

const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;


console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}