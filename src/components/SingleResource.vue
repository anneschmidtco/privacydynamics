<template>
  <div class="w-full flex-col">
    <div class="w-full flex justify-between">
      <h3 class="text-gray font-display text-[14px] tracking-[2.1px] font-semibold">{{ $static.resource.heading }}</h3>
      <p class="text-15 leading-[28px] tracking-[1.5px] font-display">{{ pageIndex }}.0</p>
    </div>
    <div class="w-full pb-14 border-b border-gray mt-12">
      <h5 class="text-50 leading-60 tracking-[-1px] font-normal mt-16 relative flex items-start before:bg-lime before:w-[24px] before:h-[24px] before:inline before:top-0 before:mr-6 mb-12">{{ $static.resource.title }}</h5>
      <p class="text-25 leading-37 tracking-[-0.5px]">{{ $static.resource.excerpt }}</p>
    </div>
    <div class="w-full text-17 tracking-[-0.34px] mb-4 md:columns-2 pt-14 gap-9" v-html="$static.resource.content"></div>
    <div class="w-full mb-12 mt-16">
      <Button :text="$static.resource.download_button.text" :link="$static.resource.download_button.link" :download="true" />
    </div>
  </div>
</template>
<static-query>
	query {
		resource(id: "6fa4ae1dc697f57a645642a9d8150e91") {
			id,
			heading,
			title,
			excerpt,
			date,
			content,
			download_button {
				text,
				link
			}
			category {
				id,
				name
			}
		}
	}
</static-query>

<script>
import Button from "~/components/Button.vue";
import { parseMarkdown } from "~/helpers";

export default {
  props: ["pageId", "pageIndex"],
  components: {
    Button,
  },
  methods: {
    parseMarkdown,
  },
};
</script>

<style>
h1 strong {
  font-weight: 600;
}
</style>