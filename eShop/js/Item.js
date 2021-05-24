class Item {
  constructor(productObject) {
    this.product_name = productObject.product_name || 'Товар временно отсутствует';
    this.price = productObject.price || 0;
    this.id_product = productObject.id_product || 0;
  }

  render() {
    return `<div class="goods-item" data-id="${this.id_product} data-">
              <img class="goods-item-img" src="#" alt="${this.product_name}" height="300" width="300">
              <h3 class="goods-item-title">${this.product_name}</h3>
              <p class="goods-item-price">${this.price}</p>
              <button class="goods-item-button button" data-id="${this.id_product}" data-title="${this.product_name}" data-price="${this.price}">Добавить в корзину</button>
            </div>`;
  }
}