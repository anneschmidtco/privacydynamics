<template>
  <div>
    <g-link
      v-if="link && !isButton"
      class="
        btn
        inline-flex
        items-center
        justify-center
        px-8
        py-4
        mx-1
        text-[1ppx]
        font-display font-medium
        text-brand-gray text-center
        bg-brand-lime
        w-auto
        hover:bg-brand-gray hover:text-brand-lime
        cursor-pointer
        hover:fill-brand-lime
      "
      :class="isFullWidth ? 'w-full' : ''"
      :to="link"
    >
      <span v-if="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19.192"
          height="19.192"
          viewBox="0 0 19.192 19.192"
        >
          <g
            id="Group_41"
            data-name="Group 41"
            transform="translate(6.101 -5.42) rotate(45)"
          >
            <path
              id="Path_2"
              data-name="Path 2"
              d="M175.27,436.73l-.68-.68,7.466-7.466-7.465-7.465.68-.68,8.146,8.146Z"
              transform="translate(-164.902 -420.438)"
            />
            <rect
              id="Rectangle_5"
              data-name="Rectangle 5"
              width="17.834"
              height="0.963"
              transform="translate(0 7.665)"
            />
          </g>
        </svg>
      </span>
      <span :class="icon ? 'ml-3' : ''">
        {{ text }}
      </span>
    </g-link>
    <button
      v-if="isButton"
      @click="onClick"
      class="
        btn
        appearance-none
        inline-flex
        items-center
        justify-center
        px-8
        py-4
        mx-1
        text-[1ppx]
        font-display font-medium
        text-brand-gray text-center
        bg-brand-lime
        w-auto
        hover:bg-brand-gray hover:text-brand-lime
        cursor-pointer
        hover:fill-brand-lime
      "
      :class="isFullWidth ? 'w-full' : ''"
    >
      <span v-if="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19.192"
          height="19.192"
          viewBox="0 0 19.192 19.192"
        >
          <g
            id="Group_41"
            data-name="Group 41"
            transform="translate(6.101 -5.42) rotate(45)"
          >
            <path
              id="Path_2"
              data-name="Path 2"
              d="M175.27,436.73l-.68-.68,7.466-7.466-7.465-7.465.68-.68,8.146,8.146Z"
              transform="translate(-164.902 -420.438)"
            />
            <rect
              id="Rectangle_5"
              data-name="Rectangle 5"
              width="17.834"
              height="0.963"
              transform="translate(0 7.665)"
            />
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