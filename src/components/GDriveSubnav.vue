<template>
    <ul id="example-2">        
        <li v-for="(item, index) in list" 
            v-bind:key="index" 
            v-on:click="navigateTo(item.id, item.mimeType)" 
            v-bind:class="[showMimes.indexOf(item.mimeType) != -1 ? '' : 'd-none']">
            <span v-bind:class="[item.mimeType == 'application/vnd.google-apps.folder' ? 'folder' : 'doc']">
                <span v-if="item.mimeType=='application/vnd.google-apps.folder'">📁</span>
                <span v-else>📄</span>            
                {{ item.name }}
            </span>
            <GDriveSubnav v-if="item.mimeType=='application/vnd.google-apps.folder'" :level="level+1" :folder="item.id" v-on:navigate-to="navigateTo"></GDriveSubnav>
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
      showMimes: ["text/plain","application/vnd.google-apps.folder"],
    }
  },
  mounted () {

  },
  methods: {
      navigateTo: function(id, mimeType) {
          if(mimeType=='application/vnd.google-apps.folder') return;
          console.log("Level "+this.level+": nav to "+id);
          this.$emit("navigate-to", id);
      }
  },
  watch: {
    folder: {
        // the callback will be called immediately after the start of the observation
        immediate: true, 
        handler (val, oldVal) {
            this.$gapi.request({
                path: 'https://www.googleapis.com/drive/v3/files/',
                method: 'GET',
                params: {
                    q: "'"+val+"' in parents",
                }
            }).then(response => {
                console.log(response);
                this.list = response.result.files;
                this.list.sort(function(a, b) {
                    var textA = a.name.toUpperCase();
                    var textB = b.name.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                });
            }).catch(function (error) {
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
    },
    level: {
        type:Number,
        default:0,
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

    .doc {
        color:black;        
        font-weight: 200;
    }

    .folder {
        cursor: default;
        color:black;
        font-weight: 600;
    }
</style>