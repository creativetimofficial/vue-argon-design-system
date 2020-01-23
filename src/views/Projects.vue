<template>
    <div>
        <section class="section-shaped my-0">
            <div class="shape shape-dark shape-skew">
            </div>
            <div class="container shape-container d-flex">
                <div class="col px-0">
                    <div class="row">
                        <div class="col-lg-6"><h1>Contact Us</h1></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-lg-0 section-contact-us">
            <div class="container">
                <div class="row justify-content-center mt--300">
                    <div class="col-lg-12">
                        <card type="primary" shadow body-classes="p-lg-4">
                            <h4 class="mb-1 text-dark">Wilmington</h4>
                            <p class="mt-0">This project has specific details that would make sense to go here.</p>
                            <gallery :images="images" :index="index" @close="index = null"></gallery>
                            <div
                            class="image"
                            v-for="(image, imageIndex) in images"
                            :key="imageIndex"
                            @click="index = imageIndex"
                            :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
                            ></div>
                        </card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    data: function () {
      return {
        images: [
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null
      };
    },

    components: {
      'gallery': VueGallery
    },
  }
</script> 

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>
