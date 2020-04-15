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
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6"   v-if="this.$store.state.eventList.length > 0 && this.$store.state.eventsLoaded">
                        <h3>
                            <icon name="ni ni-button-play" type="default" rounded class="mb-1">
                                    </icon>&nbsp;&nbsp;
                            Next up
                        </h3>
                        <br/>
                        <square v-if="!this.$store.state.eventsLoaded" class="spinner"></square>                        
                        <Calendar :maxItems="3"></Calendar>                        
                    </div>
                    <div class="col-12 col-md-6" v-else>
                        <h3>
                            <icon name="ni ni-button-play" type="default" rounded class="mb-1">
                                    </icon>&nbsp;&nbsp;
                            Next up
                        </h3>
                        <br/>
                         <card class="border-0" shadow body-classes="" style="max-height:490px; min-height:490px;">
                            <h5>Keine anstehenden Ereignisse</h5>
                        </card>          
                    </div>
                    <div class="col-12 col-md-6">
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
            { title: '1. Webseite hfg.design aufrufen', text: 'Gehe auf die Webseite www.hfg.design und klicke rechts oben auf “Login”.' },
            { title: '2. HfG.Design E-Mail-Adresse eingeben', text: 'Trage dort deine Adresse vorname.nachname@hfg.design an.' },
            { title: '3. Passwort zurücksetzen', text: 'Ja, du hast dein Passwort zwar nicht vergessen, aber aktuell wurde dir ein zufälliges zugewiesen, das du und auch wir aber nicht kennen.' },
            { title: '4. Andere Option wählen', text: 'Bitte wähle diese Option, um einen Code an deine HfG-Gmünd Emailadresse zusenden.' },
            { title: '5. HfG-Gmuend.de E-Mail-Adresse eingeben', text: 'Gib deine HfG-Gmünd Emailadresse ein: vorname.nachname@hfg-gmuend.de. Klicke danach auf “Senden”.' },
            { title: '6. Bestätigungs-Code per E-Mail', text: 'Du bekommst nun ein Email mit einem Bestätigungscode an deine vorname.nachname@hfg-gmuend.de Emailadresse zugeschickt. Wenn du dort eine Weiterleitung auf deine private Adresse eingerichtet hast, oder im ersten Semester bist, bekommst du diese auf deine private Emailadresse.' },
            { title: '7. Bestätigungs-Code eingeben', text: 'Gib diesen Code nun im Browserfenster ein und klicke "Weiter".' },
            { title: '8. Passwort für hfg.design festlegen', text: 'Bitte verwende kein Passwort, das du auch für andere Services nutzt, schon gar nicht das selbe wie für deinen @hfg-gmuend.de Emailaccount. Das Passwort sollte aus einer Kombination von Groß- und Kleinbbuchstaben, Zahlen und Ziffern bestehen. Du kannst - und solltest - dieses natürlich dann später immer wieder ändern.' },
            { title: '9. Zugriff auf Google-Dienste', text: 'Bitte bestätige hiermit dem Portal den Zugriff auf deine Google-Dienste.' }
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
