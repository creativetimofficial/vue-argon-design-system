<template>
    <div>
        <AppSubheader></AppSubheader>
        <section class="section section-lg pt-lg-0 mt-5">
            <div class="container ">
                <div class="row justify-content-center">
                    <div class="col-lg-4">
                        <GDriveSubnav folder="1gn2Fb9vJNO49cVPtfuKY1lzUCxaVgyUK" v-on:navigate-to="loadFile"></GDriveSubnav>
                    </div>
                    <div class="col-lg-8 mt-5 mt-lg-0">
                        <div class="row row-grid">
                            <MDRenderer :file="currentFile"></MDRenderer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

import MDRenderer from "@/components/MDRenderer";
import GDriveSubnav from "@/components/GDriveSubnav";
import AppSubheader from "@/layout/AppSubheader"

export default {
  components: {
    AppSubheader,
    MDRenderer,
    GDriveSubnav
  },
  data () {
    return {
      currentFile: "null",
    }
  },
  methods: {
      loadFile: function (id) {
          console.log("Loading "+id)
          this.currentFile = id;
      }
  },
  mounted () {
    this.currentFile = "1WkRsvJwwRePQ2R2ksI2z4BOzIVPasBrf";
  }
};
</script>
<style>
</style>
