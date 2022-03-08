<template>
  <div class="w-full">
    <g-link v-if="link && !isButton" :to="link">
      <span class="btn inline-flex items-center justify-center group px-8 py-4 mx-1 text-[15px] font-display font-medium text-brand-gray text-center bg-brand-lime w-auto hover:bg-brand-gray hover:text-white cursor-pointer hover:fill-brand-lime transition-colors duration-1000" :class="isFullWidth ? 'w-full' : ''" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
        <span v-if="icon && !download" class="flex justify-start items-center btn-icon">
          <lottie-player ref="loticon" src="https://assets7.lottiefiles.com/packages/lf20_kh3djzj3.json" background="transparent" speed="1" style="width: 20px; height: 20px"></lottie-player>
        </span>
        <span v-if="icon && download" class="h-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21.076" viewBox="0 0 20 21.076" class="animated">
            <g id="Group_41" data-name="Group 41" transform="translate(17.792) rotate(90)">
              <path id="Path_2" data-name="Path 2" d="M175.27,436.73l-.68-.68,7.466-7.466-7.465-7.465.68-.68,8.146,8.146Z" transform="translate(-166.641 -420.438)" />
              <rect id="Rectangle_5" data-name="Rectangle 5" width="16.095" height="0.963" transform="translate(0 7.665)" />
            </g>
            <line id="Line_59" data-name="Line 59" x2="20" transform="translate(0 20.576)" fill="none" stroke="#172330" stroke-width="1" />
          </svg>
        </span>
        <span :class="icon ? 'ml-3' : ''">
          {{ text }}
        </span>
      </span>
    </g-link>
    <button v-if="isButton" @click="onClick" class="btn appearance-none inline-flex items-center justify-center px-8 py-4 mx-1 text-[15px] font-display font-medium text-brand-gray text-center bg-brand-lime w-auto hover:bg-brand-gray hover:text-brand-lime cursor-pointer hover:fill-brand-lime" :class="isFullWidth ? 'w-full' : ''" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <span v-if="icon">
        <lottie-player ref="loticon" src="https://assets7.lottiefiles.com/packages/lf20_yudfaucy.json" background="transparent" speed="1" style="width: 40px; height: 40px"></lottie-player>
      </span>
      <span :class="icon ? 'ml-3' : ''">
        {{ text }}
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: Boolean,
      required: false,
      default: true,
    },
    link: String,
    text: String,
    isFullWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
    isButton: {
      type: Boolean,
      required: false,
      default: false,
    },
    onClick: {
      type: Function,
      required: false,
    },
    download: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    handleMouseEnter() {
      console.log("enter");
      this.$refs.loticon.play();
    },
    handleMouseLeave() {
      console.log("leave");
      this.$refs.loticon.stop();
    },
  },
};
</script>