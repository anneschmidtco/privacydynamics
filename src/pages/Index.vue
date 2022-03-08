<template>
  <Layout>
    <Hero :section_data="$page.pages.hero_section" :page="'home'" :animated="true" />
    <div class="w-full bg-brand-gray-lighter py-14 md:py-0 border-b border-brand-gray-border md:border-none">
      <div class="container flex flex-col md:flex-row px-0">
        <div class="w-full md:w-1/3 feature-item" :class="index < 2 ? 'border-b border-brand-gray-border' : ''" v-for="(feature, index) in $page.pages.features" :key="index">
          <HomeFeature :feature="feature" :index="index + 1" />
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col bg-brand-gray text-white md:border-b border-brand-gray-light">
      <div class="container flex flex-col py-14 md:pt-24 md:pb-18">
        <div class="w-full text-left md:text-center flex flex-col justify-center">
          <h2 class="text-[32px] md:text-[50px] leading-[45px] md:leading-[63px] tracking-[-0.96px] md:tracking-[-1.5px] mb-6" v-animate.repeat="'fade-in-down'">{{ $page.pages.integration_section.title }}</h2>
          <div class="max-w-[632px] mx-auto text-[17px] leading-[28px] tracking-[-0.17px] content" v-animate.repeat="'fade-in-up'" v-html="parseMarkdown($page.pages.integration_section.sub_title)"></div>
        </div>
        <div class="w-full px-4 mt-8 md:mt-0">
          <div class="block md:hidden">
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_cnwbtzcp/Data Flow Mobile.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
          <div class="hidden md:block">
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_ioidqxga/data flow.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col bg-brand-gray text-white md:border-b border-brand-gray-light">
      <div class="container pt-9 pb-14 md:pt-32 md:pb-36 flex flex-col md:border-l border-brand-gray-light md:pl-24 relative md:items-center justify-center">
        <p class="hidden md:flex text-left md:text-center md:absolute md:rotate-[-90deg] mb-8 md:mb-auto md:left-[-116px] tracking-[2.4px] font-display">{{ $page.pages.stats_section.cta_text }}</p>
        <div class="w-full flex justify-between md:justify-center mb-4 md:mb-auto md:hidden">
          <p class="text-left md:text-center md:absolute md:rotate-[-90deg] mb-8 md:mb-auto md:left-[-116px] tracking-[2.4px] font-display">{{ $page.pages.stats_section.cta_text }}</p>
          <div class="inline-flex md:hidden max-w-[55px]">
            <g-image :src="$page.pages.stats_section.icon" v-animate.repeat="'zoom-in'" />
          </div>
        </div>
        <div class="w-full flex flex-col md:flex-row justify-between mb-12 md:mb-24">
          <div class="stats-title-wrapper title-has-highlight text-4xl md:text-[50px] leading-[44px] md:leading-[60px] text-white font-light tracking-[-0.72px] md:tracking-[-2px] max-w-[710px]" v-animate.repeat="'fade-in'" v-html="parseMarkdown($page.pages.stats_section.title)"></div>
          <div class="hidden md:inline-flex">
            <g-image :src="$page.pages.stats_section.icon" v-animate.repeat="'zoom-in'" />
          </div>
        </div>
        <div class="w-full flex flex-col md:flex-row justify-between">
          <div class="flex justify-start items-end md:pr-[135px] feat-b-item pb-4 md:pb-7 mb-8 md:mb-0" v-for="(stat, index) in $page.pages.stats_section.stats" :key="index">
            <p class="text-6xl md:text-[100px] tracking-[-4px] leading-none font-light mr-4 md:mr-[68px] text-brand-lime" v-animate.repeat="'fade-in-down'">{{ stat.stat }}</p>
            <p class="text-[17px] leading-[27px] tracking-[-0.34px] max-w-[155px] md:mb-2" v-animate.repeat="'fade-in'">{{ stat.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-brand-gray pt-14 pb-14 md:pt-[106px] md:pb-14 text-white overflow-hidden">
      <div class="container">
        <div class="w-full flex flex-col md:flex-row items-center justify-between py-11 px-8 md:px-[109px] bg-brand-gray-light rounded-2xl md:rounded-[20px]">
          <div class="flex flex-row items-center">
            <div class="flex items-center max-w-[30px] md:max-w-none mr-2 md:mr-0" v-animate.repeat="'fade-in-left'">
              <g-image :src="$page.pages.in_action_section.icon" />
            </div>
            <div class="title-has-highlight text-center md:text-left text-4xl md:text-[50px] leading-[36px] tracking-[-1.5px] md:ml-12" v-animate.repeat="'fade-in'" v-html="parseMarkdown($page.pages.in_action_section.title)"></div>
          </div>
          <div class="mt-8 md:mt-auto" v-animate.repeat="'fade-in'">
            <Button :text="$page.pages.in_action_section.button.text" :link="$page.pages.in_action_section.button.link" :isButton="false" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    pages(path: "/site/pages/home") {
      hero_section {
        header,
        animated_headings,
        sub_header,
        button {
          text,
          link
        },
        image
      },
      features {
        tag,
        icon,
        title,
        description
      },
      integration_section {
        title,
        sub_title
      },
      stats_section {
        cta_text,
        title,
        icon,
        stats {
          stat,
          description
        }
      },
      in_action_section {
        title,
        icon,
        button {
          text,
          link
        }
      }
    }
  }
</page-query>

<script>
import Hero from "~/components/Hero.vue";
import HomeFeature from "~/components/HomeFeature.vue";
import Button from "~/components/Button.vue";
import { parseMarkdown } from "~/helpers";

export default {
  components: {
    Hero,
    HomeFeature,
    Button,
  },
  metaInfo: {
    title: "Privacy Dynamics",
  },
  methods: {
    parseMarkdown,
  },
};
</script>