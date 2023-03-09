<template>

    <div class="products-content"> 
      <div class="img-cnt">
        <router-link :to="linkProductDetails">
          <img :src="image" alt="product image" />
        </router-link>
      </div>
      <div class="products-info">
        <router-link :to="linkProductDetails">{{ title }}</router-link>
        <p>{{ price }}</p>
      </div>
      <button @click="store.addProduct(id)">Buy</button>
   
    </div>
</template>

<script setup>
// import { useMotion } from '@vueuse/motion'
import { computed } from 'vue'
import { ref } from 'vue';
import { useProductStore } from '../stores/product'
const props = defineProps(['title', 'price', 'image', 'id'])
const store = useProductStore()

const linkProductDetails = computed(function () {
  return '/products' + '/' + props.id
})

const target = ref('div')


// const motionInstance = useMotion(target, {
//     initial: {
//         opacity: 0,
//         y: 100
//     },
//     enter: {
//         opacity: 1,
//         y: 0
//     }
//   })

//   motionInstance()

</script>

<style lang="scss" scoped>

img {
  width: 150px;
}

.products-content {
  grid-template-rows: 5fr 2fr 1fr;
  grid-template-columns: 1fr;
  border: 1px solid black;
  width: 100%;
  justify-items: center;
  align-items: center;
  margin-top: 2rem;

  .img-cnt {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .products-info {
    font-size: 1.6rem;
    padding: 1rem;
    text-align: center;
  }

  button {
    padding: 1rem 2rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  a:link,
  a:visited {
    color: #000;
  }
}


</style>
