class CartItem extends Item {
  constructor(productObject) {
    super(productObject);
    this.quantity = productObject.quantity || 1;
  }

  render() {
    return `<div class="cart-item" data-id="${this.id_product}">
              <img class="cart-item-img" src="#" alt="${this.product_name}" width="125" height="125">
              <div class="cart-item-description">
                <p class="cart-item-title">${this.product_name}</p>
                <p class="cart-item-price">Цена: ${this.price} руб.</p>
                <p class="cart-item-quantity">Количество: ${this.quantity} шт</p>
                <p class="cart-item-cost">Стоимость: ${this.price * this.quantity} руб.</p>
                <button class="cart-item-reduce button" data-id="${this.id_product}">&minus;</button>
                <button class="cart-item-add button" data-id="${this.id_product}">&plus;</button>
                <button class="cart-item-delete button" data-id="${this.id_product}">удалить</button>
              </div>
            </div>`
  }
}
