<template>
  <Layout>
    <Hero :hero_section="$page.pages.hero_section"></Hero>
    <div class="w-full  bg-brand-gray-lighter">
      <div class="container flex">
        <div class="w-1/3 feature-item" v-for="(feature, index) in $page.pages.features" :key="index">
          <HomeFeature :feature="feature" :index="index +1"/>
        </div>
      </div>
    </div>
    <div class="container flex flex-col py-24">
      <div class="w-full text-center flex flex-col justify-center">
        <h2 class="text-[50px] leading-[63px] tracking-[-1.5px] mb-6">{{$page.pages.distortion_section.title}}</h2>
        <div class="max-w-[522px] mx-auto font-[17px] leading-[28px] tracking-[-0.17px]" v-html="get_distortion_subtitle($page.pages.distortion_section.sub_title)"></div>
      </div>
      <div class="w-full">
        <g-image :src="$page.pages.distortion_section.chart_image" width="1199" />
      </div>
    </div>
    <div class="w-full flex flex-col bg-brand-gray text-white border-b border-brand-gray-light">
      <div class="container pt-24 pb-28 flex flex-col border-l border-brand-gray-light pl-24 relative items-center justify-center">
        <p class="absolute rotate-[-90deg] left-[-126px] tracking-[2.4px] font-display">{{$page.pages.stats_section.cta_text}}</p>
        <div class="w-full flex flex-row justify-between mb-24">
          <div class="stats-title-wrapper title-has-highlight text-[50px] leading-[60px] text-white font-light tracking-[-2px] max-w-[710px]" v-html="get_stats_title($page.pages.stats_section.title)"></div>
          <div>
            <g-image :src="$page.pages.stats_section.icon"/>
          </div>
        </div>
        <div class="w-full flex justify-between">
            <div class="flex justify-start items-end pr-[135px] feat-b-item pb-7" v-for="(stat, index) in $page.pages.stats_section.stats" :key="index">
              <p class="text-[100px] tracking-[-4px] leading-none font-light mr-[68px] text-brand-lime">{{stat.stat}}</p>
              <p class=" text-[17px] leading-[27px] tracking-[-0.34px] max-w-[155px] mb-2">{{stat.description}}</p>
            </div>
          </div>
      </div>
    </div>
    <div class="w-full bg-brand-gray pt-[106px] pb-14 text-white">
      <div class="container">
        <div class="w-full flex items-center justify-between py-16 px-[109px] bg-brand-gray-light rounded-[20px]">
          <div class="flex items-center">
            <div>
            <g-image :src="$page.pages.in_action_section.icon" />
          </div>
          <div class="title-has-highlight text-[50px] leading-[36px] tracking-[-1.5px] ml-12" v-html="get_cta_title($page.pages.in_action_section.title)"></div>
          </div>
          <Button :text="$page.pages.in_action_section.button.text" :href="$page.pages.in_action_section.link" />
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