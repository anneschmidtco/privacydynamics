<template>
  <Layout>
    <Hero :hero_section="$page.pages.hero_section"></Hero>
    <div class="w-full  bg-brand-gray-lighter py-14 md:py-0">
      <div class="container flex flex-col md:flex-row">
        <div class="w-full md:w-1/3 feature-item" v-for="(feature, index) in $page.pages.features" :key="index">
          <HomeFeature :feature="feature" :index="index +1"/>
        </div>
      </div>
    </div>
    <div class="container flex flex-col py-14 md:py-24">
      <div class="w-full text-center flex flex-col justify-center">
        <h2 class="text-[50px] leading-[63px] tracking-[-1.5px] mb-6">{{$page.pages.distortion_section.title}}</h2>
        <div class="max-w-[622px] mx-auto text-[17px] leading-[28px] tracking-[-0.17px] content" v-html="get_distortion_subtitle($page.pages.distortion_section.sub_title)"></div>
      </div>
      <div class="w-full">
        <g-image :src="$page.pages.distortion_section.chart_image" width="1199" />
      </div>
    </div>
    <div class="w-full flex flex-col bg-brand-gray text-white border-none md:border-b border-brand-gray-light">
      <div class="container py-14 md:pt-24 md:pb-28 flex flex-col border-none md:border-l border-brand-gray-light md:pl-24 relative items-center justify-center">
        <p class="md:absolute md:rotate-[-90deg] mb-8 md:mb-auto md:left-[-126px] tracking-[2.4px] font-display">{{$page.pages.stats_section.cta_text}}</p>
        <div class="w-full flex flex-col md:flex-row justify-between mb-24">
          <div class="stats-title-wrapper title-has-highlight text-4xl md:text-[50px] leading-[60px] text-white font-light tracking-[-2px] max-w-[710px]" v-html="get_stats_title($page.pages.stats_section.title)"></div>
          <div class="hidden md:inline-flex">
            <g-image :src="$page.pages.stats_section.icon"/>
          </div>
        </div>
        <div class="w-full flex flex-col md:flex-row justify-between">
            <div class="flex justify-start items-end md:pr-[135px] feat-b-item pb-4 md:pb-7 mb-8 md:mb-0" v-for="(stat, index) in $page.pages.stats_section.stats" :key="index">
              <p class=" text-6xl md:text-[100px] tracking-[-4px] leading-none font-light mr-4 md:mr-[68px] text-brand-lime">{{stat.stat}}</p>
              <p class=" text-[17px] leading-[27px] tracking-[-0.34px] max-w-[155px] md:mb-2">{{stat.description}}</p>
            </div>
          </div>
      </div>
    </div>
    <div class="w-full bg-brand-gray pt-14 pb-14 md:pt-[106px] md:pb-14 text-white">
      <div class="container">
        <div class="w-full flex flex-col md:flex-row items-center justify-between py-10 md:px-[109px] bg-brand-gray-light rounded-2xl md:rounded-[20px]">
          <div class="flex flex-col md:flex-row items-center">
            <div class="flex items-center mb-8 md:mb-auto">
              <g-image :src="$page.pages.in_action_section.icon" />
            </div>
            <div class="title-has-highlight text-[50px] leading-[50px] md:leading-[36px] tracking-[-1.5px] ml-12" v-html="get_cta_title($page.pages.in_action_section.title)"></div>  
          </div>
          <div class="mt-8 md:mt-auto">
            <Button :text="$page.pages.in_action_section.button.text" :href="$page.pages.in_action_section.link" />
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
        subheader
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
      distortion_section {
        title,
        sub_title,
        chart_image
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
  import Hero from '~/components/Hero.vue'
  import HomeFeature from '~/components/HomeFeature.vue'
  import Button from '~/components/Button.vue'
  import MarkdownIt from 'markdown-it';

  export default {
    components: {
      Hero,
      HomeFeature,
      Button
    },
    metaInfo: {
      title: 'Privacy Dynamics'
    },
    methods: {
      get_distortion_subtitle(value) {
        const md = new MarkdownIt();
        return md.render(value)
      },
      get_stats_title(value) {
        const md = new MarkdownIt();
        return md.render(value)
      },
      get_cta_title(value) {
        const md = new MarkdownIt();
        return md.render(value)
      }
    }
  }
</script>