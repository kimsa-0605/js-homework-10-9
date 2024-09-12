var no = 0;
var superTotal = 0;

function Sell() {
    // Lấy giá trị từ các ô nhập liệu
    var name = document.getElementById("name-input").value;
    var quantity = parseFloat(document.getElementById("quantity-input").value);
    var price = parseFloat(document.getElementById("price-input").value);

    // Tính toán subTotal và cập nhật tổng
    var subTotal = quantity * price;
    superTotal += subTotal;
    no++;

    // Tạo dòng HTML mới cho sản phẩm
    var row = "<tr>";
    row += "<td>" + no + "</td>";
    row += "<td>" + name + "</td>";
    row += "<td>" + quantity + "</td>";
    row += "<td>$" + price.toFixed(2) + "</td>";
    row += "<td>$" + subTotal.toFixed(2) + "</td>";
    row += "</tr>";

    // Thêm dòng mới vào bảng trước dòng "Total"
    var table = document.getElementById("tbl");
    table.insertRow(table.rows.length - 1).innerHTML = row;

    // Cập nhật hiển thị tổng
    document.getElementById("total").innerHTML = "$"+ superTotal.toFixed(2);

    // Xóa các ô nhập liệu sau khi thêm sản phẩm
    document.getElementById("name-input").value = "";
    document.getElementById("quantity-input").value = "";
    document.getElementById("price-input").value = "";
}

function Cancel() {
    var inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = "";
    });
}
