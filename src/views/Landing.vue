<template>
    <div>
        <AppSubheader></AppSubheader>                      
        <section class="section section-sm pt-lg-0 mt-5" v-if="!this.$store.state.isLoggedIn">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mb-4">
                        <h1>
                            Herzlich Willkommen
                        </h1>
                        <h2 style="font-weight: 400;">
                            auf unserem Online-Portal für digitale Lehre
                        </h2>
                      
                    </div>
                    <div class="col-md-8 ml-auto">
                        <p>Rund um die digitale Lehre an der HfG Schwäbisch Gmünd im Sommersemster 2020, in Folge der COVID-19-Pandemie, haben wir kurzfristig eine Infrastruktur und Werkzeuge bereitgestellt, um die Lehre im digitalen Raum zu gestalten. Außerdem findet ihr auf diesem Portal u. a. anstehende E-Learning-Tutorien, Kurzanleitungen und einen Supportbereich für aufkommende Fragen.</p>
                    </div>
                </div>

                <div class="row mt-lg">
                    <div class="col-sm">
                        <icon style="margin-left: -4rem;" name="ni ni-spaceship" type="default" size="s" class="mb-1 float-left"></icon >
                        <h2>
                            Wie komme ich hier rein?
                        </h2>
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
            { title: '1. Login-Button klicken', text: 'Klicke rechts oben auf <strong>"Login"</strong>. Daraufhin öffnet sich ein neues Fenster. Falls nicht, bitte Popups erlauben.<br><br> Falls du eine Fehlermeldung "403" erhälst. Melde bitte deinen aktuellen Google-Account im Browser ab.' },
            { title: '2. HfG.Design E-Mail-Adresse eingeben', text: 'Trage dort deine E-Mail-Adresse vorname.nachname@<strong>hfg.design</strong> ein und bestätige mit <strong>"Weiter"</strong>.<br><br>Falls du bereits einen anderen Google-Account eingerichtet hast, klicke bitte auf "Anderes Konto verwenden".' },
            { title: '3. Passwort zurücksetzen', text: 'Ja, du hast dein Passwort zwar nicht vergessen, aber aktuell wurde dir ein zufälliges zugewiesen, das du und auch wir aber nicht kennen. <br><br>Wähle <strong>"Passwort vergessen"</strong> aus. <br><br>Im weiteren Verlauf kannst du dir ein neues Passwort festlegen.' },
            { title: '4. Andere Option wählen', text: 'Bitte wähle diese Option, um einen Bestätigungs-Code an deine HfG-Gmünd E-Mail-Adresse zusenden.' },
            { title: '5. HfG-Gmuend.de E-Mail-Adresse eingeben', text: 'Gib deine HfG-Gmünd E-Mail-Adresse ein: vorname.nachname@<strong>hfg-gmuend.de</strong>. Klicke danach auf <strong>“Senden”</strong>.' },
            { title: '6. Bestätigungs-Code per E-Mail', text: 'Du bekommst nun eine E-Mail mit einem Bestätigungscode an deine vorname.nachname@<strong>hfg-gmuend.de</strong> E-Mail-Adresse zugeschickt. <br><br>Wenn du dort eine Weiterleitung auf deine private Adresse eingerichtet hast, oder im ersten Semester bist, bekommst du diese auf deine private E-Mail-Adresse.' },
            { title: '7. Bestätigungs-Code eingeben', text: 'Gib diesen <strong>Code nun im Browserfenster</strong> ein und klicke <strong>"Weiter"</strong>.' },
            { title: '8. Nutzungsbedingungen bestätigen', text: 'Fast geschafft! Hier siehst du noch die Nutzungsbedingungen der Google Suite. Wenn du diese akzeptierst, erhältst du Zugriff auf dein neues Google-Konto.' },
            { title: '9. Passwort für hfg.design festlegen', text: 'Bitte verwende kein Passwort, das du auch für andere Services nutzt, schon gar <strong>nicht das selbe wie für deinen @hfg-gmuend.de</strong> E-Mail-Account.<br><br>Das Passwort sollte aus einer Kombination von <strong>Groß- und Kleinbbuchstaben, Zahlen und Ziffern</strong> bestehen. Du kannst - und solltest - dieses natürlich dann später immer wieder ändern.' },
            { title: '10. Zugriff auf Google-Dienste', text: 'Bitte bestätige hiermit dem Portal den Zugriff auf deine Google-Dienste. <strong>GESCHAFFT!</strong>' }
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
