const products = Array.from(document.querySelectorAll('.product'));
const productAdd = document.querySelectorAll('.product__add');
const productImage = document.querySelectorAll('.product__image');

const productQuantityValue = document.querySelectorAll('.product__quantity-value');
const productQuantityDown = document.querySelectorAll('.product__quantity-control_dec');
const productQuantityUp = document.querySelectorAll('.product__quantity-control_inc');

const cartProducts = document.querySelector('.cart__products');

/* шаблон карточки */
const divCartProduct = document.createElement('div');
divCartProduct.className = 'cart__product';
const imgCartProduct = document.createElement('img');
imgCartProduct.className = 'cart__product-image';
const countCartProduct = document.createElement('div');
countCartProduct.className = 'cart__product-count';
divCartProduct.appendChild(imgCartProduct);
divCartProduct.appendChild(countCartProduct);
/* шаблон карточки end*/

let cartProductList = [];

for (let i = 0; i < products.length; i++) {

    productQuantityDown[i].addEventListener('click', () => {
        productQuantityValue[i].textContent > 0 ?
            productQuantityValue[i].textContent-- :
            productQuantityValue[i].textContent = 0;
    })
    productQuantityUp[i].addEventListener('click', () => {
        productQuantityValue[i].textContent++;
    })

    productAdd[i].addEventListener('click', () => {
        if (!cartProductList.includes(products[i].dataset.id)) {
            cartProductList.push(products[i].dataset.id);
            divCartProduct.dataset.id = products[i].dataset.id;
            imgCartProduct.src = productImage[i].src;
            countCartProduct.textContent = productQuantityValue[i].textContent;
            cartProducts.appendChild(divCartProduct.cloneNode(true));
        } else {
            let selectedProducts = Array.from(document.querySelectorAll('.cart__product-count'));
            let cartProduct = document.querySelectorAll('.cart__product')

            for (let selectedProduct = 0; selectedProduct < selectedProducts.length; selectedProduct++) {
                if (cartProduct[selectedProduct].dataset.id == products[i].dataset.id) {
                    selectedProducts[selectedProduct].textContent = Number(selectedProducts[selectedProduct].textContent) + Number(productQuantityValue[i].textContent); { }
                }
            }
        }
    })

}
