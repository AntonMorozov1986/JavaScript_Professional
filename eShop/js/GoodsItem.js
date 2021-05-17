/**
 * Конструктор класса GoodsItem
 */
class GoodsItem {
  constructor(title= 'Товар недоступен', price= 0) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `<div class="goods-item">
              <img class="goods-item-img" src="#" alt="${this.title}" height="300" width="300">
              <h3 class="goods-item-title">${this.title}</h3>
              <p class="goods-item-price">${this.price}</p>
              <button class="goods-item-button button">Добавить в корзину</button>
            </div>`;
  }
}
