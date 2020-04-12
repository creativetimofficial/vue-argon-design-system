<template>
<div class="row row-grid">
  <vue-cal
         :time-from="9 * 60"
         :time-to="20 * 60"
         :disable-views="['years', 'year', 'month']"
         hide-weekends
         :events="this.$store.getters.eventListAsVueCal"
         :on-event-click="onEventClick">
  </vue-cal>
</div>
</template>
<script>
  import VueCal from 'vue-cal'
  import 'vue-cal/dist/vuecal.css'

  export default {
    components: {
        VueCal, 
    },
    name: "CalendarAlt",
    props: {},
    data() {
      return {}
    },
    watch: {

    },
    methods: {
      formatDatetime: function (dateTime) {
        let d = new Date(dateTime);
        return d.toLocaleString();
      },
       onEventClick (event, e) {
        this.selectedEvent = event

        // Prevent navigating to narrower view (default vue-cal behavior).
        e.stopPropagation()
      }
    },
    mounted() {

    },
  };
</script>
<style scoped>
  .spinner {
    display: block;
    margin: auto;
  }

  .container {
    width: 100%;
  }
</style>