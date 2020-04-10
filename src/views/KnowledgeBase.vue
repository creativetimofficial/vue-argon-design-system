<template>
    <div>
        <div class="">
            <!-- shape Hero -->
            <section class="section-shaped my-0 mb-200">
                <div class="shape shape-default">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex pb-5">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1 class="">Digital Lernen,<br>
                                    an der HfG Schwäbisch Gmünd
                                </h1>                         
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt-5">
            <div class="container ">
                <div class="row justify-content-center">
                    <div class="col-lg-4">
                        <GDriveSubnav folder="1gn2Fb9vJNO49cVPtfuKY1lzUCxaVgyUK" v-on:navigate-to="loadFile"></GDriveSubnav>
                    </div>
                    <div class="col-lg-8">
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

export default {
  components: {
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
