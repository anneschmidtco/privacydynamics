<template>
  <div>
    <g-link v-if="link && !isButton" class="btn inline-flex items-center justify-center group px-8 py-4 mx-1 text-[1ppx] font-display font-medium text-brand-gray text-center bg-brand-lime w-auto hover:bg-brand-gray hover:text-white cursor-pointer hover:fill-brand-lime" :class="isFullWidth ? 'w-full' : ''" :to="link">
      <span v-if="icon" class="h-[20px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="31.292" height="31.292" viewBox="0 0 31.292 31.292" class="inline group-hover:hidden">
          <line id="Line_2" data-name="Line 2" x2="29.39" y2="29.39" transform="translate(0.707 0.707)" fill="none" stroke="#142331" stroke-miterlimit="10" stroke-width="2" />
          <path id="Path_1180" data-name="Path 1180" d="M29.986,3.9V29.986H3.9" transform="translate(0.306 0.306)" fill="none" stroke="#142331" stroke-miterlimit="10" stroke-width="2" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="32.35" height="44.85" viewBox="0 0 32.35 44.85" class="hidden group-hover:inline rotate-90">
          <g id="Group_1068" data-name="Group 1068" transform="translate(-0.076 -0.059)">
            <line id="Line_2" data-name="Line 2" x2="30.953" y2="30.225" transform="translate(0.775 0.775)" fill="none" stroke="#ccf74f" stroke-miterlimit="10" stroke-width="2" />
            <path id="Path_1180" data-name="Path 1180" d="M32.162,30.09h0s-9.138,10-12.672,13.761" transform="translate(-1.273 0.374)" fill="none" stroke="#ccf74f" stroke-miterlimit="10" stroke-width="2" />
          </g>
        </svg>
      </span>
      <span :class="icon ? 'ml-3' : ''">
        {{ text }}
      </span>
    </g-link>
    <button v-if="isButton" @click="onClick" class="btn appearance-none inline-flex items-center justify-center px-8 py-4 mx-1 text-[1ppx] font-display font-medium text-brand-gray text-center bg-brand-lime w-auto hover:bg-brand-gray hover:text-brand-lime cursor-pointer hover:fill-brand-lime" :class="isFullWidth ? 'w-full' : ''">
      <span v-if="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="19.192" height="19.192" viewBox="0 0 19.192 19.192">
          <g id="Group_41" data-name="Group 41" transform="translate(6.101 -5.42) rotate(45)">
            <path id="Path_2" data-name="Path 2" d="M175.27,436.73l-.68-.68,7.466-7.466-7.465-7.465.68-.68,8.146,8.146Z" transform="translate(-164.902 -420.438)" />
            <rect id="Rectangle_5" data-name="Rectangle 5" width="17.834" height="0.963" transform="translate(0 7.665)" />
          </g>
        </svg>
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
      default: false,
    },
  },
};
</script>