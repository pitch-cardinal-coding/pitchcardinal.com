<template>
  <div class="overflow-hidden rounded-2xl shadow-lg bg-white border">
    <div class="bg-brand-primary h-[20px]"></div>
    <div class="bg-white rounded-2xl p-8 relative z-2 -top-[14px]">
      <div class="flex items-center justify-between">
        <h3 class="font-medium text-brand-primary text-[25px]">
          {{ number < 10 ? `0` + number : number }}
        </h3>
        <div
          class="bg-light-grey border border-light-grey h-[50px] w-[50px] rounded-full inline-grid place-content-center mb-5"
        >
          &copy;
        </div>
      </div>

      <h1 class="mb-3 text-grey2 text-[26px] font-medium">
        {{ approach?.title }}
      </h1>
      <p class="text-grey text-[16px] leading-[170%] mb-5">
        {{ approach?.desc }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  approach: {
    type: Object,
  },
  number: {
    type: Number,
    default: 1,
  },
});
</script>
