id = 0;
function Sell(){
    id++
    var productName = document.getElementById("product-name-input").value;
    var quantity = parseFloat(document.getElementById("quantity-input").value);
    var unitPrice = parseFloat(document.getElementById("unitPrice-input").value);
    var discount = parseFloat(document.getElementById("discount-input").value);
    var sub = quantity*unitPrice*(1-discount/100);
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + productName + "</td>";
    row += "<td>" + quantity + "</td>";
    row += "<td>$" + unitPrice + "</td>";
    row += "<td>" + discount + "</td>";
    row += "<td>$" + sub + "</td>";
    row += "</tr>";
    document.getElementById("tbl").innerHTML += row;
}

function Cancel(){
    var input = document.querySelectorAll("input");
    input.forEach(i => {
        i.value = ""
    });
}