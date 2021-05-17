class BasketItem {
  constructor(title = 'Товар не доступен', price = 0, quantity = 1) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }

  //Метод для изменения количества товара
  changeQuantity() {}

  //Метод для расчета стоимости товара (с учетом количества)
  getItemCost() {}

  //Метод для создания HTML разметки товара корзины
  render() {}
}
