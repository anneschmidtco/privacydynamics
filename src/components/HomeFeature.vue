<template>
  <div class="w-full flex flex-col px-4 md:px-8 pt-8 md:pt-14 pb-14 md:pb-20 bg-gray-lighter items-start">
    <div class="w-full flex justify-between">
      <span class="text-sm font-display font-semibold tracking-[2.1px]">{{ feature.tag }}</span>
      <span class="text-sm font-display font-semibold">0{{ index }}</span>
    </div>
    <div class="mt-14 mb-12 h-[68px]" v-animate.repeat="'zoom-in'">
      <g-image :src="feature.icon" />
    </div>
    <div class="mb-10 md:mb-12 md:min-h-[180px]">
      <h3 class="text-32 md:text-[45px] leading-45 md:leading-60 font-normal tracking-[-0.96px] md:tracking-[-1px]" v-animate.repeat="'fade-in-down'">{{ feature.title }}</h3>
    </div>
    <div class="text-base md:text-17 leading-26 tracking-[-0.16px] md:tracking-[-0.17px] mt-auto content" v-animate.repeat="'fade-in-up'" v-html="parseMarkdown(feature.description)"></div>
  </div>
</template>

<script>
import Button from "~/components/Button.vue";
import { parseMarkdown } from "~/helpers";

export default {
  props: ["feature", "index"],
  components: {
    Button,
  },
  methods: {
    parseMarkdown,
  },
};
</script>

<style>
h1 strong {
  font-weight: 600;
}
</style>