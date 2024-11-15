// -- get url

var url = window.location.search
var params = new URLSearchParams(url).get('p')

// -- Start Render project 
fetch ("./assets/js/name.json") 
    .then(res => res.json())
    .then(data => showInfo(data))
function showInfo (data) {
    // get category 
    var products = data.product
    var product
    products.forEach(element => {
        if (element.id == params) {
            product = element
        }
    });
    console.log(products)
    var title = product.title
    var slider = product.Slider_img
    var description = product.description
    var img = product.list_image
    var list_img = ""
    list_img += `
        <div class="col-lg-12">
            <div class="gallery-item" data-aos="zoom-in" data-aos-delay="100">
                <a href="./assets/Info/${slider}" data-toggle="lightbox" class="gallery-lightbox">
                    <img src="./assets/Info/${slider}" alt="" class="img-fluid">
                </a>
            </div>
            <h4 class="p-4 m-4">${description}</h4>
        </div>`
    img.forEach(element => {
        list_img += `
        <div class="col-lg-12">
            <div class="gallery-item text-center" data-aos="zoom-in" data-aos-delay="100" >
                <a href="./assets/Info/${element}" data-toggle="lightbox" data-gallery="photo-gallery" class="gallery-lightbox">
                    <img loading="lazy" src="./assets/Info/${element}" alt="" class="img-fluid sub-img-project">
                </a>
            </div>
        </div>`
    });
    nav_li = document.querySelectorAll(".breadcrumbs ol li")
    nav_li[2].innerHTML = title
    document.querySelector(".gallery .section-title p").innerHTML = title
    document.querySelector(".gallery .row").innerHTML = list_img
}
// -- End Render project