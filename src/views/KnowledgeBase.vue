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
                    <div class="col-lg-3">
                        <GDriveSubnav folder="1gn2Fb9vJNO49cVPtfuKY1lzUCxaVgyUK" v-on:navigate-to="loadFile"></GDriveSubnav>
                    </div>
                    <div class="col-lg-9">
                        <div class="row row-grid">
                            <MDRenderer :content="info"></MDRenderer>
                        </div>
                        <hr/>
                        <!-- <div class="row row-grid" v-html="htmlcontent">
                        </div> -->
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
      info: "null",
      htmlcontent: null,
    }
  },
  methods: {
      loadFile: function(fileId) {
          console.log("Loading "+fileId);
          this.$http
            .get('https://www.googleapis.com/drive/v3/files/'+fileId+'?key=AIzaSyDLASxmRzFM9QroycxD-MNfP0L1bwWx0Ec&mimeType=text%2Fplain&alt=media')
            .then(response => {
                console.log(response);
                this.info = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
      }
  },
  mounted () {
    this.loadFile("1WkRsvJwwRePQ2R2ksI2z4BOzIVPasBrf");
  }
};
</script>
<style>
</style>
