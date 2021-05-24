class List {
  /**
   *
   * @param url
   * @param cssSelector
   * @param classRelation
   */
  constructor(url, cssSelector, classRelation = CLASS_RELATIONS) {
    this.apiUrl = url;
    this.cssSelector = cssSelector;
    this.classRelation = classRelation;
    this.goods = [];
    this.productsList = [];
    this._init();
  }

  _init() {
    return false;
  }

  getJson(url) {
    return fetch(url ? url : `${API_URL + this.apiUrl}`)
      .then(response => response.json())
      .catch(error => console.log(`ОШИБКА!!! - ${error}`));
  }

  handleData(data) {
    this.goods = [...data];
    this.render();
  }

  render() {
    const htmlEl = document.querySelector(this.cssSelector);
    for (let product of this.goods) {
      const productObject = new this.classRelation[this.constructor.name](product);
      this.productsList.push(productObject);
      htmlEl.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}