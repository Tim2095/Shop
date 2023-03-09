<template>
  <div>
    <the-header></the-header>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <the-footer></the-footer>
  </div>
</template>


<style lang="scss">
.route-enter-from {
  transform: translateY(-100px);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-enter-to {
  transform: translateY(0);
}

.route-leave-active {
  transition: all 0.5s ease-in;
}
</style>

<script setup>
import TheHeader from './ui/TheHeader.vue'
import TheFooter from './ui/TheFooter.vue'
</script>
