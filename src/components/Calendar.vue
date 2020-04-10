<template>
    <div class="container">
      <square v-if="!isLoaded" class="spinner"></square>
      <div v-if="isLoaded">{{content}}</div>
    </div>
</template>
<script>

export default {
  components: {
    
  },
  name: "Calendar",
  props: {
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
    loadCals: function(fileId) {
          console.log("Loading "+fileId);
          this.$gapi.request({
                path: 'https://www.googleapis.com/calendar/v3/users/me/calendarList',
                method: 'GET',
                params: {                    
                }
            }).then(response => {
                console.log(response);
                this.content = response.result.items;
                this.isLoaded = true;
            }).catch(function (error) {
                // handle error
                console.log(error);
            })
      }
  },
  mounted() {
    this.loadCals();
  },
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