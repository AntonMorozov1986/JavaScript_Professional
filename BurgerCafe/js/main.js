let orderButtonEl = document.querySelector('.burger > input[type="button"]');
orderButtonEl.addEventListener('click', () => {
  let customerBurger = new Burger();
  customerBurger.showDescription();
});
