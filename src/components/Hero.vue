<template>
  <div class="w-full hero" :class="page">
    <div class="container px-4 md:px-8 flex flex-col md:flex-row items-center py-14 md:py-44">
      <div class="w-full text-left pr-0 md:pr-6" :class="page === 'product' ? 'md:w-6/12' : 'md:w-7/12'">
        <div v-if="!animated || !section_data.animated_headings" class="relative inline-flex">
          <div class="text-4xl md:text-[60px] font-light text-gray leading-snug md:leading-[75px] tracking-[-1.3px] inline" v-html="parseMarkdown(section_data.header)"></div>
          <span class="absolute bottom-0 right-0 lot-fig">
            <lottie-player ref="loticon" src="https://assets1.lottiefiles.com/packages/lf20_xjkbcuyr.json" background="transparent" speed="1" autoplay></lottie-player>
          </span>
        </div>
        <div class="" v-if="animated && section_data.animated_headings">
          <h1 class="text-4xl md:text-[60px] font-light text-gray md:leading-[75px] tracking-[-1.3px] break-words">
            {{ section_data.header }} <ClientOnly><vue-typer :text="parseAnimatedHeadings(section_data.animated_headings)"></vue-typer></ClientOnly>
          </h1>
        </div>
        <p class="text-xl md:text-2xl text-gray-light mt-8 mb-14 leading-[32px] tracking-[-0.5px] max-w-xl">{{ section_data.sub_header }}</p>
        <Button :link="'/'" :text="'Get Started'" :isButton="false" />
      </div>
      <div class="w-full pl-0 md:pl-8 md:mt-auto" :class="page === 'product' ? 'md:w-6/12' : 'md:w-5/12'">
        <g-image :src="section_data.image" v-if="page !== 'home'" width="135" v-animate.repeat="'fade-in'" />
        <lottie-player v-if="page === 'home'" src="https://assets5.lottiefiles.com/packages/lf20_wxzr41wu.json" background="transparent" speed="1" loop autoplay></lottie-player>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/Button.vue";
import { parseMarkdown } from "~/helpers";
export default {
  props: {
    section_data: Object,
    page: String,
    animated: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    Button,
    VueTyper: () =>
      import("vue-typer")
        .then((m) => m.VueTyper)
        .catch(),
  },
  methods: {
    parseMarkdown,
    parseAnimatedHeadings(str = "") {
      return str.split(",");
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

.hero h1 strong,
.hero h1 .vue-typer {
  @apply font-semibold relative text-gray;
}

.hero h1 {
  @apply inline;
}

@media (max-width: 640px) {
  .hero h1 strong::after {
    width: 207px;
    height: 63px;
    z-index: -1;
  }
}
</style>