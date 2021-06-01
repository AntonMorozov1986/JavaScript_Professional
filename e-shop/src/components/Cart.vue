<template>
  <div class="cart" v-show="isCartVisible" @click="toggleCartVisible($event)">
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
</template>

<script>
import {eventBus} from "@/main";

export default {
  name: "Cart",

  props: {
    isCartVisible: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      cartList: []
    }
  },

  methods: {
    toggleCartVisible(evt) {
      this.$emit('toggleCartVisible', evt);
    },
    reduceProduct(product) {
      if (product.quantity > 0) {
        product.quantity--;
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
    deleteProduct(product) {
      this.cartList.splice(this.cartList.indexOf(product), 1);
    }
  },

  created() {
    eventBus.$on('addProduct', product => this.addProduct(product));
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/variables";

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
</style>