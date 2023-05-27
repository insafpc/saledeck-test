<script setup lang="ts">
import TopNav from './components/TopNav.vue';
import StepsComponent from './components/StepsComponent.vue';
import CartComponent from './components/CartComponent.vue';

</script>

<template>
  <main>
    <TopNav />
    <section>
      <StepsComponent />
      <CartComponent />
    </section>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 90px 0;
}

section {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
</style>
