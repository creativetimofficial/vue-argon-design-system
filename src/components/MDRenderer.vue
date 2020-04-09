<template>
    <vue-markdown :source="content"></vue-markdown>
</template>
<script>

import VueMarkdown from 'vue-markdown';

export default {
  components: {
    VueMarkdown
  },
  name: "MDRenderer",
  props: {
    content: {
      type: String,
      default: "No content",
    }    
  }
};
</script>
<style>
</style>