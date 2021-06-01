<template>
  <div class="goods-item">
    <img class="goods-item-img" :src="'https://picsum.photos/id/' + checkedProduct.id_product + '/200/200'" :alt="checkedProduct.product_name" height="200" width="200">
    <h3 class="goods-item-title">{{ checkedProduct.product_name }}</h3>
    <p class="goods-item-price">Цена: {{ checkedProduct.price }} руб.</p>
    <button class="goods-item-button button" @click="addProduct">Добавить в корзину</button>
  </div>
</template>

<script>
import {eventBus} from "@/main";

export default {
  name: "CatalogItem",

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  computed: {
    checkedProduct() {
      return Object.assign({
        id_product: 1000,
        product_name: 'Товар отсутствует',
        price: 0
      }, this.product);
    }
  },

  methods: {
    addProduct() {
      eventBus.$emit('addProduct', this.checkedProduct);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/variables";

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
    width: 100%;
  }
}
</style>