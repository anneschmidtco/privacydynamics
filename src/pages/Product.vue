<template>
  <Layout>
    <Hero :section_data="$page.pages.hero_section" :page="'product'"></Hero>
    <div
      class="experts-section w-full bg-lime bg-no-repeat bg-bottom md:bg-right pb-0"
      :style="{
        backgroundImage: 'url(' + $page.pages.experts_section.image + ')',
      }"
    >
      <div class="container relative">
        <div class="w-full md:w-1/2 flex flex-col pb-14">
          <div class="mt-8 md:mt-[60px] mb-8 md:mb-[123px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="497.494" height="109.227" viewBox="0 0 497.494 109.227" v-animate.repeat="'fade-in-left'">
              <g id="Group_24" data-name="Group 24" transform="translate(0.707 0.707)">
                <path id="Path_26" data-name="Path 26" d="M885.768,451.15l79.958-79.958h414.327" transform="translate(-885.768 -343.337)" fill="none" stroke="#172330" stroke-miterlimit="10" stroke-width="2" />
                <path id="Path_27" data-name="Path 27" d="M1240.579,350.053l27.855,27.855-27.855,27.855" transform="translate(-773.061 -350.053)" fill="none" stroke="#172330" stroke-miterlimit="10" stroke-width="2" />
              </g>
            </svg>
          </div>
          <div class="w-full md:pr-4">
            <h2 class="text-32 md:text-50 leading-45 md:leading-60 tracking-[-0.96px] md:tracking-[-1px] max-w-[525px] pb-14 md:pb-0" v-animate.repeat="'fade-in-up'">
              {{ $page.pages.experts_section.header }}
            </h2>
          </div>
        </div>
      </div>
      <div class="w-full flex md:hidden">
        <g-image :src="$page.pages.experts_section.image" height="191" />
      </div>
    </div>
    <div class="w-full bg-gray border-b border-gray-light">
      <div class="container flex flex-col md:flex-row">
        <div class="w-full flex flex-col md:w-1/3 product-feature-item pt-16 pb-14 md:px-6" v-for="(feature, index) in get_top_features($page.pages.features)" :key="index" v-animate.repeat="'fade-in-up'">
          <div class="index-item relative w-[104px] h-[104px] text-center text-white flex justify-center items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="8.218" height="12.361" viewBox="0 0 8.218 12.361">
                <path id="Path_73" data-name="Path 73" d="M51.271,65.7c0-3.9,1.25-6.181,4.11-6.181s4.109,2.277,4.109,6.181-1.25,6.181-4.109,6.181S51.271,69.6,51.271,65.7Zm1.558,2.054,4.794-5.342a2.248,2.248,0,0,0-2.243-1.644c-1.866,0-2.6,1.644-2.6,3.954v1.952Q52.778,67.236,52.829,67.75Zm5.153-1.078V64.719a7.246,7.246,0,0,0-.068-1.078L53.12,69a2.289,2.289,0,0,0,2.261,1.626C57.247,70.626,57.982,68.983,57.982,66.672Z" transform="translate(-51.271 -59.515)" fill="#fff" />
              </svg>
            </span>
            <span class="ml-[2px] font-display text-18 leading-none"> {{ index + 1 }}. </span>
          </div>
          <div class="feat-title max-w-full bg-no-repeat bg-bottom text-white mb-12 md:mb-14 mt-12 md:mt-32" v-html="parseMarkdown(feature.title)"></div>
          <p class="text-white text-17 tracking-[-0.17px]">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="w-full bg-gray py-20">
      <div class="container flex flex-col">
        <div class="w-full product-feature-item flex flex-col md:flex-row items-start" v-animate.repeat="'fade-in-down'">
          <div class="index-item relative w-[104px] h-[104px] text-center text-white flex justify-center items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="8.218" height="12.361" viewBox="0 0 8.218 12.361">
                <path id="Path_73" data-name="Path 73" d="M51.271,65.7c0-3.9,1.25-6.181,4.11-6.181s4.109,2.277,4.109,6.181-1.25,6.181-4.109,6.181S51.271,69.6,51.271,65.7Zm1.558,2.054,4.794-5.342a2.248,2.248,0,0,0-2.243-1.644c-1.866,0-2.6,1.644-2.6,3.954v1.952Q52.778,67.236,52.829,67.75Zm5.153-1.078V64.719a7.246,7.246,0,0,0-.068-1.078L53.12,69a2.289,2.289,0,0,0,2.261,1.626C57.247,70.626,57.982,68.983,57.982,66.672Z" transform="translate(-51.271 -59.515)" fill="#fff" />
              </svg>
            </span>
            <span class="ml-[2px] font-display text-18 leading-none"> 4. </span>
          </div>
          <div class="md:ml-12 mt-8 md:mt-0">
            <div class="text-32 md:text-38 leading-45 md:leading-[48px] tracking-[-0.76px] text-white mb-5" v-html="parseMarkdown($page.pages.features[3].title)"></div>
            <p class="text-white text-17 tracking-[-0.17px] max-w-[900px]">
              {{ $page.pages.features[3].description }}
            </p>
          </div>
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
    <div class="w-full hit-section py-24 md:py-52 relative">
      <div class="absolute top-0 z-0 hidden md:flex" v-animate.repeat="'fade-in'">
        <g-image src="/uploads/hit-pattern-bg.png" height="191" />
      </div>
      <div class="absolute top-0 z-0 md:hidden w-full h-24 sm-pattern-bg bg-cover" v-animate.repeat="'fade-in'"></div>
      <div class="container px-4 md:px-8 mb-8 z-10 relative">
        <div class="w-full md:text-center" v-animate.repeat="'fade-in-down'">
          <h3 class="text-32 md:text-50 leading-45 md:leading-[63px] tracking-[-0.96px] md:tracking-[-1px]">
            {{ $page.pages.hiw.header }}
          </h3>
          <p class="text-17 md:text-25 leading-6 md:leading-[34px] tracking-[-0.25px] text-gray-light mt-3 md:mt-7 mb-10 md:mb-16 max-w-[666px] mx-auto">
            {{ $page.pages.hiw.sub_header }}
          </p>
        </div>
        <div class="w-full mx-auto treat-data min-h-[619px] max-w-[1137px] bg-no-repeat bg-cover bg-right md:bg-center bg-gray-fade md:bg-transparent rounded-xl md:rounded-none px-0 md:px-8 mb-3 md:pt-16 md:pb-8">
          <div class="w-full bg-gray rounded-t-md md:rounded-md py-7 px-8">
            <div class="w-full flex flex-col md:flex-row">
              <div class="w-full md:w-1/2 pr-6 flex flex-col">
                <p class="text-white text-[19px]">Privacy Target:</p>
                <div class="w-full mt-8 flex flex-col">
                  <div class="w-full px-4 bg-[#323b44] rounded-full relative after:bg-lime after:w-10 after:h-full after:absolute after:left-0 after:top-0 after:z-1 after:rounded-l-full">
                    <Slider
                      v-model="value"
                      :min="1"
                      :max="5"
                      :step="1"
                      :tooltips="false"
                      :options="{
                        padding: [1, 0],
                      }"
                    />
                  </div>
                  <ul class="flex w-full justify-between mt-3 text-white pl-3">
                    <li class="opacity-0">K <sup>1</sup></li>
                    <li class="text-sm leading-4 tracking-normal">K <sup>2</sup></li>
                    <li class="text-sm leading-4 tracking-normal">K <sup>3</sup></li>
                    <li class="text-sm leading-4 tracking-normal">K <sup>4</sup></li>
                    <li class="text-sm leading-4 tracking-normal">K <sup>5</sup></li>
                  </ul>
                </div>
              </div>
              <div class="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0 flex flex-col">
                <p class="text-white text-[19px] mb-6">Treat:</p>
                <div class="w-full flex flex-wrap justify-between">
                  <div>
                    <div class="mb-3">
                      <CheckBox :name="'name'" :label="'Name'" :onInput="handleInput" :value="true" :checked="formData.name" />
                    </div>
                    <div class="mb-3">
                      <CheckBox :name="'gender'" :label="'Gender'" :onInput="handleInput" :value="true" :checked="formData.gender" />
                    </div>
                    <div class="mb-3">
                      <CheckBox :name="'age'" :label="'Age'" :onInput="handleInput" :value="true" :checked="formData.age" />
                    </div>
                  </div>
                  <div class="">
                    <div class="mb-3">
                      <CheckBox :name="'city'" :label="'City'" :onInput="handleInput" :value="true" :checked="formData.city" />
                    </div>
                    <div class="mb-3">
                      <CheckBox :name="'state'" :label="'State'" :onInput="handleInput" :value="true" :checked="formData.state" />
                    </div>
                    <div class="mb-3">
                      <CheckBox :name="'zip'" :label="'Zip'" :onInput="handleInput" :value="formData.zip" />
                    </div>
                  </div>
                  <div class="flex mt-6 md:mt-0 w-full md:w-auto flex-shrink-0 md:flex-shrink justify-end md:justify-center">
                    <Button :isButton="true" :onClick="handleTreatData" :text="'Treat Data'" :isFullWidth="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:mt-8 overflow-x-scroll border md:border-none">
            <table class="table-auto w-[1100px] md:w-full border-collapse bg-white text-left">
              <thead class="border-b-4 border-gray-lighter w-full">
                <tr class="table w-full">
                  <th class="bg-transparent px-2 py-2 uppercase text-light text-18 font-semibold">Name</th>
                  <th class="bg-transparent px-2 py-2 uppercase text-light text-18 font-semibold">Gender</th>
                  <th class="bg-transparent px-2 py-2 uppercase text-light text-18 font-semibold">Age</th>
                  <th class="bg-transparent px-2 py-2 uppercase text-light text-18 font-semibold">City</th>
                  <th class="bg-transparent px-2 py-2 uppercase text-light text-18 font-semibold">State</th>
                  <th class="bg-transparent px-2 py-2 uppercase text-light text-18 font-semibold">Zip</th>
                </tr>
              </thead>
              <tbody class="block w-full md:h-[240px] overflow-scroll">
                <tr v-for="(row, index) in parsedData" :key="index" class="w-full table table-fixed">
                  <td class="border-4 bg-gray-fade whitespace-nowrap">
                    <div class="px-3 py-2 text-21" :class="isChanged(row, 'name') ? 'bg-lime' : 'bg-white'">
                      {{ row.name }}
                    </div>
                  </td>
                  <td class="border-4 bg-gray-fade">
                    <div class="px-3 py-2 text-21 whitespace-nowrap" :class="isChanged(row, 'gender') ? 'bg-lime' : 'bg-white'">
                      {{ row.gender }}
                    </div>
                  </td>
                  <td class="border-4 bg-gray-fade">
                    <div class="px-3 py-2 text-21 whitespace-nowrap" :class="isChanged(row, 'age') ? 'bg-lime' : 'bg-white'">
                      {{ row.age }}
                    </div>
                  </td>
                  <td class="border-4 bg-gray-fade">
                    <div class="px-3 py-2 text-21 whitespace-nowrap" :class="isChanged(row, 'city') ? 'bg-lime' : 'bg-white'">
                      {{ row.city }}
                    </div>
                  </td>
                  <td class="border-4 bg-gray-fade">
                    <div class="px-3 py-2 text-21 whitespace-nowrap" :class="isChanged(row, 'state') ? 'bg-lime' : 'bg-white'">
                      {{ row.state }}
                    </div>
                  </td>
                  <td class="border-4 bg-gray-fade">
                    <div class="px-3 py-2 text-21 whitespace-nowrap" :class="isChanged(row, 'zip') ? 'bg-lime' : 'bg-white'">
                      {{ row.zip }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 z-0 md:hidden w-full h-24 sm-pattern-b-bg bg-cover" v-animate.repeat="'fade-in'"></div>
      <div class="absolute bottom-0 z-0 hidden md:flex" v-animate.repeat="'fade-in'">
        <g-image src="/uploads/hit-pattern-b-bg.png" height="191" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    pages(path: "/site/pages/product") {
      hero_section {
        header,
        sub_header
        button {
          text,
          link
        },
        image
      },
      experts_section {
        header,
        image
      },
      features {
        title,
        description,
        image
      },
      hiw {
        header,
        sub_header
      }
    }
  }
</page-query>

<script>
import Hero from "~/components/Hero.vue";
import CheckBox from "~/components/CheckBox.vue";
import Button from "~/components/Button.vue";
import Slider from "@vueform/slider/dist/slider.vue2.js";
import getData from "~/helpers/data.js";
import { parseMarkdown } from "~/helpers";

export default {
  components: {
    Hero,
    Slider,
    CheckBox,
    Button,
  },
  data() {
    return {
      value: 2,
      formData: {
        name: true,
        gender: true,
        age: true,
        city: true,
        state: true,
        zip: false,
      },
      parsedData: [],
    };
  },
  methods: {
    get_top_features(feats) {
      return feats.slice(0, 3);
    },
    handleTreatData() {
      this.parsedData = getData(this.value, this.formData);
    },
    handleInput($event) {
      if ($event.target.name === "city" || $event.target.name === "state") {
        this.formData["state"] = $event.target.checked;
        this.formData["city"] = $event.target.checked;
      } else {
        this.formData[$event.target.name] = $event.target.checked;
      }
    },
    isChanged(row, column) {
      return row.changed && row.changed.indexOf(column) >= 0;
    },
    parseMarkdown,
  },
  mounted() {
    this.parsedData = getData();
  },
  metaInfo: {
    title: "Privacy Dynamics",
  },
};
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style>
.hero.product .lot-fig {
  z-index: -1;
  right: 0;
  bottom: 4px;
  max-width: 235px;
}
.product-feature-item:nth-child(2) {
  @apply border-x border-gray-light;
}
.product-feature-item .feat-title {
  font-size: 38px;
  line-height: 48px;
  letter-spacing: -0.76px;
  width: 375px;
  padding-bottom: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='374.87' height='51.52' viewBox='0 0 374.87 51.52'%3E%3Cpath id='Path_79' data-name='Path 79' d='M1714,1864.669h324l50.41-50.411' transform='translate(-1714 -1813.799)' fill='none' stroke='%23fff' stroke-width='1.3'/%3E%3C/svg%3E%0A");
}
.index-item::before {
  content: "";
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='92.7' height='94.042' viewBox='0 0 92.7 94.042'%3E%3Cg id='Group_1062' data-name='Group 1062' transform='translate(-0.36 -0.359)'%3E%3Cpath id='Path_69' data-name='Path 69' d='M14.306,79.842a.328.328,0,0,1,.471-.005.343.343,0,0,1,0,.478.332.332,0,0,1-.471,0l0,0a.341.341,0,0,1,0-.475m-1.4-.982a.338.338,0,0,1,.014-.478.331.331,0,0,1,.471.014.342.342,0,0,1-.015.478.327.327,0,0,1-.463-.007L12.9,78.86m2.857,2.378a.328.328,0,0,1,.469-.027.341.341,0,0,1,.026.476.329.329,0,0,1-.469.027l-.014-.014a.34.34,0,0,1-.012-.461m-4.205-3.9a.341.341,0,0,1,.035-.476.329.329,0,0,1,.468.036.343.343,0,0,1-.033.478.331.331,0,0,1-.455-.017.082.082,0,0,1-.016-.022m5.714,5.229a.326.326,0,0,1,.466-.048.34.34,0,0,1,.05.475.334.334,0,0,1-.471.048l-.023-.024a.34.34,0,0,1-.021-.451m-6.994-6.806a.336.336,0,0,1,.057-.473.323.323,0,0,1,.466.057l0,0a.342.342,0,0,1-.055.476.33.33,0,0,1-.44-.027.155.155,0,0,1-.025-.031m8.559,8.068a.327.327,0,0,1,.467-.067l0,0a.344.344,0,0,1,.066.473.327.327,0,0,1-.466.067.244.244,0,0,1-.035-.031.342.342,0,0,1-.033-.44m-9.771-9.7a.34.34,0,0,1,.075-.473.333.333,0,0,1,.467.076.343.343,0,0,1-.08.473.325.325,0,0,1-.426-.036.228.228,0,0,1-.035-.04m11.39,10.888a.329.329,0,0,1,.462-.085l0,0A.344.344,0,0,1,21,85.4a.332.332,0,0,1-.464.088.336.336,0,0,1-.087-.471M7.92,72.445a.34.34,0,0,1,.1-.466.331.331,0,0,1,.462.1.348.348,0,0,1-.1.471.331.331,0,0,1-.417-.045.276.276,0,0,1-.045-.055m14.2,13.7a.329.329,0,0,1,.457-.11.342.342,0,0,1,.11.466.33.33,0,0,1-.459.107.269.269,0,0,1-.061-.047.342.342,0,0,1-.047-.416M6.856,70.711h0a.335.335,0,0,1,.115-.46.326.326,0,0,1,.455.117.341.341,0,0,1-.113.463.334.334,0,0,1-.4-.052.355.355,0,0,1-.052-.068M23.835,87.185a.332.332,0,0,1,.455-.131.339.339,0,0,1,.127.459.332.332,0,0,1-.454.131.4.4,0,0,1-.071-.057.336.336,0,0,1-.057-.4M5.867,68.93A.337.337,0,0,1,6,68.474a.331.331,0,0,1,.452.139.341.341,0,0,1-.137.458.334.334,0,0,1-.393-.06.328.328,0,0,1-.057-.081M25.6,88.149A.33.33,0,0,1,26.043,88a.343.343,0,0,1,.148.456.331.331,0,0,1-.447.148.412.412,0,0,1-.087-.065.343.343,0,0,1-.061-.386M4.955,67.1h0a.338.338,0,0,1,.155-.448.327.327,0,0,1,.442.157l0,0a.334.334,0,0,1-.537.382.322.322,0,0,1-.063-.093M27.4,89.03a.33.33,0,0,1,.44-.17.336.336,0,0,1,.167.447.328.328,0,0,1-.44.17.279.279,0,0,1-.1-.067.342.342,0,0,1-.068-.38M4.121,65.234h0a.339.339,0,0,1,.176-.442.328.328,0,0,1,.435.179l0,0a.344.344,0,0,1-.174.445.331.331,0,0,1-.367-.072.347.347,0,0,1-.073-.108m25.106,24.6a.332.332,0,0,1,.433-.191.34.34,0,0,1,.188.44.334.334,0,0,1-.433.191A.4.4,0,0,1,29.3,90.2a.345.345,0,0,1-.075-.363M3.373,63.333a.345.345,0,0,1,.195-.437A.334.334,0,0,1,4,63.1a.343.343,0,0,1-.193.435.335.335,0,0,1-.355-.079.33.33,0,0,1-.075-.119m27.72,27.218a.332.332,0,0,1,.423-.21.34.34,0,0,1,.207.43.335.335,0,0,1-.424.21l0,0a.307.307,0,0,1-.125-.079.342.342,0,0,1-.08-.348M2.709,61.4a.339.339,0,0,1,.212-.425.331.331,0,0,1,.421.217.338.338,0,0,1-.212.425.331.331,0,0,1-.341-.083.313.313,0,0,1-.08-.134M32.99,91.186a.329.329,0,0,1,.414-.229.339.339,0,0,1,.224.417.33.33,0,0,1-.414.23.349.349,0,0,1-.142-.086.339.339,0,0,1-.082-.332M2.128,59.438h0a.343.343,0,0,1,.233-.417.338.338,0,0,1,.177.652.324.324,0,0,1-.325-.085.337.337,0,0,1-.085-.149M34.913,91.733a.334.334,0,0,1,.4-.246.338.338,0,0,1,.242.408.331.331,0,0,1-.4.249A.351.351,0,0,1,35,92.056a.339.339,0,0,1-.087-.323M1.636,57.454a.34.34,0,0,1,.25-.406.337.337,0,0,1,.146.659.325.325,0,0,1-.308-.093.307.307,0,0,1-.088-.16M36.856,92.2a.334.334,0,0,1,.4-.263h0a.337.337,0,0,1,.261.4.332.332,0,0,1-.391.263l0,0a.334.334,0,0,1-.167-.093.341.341,0,0,1-.092-.308M1.227,55.448h0a.336.336,0,0,1,.268-.391.337.337,0,0,1,.118.664.323.323,0,0,1-.294-.093.343.343,0,0,1-.092-.179M38.819,92.574a.334.334,0,1,1,.278.387.337.337,0,0,1-.184-.1.342.342,0,0,1-.094-.292M.907,53.428a.333.333,0,1,1,.659-.091.334.334,0,0,1-.285.38A.326.326,0,0,1,1,53.625a.34.34,0,0,1-.094-.2M40.8,92.862a.335.335,0,0,1,.37-.3.341.341,0,0,1,.295.375.335.335,0,0,1-.372.3.317.317,0,0,1-.2-.1.343.343,0,0,1-.094-.277M.676,51.4a.332.332,0,1,1,.661-.064.341.341,0,0,1-.3.368.323.323,0,0,1-.266-.1A.317.317,0,0,1,.676,51.4M42.787,93.061a.334.334,0,1,1,.311.363.325.325,0,0,1-.215-.1.343.343,0,0,1-.1-.265M.528,49.357h0a.333.333,0,1,1,.35.323.329.329,0,0,1-.252-.1.344.344,0,0,1-.1-.225M44.785,93.178a.333.333,0,1,1,.666.017.341.341,0,0,1-.344.329.337.337,0,0,1-.322-.346M.469,47.315a.334.334,0,1,1,.336.337.33.33,0,0,1-.235-.1.344.344,0,0,1-.1-.236M46.783,93.2a.341.341,0,1,1,.1.234.342.342,0,0,1-.1-.234M.5,45.272h0a.334.334,0,0,1,.344-.325.338.338,0,0,1-.026.676.322.322,0,0,1-.221-.1.33.33,0,0,1-.1-.251M48.784,93.137a.332.332,0,1,1,.353.315.325.325,0,0,1-.256-.1.332.332,0,0,1-.1-.217M.62,43.232a.337.337,0,1,1,.1.265.343.343,0,0,1-.1-.265M50.779,92.984a.334.334,0,1,1,.365.3.334.334,0,0,1-.365-.3M.824,41.2a.338.338,0,0,1,.375-.293.338.338,0,0,1-.083.671A.342.342,0,0,1,.824,41.2M52.767,92.743a.333.333,0,1,1,.377.282.324.324,0,0,1-.285-.093.331.331,0,0,1-.092-.189M1.121,39.18A.328.328,0,0,1,1.5,38.9a.338.338,0,0,1-.11.666.344.344,0,0,1-.179-.1.331.331,0,0,1-.091-.294M54.74,92.414a.337.337,0,0,1,.263-.4.333.333,0,0,1,.391.267.337.337,0,0,1-.263.4.333.333,0,0,1-.3-.093.349.349,0,0,1-.091-.174M1.5,37.175h0a.334.334,0,1,1,.652.142.332.332,0,0,1-.393.26.326.326,0,0,1-.164-.091.347.347,0,0,1-.095-.31M56.7,92a.335.335,0,0,1,.244-.406l0,0a.337.337,0,0,1,.4.251.343.343,0,0,1-.247.409.33.33,0,0,1-.315-.09A.334.334,0,0,1,56.7,92M1.964,35.188A.334.334,0,1,1,2.2,35.6a.326.326,0,0,1-.148-.088.344.344,0,0,1-.089-.325m56.678,56.3a.335.335,0,0,1,.228-.418.331.331,0,0,1,.41.229.334.334,0,0,1-.556.334.311.311,0,0,1-.082-.145M2.516,33.227a.33.33,0,0,1,.416-.222.337.337,0,0,1,.221.42.334.334,0,0,1-.555.139.343.343,0,0,1-.082-.337M60.557,90.9a.338.338,0,0,1,.207-.425.336.336,0,0,1,.215.638.325.325,0,0,1-.341-.078.318.318,0,0,1-.08-.134M3.154,31.292a.33.33,0,0,1,.424-.205.339.339,0,0,1,.2.432.329.329,0,0,1-.423.205.354.354,0,0,1-.122-.081.341.341,0,0,1-.079-.351M62.447,90.224a.339.339,0,0,1,.188-.435.33.33,0,0,1,.43.194.335.335,0,0,1-.19.437.33.33,0,0,1-.355-.079.327.327,0,0,1-.073-.117M3.872,29.388h0A.328.328,0,0,1,4.3,29.2a.337.337,0,0,1,.183.44l0,0a.331.331,0,0,1-.433.182.29.29,0,0,1-.108-.072.342.342,0,0,1-.072-.366M64.306,89.465a.338.338,0,0,1,.169-.445.331.331,0,0,1,.44.175.342.342,0,0,1-.172.446l0,0a.328.328,0,0,1-.367-.072.3.3,0,0,1-.068-.1M4.672,27.516a.327.327,0,0,1,.44-.164.343.343,0,0,1,.165.449.33.33,0,0,1-.442.162.266.266,0,0,1-.1-.065.339.339,0,0,1-.066-.382M66.13,88.622a.343.343,0,0,1,.151-.454.334.334,0,0,1,.447.158.338.338,0,0,1-.153.451.324.324,0,0,1-.381-.067.308.308,0,0,1-.064-.088M5.554,25.68A.33.33,0,0,1,6,25.534a.342.342,0,0,1,.144.456.332.332,0,0,1-.45.146.365.365,0,0,1-.083-.065.344.344,0,0,1-.061-.391M67.912,87.7a.344.344,0,0,1,.132-.459.333.333,0,0,1,.452.134.34.34,0,0,1-.132.459.325.325,0,0,1-.4-.057.314.314,0,0,1-.056-.076M6.519,23.884a.327.327,0,0,1,.452-.124.34.34,0,0,1,.125.461.336.336,0,0,1-.457.124.328.328,0,0,1-.069-.055.338.338,0,0,1-.052-.406M69.651,86.7a.341.341,0,0,1,.113-.463.33.33,0,0,1,.456.115.341.341,0,0,1-.113.463.33.33,0,0,1-.407-.05.339.339,0,0,1-.05-.065M7.557,22.134a.332.332,0,0,1,.462-.1.339.339,0,0,1,.1.465.328.328,0,0,1-.459.1.258.258,0,0,1-.057-.043.343.343,0,0,1-.047-.42M71.345,85.618a.336.336,0,0,1,.092-.465.328.328,0,0,1,.461.091.341.341,0,0,1-.091.47.33.33,0,0,1-.419-.043.236.236,0,0,1-.042-.052M8.675,20.432a.329.329,0,0,1,.462-.086.345.345,0,0,1,.084.473.334.334,0,0,1-.464.084.345.345,0,0,1-.047-.039.336.336,0,0,1-.035-.432M72.99,84.465a.338.338,0,0,1,.073-.471.331.331,0,0,1,.466.072.342.342,0,0,1-.073.471l0,0a.335.335,0,0,1-.435-.031.326.326,0,0,1-.033-.043M9.861,18.78a.33.33,0,0,1,.466-.062.345.345,0,0,1,.064.476.333.333,0,0,1-.466.062.207.207,0,0,1-.035-.031.344.344,0,0,1-.028-.444M74.583,83.24a.338.338,0,0,1,.052-.473.328.328,0,0,1,.469.05.344.344,0,0,1-.05.476l0,0a.327.327,0,0,1-.444-.021c-.01-.01-.015-.019-.024-.029M11.121,17.186a.329.329,0,0,1,.468-.045.344.344,0,0,1,.042.478.33.33,0,0,1-.469.041.1.1,0,0,1-.023-.019.339.339,0,0,1-.018-.454m65,64.757a.336.336,0,0,1,.028-.473l0,0a.327.327,0,0,1,.469.031.345.345,0,0,1-.028.478l0,0a.328.328,0,0,1-.455-.012.05.05,0,0,1-.014-.019m-63.679-66.3a.331.331,0,0,1,.473-.022.343.343,0,0,1,.019.477.328.328,0,0,1-.469.022l-.011-.011a.342.342,0,0,1-.012-.465M77.6,80.584a.343.343,0,0,1,.009-.478.332.332,0,0,1,.474.008.346.346,0,0,1-.012.48.331.331,0,0,1-.466-.005l0-.005M13.836,14.169a.427.427,0,0,0,.068-.07.332.332,0,0,1,.471,0,.342.342,0,0,1,0,.478c-.012.012-.026.022-.035.032s-.019.024-.03.035a.33.33,0,0,1-.471,0,.336.336,0,0,1,0-.475M79.019,78.682a.323.323,0,0,1,.468-.012.337.337,0,0,1,.012.476.328.328,0,0,1-.468.012s-.007,0-.01-.005a.341.341,0,0,1,0-.471M15.335,13.163a.344.344,0,0,1,.023-.477.327.327,0,0,1,.469.021.342.342,0,0,1-.019.478.331.331,0,0,1-.461-.009l-.012-.012M80.358,77.194a.329.329,0,0,1,.469-.031.343.343,0,0,1,.033.478.33.33,0,0,1-.468.031l-.016-.017a.343.343,0,0,1-.017-.461M16.83,11.815a.342.342,0,0,1,.04-.476l0,0a.33.33,0,0,1,.468.04.343.343,0,0,1-.042.478.326.326,0,0,1-.447-.019l-.021-.021m64.8,63.837A.33.33,0,0,1,82.1,75.6a.344.344,0,0,1,.052.478.329.329,0,0,1-.468.05c-.007-.007-.018-.014-.028-.024a.34.34,0,0,1-.023-.449M18.38,10.532a.337.337,0,0,1,.062-.473.326.326,0,0,1,.466.062.339.339,0,0,1-.062.473.332.332,0,0,1-.438-.029.187.187,0,0,1-.028-.034m64.463,63.52a.33.33,0,0,1,.464-.074.34.34,0,0,1,.071.473.33.33,0,0,1-.464.074.277.277,0,0,1-.038-.034.339.339,0,0,1-.033-.439M19.985,9.319a.337.337,0,0,1,.083-.471.33.33,0,0,1,.463.083.345.345,0,0,1-.082.471.323.323,0,0,1-.464-.083M83.98,72.4a.33.33,0,0,1,.461-.1.343.343,0,0,1,.092.471.33.33,0,0,1-.461.091.2.2,0,0,1-.05-.041.34.34,0,0,1-.042-.425M21.64,8.18a.339.339,0,0,1,.1-.465.329.329,0,0,1,.459.1.339.339,0,0,1-.1.465.326.326,0,0,1-.412-.045.272.272,0,0,1-.047-.057M85.044,70.7a.326.326,0,0,1,.457-.115.342.342,0,0,1,.113.463.331.331,0,0,1-.457.115.335.335,0,0,1-.064-.05.343.343,0,0,1-.049-.413M23.342,7.117a.344.344,0,0,1,.122-.463.332.332,0,0,1,.457.124.341.341,0,0,1-.125.461.327.327,0,0,1-.4-.052.346.346,0,0,1-.054-.07M86.032,68.954a.33.33,0,0,1,.452-.134.34.34,0,0,1,.132.458.334.334,0,0,1-.452.134.3.3,0,0,1-.076-.057.34.34,0,0,1-.056-.4M25.09,6.131a.344.344,0,0,1,.142-.458.329.329,0,0,1,.449.146.34.34,0,0,1-.143.456.329.329,0,0,1-.387-.062.351.351,0,0,1-.061-.081M86.943,67.165h0a.33.33,0,0,1,.445-.155.34.34,0,0,1,.153.451.332.332,0,0,1-.445.156.319.319,0,0,1-.087-.065.341.341,0,0,1-.066-.387M26.883,5.219a.337.337,0,0,1,.162-.446.33.33,0,0,1,.442.162.342.342,0,0,1-.162.451l0,0a.333.333,0,0,1-.379-.069.358.358,0,0,1-.066-.1M87.776,65.336h0a.333.333,0,0,1,.44-.175.338.338,0,0,1,.17.445.331.331,0,0,1-.539.1.343.343,0,0,1-.07-.373M28.714,4.393a.342.342,0,0,1,.181-.441.333.333,0,0,1,.435.183.341.341,0,0,1-.181.442.326.326,0,0,1-.36-.074.356.356,0,0,1-.076-.11M88.527,63.477l0,0a.329.329,0,0,1,.428-.2.34.34,0,0,1,.191.437.333.333,0,0,1-.431.193.324.324,0,0,1-.113-.076.342.342,0,0,1-.078-.361M30.58,3.65a.34.34,0,0,1,.2-.434A.337.337,0,0,1,31,3.851l0,0a.336.336,0,0,1-.348-.081.348.348,0,0,1-.078-.122M89.2,61.585h0a.334.334,0,1,1,.633.213.329.329,0,0,1-.418.215.308.308,0,0,1-.132-.081.346.346,0,0,1-.082-.346m-56.72-58.6a.337.337,0,0,1,.219-.422.33.33,0,0,1,.416.222.337.337,0,0,1-.219.422.331.331,0,0,1-.334-.086.327.327,0,0,1-.082-.136M89.783,59.665a.329.329,0,0,1,.412-.231.338.338,0,0,1-.184.649.346.346,0,0,1-.143-.088.336.336,0,0,1-.085-.33M34.4,2.416A.338.338,0,0,1,34.633,2a.332.332,0,0,1,.407.241.333.333,0,0,1-.644.172m55.894,55.3a.327.327,0,0,1,.4-.248.336.336,0,0,1,.244.406.33.33,0,0,1-.4.248.324.324,0,0,1-.158-.088.333.333,0,0,1-.087-.318M36.341,1.927a.333.333,0,1,1,.65-.144.338.338,0,0,1-.257.4l0,0a.326.326,0,0,1-.306-.091.33.33,0,0,1-.09-.167M90.709,55.752a.329.329,0,0,1,.388-.265.338.338,0,0,1,.263.4l0,0a.333.333,0,0,1-.565.177.338.338,0,0,1-.089-.306M38.3,1.527a.334.334,0,1,1,.384.275l0,0a.34.34,0,0,1-.292-.1.348.348,0,0,1-.094-.182M91.04,53.768a.332.332,0,0,1,.379-.284.34.34,0,0,1,.28.385.335.335,0,0,1-.379.284.342.342,0,0,1-.28-.384M40.281,1.215a.332.332,0,1,1,.372.292.327.327,0,0,1-.278-.1.34.34,0,0,1-.094-.2M91.289,51.771h0a.33.33,0,0,1,.362-.3.337.337,0,0,1-.068.671.323.323,0,0,1-.2-.1.332.332,0,0,1-.094-.272M42.267.991a.339.339,0,0,1,.308-.366l0,0a.328.328,0,0,1,.358.306.331.331,0,0,1-.565.267.348.348,0,0,1-.1-.21M91.449,49.766a.334.334,0,1,1,.314.356.326.326,0,0,1-.215-.1.343.343,0,0,1-.1-.258M44.265.854a.333.333,0,1,1,.346.323.325.325,0,0,1-.249-.1.336.336,0,0,1-.1-.227m47.26,46.9a.333.333,0,1,1,.329.344.336.336,0,0,1-.233-.1.352.352,0,0,1-.1-.246M46.265.806a.332.332,0,1,1,.663.005.333.333,0,0,1-.334.334.328.328,0,0,1-.233-.1.334.334,0,0,1-.1-.241M91.513,45.737a.334.334,0,1,1,.668-.019l0,0a.33.33,0,0,1-.567.246.348.348,0,0,1-.1-.229M48.263.847a.332.332,0,1,1,.318.356.348.348,0,0,1-.222-.1.338.338,0,0,1-.1-.256M91.417,43.724a.333.333,0,1,1,.355.312.33.33,0,0,1-.355-.312M50.259.976a.332.332,0,1,1,.3.368l0,0a.332.332,0,0,1-.2-.1.346.346,0,0,1-.094-.273M91.233,41.719a.333.333,0,1,1,.367.3.331.331,0,0,1-.273-.1.325.325,0,0,1-.093-.2M52.245,1.2a.334.334,0,1,1,.661.093.335.335,0,0,1-.377.287.314.314,0,0,1-.188-.1.341.341,0,0,1-.1-.284M90.962,39.72a.333.333,0,1,1,.657-.108.331.331,0,0,1-.565.291.334.334,0,0,1-.092-.183M54.222,1.5a.33.33,0,0,1,.386-.272.337.337,0,0,1-.118.664.33.33,0,0,1-.176-.093.335.335,0,0,1-.091-.3M90.6,37.738a.342.342,0,0,1,.259-.4A.338.338,0,0,1,91,38a.322.322,0,0,1-.3-.093.339.339,0,0,1-.092-.17M56.18,1.893a.333.333,0,0,1,.4-.253.338.338,0,0,1,.249.406.33.33,0,0,1-.4.251.307.307,0,0,1-.163-.088.352.352,0,0,1-.089-.315M90.162,35.771a.337.337,0,0,1,.243-.409.331.331,0,0,1,.4.246l0,0a.34.34,0,0,1-.244.411.328.328,0,0,1-.316-.091.331.331,0,0,1-.087-.155m-32.04-33.4a.333.333,0,1,1,.235.415.336.336,0,0,1-.151-.085.346.346,0,0,1-.084-.33M89.635,33.827a.333.333,0,1,1,.411.227.328.328,0,0,1-.329-.086.337.337,0,0,1-.082-.141M60.04,2.939a.332.332,0,0,1,.421-.217l0,0a.335.335,0,0,1,.215.422.33.33,0,0,1-.417.217l0,0a.359.359,0,0,1-.134-.083.342.342,0,0,1-.08-.344M89.024,31.907h0a.339.339,0,0,1,.2-.432.335.335,0,0,1,.424.21.339.339,0,0,1-.207.43.326.326,0,0,1-.341-.078.335.335,0,0,1-.079-.129M61.929,3.59a.334.334,0,0,1,.428-.2.341.341,0,0,1,.2.435.334.334,0,0,1-.43.2.318.318,0,0,1-.118-.076.345.345,0,0,1-.078-.356m26.4,26.426a.34.34,0,0,1,.188-.44.329.329,0,0,1,.431.189.34.34,0,0,1-.184.439.331.331,0,0,1-.36-.074.374.374,0,0,1-.075-.114M63.788,4.321a.331.331,0,0,1,.438-.176l0,0a.341.341,0,0,1,.178.444.331.331,0,0,1-.435.18.336.336,0,0,1-.178-.445M87.552,28.156l0,0a.342.342,0,0,1,.17-.45.331.331,0,0,1,.438.172.336.336,0,0,1-.164.444.331.331,0,0,1-.375-.069.3.3,0,0,1-.066-.1M65.619,5.143a.331.331,0,0,1,.445-.159.337.337,0,0,1,.155.448.332.332,0,0,1-.442.162.425.425,0,0,1-.092-.069.337.337,0,0,1-.066-.382M86.694,26.334h0a.342.342,0,0,1,.146-.454.334.334,0,0,1,.45.151.337.337,0,0,1-.149.451.325.325,0,0,1-.384-.06.4.4,0,0,1-.063-.088M67.413,6.041a.333.333,0,0,1,.449-.141A.34.34,0,0,1,68,6.358a.33.33,0,0,1-.449.141.575.575,0,0,1-.081-.062.343.343,0,0,1-.056-.4M85.761,24.558h0a.339.339,0,0,1,.125-.461.333.333,0,0,1,.454.131.339.339,0,0,1-.127.458.33.33,0,0,1-.4-.057.294.294,0,0,1-.052-.072M69.163,7.02a.329.329,0,0,1,.456-.119l0,0a.337.337,0,0,1,.12.461.331.331,0,0,1-.457.119.3.3,0,0,1-.066-.052.341.341,0,0,1-.052-.41m15.586,15.8h0a.343.343,0,0,1,.105-.465.33.33,0,0,1,.459.107.339.339,0,0,1-.106.465.333.333,0,0,1-.411-.045.278.278,0,0,1-.047-.062M70.87,8.077a.333.333,0,0,1,.461-.1.339.339,0,0,1,.1.47.329.329,0,0,1-.458.1.484.484,0,0,1-.055-.045.343.343,0,0,1-.045-.423m12.8,13.059a.341.341,0,0,1,.087-.471.327.327,0,0,1,.461.091.341.341,0,0,1-.085.468.33.33,0,0,1-.423-.039.378.378,0,0,1-.04-.05M72.531,9.209a.33.33,0,0,1,.463-.078.339.339,0,0,1,.076.472.331.331,0,0,1-.464.079.358.358,0,0,1-.042-.038.34.34,0,0,1-.033-.435M82.509,19.5a.34.34,0,0,1,.067-.473.329.329,0,0,1,.466.068.347.347,0,0,1-.069.475.329.329,0,0,1-.433-.034.2.2,0,0,1-.031-.035m-8.37-9.086a.331.331,0,0,1,.469-.055l0,0a.341.341,0,0,1,.059.475.331.331,0,0,1-.469.055.214.214,0,0,1-.03-.027.343.343,0,0,1-.025-.447m7.14,7.5a.346.346,0,0,1,.047-.478.334.334,0,0,1,.47.047l0,0a.341.341,0,0,1-.045.475.335.335,0,0,1-.447-.024l-.023-.024M75.7,11.69a.328.328,0,0,1,.468-.035.34.34,0,0,1,.035.475.334.334,0,0,1-.471.039l-.019-.019a.34.34,0,0,1-.013-.459m4.29,4.7,0,0a.336.336,0,0,1,.023-.477.328.328,0,0,1,.469.026.342.342,0,0,1-.023.478A.332.332,0,0,1,80,16.4Zm-2.777-2.88a.338.338,0,0,1-.017-.476.329.329,0,0,1,.471-.019.34.34,0,0,1,.014.478.328.328,0,0,1-.468.017m1.417,1.409a.344.344,0,0,1,0-.478.329.329,0,0,1,.473.007.335.335,0,0,1-.008.476.329.329,0,0,1-.465,0Z' transform='translate(0.868 0.867)' fill='%23cacfd7'/%3E%3Cpath id='Path_70' data-name='Path 70' d='M13.879,79.918a47.155,47.155,0,0,1,0-65.81,45.255,45.255,0,0,1,64.7,0,.341.341,0,0,1,0,.477.327.327,0,0,1-.469,0,44.6,44.6,0,0,0-63.761,0,46.471,46.471,0,0,0,0,64.855.341.341,0,0,1,0,.478.328.328,0,0,1-.47,0' transform='translate(0.859 0.859)' fill='%23d1f263'/%3E%3Cpath id='Path_71' data-name='Path 71' d='M13.879,79.918a47.155,47.155,0,0,1,0-65.81,45.255,45.255,0,0,1,64.7,0,.341.341,0,0,1,0,.477.327.327,0,0,1-.469,0,44.6,44.6,0,0,0-63.761,0,46.471,46.471,0,0,0,0,64.855.341.341,0,0,1,0,.478A.328.328,0,0,1,13.879,79.918Z' transform='translate(0.859 0.859)' fill='none' stroke='%23d4f36c' stroke-miterlimit='10' stroke-width='2'/%3E%3Cpath id='Path_72' data-name='Path 72' d='M107.995,17.046a1.787,1.787,0,1,1,0,2.528,1.787,1.787,0,0,1,0-2.528' transform='translate(-30.613 -3.654)' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E%0A");
  @apply w-full h-full absolute top-0 left-0 bg-auto bg-center bg-no-repeat;
}
.experts-section {
  background-size: 50%;
}
.product-feature-item:nth-child(2) .index-item::before {
  transform: rotate(45deg);
}
.product-feature-item:nth-child(3) .index-item::before {
  transform: rotate(135deg);
}
.hit-section::after {
  transform: scaleY(-1);
}
.treat-data {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='1137' height='618.63' viewBox='0 0 1137 618.63'%3E%3Cdefs%3E%3Cfilter id='Rectangle_1133' x='0' y='0' width='1137' height='618.63' filterUnits='userSpaceOnUse'%3E%3CfeOffset dx='8' dy='8' input='SourceAlpha'/%3E%3CfeGaussianBlur result='blur'/%3E%3CfeFlood flood-color='%23cacfd7'/%3E%3CfeComposite operator='in' in2='blur'/%3E%3CfeComposite in='SourceGraphic'/%3E%3C/filter%3E%3C/defs%3E%3Cg id='Group_512' data-name='Group 512' transform='translate(-123 -2861.486)'%3E%3Cg transform='matrix(1, 0, 0, 1, 123, 2861.49)' filter='url(%23Rectangle_1133)'%3E%3Crect id='Rectangle_1133-2' data-name='Rectangle 1133' width='1129' height='610.63' rx='12' fill='%23e9ecef'/%3E%3C/g%3E%3Ccircle id='Ellipse_45' data-name='Ellipse 45' cx='5.231' cy='5.231' r='5.231' transform='translate(1222.515 2884.314)' fill='%23a6afbc'/%3E%3Ccircle id='Ellipse_46' data-name='Ellipse 46' cx='5.231' cy='5.231' r='5.231' transform='translate(1201.59 2884.314)' fill='%23a6afbc'/%3E%3Ccircle id='Ellipse_47' data-name='Ellipse 47' cx='5.231' cy='5.231' r='5.231' transform='translate(1180.665 2884.314)' fill='%23a6afbc'/%3E%3C/g%3E%3C/svg%3E%0A");
}

@media (max-width: 640px) {
  .sm-pattern-bg {
    background-image: url(/uploads/hit-pattern-bg.png);
  }
  .sm-pattern-b-bg {
    background-image: url(/uploads/hit-pattern-b-bg.png);
  }
  .product-feature-item:nth-child(2) {
    @apply border-none;
  }
  .treat-data {
    background-image: none;
  }
  .hero.product h1 strong::after {
    width: 130px;
    height: 40px;
    left: -5px;
  }
  .product-feature-item .feat-title {
    font-size: 32px;
    line-height: 45px;
    letter-spacing: -0.96px;
  }
}
@media (max-width: 1155px) {
  .hero.product .lot-fig {
    right: auto;
    left: -5px;
    bottom: 3px;
    max-width: 220px;
  }
}
@media (max-width: 768px) {
  .experts-section {
    background-image: none !important;
  }

  .hero.product .lot-fig {
    right: 0;
    left: auto;
    bottom: 14px;
    max-width: 134px;
  }
}
</style>