<template>
    <div class="toolbar_wrapper">
      <a class="" href="https://hfggmuend.slack.com" target="_blank"><icon name="fa fa-slack"></icon> Slack</a>
      <a class="" href="http://calendar.hfg.design" target="_blank"><icon name="fa fa-calendar"></icon> Kalender</a>
      <a class="" href="http://mail.hfg.design" target="_blank"><icon name="fa fa-envelope"></icon> Mail</a>
      <a class="" href="http://drive.hfg.design" target="_blank"><icon name="fa fa-hdd-o"></icon> Drive</a>
      <a class="" href="https://hfg-gmuend.zoom.us" target="_blank" v-if="this.$store.state.detailsLoaded && this.$store.getters.appRechte.ZoomLicense">
          <icon name="fa fa-video-camera"></icon> Zoom
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
<style>
  .toolbar_wrapper, .toolbar_wrapper a {
    font-size:10pt;
    color:white;
    font-weight: 400;
    margin-bottom: 1rem;
    vertical-align: baseline;
  }

  .toolbar_wrapper a {
    margin-left:2rem;
  }

  .toolbar_wrapper a .icon-shape {
    color:white;
    width:1.5rem;
    height:1.4rem;
    padding:0 !important;
  }

  .toolbar_wrapper .icon i.fa {
    font-size:13pt !important;
  }
</style>
