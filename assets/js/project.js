// -- Start Render project product
fetch ("./assets/js/name.json")
    .then(res => res.json())
    .then(data => showInfo(data))
function showInfo (data) {
    // get product 
    var list_product = data.product
    var list = ""
    list_product.forEach(element => {
        // var href = `assets/Info/${element.title}`
        var img = `./assets/Info/${element.Slider_img}`
        // var title_img = element.title
        list += `
        <div class="col-lg-3 col-md-4">
            <div class="gallery-item" data-aos="zoom-in" data-aos-delay="100">
                <a href="./pagepj.html?p=${element.id}">
                    <img loading="lazy" src="${img}" alt="" class="img-fluid">
                    <p>${element.title}</p>
                </a>
            </div>
        </div>`
    });
    document.querySelector(".gallery .row").innerHTML = list
}
// -- End Render project product