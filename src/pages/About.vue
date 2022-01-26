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
    <div class="w-full bg-brand-gray-fade border-y border-brand-gray-lighter">
      <div class="container py-20 md:py-32">
        <div class="w-full text-center">
          <h4 class="text-[17px] leading-[28px] tracking-[1.7px] uppercase font-display font-normal mb-5">
            {{ $page.pages.mission_section.header }}
          </h4>
          <h3 class="text-[50px] leading-[63px] tracking-[-1px] font-normal whitespace-pre-line max-w-[839px] mx-auto">
            {{ $page.pages.mission_section.sub_header }}
          </h3>
        </div>
      </div>
    </div>
    <div class="w-full bg-gradient-to-b from-white to-brand-gray-fade border-b border-brand-gray-lighter">
      <div class="container">
        <div class="w-full flex flex-col md:flex-row md:items-stretch relative">
          <div class="w-full md:w-4/12 py-20 md:pt-[74px] flex flex-col">
            <h4 class="text-brand-gray font-display text-[14px] tracking-[2.1px]">
              {{ $page.pages.team_section.header }}
            </h4>
            <h5 class="text-[50px] tracking-[-1px] font-normal mt-16">
              {{ $page.pages.team_section.sub_header }}
            </h5>
          </div>
          <div class="w-full md:w-8/12 flex flex-col md:pt-[74px] md:border-l border-brand-gray-lighter md:pl-[60px]">
            <div class="w-full flex justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="99.504" height="99.504" viewBox="0 0 99.504 99.504" class="max-w-[50px] md:max-w-full absolute top-10 right-0 md:relative">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectangle_454" data-name="Rectangle 454" width="99.504" height="99.504" fill="#454f59" />
                  </clipPath>
                </defs>
                <g id="Group_81" data-name="Group 81" transform="translate(99.504 99.504) rotate(180)">
                  <g id="Group_80" data-name="Group 80" clip-path="url(#clip-path)">
                    <path id="Path_87" data-name="Path 87" d="M49.752,99.5A49.752,49.752,0,1,1,99.5,49.752,49.808,49.808,0,0,1,49.752,99.5m0-98.068A48.316,48.316,0,1,0,98.068,49.752,48.372,48.372,0,0,0,49.752,1.436" fill="#454f59" />
                    <path id="Path_88" data-name="Path 88" d="M73.19,69.074H71.419V49.642H51.988V47.871h21.2Z" transform="translate(-11.381 -10.48)" fill="#454f59" />
                    <rect id="Rectangle_453" data-name="Rectangle 453" width="32.822" height="1.772" transform="matrix(0.706, -0.708, 0.708, 0.706, 37.099, 60.871)" fill="#454f59" />
                  </g>
                </g>
              </svg>
            </div>
            <p class="text-[25px] leading-[37px] tracking-[-0.5px] md:max-w-[644px]">
              {{ $page.pages.team_section.body }}
            </p>
            <div class="w-full mt-12 flex flex-wrap md:max-w-[400px]">
              <span v-for="(tag, index) in tags($page.pages.team_section.tags)" :key="index" class="lowercase text-[17px] leading-6 border border-brand-gray rounded-3xl px-4 py-1 mb-3 mr-3">{{ tag }}</span>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-col md:flex-row md:items-stretch">
          <div class="w-full md:w-4/12 py-20 md:pt-40 flex flex-col">
            <h5 class="text-[50px] leading-[60px] tracking-[-1px] font-normal whitespace-pre-line">
              {{ $page.pages.leaders_section.header }}
            </h5>
          </div>
          <div class="w-full md:w-8/12 grid md:grid-cols-2 gap-16 md:pt-40 md:border-l border-brand-gray-lighter md:pl-[60px]">
            <div class="flex flex-col" v-for="(leader, index) in $page.pages.leaders_section.leaders" :key="index">
              <g-image :src="leader.profile" />
              <hr class="border-brand-gray border-t mt-5 mb-6" />
              <h5 class="text-[38px] leading-[50px] tracking-[-1.14px] font-display">
                {{ leader.name }}
              </h5>
              <p class="text-[17px] leading-[28px] tracking-[1.7px] uppercase font-display font-normal text-brand-gray-light">
                {{ leader.title }}
              </p>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-col md:flex-row md:items-stretch">
          <div class="w-full md:w-4/12 py-20 md:pt-40 flex flex-col">
            <h5 class="text-[50px] leading-[60px] tracking-[-1px] font-normal whitespace-pre-line">
              {{ $page.pages.investors_section.header }}
            </h5>
          </div>
          <div class="w-full md:w-8/12 pb-20 md:pt-40 md:pb-52 md:border-l border-brand-gray-lighter md:pl-[60px]">
            <div class="w-full grid grid-cols-3 gap-3 gap-y-5">
              <div class="" v-for="(comp, index) in $page.pages.investors_section.investors" :key="index">
                <g-image :src="comp.logo" />
              </div>
            </div>
            <div class="mt-8 md:mt-20 mb-12">
              <p class="text-[17px] leading-[28px] tracking-[1.7px] uppercase font-display font-normal text-brand-gray-light">
                {{ $page.pages.investors_section.other_header }}
              </p>
            </div>
            <div class="w-full grid grid-cols-5 gap-3">
              <div class="" v-for="(comp, index) in $page.pages.investors_section.other_investors" :key="index">
                <g-image :src="comp.logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="w-full flex flex-col md:flex-row md:items-stretch py-20 md:py-[138px]">
        <div class="w-full md:w-4/12 flex flex-col">
          <h5 class="text-[50px] leading-[60px] tracking-[-1px] font-normal mt-16 relative flex items-start before:bg-brand-lime before:w-[24px] before:h-[24px] before:inline before:top-0 before:mr-6">
            {{ $page.pages.media_section.header }}
          </h5>
        </div>
        <div class="w-full md:w-8/12 flex flex-col">
          <div class="w-full flex flex-col py-9 border-b border-brand-gray-light" v-for="(item, index) in $page.pages.media_section.press_releases" :key="index">
            <div class="w-full flex justify-between items-center mb-5">
              <h4 class="text-[25px] leading-[48px] tracking-[-0.5px]">
                {{ item.title }}
              </h4>
              <span class="text-[15px] leading-[28px] tracking-[1.5px] font-display">{{ parseDate(item.date) }}</span>
            </div>
            <div class="w-full">
              <p class="text-[17px] leading-[28px] tracking-[-0.34px] mb-4">
                {{ item.excerpt }}
              </p>
              <a class="text-[15px] leading-[28px] tracking-[-0.3px] underline" :to="item.link">Read More</a>
            </div>
          </div>
          <div class="w-full flex flex-row items-start py-9 border-b border-brand-gray-light">
            <div class="pt-3 pr-3">
              <svg id="Group_511" data-name="Group 511" xmlns="http://www.w3.org/2000/svg" width="25.843" height="22.741" viewBox="0 0 25.843 22.741">
                <path id="Path_2" data-name="Path 2" d="M175.539,443.179l-.95-.95,10.421-10.421L174.59,421.388l.95-.95,11.37,11.37Z" transform="translate(-161.067 -420.438)" fill="#172330" />
                <rect id="Rectangle_5" data-name="Rectangle 5" width="24.893" height="1.344" transform="translate(0 10.699)" fill="#172330" />
              </svg>
            </div>
            <div class="w-full flex flex-col">
              <h4 class="text-[38px] leading-[44px] tracking-[-0.76px] mb-2">
                {{ $page.pages.media_section.contact.header }}
              </h4>
              <a class="text-[17px] leading-[28px] tracking-[1.7px] font-display underline uppercase" :to="'mailto:' + $page.pages.media_section.contact.email">{{ $page.pages.media_section.contact.email }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-brand-gray py-16 text-white">
      <div class="container">
        <div class="w-full flex flex-col py-16 text-center px-8 md:px-[109px] bg-brand-gray-light rounded-2xl md:rounded-[20px]">
          <div class="title-has-highlight text-[50px] leading-[50px] tracking-[-1px] mb-3" v-html="parse_markdown($page.pages.cta_section.header)"></div>
          <div class="text-[35px] leading-[33px] tracking-[-0.7px]" v-html="parse_markdown($page.pages.cta_section.sub_header)"></div>
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
