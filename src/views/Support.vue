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
                        <p>Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben.</p>
                    </div>
                </div>

                <div class="row mb-lg">
                    <div class="col-lg-4">
                        <h2>Technischer Support</h2>
                    </div>
                    <div class="col-lg-8">
                        <p>
                            <strong>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.</strong>
                        </p>
                        <br />
                        <p>Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben.</p>
                    </div>
                </div>

                <ContactCard :passContactCardContent="passTechSupport" />

                <div class="row mb-lg mt-5">
                    <div class="col-lg-4">
                        <h2>Organisatorischer Support</h2>
                    </div>
                    <div class="col-lg-8">
                        <p>
                            <strong>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.</strong>
                        </p>
                        <br />
                        <p>Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben.</p>
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
                    supportTeam: "User Support",
                    name: "Steffen Mitschelen",
                    email: "steffen.mitschelen@hfg.design",
                    slack: "C011RA4JY3C",
                    tel: "07171 / 609 000",
                    reach1: "9:00 – 12:00 Uhr",
                    reach2: "13:00 – 16:00 Uhr",
                    imgPath: "img/support/team/user-support-1.jpg",
                    question: "Wie melde ich mich mit hfg.design an?"
                },
                {
                    supportTeam: "User Support",
                    name: "Martin Schneider",
                    email: "martin.schneider@hfg.design",
                    slack: "C011RA4JY3C",
                    tel: "07171 / 609 000",
                    reach1: "9:00 – 12:00 Uhr",
                    reach2: "13:00 – 16:00 Uhr",
                    imgPath: "img/support/team/user-support-2.jpg",
                    question: "Wie melde ich mich mit hfg.design an?"
                },
                {
                    supportTeam: "Hardware Support",
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
                    supportTeam: "AM-Support",
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
