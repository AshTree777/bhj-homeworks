const products = Array.from(document.querySelectorAll('.product'));
const productAdd = document.querySelectorAll('.product__add');
const productImage = document.querySelectorAll('.product__image');

const productQuantityValue = document.querySelectorAll('.product__quantity-value');
const productQuantityDown = document.querySelectorAll('.product__quantity-control_dec');
const productQuantityUp = document.querySelectorAll('.product__quantity-control_inc');

const cartProducts = document.querySelector('.cart__products');

for (let i = 0; i < products.length; i++) {

    productQuantityDown[i].addEventListener('click', () => {
        productQuantityValue[i].textContent > 1 ?
            productQuantityValue[i].textContent-- :
            productQuantityValue[i].textContent = 1;
    })
    productQuantityUp[i].addEventListener('click', () => {
        productQuantityValue[i].textContent++;
    })

    productAdd[i].addEventListener('click', () => {

        let selectedProducts = Array.from(document.querySelectorAll('.cart__product'));
        let productInCart = selectedProducts.find(selectedProduct =>
            selectedProduct.dataset.id == products[i].dataset.id);

        if (productInCart) {
            productInCart.querySelector('.cart__product-count').textContent =
                Number(productInCart.querySelector('.cart__product-count').textContent) +
                Number(productQuantityValue[i].textContent);
        } else {
            cartProducts.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id=${products[i].dataset.id}>
                <img class="cart__product-image" src=${productImage[i].src}>
                <div class="cart__product-count">
                    ${productQuantityValue[i].textContent}
                </div>
            </div>
        `);
        }

    })

}