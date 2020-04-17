<template>
    <div>
        <AppSubheader></AppSubheader>        
        <section class="section section-lg pt-lg-0 mt-5">
            <div class="container">
                <div class="row mb-lg">
                    <div class="col-lg-12">
                        <h2>Support rund um die digitale Lehre</h2>
                    </div>
                    <div class="col-lg-8 ml-auto mt-4">
                        <p>Wir haben euch ein Support-Team für dringende Probleme bereitgestellt. Solltet ihr Probleme haben, die ihr nicht mit Hilfe der <strong style="text-decoration:underline"><router-link to="knowledgebase">Knowledgebase</router-link></strong> lösen könnt, habt ihr die Möglichkeit, unser Support-Team direkt zu kontaktieren.</p>
                        <p>Da wir den Workload für den Support aktuell noch nicht abschätzen können, ist es wichtig, dass ihr euch im ersten Schritt die Knowledgebase genauer anschaut. Hier haben wir die ersten Schritte, Tools, Infrastruktur, usw. genau beschrieben.</p>
                        <p><strong>Falls ihr doch noch Fragen habt, bitte weiterlesen.</strong></p>
                    </div>
                </div>

                <div class="row mb-lg">
                    <div class="col-lg-4">
                        <h2>Technischer Support</h2>
                    </div>
                    <div class="col-lg-8">
                        <p>
                            <strong>Wir haben euch ein Team aus Mitarbeitern für technische Fragen bereitgestellt. Hier unterscheiden wir zwischen dem User- & Hardware-Support.</strong>
                        </p>
                        <br />
                        <p><strong>User-Support: </strong>Hier geht es um konkrete Fragen rundum die Anmeldung mit dem neuen hfg.design-Account und die grundlegende Verwendung von Zoom, Slack und Google G-Suite.</p>
                        <p><strong>Hardware-Support: </strong>Sollte Ihr Probleme mit eurer Hard- und Software haben. Eure Webcam, Mikrofon, etc. funktionieren nicht oder euer Betriebsystem entspricht nicht den Voraussetzungen eingesetzer Tools. Dann seid ihr hier genau richtig.</p>
                    </div>
                </div>

                <ContactCard :passContactCardContent="passTechSupport" />

                <div class="row mb-lg mt-5">
                    <div class="col-lg-4">
                        <h2>Organisatorischer Support</h2>
                    </div>
                    <div class="col-lg-8">
                        <p>
                            <strong>Natürlich haben wir euch auch einen Support für organisatorische Fragen bereitgestellt.</strong>
                        </p>
                        <br />
                        <p>Solltet ihr eure Zoom-Vorlesung nicht finden, habt ihr Fragen bezüglich anstehender Portal-Events oder des digitalen Stundenplans, dann nehmt doch einfach Kontakt mit dem Orga-Team auf.</p>
                    </div>
                </div>

                <ContactCard :passContactCardContent="passOrgaSupport" />
            </div>
        </section>

      
    </div>
</template>

<script>
import ContactCard from "../components/Support/ContactCard";
import Modal from "../components/Modal";
import AppSubheader from "@/layout/AppSubheader"

export default {
    name: "home",
    components: {
        AppSubheader,
        ContactCard,
        Modal
    },

    data: function() {
        return {
            passTechSupport: [
                {
                    supportTeam: "User-Support",
                    name: "Steffen Mitschelen",
                    email: "steffen.mitschelen@hfg.design",
                    slack: "C011RA4JY3C",
                    tel: "07171 / 609 000",
                    reach1: "9:00 – 12:00 Uhr",
                    reach2: "13:00 – 16:00 Uhr",
                    imgPath: "img/support/team/user-support-1.jpg",
                    question: "Warum funktioniert meine Anmeldung @hfg.design nicht?"
                },
                {
                    supportTeam: "User-Support",
                    name: "Martin Schneider",
                    email: "martin.schneider@hfg.design",
                    slack: "C011RA4JY3C",
                    tel: "07171 / 609 000",
                    reach1: "9:00 – 12:00 Uhr",
                    reach2: "13:00 – 16:00 Uhr",
                    imgPath: "img/support/team/user-support-2.jpg",
                    question: "Hilfe, meine Vorlesung beginnt. Zoom funktioniert nicht!?"
                },
                {
                    supportTeam: "Hardware-Support",
                    name: "Aiko Scheuvens",
                    email: "aiko.scheuvens@hfg.design",
                    slack: "C011RA4JY3C",
                    tel: "07171 / 609 000",
                    reach1: "9:00 – 12:00 Uhr",
                    reach2: "13:00 – 16:00 Uhr",
                    imgPath: "img/support/team/tech-support.jpg",
                    question: "Warum geht meine Webcam nicht?"
                }
            ],
            passOrgaSupport: [
                {
                    supportTeam: "Orga-Support",
                    name: "Julia Wittich",
                    email: "julia.wittich@hfg.design",
                    slack: "C011RA4JY3C",
                    tel: "07171 / 609 000",
                    reach1: "9:00 – 12:00 Uhr",
                    reach2: "13:00 – 16:00 Uhr",
                    imgPath: "img/support/team/am-support.jpg",
                    question: "Hilfe, wann findet mein Kurs statt?"
                }
            ],
            feedbackMessage: "",
            feedbackWasSent: false,
            feedbackConfirmation: "Sende Feedback...",
            errorModal: false,
        };
    }, 
    methods: {
        sendFeedback: function () {
            this.feedbackWasSent = true;
            this.$http.post("https://76i3an3137.execute-api.eu-central-1.amazonaws.com/prod/slackbridge/feedback", JSON.stringify({
                text: this.feedbackMessage,
            }),{
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                },
            })
            .then(result => {
                    this.feedbackConfirmation = "Wir haben dein Feedback erhalten - vielen Dank!";
            })
            .catch(error => {
                    // handle error
                    this.feedbackConfirmation = "Leider ist etwas beim Versenden deines Feedbacks schief gegangen, bitte wende dich an einen der oben genannten Supportkontakte!";
                    this.errorModal = true;
                    this.feedbackWasSent = false;
                    console.log(error);
            })                            
        }
    }
};
</script>
