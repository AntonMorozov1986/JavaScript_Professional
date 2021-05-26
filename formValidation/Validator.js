const NAME_REGEXP = /^[а-я]+\s?[а-я]+$/i;
const PHONE_REGEXP = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
const MAIL_REGEXP = /^[\w._-]+@[\w]+\.[a-z]{2,4}$/i;

const FORM_SELECTOR = 'form';

const ERR_MESSAGE_CLASS = 'err-message';
const INVALID_INPUT_CLASS = 'not-valid-input'

class Validator {
  constructor(formCssSelector = FORM_SELECTOR) {
    this.regexp = {
      name: NAME_REGEXP,
      phone: PHONE_REGEXP,
      mail: MAIL_REGEXP
    }
    this.errorMessage = {
      name: 'Имя может содержать только буквы русского алфавита и должно иметь вид: Имя или Имя Фамилия',
      phone: 'Телефонный номер должен быть следующего вида: +7(123)456-7890',
      mail: 'Email должен быть следующего вида: mymail@mail.ru или my.mail@mail.ru или my-mail@mail.ru или my_mail@mail.ru'
    }
    this.form = this._getFormEl(formCssSelector);
    this._init();
  }

  _init() {
    const inputsEl = this._getTextInputsEl();
    inputsEl.forEach(element => {
      element.addEventListener('change', evt => this._checkInputText(evt.target));
    })
    this.form.addEventListener('submit', evt => this._checkForm(evt));
  }

  _getFormEl(formSelector) {
    return document.querySelector(formSelector);
  }

  _getTextInputsEl() {
    return this.form.querySelectorAll('input[type="text"]')
  }

  _checkInputText(element) {
    let validity = this.regexp[element.id].test(element.value);
    if (validity) {
      element.classList.remove(INVALID_INPUT_CLASS);
      if (element.nextElementSibling.classList.contains(ERR_MESSAGE_CLASS)) {
        element.nextSibling.remove();
        return validity;
      }
      return validity;
    } else {
      element.classList.add(INVALID_INPUT_CLASS);
      if (element.nextElementSibling.classList.contains(ERR_MESSAGE_CLASS)) {
        return validity;
      }
      let paragraph = document.createElement('p');
      paragraph.textContent = this.errorMessage[element.id];
      paragraph.classList.add(ERR_MESSAGE_CLASS);
      element.after(paragraph);
      return validity;
    }
  }


  _checkForm(evt) {
    const inputsEl = this._getTextInputsEl();
    let formValidity = true;
    for (const element of inputsEl) {
      formValidity = this._checkInputText(element) && formValidity;
    }
    if (!formValidity) {
      evt.preventDefault();
    }
  }
}