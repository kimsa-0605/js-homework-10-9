var no = 0;
function add(){
    var name = document.getElementById("name-input").value;
    var quantity =  parseFloatdocument.getElementById("quantity-input").value;
    var price = document.getElementById("price-input");
    var subTotal = quantity * price;
    no++;
    var row = "<tr>";
    row += "<td>" + no + "</td>";
    row += "<td>" + name + "</td>";
    row += "<td>" + quantity + "</td>";
    row += "<td>$" + price + "</td>";
    row += "<td>$" + subTotal + "</td>";
    row += "</tr>";
}