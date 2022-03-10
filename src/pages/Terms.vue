<template>
  <Layout>
    <div class="w-full bg-white flex justify-center">
      <div class="container"></div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    pages(path: "/site/pages/terms") {
        header,
		lead_content,
		content
    },
  }
</page-query>

<script>
import { parseMarkdown } from "~/helpers";
export default {
  methods: {
    parseMarkdown,
  },
  metaInfo: {
    title: "Privacy Dynamics",
  },
};
</script>

