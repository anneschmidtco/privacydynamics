<template>
  <div class="w-full flex flex-col px-4 md:px-8 pt-8 md:pt-14 pb-8 md:pb-20 bg-brand-gray-lighter items-start">
    <div class="w-full flex justify-between">
      <span class="text-sm font-display font-semibold tracking-[2.1px]">{{ feature.tag }}</span>
      <span class="text-sm font-display font-semibold">0{{ index }}</span>
    </div>
    <div class="mt-14 mb-12 h-[68px]">
      <g-image :src="feature.icon" />
    </div>
    <div class="mb-12 min-h-[180px]">
      <h3 class="text-[45px] leading-[60px] font-normal tracking-[-1px]">{{ feature.title }}</h3>
    </div>
    <div class="text-[17px] leading-[28px] tracking-[-0.17px] mt-auto content" v-html="parse_markdown(feature.description)"></div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
import Button from "~/components/Button.vue";

export default {
  props: ["feature", "index"],
  components: {
    Button,
  },
  methods: {
    parse_markdown(value) {
      const md = new MarkdownIt();
      return md.render(value);
    },
  },
};
</script>

<style>
h1 strong {
  font-weight: 600;
}
</style>