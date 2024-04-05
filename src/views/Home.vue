<template>
  <section id="home" class="hero">
    <Container>
      <div class="py-16 flex justify-center">
        <div class="text-center my-10">
          <h1
            class="mb-4 text-[2.7rem] sm:text-[5rem] font-semibold leading-[120%] text-grey2 font-neue"
          >
            Crafting tomorrow <br class="hidden md:inline-block" />
            enterprises, today
          </h1>
          <p class="text-grey text-[20px] leading-[180%] mb-8">
            We believe in delivering excellence, pioneering innovation,
            <br class="hidden md:inline-block" />
            and driving sustainable growth for all stakeholders.
          </p>

          <div class="flex justify-center gap-4">
            <button
              class="bg-brand-primary text-white px-8 py-3 rounded-xl font-medium"
            >
              Get in touch
            </button>
            <button
              class="bg-light-grey text-brand-black px-8 py-3 rounded-xl font-medium"
            >
              View works
            </button>
          </div>
        </div>
      </div>
    </Container>
  </section>

  <section id="about" class="bg-grey4">
    <Container>
      <div class="py-24 pb-36">
        <div
          class="flex items-start lg:items-center md:flex-nowrap flex-wrap md:justify-start justify-center gap-16 mb-24"
        >
          <img
            src="../assets/images/about2.png"
            class="w-[300px] h-[300px]"
            alt=""
          />
          <div class="text-grey2">
            <h5
              class="text-brand-primary text-[16px] mb-1 font-neue text-center md:text-left"
            >
              About us
            </h5>
            <p
              class="text-[22px] md:text-[40px] leading-[180%] font-neue text-center md:text-left"
            >
              Founded in 2020,
              <span class="text-brand-primary font-neue font-semibold"
                >Pitch Cardinal</span
              >
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

  <section id="approach" class="bg-white">
    <Container>
      <div class="py-24">
        <div class="text-center mb-20">
          <h5 class="mb-4 text-brand-primary font-medium text-[16px] font-neue">
            Approach
          </h5>

          <h2 class="text-[28px] md:text-[52px] text-grey2 mb-1 font-neue font-semibold">
            Our <i class="pt-serif-italic">Approach</i>
          </h2>
          <p class="text-[18px] text-grey font-medium">
            we follow a six-step process to ensure we meet our clients’
            <br class="hidden md:inline-block" />
            needs and exceed their expectations
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

  <section id="services" class="bg-grey4">
    <Container>
      <div class="py-24">
        <div class="text-center mb-20">
          <h5 class="mb-4 text-brand-primary font-medium text-[16px] font-neue">
            Services and Solutions
          </h5>

          <h2 class="text-[28px] md:text-[52px] text-grey2 mb-1 font-semibold font-neue">
            Delivering <i class="pt-serif-italic">value</i> across domains
          </h2>
          <p class="text-[18px] text-grey font-medium">
            At Pitch Cardinal we offer a comprehensive suite of services
            <br class="hidden md:inline-block" />
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
            <faq-card
              v-for="(service, index) in services"
              :key="service.title"
              :service="service"
              :index="index"
              :selected="selectedService"
              @update-selected="selectedService = index"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>

  <section id="portfolio" class="bg-white">
    <Container>
      <div class="py-24">
        <div class="text-center mb-20">
          <h5 class="mb-4 text-brand-primary font-medium text-[16px] font-neue">
            Portfolio
          </h5>

          <h2 class="text-[28px] md:text-[52px] text-grey2 mb-1 font-semibold font-neue">
            Some of <i class="pt-serif-italic">our</i> works
          </h2>
        </div>

        <div class="">
          <div class="flex items-stretch flex-wrap md:flex-nowrap gap-10 mb-20">
            <div
              class="flex w-full md:w-8/12 h-[500px] md:h-auto rounded-2xl bg-cover bg-center bg-no-repeat bg-red-300"
              :style="`background-image: url(${PortfolioImg1})`"
            ></div>
            <div class="w-full md:w-4/12 bg-light-grey p-8 rounded-2xl">
              <div
                class="p-4 px-6 rounded-3xl border mb-10 md:mb-60 inline-block"
              >
                DIGITAL ARTS, ILLUSTRATIONS
              </div>

              <h1 class="font-neue text-[25px] font-semibold text-grey2 mb-3">
                Sparks of Elves
              </h1>
              <p class="text-grey leading-[180%] mb-10">
                Service Brading, Marketing Client Umbrella Corp. Industry
                Pharmaceutics Intro Roof party 90’s glossier farm-to-table
              </p>
            </div>
          </div>

          <div class="flex items-stretch flex-wrap md:flex-nowrap gap-10 mb-20">
            <div
              class="flex w-full md:w-8/12 h-[500px] md:h-auto rounded-2xl bg-cover bg-no-repeat bg-red-300"
              :style="`background-image: url(${PortfolioImg2})`"
            ></div>
            <div class="w-full md:w-4/12 bg-light-grey p-8 rounded-2xl">
              <div
                class="p-4 px-6 rounded-3xl border mb-10 md:mb-60 inline-block"
              >
                DIGITAL ARTS, ILLUSTRATIONS
              </div>

              <h1 class="font-neue text-[25px] font-semibold text-grey2 mb-3">
                Sparks of Elves
              </h1>
              <p class="text-grey leading-[180%] mb-10">
                Service Brading, Marketing Client Umbrella Corp. Industry
                Pharmaceutics Intro Roof party 90’s glossier farm-to-table
              </p>
            </div>
          </div>

          <div class="flex items-stretch flex-wrap md:flex-nowrap gap-10 mb-20">
            <div
              class="flex w-full md:w-8/12 h-[500px] md:h-auto rounded-2xl bg-cover bg-no-repeat bg-red-300"
              :style="`background-image: url(${PortfolioImg3})`"
            ></div>
            <div class="w-full md:w-4/12 bg-light-grey p-8 rounded-2xl">
              <div
                class="p-4 px-6 rounded-3xl border mb-10 md:mb-60 inline-block"
              >
                DIGITAL ARTS, ILLUSTRATIONS
              </div>

              <h1 class="font-neue text-[25px] font-semibold text-grey2 mb-3">
                Sparks of Elves
              </h1>
              <p class="text-grey leading-[180%] mb-10">
                Service Brading, Marketing Client Umbrella Corp. Industry
                Pharmaceutics Intro Roof party 90’s glossier farm-to-table
              </p>
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
import FaqCard from "../components/FaqCard.vue";
import PortfolioImg1 from "../assets/images/portfolio-1.webp";
import PortfolioImg2 from "../assets/images/portfolio-2.webp";
import PortfolioImg3 from "../assets/images/portfolio-3.webp";
import { ref } from "vue";
import {
  RiQuestionLine,
  RiPuzzleFill,
  RiLightbulbFlashFill,
  RiCheckboxCircleLine,
  RiRocketFill,
  RiBarChart2Fill,
} from "@remixicon/vue";

const selectedService = ref(0);
const approachList = ref([
  {
    icon: RiQuestionLine,
    title: "Discovery",
    desc: "Id dolor varius nisl duis vel cras sit purus in. Tellus faucibus sagittis mattis vitae arcu aliquet at consectetur. Maecenas purus turpis augue viverra mi ut viverra. ",
  },
  {
    icon: RiPuzzleFill,
    title: "Strategy",
    desc: "Id dolor varius nisl duis vel cras sit purus in. Tellus faucibus sagittis mattis vitae arcu aliquet at consectetur. Maecenas purus turpis augue viverra mi ut viverra. ",
  },
  {
    icon: RiLightbulbFlashFill,
    title: "Concept",
    desc: "Id dolor varius nisl duis vel cras sit purus in. Tellus faucibus sagittis mattis vitae arcu aliquet at consectetur. Maecenas purus turpis augue viverra mi ut viverra. ",
  },
  {
    icon: RiCheckboxCircleLine,
    title: "Execution",
    desc: "Id dolor varius nisl duis vel cras sit purus in. Tellus faucibus sagittis mattis vitae arcu aliquet at consectetur",
  },
  {
    icon: RiRocketFill,
    title: "Launch",
    desc: "Id dolor varius nisl duis vel cras sit purus in. Tellus faucibus sagittis mattis vitae arcu aliquet at consectetur. Maecenas purus turpis augue viverra mi ut viverra. ",
  },
  {
    icon: RiBarChart2Fill,
    title: "Analysis",
    desc: "Id dolor varius nisl duis vel cras sit purus in. Tellus faucibus sagittis mattis vitae arcu aliquet at consectetur. Maecenas purus turpis augue viverra mi ut viverra. ",
  },
]);

const services = ref([
  {
    title: "Cloud Architecture and Management",
    desc: "",
  },
  {
    title: "Software Development",
    desc: "",
  },
  {
    title: "Server Management and Configuration",
    desc: "",
  },
  {
    title: "Digital Marketing",
    desc: "",
  },
  {
    title: "Product Design",
    desc: "",
  },
]);
</script>
