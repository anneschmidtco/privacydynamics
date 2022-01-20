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
  </Layout>
</template>

<page-query>
  query {
    pages(path: "/site/pages/product") {
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