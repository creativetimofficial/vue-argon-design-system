<template>
    <div class="container">
      <square v-if="this.$store.state.eventList.length == 0" class="spinner"></square>
      <div v-if="this.$store.state.eventList.length > 0">
        <h4>Nächste Events</h4>
        <ul>        
          <li v-for="(item, index) in this.$store.state.eventList" v-bind:key="index">
              {{item.start.dateTime}}<br/>
              {{item.summary}}<br/>
              Organisiert von: {{item.organizer.displayName}}<br/>
              Teilnehmer:<br/>
              <div v-for="(att, indexAtt) in item.attendees"  v-bind:key="indexAtt">
                  {{att.email}}
              </div>
          </li>
        </ul>
      </div>
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
    }
  },
  watch: { 
    
  },
  methods: {
    
  },
  mounted() {

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