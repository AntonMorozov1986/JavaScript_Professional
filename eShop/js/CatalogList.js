class CatalogList extends List {
  /**
   *
   * @param cartObject
   * @param url
   * @param cssSelector
   */
  constructor(cartObject, url = CATALOG_DATA_URL, cssSelector = CATALOG_LIST_CSS_SELECTOR) {
    super(url, cssSelector);
    this.cartObject = cartObject
    this.getJson()
      .then(data => this.handleData(data));
  }

  _init() {
    let catalogListEl = document.querySelector(this.cssSelector);
    catalogListEl.addEventListener('click', evt => {
      if (evt.target.classList.contains('goods-item-button') === true) {
        this.cartObject.addProduct(evt.target);
      }
    })
  }
}