<template>
  <Layout>
    <div class="w-full bg-white flex justify-center">
      <div class="container max-w-prose prose py-20">
        <div class="w-full mb-4">
          <h1>
            {{ $page.pages.header }}
          </h1>
        </div>
        <div class="w-full" v-html="parseMarkdown($page.pages.content)"></div>
      </div>
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

