// Display process

//  PRODUCTION PROCESS

var metting = document.querySelector(".counts .metting")
var design = document.querySelector(".counts .design")
var price = document.querySelector(".counts .price")
var construction = document.querySelector(".counts .construction")

metting.addEventListener("mouseover", displayTextProcess1)
design.addEventListener("mouseover", displayTextProcess2)
price.addEventListener("mouseover", displayTextProcess3)
construction.addEventListener("mouseover", displayTextProcess4)
var text = document.querySelector(".counts .process-content ul")

function displayTextProcess1() {
    text.innerHTML = `
    <li><p>B1: Xác định phong cách nội thất</p></li>
    <li><p>B2: Tham khảo mẫu nội thất</p></li>
    <li><p>B3: Liệt kê công năng sử dụng từng sản phẩm</p></li>`        
}

function displayTextProcess2() {
    text.innerHTML = `
    <li><p>B1: Thiết kế 3D</p></li>
    <li><p>B2: Dựng thiết kế 2D</p></li>`
}

function displayTextProcess3() {
    text.innerHTML = `
    <li><p>B1: Dự trù kinh phí dựa trên số lượng ván gỗ, phụ kiện cần sử dụng</p></li>
    <li><p>B2: Báo giá và so sánh về giá và chất liệu được sử dụng</p></li>`        
}

function displayTextProcess4() {
    text.innerHTML = `
    <li><p>B1: Sản xuất</p></li>
    <li><p>B2: Kiếm tra sản phẩm</p></li>
    <li><p>B3: Vận chuyển và Lắp đặt</p></li>`        
}
