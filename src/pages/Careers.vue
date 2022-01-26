<template>
  <Layout>
    <div class="w-full before:hidden md:before:block after:hidden md:after:block before:bg-brand-gray-lighter before:w-1/2 before:h-full before:absolute before:top-0 before:left-0 before:-z-10 after:bg-brand-gray after:w-1/2 after:h-full after:absolute after:top-0 after:right-0 after:-z-10 relative">
      <div class="container px-0 md:px-4 flex flex-col md:flex-row z-10 md:items-stretch">
        <div class="w-full md:w-1/2 relative py-20 md:pt-[70px] md:pb-28 md:pr-16 bg-brand-gray-lighter">
          <div class="wwa-circle w-[300px] h-[300px] md:w-[514px] md:h-[514px] border border-brand-gray rounded-[50%] flex justify-center items-center text-center mx-auto">
            <h1 class="text-[65px] leading-[75px] tracking-[-1.3px] font-light">
              {{ $page.pages.hero_section.header }}
            </h1>
          </div>
        </div>
        <div class="w-full px-4 md:px-0 md:w-1/2 pt-[70px] md:pl-12 pb-14 text-white bg-brand-gray md:bg-transparent flex flex-col">
          <div class="w-full flex justify-between items-center">
            <h2 class="text-white font-display text-[14px] tracking-[2.1px]">
              {{ $page.pages.hero_section.sub_header }}
            </h2>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26.789" height="26.79" viewBox="0 0 26.789 26.79">
                <g id="Group_77" data-name="Group 77" transform="translate(34.354 8.516) rotate(135)">
                  <path id="Path_2" data-name="Path 2" d="M175.539,443.179l-.95-.95,10.421-10.421L174.59,421.388l.95-.95,11.37,11.37Z" transform="translate(-161.067 -420.438)" fill="#ccf74f" />
                  <rect id="Rectangle_5" data-name="Rectangle 5" width="24.893" height="1.344" transform="translate(0 10.699)" fill="#ccf74f" />
                </g>
              </svg>
            </div>
          </div>
          <p class="mt-auto text-[25px] leading-[37px] tracking-[-0.5px] whitespace-pre-line">
            {{ $page.pages.hero_section.body }}
          </p>
        </div>
      </div>
    </div>
    <div class="w-full before:hidden md:before:block before:bg-brand-lime before:w-1/2 before:h-full before:absolute before:top-0 before:left-0 before:-z-10 relative">
      <div class="container px-0 md:px-4 flex flex-col md:flex-row z-10 md:items-stretch">
        <div class="w-full md:w-1/2 relative py-14 md:pt-16 md:pb-28 md:pr-16 bg-brand-lime md:bg-transparent px-4 md:px-0">
          <div class="w-full flex justify-between items-center">
            <h2 class="text-brand-gray font-display text-[14px] tracking-[2.1px]">
              {{ $page.pages.values_section.header }}
            </h2>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="26.789" height="26.789" viewBox="0 0 26.789 26.789">
                <g id="Group_78" data-name="Group 78" transform="translate(34.354 8.516) rotate(135)">
                  <path id="Path_2" data-name="Path 2" d="M175.539,443.179l-.95-.95,10.421-10.421L174.59,421.388l.95-.95,11.37,11.37Z" transform="translate(-161.067 -420.438)" fill="#172330" />
                  <rect id="Rectangle_5" data-name="Rectangle 5" width="24.893" height="1.344" transform="translate(0 10.699)" fill="#172330" />
                </g>
              </svg>
            </div>
          </div>
          <div class="w-full mt-10 md:mt-24">
            <ul class="list-none">
              <li class="text-4xl leading-loose md:text-[50px] md:leading-[70px] tracking-[-1px] font-normal flex items-center justify-start group value-item cursor-pointer" v-for="(value, index) in $page.pages.values_section.values" :key="index" :class="isActive(index) ? 'active' : ''" @click.capture="activate(index)">
                <hr class="w-[59px] h-[2px] bg-brand-gray border-none mr-7 absolute hidden" />
                <span class="font-inherit transition-all">{{ value.title }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-1/2 py-14 px-4 md:px-0 md:pt-32 md:pl-12 md:pb-14 flex flex-col">
          <p class="text-[25px] leading-[37px] tracking-[-0.5px]">
            {{ $page.pages.values_section.values[activeIndex].body }}
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    pages(path: "/site/pages/about") {
        hero_section {
            header,
            sub_header,
            body
        },
        values_section {
          header,
          values {
            title,
            body
          }
        },
        mission_section {
          header,
          sub_header
        },
        team_section {
          header,
          sub_header
          body,
          tags
        },
        leaders_section {
          header,
          leaders {
            profile,
            name
            title
          }
        },
        investors_section {
          header,
          investors {
            logo,
          }
          other_header,
          other_investors {
            logo
          }
        },
        media_section {
          header,
          press_releases {
            title,
            excerpt,
            link,
            date
          },
          contact {
            header,
            email
          }
        },
        cta_section {
          header,
          sub_header
        }
    }
  }
</page-query>

<script>
import { format } from "date-fns";
import MarkdownIt from "markdown-it";

export default {
  data: function () {
    return { activeIndex: 0 };
  },
  methods: {
    isActive(index) {
      console.log(index);
      return this.activeIndex === index;
    },
    activate(index) {
      this.activeIndex = index;
    },
    tags(tags) {
      return tags.split(",");
    },
    parseDate(date) {
      return format(new Date(date), "MM.dd.yy");
    },
    parse_markdown(value) {
      const md = new MarkdownIt();
      return md.render(value);
    },
  },
  metaInfo: {
    title: "Privacy Dynamics",
  },
};
</script>
<style>
.value-item.active hr {
  @apply inline-flex;
}
.value-item.active span {
  @apply ml-20;
}
</style>
