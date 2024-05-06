<template>
  <Container>
    <nav class="bg-white py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-end gap-3 flex-nowrap">
          <img src="../../assets/images/logo.png" class="w-[20px]" alt="" />
          <h2 class="font-bold text-[16px] font-neue">PitchCardinal</h2>
        </div>

        <ul class="hidden md:flex gap-4 items-center justify-center">
          <li>
            <a
              href="#home"
              class="block py-2 px-3 text-brand-primary font-medium"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="block py-2 px-3 text-brand-black font-medium"
              >About Us</a
            >
          </li>
          <li>
            <a
              href="#services"
              class="block py-2 px-3 text-brand-black font-medium"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#portfolio"
              class="block py-2 px-3 text-brand-black font-medium"
              >Portfolio</a
            >
          </li>
          <!-- <li>
            <a href="#team" class="block py-2 px-3 text-brand-black font-medium"
              >Team</a
            >
          </li> -->
        </ul>

        <div>
          <button
            class="hidden md:inline-blockbg-brand-primary text-white px-6 py-3 rounded-xl font-medium"
          >
            Contact
          </button>

          <button
            class="inline-flex md:hidden items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            @click="openMenu = !openMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        :class="[
          'mobile-menu w-full bg-white border-b border-t fixed top-20 left-0',
          openMenu ? 'block' : 'hidden',
        ]"
      >
        <ul
          class="p-4 font-medium rounded-lg w-full px-[24px] md:px-0 md:w-[82vw] mx-auto"
        >
          <li>
            <a
              href="#home"
              @click="openMenu = false"
              class="block py-2 px-3 rounded md:bg-transparent text-blue-700"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#about"
              @click="openMenu = false"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >About Us</a
            >
          </li>
          <li>
            <a
              href="#services"
              @click="openMenu = false"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Services</a
            >
          </li>
          <li>
            <a
              href="/"
              @click="openMenu = false"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </Container>
</template>

<script setup lang="ts">
import Container from "./Container.vue";
import { ref } from "vue";

const openMenu = ref(true);
</script>
