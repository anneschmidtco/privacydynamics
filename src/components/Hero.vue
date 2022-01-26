<template>
  <div class="w-full hero" :class="page">
    <div class="container flex flex-col md:flex-row items-center py-20 md:py-44">
      <div class="w-full md:w-7/12 pr-0 md:pr-6">
        <div v-if="!animated || !headings" class="text-5xl md:text-[65px] font-light text-brand-gray leading-[75px] tracking-[-1.3px]" v-html="header(section_data.header)"></div>
        <div class="" v-if="animated && headings">
          <h1 class="text-5xl md:text-[65px] font-light text-brand-gray leading-[75px] tracking-[-1.3px]">{{ section_data.header }} <vue-typer :text="headings"></vue-typer></h1>
        </div>
        <p class="text-2xl text-brand-gray-light ml-3 mt-8 mb-14 leading-[32px] tracking-[-0.5px]">{{ section_data.subheader }}</p>
        <Button :link="'/'" :text="'Get Started'" />
      </div>
      <div class="w-full md:w-5/12 pl-0 md:pl-8 mt-10 md:mt-auto">
        <g-image :src="section_data.image" width="135" />
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
import Button from "~/components/Button.vue";

export default {
  data() {
    return {
      headings: ["Productivity", "Insights", "Progress", "Collaboration"],
    };
  },
  props: {
    section_data: Object,
    page: Object,
    animated: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    Button,
  },
  methods: {
    header(value) {
      const md = new MarkdownIt();
      return md.render(value);
    },
  },
};
</script>

<style>
.hero {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='1440' height='796.603' viewBox='0 0 1440 796.603'%3E%3Cdefs%3E%3ClinearGradient id='linear-gradient' x1='0.792' y1='1.406' x2='0.08' y2='-0.054' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0.405' stop-color='%23e4f26d' stop-opacity='0'/%3E%3Cstop offset='0.499' stop-color='%23e3f26c' stop-opacity='0.012'/%3E%3Cstop offset='0.577' stop-color='%23e2f26b' stop-opacity='0.055'/%3E%3Cstop offset='0.649' stop-color='%23e0f269' stop-opacity='0.125'/%3E%3Cstop offset='0.719' stop-color='%23def366' stop-opacity='0.224'/%3E%3Cstop offset='0.786' stop-color='%23dbf362' stop-opacity='0.353'/%3E%3Cstop offset='0.851' stop-color='%23d7f45d' stop-opacity='0.51'/%3E%3Cstop offset='0.915' stop-color='%23d3f558' stop-opacity='0.698'/%3E%3Cstop offset='0.976' stop-color='%23cef651' stop-opacity='0.906'/%3E%3Cstop offset='1' stop-color='%23ccf74f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect id='Rectangle_2' data-name='Rectangle 2' width='1440' height='796.603' transform='translate(1440 796.603) rotate(180)' opacity='0.554' fill='url(%23linear-gradient)'/%3E%3C/svg%3E%0A");
  background-size: cover;
  background-position: bottom right;
}
h1 strong,
h1 .vue-typer {
  font-weight: 600;
  position: relative;
}

@media (max-width: 640px) {
  h1 strong::after {
    width: 207px;
    height: 63px;
    z-index: -1;
  }
}
</style>