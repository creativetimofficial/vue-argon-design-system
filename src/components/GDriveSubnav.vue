<template>
    <!-- <ul id="example-2">        
        <li v-for="(item, index) in list" v-bind:key="index" v-on:click="navigateTo(item)">
            <span v-bind:class="[item.mimeType == 'text/plain' ? 'doc' : 'nodoc']">
                <span v-if="item.mimeType=='application/vnd.google-apps.folder'">📁</span>
                <span v-else>📄</span>            
                {{ item.name }}
            </span>
            <GDriveSubnav v-if="item.mimeType=='application/vnd.google-apps.folder'" :folder="item.id"></GDriveSubnav>
        </li>
    </ul>-->
<!--  -->
    <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
        <div class="card" v-for="(item, index) in list" v-bind:key="index">
            <div class="card-header">
                <a
                    data-toggle="collapse"
                    data-parent="#accordionEx"
                    :href="getHref(index)"
                    aria-expanded="false"
    
                >
                    <h5 class="mb-0">
                        {{ item.name }}
                        <i class="fa fa-angle-down rotate-icon" :class="{ 'invisible' : item.mimeType!='application/vnd.google-apps.folder'}"></i>
                    </h5>
                </a>
            </div>

            <div
                :id="getIDcollapse(index)"
                class="collapse"
                role="tabpanel"
        
                data-parent="#accordionEx"
            >
                <GDriveSubSubnav v-if="item.mimeType=='application/vnd.google-apps.folder'" :folder="item.id"></GDriveSubSubnav>
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
    data() {
        return {
            list: null
        };
    },
    mounted() {},
    methods: {
        navigateTo: function(item) {
            console.log("nav to " + item.id);
            this.$emit("navigate-to", item.id);
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
            handler(val, oldVal) {
                this.$http
                    .get(
                        "https://www.googleapis.com/drive/v3/files/?key=AIzaSyDLASxmRzFM9QroycxD-MNfP0L1bwWx0Ec&q='" +
                            val +
                            "'%20in%20parents"
                    )
                    .then(response => {
                        console.log(response);
                        this.list = response.data.files;
                        this.list.sort(function(a, b) {
                            var textA = a.name.toUpperCase();
                            var textB = b.name.toUpperCase();
                            return textA < textB ? -1 : textA > textB ? 1 : 0;
                        });
                    })
                    .catch(function(error) {
                        // handle error
                        console.log(error);
                    });
            }
        }
    },
    name: "GDriveSubnav",
    props: {
        folder: {
            type: String,
            default: null
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
    color: gray;
    cursor: default;
    font-weight: 200;
}
</style>