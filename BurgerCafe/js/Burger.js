class Burger {
  constructor() {
    this.size = this._getProperty('size');
    this.filling = this._getProperty('filling');
    this.topping = this._getProperty('topping');
  }

  /**
   * Метод создает HTML разметку и показвает ее на странице
   */
  showDescription() {
    let descriptionEl = document.querySelector('.burger-description');
    descriptionEl.innerHTML = `Вы выбрали:<br>
    ${this._getDescription('size')} бургер c ${this._getDescription('filling')},<br>
    топинг - ${this._getDescription('topping')}.<br>
    Стоимость бургера: ${this._getCost()} рублей,<br>
    Калорийность бургера: ${this._getCalories()} ккал.`;
  }

  /**
   * Метод находит выбранные ингридиенты бургера в форме страницы и возвращает массив объектов со свойствами
   * @param attributeName - значение атрибута "name" тегов input
   * @return {array}
   * @private
   */
  _getProperty(attributeName) {
    let checkedElements = document.querySelectorAll(`input[name="${attributeName}"]:checked`);
    let propertyArray = [];
    checkedElements.forEach( element => propertyArray.push(new BurgerProperty(element)));
    return propertyArray;
  }

  /**
   * Метод создает описание выбранного свойтсва
   * @param propertyName
   * @return {string}
   * @private
   */
  _getDescription(propertyName) {
    let description = '';
    if (this[propertyName].length === 0) {
      return 'отсутствует';
    }
    for (let i = 0; i < this[propertyName].length; i++) {
      if (i > 0) {
        description += ' и ';
      }
      description += this[propertyName][i].getDescription();
    }
    return description;
  }

  /**
   * Метод возвращает стоимость бургера
   * @return {number}
   * @private
   */
  _getCost() {
    return this._calculatePropertySum('price');
  }

  /**
   * Метод возвращает калорийность бургера
   * @return {number}
   * @private
   */
  _getCalories() {
    return this._calculatePropertySum('calories');
  }

  /**
   * Метод считает сумму значений выбранного свойтва
   * @param propertyName - выбранное свойство (цена или калории)
   * @return {number}
   * @private
   */
  _calculatePropertySum(propertyName) {
    let sum = 0;
    let ownProperties = Object.getOwnPropertyNames(this);
    ownProperties.forEach( property => {
      this[property].forEach( element => {
        sum += element[propertyName];
      });
    });
    return sum;
  }
}
