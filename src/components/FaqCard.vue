<template>
  <div class="bg-white mb-2 p-2 px-6 pb-0 rounded-xl border border-gray-200">
    <h2 id="accordion-flush-heading-1">
      <button
        @click="update"
        type="button"
        :class="['flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 gap-3', selected == index ? 'border-b' : '']"
        data-accordion-target="#accordion-flush-body-1"
        aria-expanded="true"
        :aria-controls="`accordion-flush-body-${index}`"
      >
        <span class="text-[20px] text-grey2 font-neue font-semibold">{{
          service?.title
        }}</span>

        <div>
          <div
            class="bg-grey2 rounded-full h-[40px] w-[40px] flex items-center justify-center"
            v-if="selected != index"
          >
            <RiAddFill color="white" />
          </div>
          <div
            class="bg-grey2 rounded-full h-[40px] w-[40px] flex items-center justify-center"
            v-else
          >
            <RiSubtractFill color="white" />
          </div>
        </div>
      </button>
    </h2>
    <div
      :id="`accordion-flush-body-${index}`"
      :aria-labelledby="`accordion-flush-heading-${index}`"
      :class="['py-2 pb-6', selected == index ? '' : 'hidden']"
    >
      <div class="py-5">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is an open-source library of interactive components built on
          top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
          more.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to
          <a
            href="/docs/getting-started/introduction/"
            class="text-blue-600 dark:text-blue-500 hover:underline"
            >get started</a
          >
          and start developing websites even faster with components on top of
          Tailwind CSS.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RiAddFill, RiSubtractFill } from "@remixicon/vue";

const props = defineProps({
  service: {
    type: Object,
  },
  index: {
    type: Number,
  },
  selected: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["updateSelected"]);

const update = () => {
  emit("updateSelected", props.index);
};
</script>
