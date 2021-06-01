<template>
  <div>
    <error-message v-if="isServerAvailable === false" />

    <page-header
        @filterProducts="filter"
        @toggleCartVisible="toggleCartVisible"
    ></page-header>

    <main class="main-content">

      <cart
          :is-cart-visible="isCartVisible"
          @toggleCartVisible="toggleCartVisible"
      ></cart>

      <div class="goods-list">
        <p class="goods-list-empty" v-show="filteredList.length === 0">К сожалению по вашему запросу ничего не найдено :-(</p>
        <catalog-item
            v-for="product of filteredList"
            :key="product.id_product"
            :product="product"
        ></catalog-item>
      </div>
    </main>
  </div>
</template>

<script>
const API_URL = 'https://raw.githubusercontent.com/AntonMorozov1986/GeekBrains_Tutorial_AJAX/main';
const CATALOG_DATA = '/catalogData.json';

import ErrorMessage from "@/components/ErrorMessage";
import PageHeader from "@/components/PageHeader";
import Cart from "@/components/Cart";
import CatalogItem from "@/components/CatalogItem";


export default {
  name: 'eShop',
  components: {
    pageHeader: PageHeader,
    catalogItem: CatalogItem,
    cart: Cart,
    errorMessage: ErrorMessage
  },
  data() {
    return {
      productsList: [],
      filteredList: [],
      isCartVisible: false,
      isServerAvailable: false
    }
  },

  methods: {
    makeGETRequestJSON(url) {
      return fetch(url)
          .then(response => {
            this.isServerAvailable = true;
            return response.json()})
          .catch(error => {
            this.isServerAvailable = false;
            console.log(`ОШИБКА!!! - ${error}`)
          });
    },

    toggleCartVisible(evt) {
      if (evt.target.classList.contains('cart') || evt.target.classList.contains('cart-button')) {
        this.isCartVisible = !this.isCartVisible;
        document.querySelector('body').classList.toggle('freeze');
      }
    },

    filter(evt) {
      let regexp = new RegExp(evt, 'i');
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
@import "scss/variables";

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



.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0 0 0;

  &-empty {
    margin: 0 auto;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
