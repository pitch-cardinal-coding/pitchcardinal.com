<template>
  <footer class="bg-[#111827] text-light-grey">
    <Container class="flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal gap-10 py-20">
      <div class="w-full md:w-1/2 text-center md:text-left">
        <img
          src="../../assets/images/logo.png"
          class="max-w-[38px] mb-8 mx-auto md:mx-0"
          alt="LOGO"
        />

        <p class="mb-[40px] text-white text-[16px] leading-[35px]">
          Thanks to fine people like you, pitch cardinal can proudly
          <br hidden md:inline-block />
          sponsor Evan and the future of Vue.js by being a Platinum Patreon
        </p>

        <div>
          <h4
            class="text-[16px] font-neue font-semibold text-brand-grey mb-6 uppercase"
          >
            FOLLOW US IN SOCIAL MEDIA
          </h4>

          <div
            class="flex gap-2 sm:gap-4 items-center justify-center md:justify-normal"
          >
            <a
              href="https://twitter.com/pitchcardinal"
              target="_blank"
              class="w-[60px] h-[60px] bg-brand-black2 grid place-content-center rounded-full p-2.5"
            >
              <img
                src="../../assets/icons/twitter.svg"
                alt="Twitter icon"
                class="w-[25px] h-[25px]"
              />
            </a>

            <a
              href="https://github.com/pitch-cardinal-coding"
              target="_blank"
              class="w-[60px] h-[60px] bg-brand-black2 grid place-content-center rounded-full p-2.5"
            >
              <img
                src="../../assets/icons/github.svg"
                alt="Github icon"
                class="w-[25px] h-[25px]"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/pitch-cardinal/about/"
              target="_blank"
              class="w-[60px] h-[60px] bg-brand-black2 grid place-content-center rounded-full p-2.5"
            >
              <img
                src="../../assets/icons/linkedin.svg"
                alt="Linkedin icon"
                class="w-[25px] h-[25px]"
              />
            </a>

            <a
              href=""
              target="_blank"
              class="w-[60px] h-[60px] bg-brand-black2 grid place-content-center rounded-full p-2.5"
            >
              <img
                src="../../assets/icons/facebook.svg"
                alt="Facebook icon"
                class="w-[25px] h-[25px]"
              />
            </a>

            <a
              href=""
              target="_blank"
              class="w-[60px] h-[60px] bg-brand-black2 grid place-content-center rounded-full p-2.5"
            >
              <img
                src="../../assets/icons/youtube.svg"
                alt="Youtube icon"
                class="w-[25px] h-[25px]"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="w-full md:w-1/2 block md:flex gap-24">
        <div
          class="block sm:flex justify-between items-start w-full md:w-auto md:block text-center sm:text-left"
        >
          <div class="mb-12">
            <h3
              class="text-[16px] font-neue font-semibold text-brand-grey mb-5 uppercase"
            >
              Portfolio
            </h3>

            <ul>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[14px]">Courses</nuxt-link>
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[14px]">Workshop</nuxt-link>
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[14px]"
                  >Vue Masterclass</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="/" class="text-[14px]">Mastering Nuxt</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="mb-12">
            <h3
              class="text-[16px] font-neue font-semibold text-brand-grey mb-5 uppercase"
            >
              PRICING
            </h3>

            <ul>
              <li>
                <nuxt-link to="/" class="text-[14px]">Plans</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="mb-12">
            <h3
              class="text-[16px] font-neue font-semibold text-brand-grey mb-5 uppercase"
            >
              connect with us
            </h3>

            <ul>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[14px]">About Us</nuxt-link>
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[14px]">Careers</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" class="text-[14px]">Contact Us</nuxt-link>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="block sm:flex justify-between items-start w-full md:w-auto md:block text-center sm:text-left"
        >
          <div class="mb-12">
            <h3
              class="text-[16px] font-neue font-semibold text-brand-grey mb-5 uppercase"
            >
              Events
            </h3>

            <ul>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[14px]">Vuejs Nation</nuxt-link>
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[14px]">Nuxt Nation</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/" class="text-[14px]">Vuejs Forge</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="mb-12">
            <h3
              class="text-[16px] font-neue font-semibold text-brand-grey mb-5 uppercase"
            >
              Corporate
            </h3>

            <ul>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[14px]"
                  >Corporate Training</nuxt-link
                >
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[14px]"
                  >Developer Recruitment</nuxt-link
                >
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[14px]"
                  >Course Development</nuxt-link
                >
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[14px]"
                  >On-Site Workshops</nuxt-link
                >
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[14px]">Consulting</nuxt-link>
              </li>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[14px]"
                  >Affiliate Programs</nuxt-link
                >
              </li>
            </ul>
          </div>

          <div class="mb-12">
            <h3
              class="text-[16px] font-neue font-semibold text-brand-grey mb-5 uppercase"
            >
              Resources
            </h3>

            <ul>
              <li class="mb-3.5">
                <nuxt-link to="/" class="text-[14px]">Articles</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script setup lang="ts">
import Container from "./Container.vue";
</script>
