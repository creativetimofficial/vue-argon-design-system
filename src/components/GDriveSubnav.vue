<template>
    <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
        <div class="card" v-for="(item, index) in list" v-bind:key="index">
            <div class="card-header">
                <a
                    data-toggle="collapse"
                    data-parent="#accordionEx"
                    :href="getHref(item.id)"
                    aria-expanded="false"
    
                >
                    <h5 class="mb-0" v-on:click="navigateTo(item.id, item.mimeType)" >
                        {{ item.name }}
                        <i class="fa fa-angle-down rotate-icon" :class="{ 'invisible' : item.mimeType!='application/vnd.google-apps.folder'}"></i>
                    </h5>
                </a>
            </div>

            <div
                :id="getIDcollapse(item.id)"
                class="collapse"
                role="tabpanel"
        
                data-parent="#accordionEx"
            >
            <GDriveSubSubnav v-if="item.mimeType=='application/vnd.google-apps.folder'" :level="level+1" :folder="item.id" v-on:navigate-to="navigateTo"></GDriveSubSubnav>
            </div>
        </div>
    </div> 
</template>
<script>
import VueMarkdown from "vue-markdown";
import GDriveSubSubnav from "@/components/GDriveSubSubnav";

export default {

  components: {
      GDriveSubSubnav
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
      },
      getIDcollapse: function(index) {
            return "collapse" + (index+1)
      },
      getHref: function(index) {
          return "#collapse" + (index+1)
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
                    q: "'"+val+"' in parents and trashed = false",
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