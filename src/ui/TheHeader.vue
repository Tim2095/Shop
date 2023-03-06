<template>
  <header class="header">
    <nav class="nav">
      <ul class="ul">
        <div class="main-links">
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </div>
        <div class="cart-links">
          <router-link to="/shoppingCart"><font-awesome-icon icon="fa-solid fa-cart-shopping"/><span v-if="cartCounter">{{ cartCounter }}</span></router-link>
        </div>
      </ul>
    </nav>
  </header>
</template>



<script setup>
import { useCartStore } from '../stores/cart';
const store = useCartStore()

const cartCounter = store.cartCount

</script>


<style lang="scss" scoped>

@mixin flex-center($direction) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}
.header {
  background: #868e96;
  padding: 2rem;
}

.ul {
  list-style: none;
  padding: 0;
  margin: 0;
  @include flex-center(row);
}

a {
  text-decoration: none;
  font-size: 2rem;
  color: #d3f9d8;
  padding: 1rem;
}

.main-links {
  display: flex;
  @include flex-center(row);
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-grow: 0.8;
}

a:active,
a:hover,
a.router-link-active {
  background: #fab005;
}

span {
  margin-left: 1rem;
}
</style>
