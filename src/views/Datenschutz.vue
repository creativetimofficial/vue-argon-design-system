<template>
    <div>
        <AppSubheader></AppSubheader>                      
        <section class="section section-lg pt-lg-0 mt-5">
            <div class="container">
                <div class="row mb-lg">
                    <div class="col-lg-4">
                        <h2>Datenschutz</h2>
                    </div>
                    <div class="col-lg-8">
                        <p>
                            <strong>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.</strong>
                        </p>
                        <br />
                        <p>Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben.</p>
                    </div>

                </div>

                <div class="row mt-5">

                    <DatenschutzCard :passDatenschutzCardContent="passDatenschutzCardContent" />
                </div>

           
            </div>
        </section>

    </div>
</template>

<script>
import DatenschutzCard from "../components/Datenschutz/DatenschutzCard";
import Modal from "../components/Modal";
import AppSubheader from "@/layout/AppSubheader";

export default {
    name: "home",
    components: {
        AppSubheader,
        DatenschutzCard,
        Modal
    },

    data: function() {
        return {
            passDatenschutzCardContent: [
                {
                    title: "Personenbezogen",
                    desc: "Mitarbeiter",
                    info: "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans."
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

