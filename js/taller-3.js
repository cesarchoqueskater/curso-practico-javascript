const addValueTaller3 = document.getElementById("addValueTaller3");

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