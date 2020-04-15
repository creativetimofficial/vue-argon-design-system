<template>
    <div>
        <AppSubheader></AppSubheader>                      
        <section class="section section-lg pt-lg-0 mt-2" v-if="!this.$store.state.isLoggedIn">
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <h3>
                         <icon name="ni ni-spaceship" type="default" size="s" class="mb-1">
                                    </icon>&nbsp;&nbsp;
                            Wie komme ich hier rein?
                        </h3>
                            <br/>
                        <gettingStartedSlider :passGettingStartedCaptions="passGettingStartedCaptions" />
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-0 mt-2" v-if="this.$store.state.isLoggedIn">
            <div class="container ">               
                <div class="row justify-content-center" v-if="this.$store.state.eventList.length > 0 && this.$store.state.eventsLoaded">
                    <div class="col-12 col-md-6">
                        <h3>
                            <icon name="ni ni-button-play" type="default" rounded class="mb-1">
                                    </icon>&nbsp;&nbsp;
                            Next up
                        </h3>
                        <br/>
                        <square v-if="!this.$store.state.eventsLoaded" class="spinner"></square>                        
                        <Calendar :maxItems="3"></Calendar>                        
                    </div>
                    <div class="col-md-6">
                        <h3>
                            <icon name="ni ni-spaceship" type="default" size="s" class="mb-1">
                                    </icon>&nbsp;&nbsp;
                            <a href="https://app.slack.com/client/T011ANNU34P/C011L916GHZ">#announcements</a>
                        </h3>
                        <br/>
                        <card class="border-0" shadow body-classes="" style="max-height:490px; min-height:490px; overflow-y:scroll;">
                            <SlackNews></SlackNews>
                        </card>
                    </div>
                </div>
                <div v-else>
                    <h5>Keine anstehenden Ereignisse</h5>
                </div>
            </div>
        </section>
        <section class="section section-lg pt-0 mt-0" v-if="this.$store.state.isLoggedIn">
            <div class="container">
                <h3> <icon name="ni ni-collection" type="default" class="mb-0">
                                    </icon>&nbsp;&nbsp;
                                    Vorlesungskalender</h3>
                <br/>
                <square v-if="!this.$store.state.eventsLoaded" class="spinner"></square>
                <div class="row justify-content-center ml-1 mr-1">
                    <div class="col-12">                        
                        <CalendarAlt></CalendarAlt>
                    </div>
                </div>                
            </div>
        </section>
    </div>
</template>

<script>
import SlackNews from "../components/SlackNews";
import Calendar from "../components/Calendar";
import CalendarAlt from "../components/CalendarAlt";
import gettingStartedSlider from "../components/GettingStarted/GettingStartedSlider";
import Toolbar from "../components/Toolbar";
import AppSubheader from "@/layout/AppSubheader"

export default {
  name: "home",
  components: {
      AppSubheader,
      gettingStartedSlider,
      SlackNews,
      Calendar,
      CalendarAlt,
      Toolbar,
  },

  data: function () {
    return {
        passGettingStartedCaptions: [
            { title: '1. Google-Mail Webseite aufrufen', text: 'Hier sollte der Vorgang beschrieben sein.' },
            { title: '2. Passwort vergessen', text: 'Hier sollte der Vorgang beschrieben sein.' },
            { title: '3. Passwort vergessen', text: 'Hier sollte der Vorgang beschrieben sein.' },
            { title: '4. Passwort vergessen', text: 'Hier sollte der Vorgang beschrieben sein.' },
            { title: '5. Passwort vergessen', text: 'Hier sollte der Vorgang beschrieben sein.' },
            { title: '6. Passwort vergessen', text: 'Hier sollte der Vorgang beschrieben sein.' },
            { title: '7. Passwort vergessen', text: 'Hier sollte der Vorgang beschrieben sein.' },
            { title: '8. Passwort vergessen', text: 'Hier sollte der Vorgang beschrieben sein.' },
            { title: '9. Passwort vergessen', text: 'Hier sollte der Vorgang beschrieben sein.' },
            { title: '10. Passwort vergessen', text: 'Hier sollte der Vorgang beschrieben sein.' },
            { title: '11. Passwort vergessen', text: 'Hier sollte der Vorgang beschrieben sein.' },
            { title: '12. Passwort vergessen', text: 'Hier sollte der Vorgang beschrieben sein.' },
            { title: '13. Passwort vergessen', text: 'Hier sollte der Vorgang beschrieben sein.' },
        ]
    }
  }
};
</script>
<style scoped>
    .motto {
        color: #dadada;
        font-weight: 200;
        font-size: 2rem;
    }
</style>
