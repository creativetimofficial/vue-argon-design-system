<template>
    <div>
        <div class>
            <!-- shape Hero -->
            <section class="section-shaped my-0 mb-200">
                <div class="shape shape-default">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex pb-5">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1 class>
                                    Digital Lernen,
                                    <br />an der HfG Schwäbisch Gmünd
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt-5">
            <div class="container">
                <div class="row mb-lg">
                    <div class="col-lg-4">
                        <h2>Support</h2>
                    </div>
                    <div class="col-lg-8">
                        <p>
                            <strong>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.</strong>
                        </p>
                        <br />
                        <p>Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben.</p>
                    </div>
                </div>

                <ContactCard :passContactCardContent="passContactCardContent" />
            </div>
        </section>

        <section class="section section-lg pt-lg-0">
            <div class="container">
                <div class="row mb-lg">
                    <div class="col-lg-12">
                        <h2>Feedback rund um das Portal</h2>
                    </div>

                    <div class="col-lg-8 ml-auto mt-5">
                        <p>
                            <strong>Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.</strong>
                        </p>
                        <br />
                        <p>Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen. Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben.</p>
                    </div>

                    <div class="col-lg-8 ml-auto mt-4" v-if="!feedbackWasSent">
                        <form>
                            <textarea
                                class="form-control text-default"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="200 Zeichen"
                                maxlength="200"
                                v-model="feedbackMessage"                                
                            ></textarea>

                            <button type="button" class="btn btn-default float-right mt-3 bg-default text-white" v-on:click="sendFeedback()">Feedback</button>
                        </form>
                    </div>
                    <div class="col-lg-8 ml-auto mt-4" v-if="feedbackWasSent">
                        <base-alert type="secondary" icon="ni ni-check-bold">
                            {{feedbackConfirmation}}
                        </base-alert>
                    </div>
                    <modal :show="errorModal">
                        <template slot="header">
                            <h5 class="modal-title" id="exampleModalLabel">Fehler beim Versand</h5>
                        </template>
                        <div>
                         {{feedbackConfirmation}}
                        </div>
                        <template slot="footer">
                            <base-button type="secondary" @click="errorModal = false">Close</base-button>
                        </template>
                    </modal>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import ContactCard from "../components/Support/ContactCard";
import Modal from "../components/Modal";

export default {
    name: "home",
    components: {
        ContactCard,
        Modal
    },

    data: function() {
        return {
            passContactCardContent: [
                {
                    supportTeam: "AM-Support",
                    name: "Julia Wittich",
                    email: "am-support@hfg.design",
                    slack: "am-support",
                    tel: "07171 / 609 000",
                    reach1: "9:00 – 12:00 Uhr",
                    reach2: "13:00 – 16:00 Uhr",
                    imgPath: "img/support/team/am-support.jpg"
                },
                {
                    supportTeam: "Technischer Support",
                    name: "Aiko Scheuvens",
                    email: "tech-support@hfg.design",
                    slack: "tech-support",
                    tel: "07171 / 609 000",
                    reach1: "9:00 – 12:00 Uhr",
                    reach2: "13:00 – 16:00 Uhr",
                    imgPath: "img/support/team/tech-support.jpg"
                },
                {
                    supportTeam: "User Support",
                    name: "Steffen Mitschelen",
                    email: "user-support@hfg.design",
                    slack: "user-support",
                    tel: "07171 / 609 000",
                    reach1: "9:00 – 12:00 Uhr",
                    reach2: "13:00 – 16:00 Uhr",
                    imgPath: "img/support/team/user-support-1.jpg"
                },
                {
                    supportTeam: "User Support",
                    name: "Martin Schneider",
                    email: "user-support@hfg.design",
                    slack: "user-support",
                    tel: "07171 / 609 000",
                    reach1: "9:00 – 12:00 Uhr",
                    reach2: "13:00 – 16:00 Uhr",
                    imgPath: "img/support/team/user-support-2.jpg"
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
