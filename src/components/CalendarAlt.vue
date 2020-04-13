<template>
<div class="row row-grid vlcal shadow">
  <vue-cal
         :time-from="9 * 60"
         :time-to="20 * 60 +30"
         :time-step="15"
         :time-cell-height="15"
         :disable-views="['years', 'year', 'month']"
         :events="this.$store.getters.eventListAsVueCal"
         :on-event-click="onEventClick"
         locale="de"
         :active-view="isMobile ? 'day' : 'week'"
         small>         >
         <!-- Custom title -->
        <template v-slot:title="{ title, view }">
          <span v-if="view.id === 'week'">Woche {{ view.startDate.getWeek()-16 }} ({{ view.startDate.format('MMM YYYY') }})</span>
          <span v-else-if="view.id === 'day'">{{ view.startDate.format('dddd, DD.MM.') }}</span>
        </template>
        <!-- custom timeslots -->
        <template v-slot:time-cell="{ hours, minutes }">
            <div :class="{ fatline: hours%3 == 0 && minutes == 0, hours: !minutes, cell_zeb1: Math.ceil((((hours-9)*60)+minutes+15)/45)%2}"
                  class="custcell line" 
                  style="">
              <strong v-if="!minutes" style="font-size: 11px; font-weight:500; color:black;">{{ hours }}:00</strong>
              <span v-else style="font-size: 6px"></span>
            </div>
        </template>
  </vue-cal>
</div>
</template>
<script>
  import VueCal from 'vue-cal'
  import 'vue-cal/dist/i18n/de.js'
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
        console.log(event);
        var win = window.open(event.link, '_blank');
        win.focus();
        // Prevent navigating to narrower view (default vue-cal behavior).
        e.stopPropagation()
      }
    },
    computed: {
      isMobile() {
        const isMobile = window.matchMedia("only screen and (max-width: 760px)")
        return isMobile.matches ? true : false
      }
    },
    mounted() {

    },
  };
</script>
<style>
  .spinner {
    display: block;
    margin: auto;
  }

  .container {
    width: 100%;
  }

  .custcell {
    height:15px; margin:0; padding:0;line-height:15px;
  }

  .vuecal__time-cell .hours.line:before {
    border-color: black;
  }

  .cell_zeb1 {
    background-color: #dfdfdf;
  }

  .fatline::before {
    border-top: 2px solid black !important;
  }

  .cell_zeb0 {
    background-color: blue;
  }

  .vuecal__event-content {
    font-weight: normal;
  }

  .vlcal .vuecal .vuecal__event {
    background-color: white;
    text-align: left;
  }
  .vuecal__event {
    cursor: pointer;
    background-color: white;
    border:1px solid black;
  }

  .vuecal__event-title {
    font-size: 0.75rem;
    color:black;
    font-weight: 600;
    margin: 4px 4px 0px;
    line-height: 0.75rem;
  }

  .vuecal__event-time {
    font-size: 0.75rem;
    display: inline-block;
    margin: 0px 2px 2px 4px;
    line-height: 0.75rem;
  }

  .vuecal__event-content {
    font-size: 0.75rem;
    display: block;
    margin: 2px 2px 2px 4px;
    line-height: 0.75rem;
  }

  .vuecal__cell {
    padding-right:1px;
    padding-left:1px;
  }

  .vlcal .vuecal .cal_solo {
    background-color: rgba(17, 205, 239, 0.45)
  }

  .vlcal .cal_solo * {
    color:gray;
  }
</style>