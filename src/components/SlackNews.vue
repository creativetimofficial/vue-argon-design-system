<template>
    <div>
      <square v-if="!isLoaded" class="spinner"></square>
      <ul class="slackNewsList" v-if="isLoaded">        
          <li v-for="(item, index) in list" v-bind:key="index" v-on:click="navigateTo(item)">
              <hr v-if="index !== 0"/>
              <div class="date">{{new Date(parseInt(item.ts.substring(0, item.ts.length - 7))*1000).toLocaleString()}}</div>
              <div class="message">{{$emoji.replace_colons(item.text)}}</div>              
          </li>
      </ul>
    </div>
</template>
<script>

export default {
  components: {    
  },
  data () {
    return {
      list: null,
      isLoaded: false,

    }
  },
  mounted () {
    
  },
  methods: {
      navigateTo: function(item) {
          console.log("nav to "+item.client_msg_id);
      }
  },
  watch: {
    channel: {
        // the callback will be called immediately after the start of the observation
        immediate: true, 
        handler (val, oldVal) {
            this.$http.get("https://76i3an3137.execute-api.eu-central-1.amazonaws.com/prod/slackbridge/news")           
            .then(response => {
              console.log(response);
              this.list = response.data.messages.filter(function(msg) {                                          
                      return msg.subtype == undefined;
              });
              this.isLoaded = true;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
    }
  },
  name: "SlackNews",
  props: {
    channel: {
      type: String,
      default: "C011L916GHZ",
    }, 
    limit: {
      type: Number,
      default: 5,
    }   
  }
};
</script>
<style scoped>
    .slackNewsList {
      margin-top: 0rem;
      padding-left: 0;
    }
    .slackNewsList li {
      list-style-type: none;
    }
    .slackNewsList .date {
      margin-bottom:0.3rem;
      font-weight: 600;
    }
    .slackNewsList .message {
      margin-bottom:1.5rem;
    }
</style>