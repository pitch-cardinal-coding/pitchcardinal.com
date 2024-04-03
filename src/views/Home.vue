<template>
  <section class="hero">
    <Container>
      <div class="py-16 flex justify-center">
        <div class="text-center my-10">
          <h1 class="mb-4 text-[5rem] font-semibold leading-[120%] text-grey2">
            Crafting tomorrow <br />
            enterprises, today
          </h1>
          <p class="text-grey text-[20px] leading-[180%] mb-8">
            We believe in delivering excellence, pioneering innovation, <br />
            and driving sustainable growth for all stakeholders.
          </p>

          <div class="flex justify-center gap-4">
            <button
              class="bg-brand-primary text-white px-8 py-3 rounded-xl font-semibold"
            >
              Get in touch
            </button>
            <button
              class="bg-light-grey text-brand-black px-8 py-3 rounded-xl font-semibold"
            >
              View works
            </button>
          </div>
        </div>
      </div>
    </Container>
  </section>

  <section class="bg-grey4">
    <Container>
      <div class="py-24 pb-36">
        <div class="flex items-center gap-16 mb-24">
          <img
            src="../assets/images/about2.png"
            class="w-[300px] h-[300px]"
            alt=""
          />
          <div class="text-grey2">
            <h5 class="text-brand-primary text-[16px] mb-1">About us</h5>
            <p class="text-[40px] leading-[180%]">
              Founded in 2020,
              <i class="pt-serif-italic text-brand-primary">Pitch cardinal</i>
              has cemented its place as a
              <i class="pt-serif-italic">global leader</i> in IT Service and
              Solution. With our dedication to quality, innovation, and
              sustainability, we continue to shape the
              <i class="pt-serif-italic">future of the industry</i>.
            </p>
          </div>
        </div>

        <div class="text-center">
          <h2 class="mb-6 text-grey font-medium text-[18px]">
            We have worked with large corporate teams:
          </h2>

          <div class="flex justify-center flex-wrap gap-3 items-center">
            <img src="../assets/images/brand1.webp" class="w-[150px]" alt="" />
            <img src="../assets/images/brand2.webp" class="w-[150px]" alt="" />
            <img src="../assets/images/brand3.webp" class="w-[150px]" alt="" />
            <img src="../assets/images/brand6.webp" class="w-[150px]" alt="" />
            <img src="../assets/images/brand4.webp" class="w-[150px]" alt="" />
            <img src="../assets/images/brand5.webp" class="w-[150px]" alt="" />
          </div>
        </div>
      </div>
    </Container>
  </section>

  <section class="bg-white">
    <Container>
      <div class="py-24">
        <div class="text-center mb-20">
          <h5 class="mb-4 text-brand-primary font-medium text-[16px]">
            Approach
          </h5>

          <h2 class="text-[52px] text-grey2 mb-1 font-medium">
            Our <i class="pt-serif-italic">Approach</i>
          </h2>
          <p class="text-[18px] text-grey font-medium">
            we follow a six-step process to ensure we meet our clients’ <br />
            needs and exceed their expectations
          </p>
        </div>

        <div class="grid grid-cols-3 gap-6 mb-16">
          <approach-card
            v-for="(approach, index) in approachList"
            :key="approach.title"
            :approach="approach"
            :number="index + 1"
          />
        </div>
      </div>
    </Container>
  </section>

  <section class="bg-grey4">
    <Container>
      <div class="py-24">
        <div class="text-center mb-20">
          <h5 class="mb-4 text-brand-primary font-medium text-[16px]">
            Services and Solutions
          </h5>

          <h2 class="text-[52px] text-grey2 mb-1 font-medium">
            Delivering <i class="pt-serif-italic">value</i> across domains
          </h2>
          <p class="text-[18px] text-grey font-medium">
            At pitch cardinal we offer a comprehensive suite of services <br />
            to help your brand shinme
          </p>
        </div>

        <div class="">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span>What is Flowbite?</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              class="hidden"
              aria-labelledby="accordion-flush-heading-1"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to
                  <a
                    href="/docs/getting-started/introduction/"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                    >get started</a
                  >
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
              >
                <span>Is there a Figma file available?</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-2"
              class="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out the
                  <a
                    href="https://flowbite.com/figma/"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                    >Figma design system</a
                  >
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-3">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded="false"
                aria-controls="accordion-flush-body-3"
              >
                <span
                  >What are the differences between Flowbite and Tailwind
                  UI?</span
                >
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-3"
              class="hidden"
              aria-labelledby="accordion-flush-heading-3"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    <a
                      href="https://flowbite.com/pro/"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                      >Flowbite Pro</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      class="text-blue-600 dark:text-blue-500 hover:underline"
                      >Tailwind UI</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "../components/partials/Container.vue";
import ApproachCard from "../components/ApproachCard.vue";
import { ref } from "vue";

const approachList = ref([
  {
    title: "Discovery",
    desc: "Id dolor varius nisl duis vel cras sit purus in. Tellus faucibus sagittis mattis vitae arcu aliquet at consectetur. Maecenas purus turpis augue viverra mi ut viverra. ",
  },
  {
    title: "Strategy",
    desc: "Id dolor varius nisl duis vel cras sit purus in. Tellus faucibus sagittis mattis vitae arcu aliquet at consectetur. Maecenas purus turpis augue viverra mi ut viverra. ",
  },
  {
    title: "Concept",
    desc: "Id dolor varius nisl duis vel cras sit purus in. Tellus faucibus sagittis mattis vitae arcu aliquet at consectetur. Maecenas purus turpis augue viverra mi ut viverra. ",
  },
  {
    title: "Execution",
    desc: "Id dolor varius nisl duis vel cras sit purus in. Tellus faucibus sagittis mattis vitae arcu aliquet at consectetur",
  },
  {
    title: "Launch",
    desc: "Id dolor varius nisl duis vel cras sit purus in. Tellus faucibus sagittis mattis vitae arcu aliquet at consectetur. Maecenas purus turpis augue viverra mi ut viverra. ",
  },
  {
    title: "Analysis",
    desc: "Id dolor varius nisl duis vel cras sit purus in. Tellus faucibus sagittis mattis vitae arcu aliquet at consectetur. Maecenas purus turpis augue viverra mi ut viverra. ",
  },
]);
</script>
