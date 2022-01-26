<template>
  <div class="w-full">
    <g-link v-if="link && !isButton" class="btn inline-flex items-center justify-center group px-8 py-4 mx-1 text-[1ppx] font-display font-medium text-brand-gray text-center bg-brand-lime w-auto hover:bg-brand-gray hover:text-white cursor-pointer hover:fill-brand-lime" :class="isFullWidth ? 'w-full' : ''" :to="link">
      <span v-if="icon && !download" class="h-[15px] flex justify-start items-center mr-2 btn-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="21.707" height="21.707" viewBox="0 0 21.707 21.707" class="group-hover:hidden">
          <g id="Group_1068" data-name="Group 1068" transform="translate(-0.068 -0.068)">
            <line id="Line_2" data-name="Line 2" x2="19.868" y2="19.868" transform="translate(0.775 0.775)" fill="none" stroke="#142331" stroke-miterlimit="10" stroke-width="2" />
            <path id="Path_1180" data-name="Path 1180" d="M21.536,3.9V21.536H3.9" transform="translate(-0.761 -0.761)" fill="none" stroke="#142331" stroke-miterlimit="10" stroke-width="2" />
          </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="21.707" height="21.707" viewBox="0 0 21.707 21.707" class="hidden group-hover:inline-flex">
          <g id="Group_1068" data-name="Group 1068" transform="translate(-0.068 -0.068)">
            <line id="Line_2" data-name="Line 2" x2="19.868" y2="19.868" transform="translate(0.775 0.775)" fill="none" stroke="#CCF74F" stroke-miterlimit="10" stroke-width="2" />
            <path id="Path_1180" data-name="Path 1180" d="M21.536,3.9V21.536H3.9" transform="translate(-0.761 -0.761)" fill="none" stroke="#CCF74F" stroke-miterlimit="10" stroke-width="2" />
          </g>
        </svg>
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
    download: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>