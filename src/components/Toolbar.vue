<template>
    <div class="toolbar_wrapper">
      <a class="" href="https://hfggmuend.slack.com"><icon name="fa fa-slack"></icon></a>
      <a class="" href="https://hfggmuend.slack.com"><icon name="fa fa-calendar"></icon></a>
      <a class="" href="https://hfggmuend.slack.com"><icon name="fa fa-envelope"></icon></a>
      <a class="" href="https://hfggmuend.slack.com"><icon name="fa fa-hdd-o"></icon></a>
      <a class="" href="https://hfggmuend.slack.com" v-if="this.$store.state.detailsLoaded && this.$store.getters.appRechte.ZoomLicense">
          <icon name="fa fa-video-camera"></icon>
      </a>
    </div>
</template>
<script>
export default {
  name: "Toolbar",
  inheritAttrs: false,
  props: {
    
  },  
};
</script>
<style scoped>
  .toolbar_wrapper, .toolbar_wrapper a {
    font-size:18pt;
    color:white;
    margin-bottom: 1rem;
    vertical-align: baseline;
  }
</style>
