<template>
    <ul id="example-2">        
        <li v-for="(item, index) in list" v-bind:key="index" v-on:click="navigateTo(item)">
            <span v-if="item.mimeType=='application/vnd.google-apps.folder'">📁</span>
            <span v-else>📄</span>            
            <span v-bind:class="[item.mimeType == 'text/plain' ? 'doc' : 'nodoc']">{{ item.name }}</span>
            <GDriveSubnav v-if="item.mimeType=='application/vnd.google-apps.folder'" :folder="item.id"></GDriveSubnav>
        </li>
    </ul>
</template>
<script>

import VueMarkdown from 'vue-markdown';

export default {
  components: {    
  },
  data () {
    return {
      list: null,
    }
  },
  mounted () {

  },
  methods: {
      navigateTo: function(item) {
          console.log("nav to "+item.id);
          this.$emit("navigate-to", item.id);
      }
  },
  watch: {
    folder: {
        // the callback will be called immediately after the start of the observation
        immediate: true, 
        handler (val, oldVal) {
            this.$http
                .get("https://www.googleapis.com/drive/v3/files/?key=AIzaSyDLASxmRzFM9QroycxD-MNfP0L1bwWx0Ec&q='"+val+"'%20in%20parents")
                .then(response => {
                    console.log(response);
                    this.list = response.data.files;
                    this.list.sort(function(a, b) {
                        var textA = a.name.toUpperCase();
                        var textB = b.name.toUpperCase();
                        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                    });
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    }
  },
  name: "GDriveSubnav",
  props: {
    folder: {
      type: String,
      default: null,
    }    
  }
};
</script>
<style scoped>
    li {
        list-style-type: none;
        font-weight: 500;
        cursor: pointer;
    }

    .nodoc {
        color:gray;
        cursor: default;
        font-weight: 200;
    }
</style>