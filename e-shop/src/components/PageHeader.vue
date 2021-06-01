<template>
  <header class="page-header">
    <form action="#" class="search" @submit.prevent="filter">
      <input type="text" class="search-text"
             v-model="userSearch"
             @input="filter"
      >
      <input type="submit" class="search-submit button" value="поиск">
    </form>
    <button class="cart-button button" @click="toggleCartVisible($event)">Корзина</button>
  </header>
</template>

<script>
export default {
  name: "PageHeader",

  data() {
    return {
      userSearch: ''
    }
  },

  methods: {
    filter() {
      this.$emit('filterProducts', this.userSearch);
    },
    toggleCartVisible(evt) {
      this.$emit('toggleCartVisible', evt);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.page-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  background-color: $headerColor;
}
</style>