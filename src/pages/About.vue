<template>
  <Layout>
    <div class="w-full before:hidden md:before:block after:hidden md:after:block before:bg-brand-gray-lighter before:w-1/2 before:h-full before:absolute before:top-0 before:left-0 before:-z-10 after:bg-brand-gray after:w-1/2 after:h-full after:absolute after:top-0 after:right-0 after:-z-10 relative">
      <div class="container px-0 md:px-4 flex flex-col md:flex-row z-10 md:items-stretch">
        <div class="w-full md:w-1/2 relative py-20 md:pt-[70px] md:pb-28 md:pr-16 bg-brand-gray-lighter">
          <div class="wwa-circle w-[350px] h-[350px] md:w-[514px] md:h-[514px] border border-brand-gray rounded-[50%] flex justify-center items-center text-center mx-auto">
            <h1 class="text-4xl md:text-[65px] leading-[44px] md:leading-[75px] tracking-[-1.08px] md:tracking-[-1.3px] font-light">
              {{ $page.pages.hero_section.header }}
            </h1>
          </div>
        </div>
        <div class="w-full px-4 md:px-0 md:w-1/2 pt-5 md:pt-[70px] md:pl-12 pb-14 text-white bg-brand-gray md:bg-transparent flex flex-col">
          <div class="w-full flex justify-between items-center">
            <h2 class="text-white font-display font-medium text-[14px] tracking-[2.1px]">
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
          <p class="mt-[120px] md:mt-auto text-base md:text-[25px] leading-[26px] md:leading-[37px] tracking-none tracking-[-0.5px] md:whitespace-pre-line">
            {{ $page.pages.hero_section.body }}
          </p>
        </div>
      </div>
    </div>
    <div class="w-full before:hidden md:before:block before:bg-brand-lime before:w-1/2 before:h-full before:absolute before:top-0 before:left-0 before:-z-10 relative">
      <div class="container px-0 md:px-4 flex flex-col md:flex-row z-10 md:items-stretch">
        <div class="w-full md:w-1/2 relative py-8 md:pt-16 md:pb-28 md:pr-16 bg-brand-lime md:bg-transparent px-4 md:px-0">
          <div class="w-full flex justify-between items-center">
            <h2 class="text-brand-gray font-display font-medium text-[14px] tracking-[2.1px]">
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
              <li class="text-3xl leading-loose md:text-[50px] md:leading-[70px] tracking-[-1px] font-normal flex flex-col group value-item cursor-pointer" v-for="(value, index) in $page.pages.values_section.values" :key="index" :class="isActive(index) ? 'active' : ''" @click.capture="activate(index)">
                <div class="flex items-center justify-start">
                  <hr class="w-[59px] h-[2px] bg-brand-gray border-none mr-7 absolute hidden" />
                  <span class="font-inherit transition-all">{{ value.title }}</span>
                </div>
                <div class="w-full flex md:hidden" v-if="isActive(index)">
                  <p class="text-base leading-[26px] tracking-none">
                    {{ $page.pages.values_section.values[activeIndex].body }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-1/2 py-14 px-4 md:px-0 md:pt-[195px] md:pl-12 md:pb-14 hidden md:flex flex-col">
          <p class="text-[25px] leading-[37px] tracking-[-0.5px]">
            {{ $page.pages.values_section.values[activeIndex].body }}
          </p>
        </div>
      </div>
    </div>
    <div class="w-full bg-brand-gray-fade border-y border-brand-gray-lighter">
      <div class="container py-16 md:py-32">
        <div class="w-full text-center">
          <h4 class="text-[13px] md:text-[17px] md:leading-[28px] tracking-none md:tracking-[1.7px] uppercase font-display font-medium mb-5">
            {{ $page.pages.mission_section.header }}
          </h4>
          <h3 class="text-[32px] md:text-[50px] leading-[42px] md:leading-[63px] tracking-[-0.64px] md:tracking-[-1px] font-normal whitespace-pre-line max-w-[839px] mx-auto">
            {{ $page.pages.mission_section.sub_header }}
          </h3>
        </div>
      </div>
    </div>
    <div class="w-full bg-gradient-to-b from-white to-brand-gray-fade border-b border-brand-gray-lighter">
      <div class="container">
        <div class="w-full flex flex-col md:flex-row md:items-stretch relative">
          <div class="w-full max-w-[424px] md:w-4/12 pt-14 pb-6 md:pt-[74px] flex flex-col">
            <h4 class="text-brand-gray font-display text-[14px] tracking-[2.1px]">
              {{ $page.pages.team_section.header }}
            </h4>
            <h5 class="text-[36px] md:text-[50px] tracking-[-1.08px] md:tracking-[-1px] font-normal mt-16">
              {{ $page.pages.team_section.sub_header }}
            </h5>
          </div>
          <div class="w-full md:w-8/12 flex flex-col md:pt-[74px] md:border-l border-brand-gray-lighter md:pl-[60px]">
            <div class="w-full flex justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="99.504" height="99.504" viewBox="0 0 99.504 99.504" class="max-w-[50px] md:max-w-full absolute top-6 md:top-1 right-0 md:relative">
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
            <p class="text-base md:text-[25px] leading-[26px] md:leading-[37px] tracking-none md:tracking-[-0.5px] md:max-w-[644px]">
              {{ $page.pages.team_section.body }}
            </p>
            <div class="w-full mt-12 flex flex-wrap md:max-w-[400px]">
              <span v-for="(tag, index) in tags($page.pages.team_section.tags)" :key="index" class="lowercase text-[17px] leading-6 border border-brand-gray rounded-3xl px-4 py-1 mb-3 mr-3">{{ tag }}</span>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-col md:flex-row md:items-stretch">
          <div class="w-full md:w-4/12 pt-14 pb-10 md:py-20 md:pt-40 flex flex-col">
            <h5 class="text-[36px] md:text-[50px] md:leading-[60px] tracking-[-1px] font-normal md:whitespace-pre-line">{{ $page.pages.leaders_section.header }}</h5>
          </div>
          <div class="w-full md:w-8/12 grid md:grid-cols-2 gap-16 md:pt-40 md:border-l border-brand-gray-lighter md:pl-[60px]">
            <div class="flex flex-col mt-3" v-for="(leader, index) in $page.pages.leaders_section.leaders" :key="index">
              <g-image :src="leader.profile" />
              <hr class="border-brand-gray border-t mt-5 mb-6" />
              <h5 class="text-[32px] md:text-[38px] leading-[50px] tracking-[-0.96px] md:tracking-[-1.14px] font-display">
                {{ leader.name }}
              </h5>
              <p class="text-[15px] md:text-[17px] leading-[28px] tracking-[1.5px] md:tracking-[1.7px] uppercase font-display font-normal text-brand-gray-light">
                {{ leader.title }}
              </p>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-col md:flex-row md:items-stretch">
          <hr class="block md:hidden border-t border-brand-gray-border md:border-t-0 mt-14 -mx-4" />
          <div class="w-full md:w-4/12 pt-14 pb-10 md:pt-40 flex flex-col">
            <h5 class="text-[36px] md:text-[50px] leading-[50px] md:leading-[60px] tracking-[-1.08px] md:tracking-[-1px] font-normal md:whitespace-pre-line">{{ $page.pages.investors_section.header }}</h5>
          </div>
          <div class="w-full md:w-8/12 pb-20 md:pt-40 md:pb-52 md:border-l border-brand-gray-lighter md:pl-[60px]">
            <div class="w-full grid grid-cols-3 gap-3 gap-y-5 mt-3">
              <div class="" v-for="(comp, index) in $page.pages.investors_section.investors" :key="index">
                <g-image :src="comp.logo" />
              </div>
            </div>
            <div class="mt-16 md:mt-20 mb-7 md:mb-12">
              <p class="text-[17px] leading-[28px] tracking-[1.7px] uppercase font-display font-normal text-brand-gray-light">
                {{ $page.pages.investors_section.other_header }}
              </p>
            </div>
            <div class="w-full grid grid-cols-3 md:grid-cols-5 gap-3">
              <div class="" v-for="(comp, index) in $page.pages.investors_section.other_investors" :key="index">
                <g-image :src="comp.logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="w-full flex flex-col md:flex-row md:items-stretch py-14 md:py-[138px]">
        <div class="w-full md:w-4/12 flex flex-col">
          <h5 class="text-[36px] md:text-[50px] leading-[60px] tracking-[-1.08px] md:tracking-[-1px] font-normal mt-[40px] relative flex items-start before:bg-brand-lime before:w-[24px] before:h-[24px] before:inline before:mt-[11px] before:mr-6">
            {{ $page.pages.media_section.header }}
          </h5>
        </div>
        <div class="w-full md:w-8/12 flex flex-col">
          <div class="w-full flex flex-col py-9 border-b border-brand-gray-light" v-for="(item, index) in $page.pages.media_section.press_releases" :key="index">
            <div class="w-full flex justify-between items-center mb-5">
              <h4 class="text-[20px] md:text-[25px] leading-snug tracking-[-0.5px]">
                {{ item.title }}
              </h4>
              <span class="text-[13px] md:text-[15px] leading-[28px] tracking-[1.5px] font-display font-medium">{{ parseDate(item.date) }}</span>
            </div>
            <div class="w-full">
              <p class="textbase md:text-[17px] leading-[26px] md:leading-[28px] tracking-[-0.32px] md:tracking-[-0.34px] mb-4">
                {{ item.excerpt }}
              </p>
              <a class="text-[14px] md:text-[15px] md:leading-[28px] tracking-[-0.28px] md:tracking-[-0.3px] underline" :to="item.link">Read More</a>
            </div>
          </div>
          <div class="w-full flex flex-row items-start py-9 border-b border-brand-gray-light">
            <div class="pt-3 pr-3 hidden md:inline-flex">
              <svg id="Group_511" data-name="Group 511" xmlns="http://www.w3.org/2000/svg" width="25.843" height="22.741" viewBox="0 0 25.843 22.741">
                <path id="Path_2" data-name="Path 2" d="M175.539,443.179l-.95-.95,10.421-10.421L174.59,421.388l.95-.95,11.37,11.37Z" transform="translate(-161.067 -420.438)" fill="#172330" />
                <rect id="Rectangle_5" data-name="Rectangle 5" width="24.893" height="1.344" transform="translate(0 10.699)" fill="#172330" />
              </svg>
            </div>
            <div class="w-full flex flex-col">
              <h4 class="text-[36px] md:text-[38px] leading-[44px] tracking-none md:tracking-[-0.76px] mb-2">
                {{ $page.pages.media_section.contact.header }}
              </h4>
              <div class="flex items-center">
                <div class="inline-flex md:hidden mr-3">
                  <svg id="Group_1083" data-name="Group 1083" xmlns="http://www.w3.org/2000/svg" width="16.791" height="14.776" viewBox="0 0 16.791 14.776">
                    <path id="Path_2" data-name="Path 2" d="M175.206,435.214l-.617-.617,6.771-6.771-6.771-6.771.617-.617,7.388,7.388Z" transform="translate(-165.803 -420.438)" fill="#172330" />
                    <rect id="Rectangle_5" data-name="Rectangle 5" width="16.174" height="0.873" transform="translate(0 6.951)" fill="#172330" />
                  </svg>
                </div>
                <a class="text-[15px] md:text-[17px] leading-[28px] tracking-[1.5px] md:tracking-[1.7px] font-display underline uppercase" :to="'mailto:' + $page.pages.media_section.contact.email">{{ $page.pages.media_section.contact.email }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-brand-gray py-16 text-white">
      <div class="container">
        <div class="w-full flex flex-col py-16 text-center px-8 md:px-[109px] bg-brand-gray-light rounded-2xl md:rounded-[20px]">
          <div class="title-has-highlight text-[36px] md:text-[50px] leading-[46px] md:leading-[50px] tracking-[-1.08px] md:tracking-[-1px] mb-3" v-html="parseMarkdown($page.pages.cta_section.header)"></div>
          <div class="text-[36px] md:text-[35px] leading-[46px] md:leading-[33px] tracking-[-1.08px] md:tracking-[-0.7px]" v-html="parseMarkdown($page.pages.cta_section.sub_header)"></div>
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
import { parseMarkdown, parseDate } from "~/helpers";

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
    parseMarkdown,
    parseDate,
  },
  metaInfo: {
    title: "Privacy Dynamics",
  },
};
</script>
<style scoped>
.value-item.active hr {
  @apply inline-flex;
}
.value-item.active span {
  @apply ml-20;
}
</style>
