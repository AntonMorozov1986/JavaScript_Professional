const CLASS_RELATIONS = {
  CatalogList: CatalogItem,
  CartList: CartItem
}

const cart = new CartList();
const products = new CatalogList(cart);

  // .then(() => alert(`массив товаров - ${list.goods}`));
// list.render();

// makeGETRequest(`${API_URL}/${CATALOG_DATA_JSON}`, (data) => console.log(data));