const getPriceDiscount = document.getElementById('getPriceDiscount');
const resultPriceDiscount = document.getElementById('resultPriceDiscount');

function calculatePriceDiscount(price, discount) {
    const porcentPrecioConDescuento = 100 - discount;
    const priceDiscount = (price * porcentPrecioConDescuento) / 100;
    return priceDiscount;
};


getPriceDiscount.addEventListener("click", function() {
    const priceData = document.getElementById('price').value;
    const discountData = document.getElementById('discount').value;


    if (priceData == 0 || discountData == 0) {
        resultPriceDiscount.innerHTML = '<h3 class="result-error">El campo precio y descuento no pueden quedar vacios</h3>';
    } else {
        const getPriceDiscount = calculatePriceDiscount(priceData, discountData);
        console.log(getPriceDiscount);
        resultPriceDiscount.innerHTML = '<h3 class="result-ok">El descuento es ' + getPriceDiscount + '</h3>';
    }
});