class BurgerProperty {
  constructor(element) {
    this.name = element.value;
    this.price = +element.dataset.price;
    this.calories = +element.dataset.calories;
  }

  /**
   * Метод возвращает описание свойства бургера
   * @return {string}
   */
  getDescription() {
    const namesArray = ['big', 'small', 'cheese', 'salad', 'potato', 'seasoning', 'mayonnaise'];
    const descriptionsArray = ['большой', 'маленький', 'сыром', 'салатом', 'картошкой', 'специи', 'майонез'];
    for (let i = 0; i <= namesArray.length; i++) {
      if (namesArray[i] === this.name) {
        return descriptionsArray[i];
      }
    }
  }
}
