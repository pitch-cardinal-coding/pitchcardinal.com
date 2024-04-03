<template>
  <Container>
    <nav class="bg-white py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-end gap-3 flex-nowrap">
          <img src="../../assets/images/logo.png" class="w-[20px]" alt="" />
          <h2 class="font-bold text-[18px]">PitchCardinal</h2>
        </div>

        <ul class="flex gap-4 items-center justify-center">
          <li>
            <a
              href="/"
              class="block py-2 px-3 text-brand-primary font-medium"
              >Home</a
            >
          </li>
          <li>
            <a
              href="/"
              class="block py-2 px-3 text-brand-black font-medium"
              >About Us</a
            >
          </li>
          <li>
            <a
              href="/"
              class="block py-2 px-3 text-brand-black font-medium"
              >Services</a
            >
          </li>
          <li>
            <a
              href="/"
              class="block py-2 px-3 text-brand-black font-medium"
              >Team</a
            >
          </li>
        </ul>

        <div>
          <button class="bg-brand-primary text-white px-6 py-3 rounded-xl font-semibold">Contact</button>
        </div>
      </div>
    </nav>
  </Container>
</template>

<script setup lang="ts">
import Container from "./Container.vue";
</script>
