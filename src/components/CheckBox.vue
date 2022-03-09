<template>
  <div class="w-full">
    <input class="appearance-none h-[21px] w-[21px] border border-gray-lighter rounded-md bg-gray-light checked:bg-teal checked:border-teal focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" :name="name" type="checkbox" :value="value" :checked="checked" :id="name" @input="onInput" />
    <label class="inline-block text-white" :for="name">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      required: false,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
    name: String,
    label: String,
    value: {
      type: Boolean,
      required: false,
      default: "",
    },
    onInput: {
      type: Function,
      required: false,
    },
  },
};
</script>