<template>
    <div class="container">
      <square v-if="!isLoaded" class="spinner"></square>
      <vue-markdown v-if="isLoaded" :source="content"></vue-markdown>
    </div>
</template>
<script>

import VueMarkdown from 'vue-markdown';

export default {
  components: {
    VueMarkdown
  },
  name: "MDRenderer",
  props: {
    file: {
      type: String,
      default: "No content",
    }    
  },
  data () {
    return {
      content: "Lade Inhalte",
      isLoaded: false,
    }
  },
  watch: { 
    file: function(newVal, oldVal) { // watch it
        console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        this.isLoaded = false;
        this.loadFile(newVal)
    }
  },
  methods: {
    loadFile: function(fileId) {
          console.log("Loading "+fileId);
          this.$http
            .get('https://www.googleapis.com/drive/v3/files/'+fileId+'?key=AIzaSyDLASxmRzFM9QroycxD-MNfP0L1bwWx0Ec&mimeType=text%2Fplain&alt=media')
            .then(response => {
                console.log("File response"+response);
                this.content = response.data;
                this.isLoaded = true;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
      }
  }
};
</script>
<style scoped>
  .spinner {
    display: block;
    margin:auto;
  }

  .container {
    width:100%;
  }
</style>