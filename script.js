var productApi = "http://localhost:3000/product"

function start() {
    getProducts(renderProducts)
}

start()

function getProducts(callback) {
    fetch(productApi)
        .then(response => response.json())
        .then(callback)
}

function renderProducts(products) {
    var listProducts = document.querySelector('.home-product')
    var html = listProducts.querySelector('.row')

    var htmls = products.map(product =>
        `<div class="col l-2-4 m-4 c-6">
        <a href="" class="home-product-item">
            <div class="home-product-item__img"
                style="background-image: url(${product.img});">
            </div>
            <h4 class="home-product-item__name">${product.name}</h4>
            <div class="home-product-item__price">
                <span class="home-product-item__price-old">${product.oldPrice}</span>
                <span class="home-product-item__price-current">${product.newPrice}</span>
            </div>
            <div class="home-product-item__action">
                <span class="home-product-item__like home-product-item__like--liked">
                    <i class="home-product-item__like-icon-empty fa-regular fa-heart"></i>
                    <i class="home-product-item__like-icon-fill fa-solid fa-heart"></i>
                </span>
                <div class="home-product-item__rating">
                    <i class="home-product-item__star--gold fa-solid fa-star"></i>
                    <i class="home-product-item__star--gold fa-solid fa-star"></i>
                    <i class="home-product-item__star--gold fa-solid fa-star"></i>
                    <i class="home-product-item__star--gold fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <span class="home-product-item__sold">${product.sold}</span>
            </div>
            <div class="home-product-item__origin">
                <span class="home-product-item__brand">${product.brand}</span>
                <span class="home-product-item__origin-name">${product.origin}</span>
            </div>
            <div class="home-product-item__favorite">
                <i class="home-product-item__favorite-icon fa-solid fa-check"></i>
                <span>Yêu thích</span>
            </div>
            <div class="home-product-item__sale-off">
                <span class="home-product-item__sale-off-percent">${product.percent}</span>
                <span class="home-product-item__sale-off-label">GIẢM</span>
            </div>
        </a>
    </div>`
    )
    html.innerHTML = htmls.join('')
}