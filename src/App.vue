<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Header from "./components/partials/Header.vue";
import Footer from "./components/partials/Footer.vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>

<style lang="scss">
</style>
