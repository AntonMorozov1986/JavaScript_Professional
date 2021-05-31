<template>
  <div>
    <header class="page-header">
      <form action="#" class="search" @submit.prevent="filter">
        <input type="text" class="search-text" v-model="userSearch">
        <input type="submit" class="search-submit button" value="поиск">
      </form>
      <button class="cart-button button" @click="toggleCartVisible">Корзина</button>
    </header>

    <main class="main-content">
      <div class="cart" v-show="isCartVisible" @click="toggleCartVisible">
        <div class="cart-list">
          <p class="cart-empty" v-show="cartList.length === 0">корзина пуста</p>
          <div class="cart-item" v-for="item of cartList" :key="item.id_product">
            <img class="cart-item-img" :src="'https://picsum.photos/id/' + item.id_product + '/125/125'" :alt="item.product_name" width="125" height="125">
            <div class="cart-item-description">
              <p class="cart-item-title">{{ item.product_name }}</p>
              <p class="cart-item-price">Цена: {{ item.price }} руб.</p>
              <p class="cart-item-quantity">Количество: {{ item.quantity }} шт</p>
              <p class="cart-item-cost">Стоимость: {{ item.price * item.quantity }} руб.</p>
              <div>
                <button class="cart-item-reduce button" @click="reduceProduct(item)">&minus;</button>
                <button class="cart-item-add button" @click="addProduct(item)">&plus;</button>
                <button class="cart-item-delete button" @click="deleteProduct(item)">удалить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-list">
        <div class="goods-item" v-for="product of filteredList" :key="product.id_product" :data-id="product.id_product">
          <img class="goods-item-img" :src="'https://picsum.photos/id/' + product.id_product + '/200/200'" :alt="product.product_name" height="200" width="200">
          <h3 class="goods-item-title">{{ product.product_name }}</h3>
          <p class="goods-item-price">{{ product.price }}</p>
          <button class="goods-item-button button" @click="addProduct(product)">Добавить в корзину</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
const API_URL = 'https://raw.githubusercontent.com/AntonMorozov1986/GeekBrains_Tutorial_AJAX/main';
const CATALOG_DATA = '/catalogData.json';


export default {
  name: 'eShop',

  data() {
    return {
      productsList: [],
      filteredList: [],
      cartList: [],
      isCartVisible: false,
      userSearch: ''
    }
  },

  methods: {
    makeGETRequestJSON(url) {
      return fetch(url)
      .then(response => response.json())
      .catch(error => console.log(`ОШИБКА!!! - ${error}`));
    },

    toggleCartVisible(evt) {
      if (evt.target.classList.contains('cart') || evt.target.classList.contains('cart-button')) {
        this.isCartVisible = !this.isCartVisible;
        document.querySelector('body').classList.toggle('freeze');
      }
    },

    addProduct(product) {
      let foundProduct = this.cartList.find(element => element.id_product === product.id_product);
      if (foundProduct === undefined) {
        let cartProduct = Object.assign({quantity: 1}, product);
        this.cartList.push(cartProduct);
      } else {
        foundProduct.quantity++;
      }
    },

    reduceProduct(product) {
      if (product.quantity > 0) {
        product.quantity--;
      }
    },

    deleteProduct(product) {
      this.cartList.splice(this.cartList.indexOf(product), 1);
    },

    filter() {
      let regexp = new RegExp(this.userSearch, 'i');
      this.filteredList = this.productsList.filter(element => regexp.test(element.product_name));
    }
  },

  mounted() {
    this.makeGETRequestJSON(`${API_URL + CATALOG_DATA}`)
    .then(data => {
      for (const item of data) {
        this.productsList.push(item);
        this.filteredList.push(item);
      }
    });
  }

}
</script>

<style lang="scss">
$headerColor: #1abc9c;
$headerFontColor: #ffffff;
$headerButtonHover: #000000;
$goodsItemColor: #FFAE23;

body {
  margin: 0 auto;
  padding: 0;
  max-width: 1200px;
  background-color: #f2f2f2;
  font-family: sans-serif;
}

.freeze {
  overflow: hidden;
}

.page-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  background-color: $headerColor;
}

.button {
  margin: 0 10px 0 0;
  background-color: darken($headerColor, 10);
  border: none;
  color: $headerFontColor;
  text-transform: uppercase;
  font-size: 18px;
  &:hover {
    background-color: $headerButtonHover;

  }
  &:active {
    background-color: $headerColor;
  }
}

.search {
  display: flex;
  justify-content: space-between;
  width: 80%;

  &-text {
    padding: 6px;
    box-sizing: border-box;
    min-width: 80%;

    border: 1px solid black;
    font-size: 18px;
  }

  &-submit {
    min-width: 18%;
  }
}

.cart-button {
  min-width: 18%;
}

.main-content {
  position: relative;
}

.cart {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  //bottom: 0;
  left: 0;
  height: 100vh;
  padding: 40px;
  background-color: rgba(0,0,0,0.7);

  &-empty {
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
  }

  &-list {
    display: flex;
    flex-direction: column;
    //flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    padding: 20px;
    background-color: #eee;
    max-width: 500px;
    max-height: 80%;
    overflow-y: auto;
  }

  &-item {
    margin: 15px;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 5px;
    background-color: $goodsItemColor;

    &-description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 0 0 30px;

      & p {
        margin: 0;
      }
    }

    &-title {
      font-weight: bold;
    }
  }
}

.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0 0 0;

}

.goods-item {
  margin: 0 0 20px 0;
  padding: 15px;
  background-color: $goodsItemColor;
  border-radius: 8px;

  &-button {
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
    text-transform: capitalize;
  }
}
</style>
