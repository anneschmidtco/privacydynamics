<template>
  <Layout>
    <div class="w-full before:hidden md:before:block after:hidden md:after:block before:bg-gray-lighter before:w-1/2 before:h-full before:absolute before:top-0 before:left-0 before:-z-10 after:bg-gray after:w-1/2 after:h-full after:absolute after:top-0 after:right-0 after:-z-10 relative">
      <div class="container px-0 md:px-4 flex flex-col md:flex-row z-10 md:items-stretch">
        <div class="w-full md:w-1/2 relative py-20 md:pt-[70px] md:pb-28 md:pr-16 bg-gray-lighter">
          <div class="wwa-circle w-[350px] h-[350px] md:w-[514px] md:h-[514px] border border-gray rounded-[50%] flex justify-center items-center text-center mx-auto">
            <h1 class="text-4xl md:text-[65px] leading-44 md:leading-[75px] tracking-[-1.08px] md:tracking-[-1.3px] font-light">
              {{ $page.pages.hero_section.header }}
            </h1>
          </div>
        </div>
        <div class="w-full px-4 md:px-0 md:w-1/2 pt-5 md:pt-[70px] md:pl-12 pb-14 text-white bg-gray md:bg-transparent flex flex-col">
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
          <p class="mt-[120px] md:mt-auto text-base md:text-25 leading-26 md:leading-37 tracking-none tracking-[-0.5px] md:whitespace-pre-line">
            {{ $page.pages.hero_section.body }}
          </p>
        </div>
      </div>
    </div>
    <div class="w-full bg-gray-fade border-b border-gray-lighter">
      <div class="container">
        <div class="w-full flex flex-col md:flex-row md:items-stretch relative">
          <div class="w-full md:w-4/12 pt-12 md:pb-14 md:pt-[74px] flex flex-col md:pr-20">
            <h4 class="text-36 md:text-50 leading-60 tracking-[-1.08px] md:tracking-[-1px] font-normal mt-[31px] relative flex items-start before:bg-lime before:w-[24px] before:h-[24px] before:inline before:mt-[11px] before:mr-6 before:flex-shrink-0">{{ $page.pages.openings_section.header }}</h4>
          </div>
          <div class="w-full md:w-8/12 flex flex-col md:pt-[74px] md:border-l border-gray-lighter md:pl-[60px]">
            <div class="w-full flex flex-col tab cursor-pointer transition-all" :class="isOpen(index) ? 'open' : ''" v-for="(category, index) in $page.pages.openings_section.openings.categories" :key="index">
              <div class="flex justify-between py-3 md:py-7 border-b border-gray items-center" @click="openTab(index)">
                <p class="text-3xl md:text-38 leading-normal tracking-normal">{{ category.title }}</p>
                <svg class="tab-icon animated rotateIn open" xmlns="http://www.w3.org/2000/svg" width="32" height="1.3" viewBox="0 0 32 1.3">
                  <g id="Group_85" data-name="Group 85" transform="translate(-1287.5 -1349.85)">
                    <line id="Line_43" data-name="Line 43" x1="32" transform="translate(1287.5 1350.5)" fill="none" stroke="#454f59" stroke-width="1.3" />
                  </g>
                </svg>
                <svg class="tab-icon animated closed" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <g id="Group_83" data-name="Group 83" transform="translate(-1287.5 -1334.5)">
                    <line id="Line_42" data-name="Line 42" y2="32" transform="translate(1303.5 1334.5)" fill="none" stroke="#454f59" stroke-width="1.3" />
                    <line id="Line_43" data-name="Line 43" x1="32" transform="translate(1287.5 1350.5)" fill="none" stroke="#454f59" stroke-width="1.3" />
                  </g>
                </svg>
              </div>

              <ul class="list-none w-full">
                <li class="w-full flex justify-between" v-for="(job, index) in category.jobs" :key="index">
                  <g-link :to="job.link" class="text-xl md:text-25 leading-normal tracking-[-0.03px] text-gray-light underline py-3">{{ job.title }}</g-link>
                  <span class="text-25 leading-normal tracking-[-0.03px] text-[#A6AFBC] py-3">{{ job.location }}</span>
                </li>
              </ul>
            </div>
            <div class="w-full mt-7">
              <Button :text="$page.pages.openings_section.all_jobs_link.text" :link="$page.pages.openings_section.all_jobs_link.link" />
            </div>
          </div>
        </div>
        <div class="w-full flex flex-col md:flex-row md:items-stretch relative">
          <div class="w-full md:w-4/12 pt-16 pb-4 md:py-20 md:pt-[74px] flex flex-col">
            <h4 class="text-36 md:text-50 leading-50 md:leading-60 tracking-[-1.08px] md:tracking-[-1px] font-normal">
              {{ $page.pages.openings_section.sub_header }}
            </h4>
          </div>
          <div class="w-full md:w-8/12 flex flex-col md:pt-[74px] pb-14 md:pb-32 md:border-l border-gray-lighter md:pl-[60px]">
            <p class="text-base md:text-25 leading-26 md:leading-37 md:tracking-[-0.5px] md:max-w-[644px]">{{ $page.pages.openings_section.body }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full before:hidden md:before:block before:bg-lime before:w-1/2 before:h-full before:absolute before:top-0 before:left-0 before:-z-10 relative">
      <div class="container px-0 md:px-4 flex flex-col md:flex-row z-10 md:items-stretch">
        <div class="w-full md:w-1/2 relative py-12 md:pt-16 md:pb-28 md:pr-16 bg-lime md:bg-transparent px-4 md:px-0">
          <div class="w-full flex justify-between items-center">
            <h2 class="text-gray font-display font-medium text-[14px] tracking-[2.1px]">
              {{ $page.pages.benefits_section.header }}
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
              <li class="text-3xl leading-loose md:text-50 md:leading-[70px] tracking-[-1px] font-normal flex flex-col justify-start group value-item cursor-pointer" v-for="(benefit, index) in $page.pages.benefits_section.benefits" :key="index" :class="isActive(index) ? 'active' : ''" @click.capture="activate(index)">
                <div class="flex items-center justify-start">
                  <hr class="w-[59px] h-[2px] bg-gray border-none mr-7 absolute hidden" />
                  <span class="font-inherit transition-all">{{ benefit.title }}</span>
                </div>
                <div class="w-full flex md:hidden" v-if="isActive(index)">
                  <p class="text-base leading-26 tracking-none">
                    {{ $page.pages.benefits_section.benefits[activeIndex].body }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-1/2 py-14 px-4 md:px-0 md:pt-[195px] md:pl-12 pb-14 hidden md:flex flex-col">
          <p class="text-25 leading-37 tracking-[-0.5px]">
            {{ $page.pages.benefits_section.benefits[activeIndex].body }}
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    pages(path: "/site/pages/careers") {
        hero_section {
            header,
            sub_header,
            body
        },
		openings_section {
			header,
			sub_header,
			body,
			all_jobs_link {
				text,
				link
			},
			openings {
				categories {
					title,
					jobs {
						title,
						link,
						location
					}
				}
			}
		},
        benefits_section {
          header,
          benefits {
            title,
            body
          }
        },
    }
  }
</page-query>

<script>
import { format } from "date-fns";
import Button from "~/components/Button.vue";

export default {
  data: function () {
    return { activeIndex: 0, openIndex: 0 };
  },
  components: {
    Button,
  },
  methods: {
    isActive(index) {
      return this.activeIndex === index;
    },
    activate(index) {
      this.activeIndex = index;
    },
    isOpen(index) {
      return this.openIndex === index;
    },
    openTab(index) {
      this.openIndex = index;
    },
    tags(tags) {
      return tags.split(",");
    },
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
.tab {
  @apply h-[114px] overflow-hidden;
}
.tab.open {
  @apply h-auto overflow-visible;
}
.tab-icon {
  animation-duration: 0.2s;
}
.tab.open .tab-icon.open,
.tab .tab-icon.closed {
  @apply inline-flex;
}

.tab .tab-icon.open,
.tab.open .tab-icon.closed {
  @apply hidden;
}
</style>
