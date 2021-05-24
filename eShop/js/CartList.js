class CartList extends List {
  constructor(url = CART_DATA_URL, cssSelector = CART_LIST_CSS_SELECTOR, classRelations = CLASS_RELATIONS) {
    super(url, cssSelector);
  }

  _init() {
    let cartBtnEl = document.querySelector('.cart-button');
    cartBtnEl.addEventListener('click', () => {
      document.querySelector('.cart').classList.toggle('hidden');
      document.querySelector('body').classList.toggle('freeze');
    });
    let cartListEl = document.querySelector(`${CART_LIST_CSS_SELECTOR}`);
    cartListEl.addEventListener('click', evt => {
      if (evt.target.classList.contains('cart-item-reduce') === true) {
        this.reduceProduct(evt.target);
      }
      if (evt.target.classList.contains('cart-item-add') === true) {
        this.addProduct(evt.target);
      }
      if (evt.target.classList.contains('cart-item-delete') === true) {
        this.deleteProduct(evt.target);
      }
    })
    this.render();
  }

  addProduct(element) {
    let foundProduct = this._findProduct(element)
    if (foundProduct === undefined) {
      let product = {
        id_product: +element.dataset.id,
        product_name: element.dataset.title,
        price: +element.dataset.price,
        quantity: 1
      }
      this.goods = [product];
      this.render()
    } else {
      foundProduct.quantity++;
      this._updateCart(foundProduct);
    }
  }

  reduceProduct(element) {
    let foundProduct = this._findProduct(element)
    if (foundProduct.quantity === 0) {
      return;
    }
    foundProduct.quantity--;
    this._updateCart(foundProduct);
  }

  deleteProduct(element) {
    let foundProduct = this._findProduct(element)
    this.productsList.splice(this.productsList.indexOf(foundProduct), 1);
    let cartItemEl = document.querySelector(`.cart-list .cart-item[data-id="${foundProduct.id_product}"]`);
    cartItemEl.remove();
  }

  _updateCart(productObject) {
    let cartItemEl = document.querySelector(`.cart-item[data-id="${productObject.id_product}"]`);
    cartItemEl.querySelector(`.cart-item-quantity`).textContent = `Количество: ${productObject.quantity} шт`;
    cartItemEl.querySelector(`.cart-item-cost`).textContent = `Стоимость: ${productObject.price * productObject.quantity} руб.`;
  }

  _findProduct(element) {
    let productId = +element.dataset.id;
    return this.productsList.find(product => product.id_product === productId);
  }

}