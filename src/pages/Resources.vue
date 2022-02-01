<template>
  <Layout>
    <div class="hero w-full bg-cover bg-no-repeat before:hidden md:before:block before:bg-brand-lime before:w-4/12 before:h-[188px] before:absolute before:bottom-0 before:left-0 before:z-0 relative" :style="{ backgroundImage: 'url(' + $page.pages.hero_section.background_image + ')' }">
      <div class="container relative pt-52 px-0 md:px-8">
        <div class="w-full md:w-3/12 bg-brand-lime">
          <h1 class="text-[50px] z-10 leading-none tracking-[-1px] py-8 px-8 md:py-[69px] md:px-0 md:pr-[90px] font-light inline-flex">
            {{ $page.pages.hero_section.header }}
          </h1>
        </div>
      </div>
    </div>
    <div class="w-full before:hidden md:before:block before:bg-brand-gray before:w-4/12 before:h-full before:absolute before:top-0 before:left-0 before:-z-10 relative">
      <div class="container px-0 md:px-8">
        <div class="w-full flex flex-col md:flex-row">
          <div class="w-full md:w-3/12 flex fle-col bg-brand-gray text-white pt-14 pb-10 md:pt-48 px-8 md:px-0 md:pr-8">
            <ul class="list-none w-full">
              <li class="w-full tab-b mb-7 cursor-pointer" :class="isOpen(index) ? 'open' : ''" v-for="(category, index) in $page.allCategory.edges" :key="index">
                <div class="w-full flex justify-between items-center hover:text-brand-lime" @click="openTab(index)">
                  <span class="text-[25px] leading-[37px] tracking-[-0.03px] capitalize">{{ category.node.name }} </span>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22.216" height="11.473" viewBox="0 0 22.216 11.473">
                    <defs>
                      <clipPath id="clip-path">
                        <rect id="Rectangle_475" data-name="Rectangle 475" width="11.473" height="22.216" fill="none" stroke="#fff" stroke-width="1" />
                      </clipPath>
                    </defs>
                    <g id="Group_100" data-name="Group 100" transform="translate(22.216) rotate(90)">
                      <g id="Group_99" data-name="Group 99" transform="translate(0 0)" clip-path="url(#clip-path)">
                        <path id="Path_130" data-name="Path 130" d="M0,0,10.925,10.925,0,21.851" transform="translate(0.183 0.183)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="w-full" v-if="category.node.belongsTo && category.node.belongsTo.edges.length > 0">
                  <ul class="list-none w-full">
                    <li class="w-full flex justify-between p-3 border-brand-gray-light border-b last:border-none hover:text-brand-lime" @click="selectPage(sub_category.node.id, index)" v-for="(sub_category, index) in category.node.belongsTo.edges" :key="index">
                      <span class="text-base leading-[37px] tracking-[-0.02px]"> {{ sub_category.node.heading }}</span>
                      <span class="text-base leading-[37px] tracking-[-0.02px]">{{ index + 1 }}.0</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-9/12 md:pl-[108px] pt-14 md:pt-[74px] px-8 md:px-0">
            <div class="w-full flex flex-col" v-if="currentPage">
              <div class="w-full flex justify-between">
                <h3 class="text-brand-gray font-display text-[14px] tracking-[2.1px] font-semibold">{{ currentPage.heading }}</h3>
                <p class="text-[15px] leading-[28px] tracking-[1.5px] font-display">{{ currentPageIndex }}.0</p>
              </div>
              <div class="w-full pb-14 border-b border-brand-gray mt-12">
                <h5 class="text-[50px] leading-[60px] tracking-[-1px] font-normal mt-16 relative flex items-start before:bg-brand-lime before:w-[24px] before:h-[24px] before:inline before:top-0 before:mr-6 mb-12">{{ currentPage.title }}</h5>
                <p class="text-[25px] leading-[37px] tracking-[-0.5px]">{{ currentPage.excerpt }}</p>
              </div>
              <div class="w-full text-[17px] leading-[28px] tracking-[-0.34px] mb-4 md:columns-2 pt-14 gap-9" v-html="currentPage.content"></div>
              <div class="w-full mb-12 mt-16">
                <Button :text="currentPage.download_button.text" :link="currentPage.download_button.link" :download="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    pages(path: "/site/pages/resources") {
        hero_section {
            header,
            background_image,
        }
    },
    allResource {
      edges {
        node {
          id,
          heading,
          title,
          excerpt,
          date,
          content,
          download_button {
            text,
            link
          }
          category {
            id,
            name
          }
        }
      }
    },
    allCategory {
      edges {
        node {
          name,
          belongsTo {
            edges {
              node {
                ... on Resource {
                  heading,
                  id
                }
              }
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import Button from "~/components/Button.vue";

export default {
  data() {
    return {
      openIndex: 0,
      selectedPage: null,
      currentPageIndex: 1,
    };
  },
  components: {
    Button,
  },
  computed: {
    currentPage() {
      if (this.selectedPage) {
        return this.selectedPage.node;
      }

      return this.$page.allResource.edges[0].node;
    },
  },
  methods: {
    isOpen(index) {
      return this.openIndex === index;
    },
    openTab(index) {
      this.openIndex = index;
    },
    selectPage(pageId, index) {
      const page = this.$page.allResource.edges.find((nd) => nd.node.id === pageId);

      this.selectedPage = page;
      this.currentPageIndex = index + 1;
    },
  },
  metaInfo: {
    title: "Privacy Dynamics",
  },
};
</script>

<style scoped>
.tab-b {
  @apply h-[37px] overflow-hidden;
}
.tab-b.open {
  @apply h-auto overflow-visible;
}
</style>
