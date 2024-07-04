// -- Start Render project category
fetch ("./assets/js/Category.json")
    .then(res => res.json())
    .then(data => showInfo(data))
function showInfo (data) {
    // get category 
    var list_category = data.category
    var list = ""
    var delay = 100;
    list_category.forEach(element => {
        // var href = `assets/Info/${element.title}`
        var img = `./assets/Info/${element.Slider_img}`
        // var title_img = element.title
        list += `
        <div class="col-lg-3 col-md-4">
            <div class="gallery-item"  data-aos="zoom-in" data-aos-delay="${delay}">
                <a href="./pagepj.html?p=${element.id}">
                    <img loading="lazy" src="${img}" alt="" class="img-fluid">
                    <p>${element.title}</p>
                </a>
            </div>
        </div>`
        delay+=50;
    });
    list += `
    <div class="col-12 text-center">
        <a href="./project.html">
            <button type="button" class="btn btn-warning  px-lg-3 py-lg-2" ><i class="bi bi-chevron-double-down"></i> Xem tất cả</button>
        </a>
    </div>`
    document.querySelector(".gallery .row").innerHTML = list
}
// -- End Render project category