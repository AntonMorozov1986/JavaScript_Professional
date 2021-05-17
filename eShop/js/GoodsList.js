/**
 * Конструтктор класса GoodList
 */
class GoodsList {
  constructor() {
    this.goods = []
  }

  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
      //Товар безназвания
      { price: 100 },
      //Товар без цены
      { title: 'T-Shirt'},
      //Товар с без цены и названия
      { name: 'something'}
    ];
  }

  render() {
    let goodListEl = document.querySelector('.goods-list');
    let listMarkup = '';
    this.goods.forEach( good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listMarkup += goodItem.render();
    });
    goodListEl.innerHTML = listMarkup;
  }

  goodsCost() {
    let cost = 0;
    this.goods.forEach( good => {
      if (good.price !== undefined) {
        cost += good.price;
      }
    });
    alert(`Стоимость всех товаров на странице ${cost}`);
  }
}
