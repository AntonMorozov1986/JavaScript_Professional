const goods = [
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

/**
 * Функция создает разметку карточки товара
 * @param {string} title - наименование товара
 * @param {number} price - цена товара
 * @return {string} - HTML разметка карточки товара
 */

/*
  В этой функции можно отказаться от фигурных скобок и ключевого слова return, т.к. это стрелочная функция
 */
const renderGoodsItem = (title= 'Товар недоступен', price= 0) => `
<div class="goods-item">
  <img class="goods-item-img" src="#" alt="${title}" height="300" width="300">
  <h3 class="goods-item-title">${title}</h3>
  <p class="goods-item-price">${price}</p>
  <button class="goods-item-button button">Добавить в корзину</button>
</div>
`;

/**
 * Функция создает и вставляет разметку списка товаров на страницу
 * @param {array} list - массив объектов товаров
 */

/*
  На мой взгляд более понятно (легче читается) если мы сначала находим элемент и потом с ним работает.
  Чтобы убрать запятую используем метод "join". При неявном приведении массива к строке элементы
  выводятся через запятую.
  Также можно отказаться от создания переменной с новым массивом, а сразу присваивать значение в innerHTML.
  Насколько мне известно, лучше будет не использовать innerHTML, а использовать textContent и потом добовлять
  элементы через appendChild,так ли это?
*/
const renderGoodsList = (list = []) => {
  let goodListEl = document.querySelector('.goods-list');
  goodListEl.innerHTML = list.map( item => renderGoodsItem(item.title, item.price)).join('\n');
}
renderGoodsList(goods);