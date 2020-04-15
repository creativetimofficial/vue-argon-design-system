<template>
    <div>
        <AppSubheader></AppSubheader>
        <section class="section section-lg pt-lg-0 mt-5">
            <div class="container">
                <div class="row mb-lg">
                    <div class="col-lg-12">
                        <h2>Datenschutzvereinbarung</h2>
                    </div>
                    <div class="col-lg-8 ml-auto mt-4">
                        <p>
                            <strong>Hier erhälst du Hinweise zum Umgang mit verschiedenen Daten im Hochschulkontext aus verschiedenen Perspektiven.</strong>
                        </p>
                        <br />
                        <p>Im folgenden Bereich erhälst du eine detailierte Auflistung unserer gespeicherten Daten. Bei Unklarheiten kannst du dich gerne an die Hochschule wenden.</p>
                    </div>
                </div>

                <div class="row mb-md">
                    <div class="col-lg-12">
                        <h2>Professoren, Lehrbeauftrage und Mitarbeiter</h2>
                    </div>
                    <!-- <div class="col-lg-8 ml-auto mt-4">
                        <p>
                            <strong>Hier erhälst du Hinweise zum Umgang mit verschiedenen Daten im Hochschulkontext aus verschiedenen Perspektiven.</strong>
                        </p>
                        <br />
                        <p>Im folgenden Bereich erhälst du eine detailierte Auflistung unserer gespeicherten Daten. Bei Unklarheiten kannst du dich gerne an die Hochschule wenden.</p>
                    </div> -->
                </div>

                <div class="row">
                    <DatenschutzCard :passDatenschutzContent="passDatenschutzContent1" />
                </div>

            </div>
        </section>

        <section class="section section-lg pt-lg-0">
            <div class="container">
        
                <div class="row mb-md">
                    <div class="col-lg-12">
                        <h2>Studenten und Studentinnen</h2>
                    </div>
                </div>

                <div class="row">
                    <DatenschutzCard :passDatenschutzContent="passDatenschutzContent2" />
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
            passDatenschutzContent1: [
                {   
                    id: Math.random().toString(36).substring(7),
                    title: "Personenangaben <br>mit Arbeitsbezug",
                    ampel: "green",
                    info:
                        "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.",
                    bsp: "<li>Prof.</li> <li>Max Mustermann</li> <li>Rektor-Klaus-Str. 100</li> <li>74597 Schwäbisch Gmünd</li> <li>max.mustermann@hfg.design</li>"
                },
                {
                    id: Math.random().toString(36).substring(7),
                    title: "Private<br>Personenangaben",
                    ampel: "yellow",
                    info:
                        "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.",
                    bsp: "<li>Prof.</li> <li>Max Mustermann</li> <li>Rektor-Klaus-Str. 100</li> <li>74597 Schwäbisch Gmünd</li> <li>Tel: 07171/xxx xxx</li> <li>max.mustermann@hfg.design</li>"
                },
                {
                    id: Math.random().toString(36).substring(7),
                    title: "Vertrauliche<br>Personenangaben",
                    ampel: "red",
                    info:
                        "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans.",
                    bsp: "<li>Prof.</li> <li>Max Mustermann</li> <li>Rektor-Klaus-Str. 100</li> <li>74597 Schwäbisch Gmünd</li> <li>Tel: 07171/xxx xxx</li> <li>in ärtzlicher Behandlung</li> <li>max.mustermann@hfg.design</li>"
                }
            ],
            passDatenschutzContent2: [
                {
                    id: Math.random().toString(36).substring(7),
                    title: "Ohne<br>Personenangaben",
                    ampel: "green",
                    info:
                        "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans."
                },
                {
                    id: Math.random().toString(36).substring(7),
                    title: "Mit<br>Personenangaben",
                    ampel: "yellow",
                    info:
                        "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans."
                },
                {
                    id: Math.random().toString(36).substring(7),
                    title: "Vertrauliche<br>Personenangaben",
                    ampel: "red",
                    info:
                        "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans."
                }
            ],
            feedbackMessage: "",
            feedbackWasSent: false,
            feedbackConfirmation: "Sende Feedback...",
            errorModal: false
        };
    },
    methods: {
        sendFeedback: function() {
            this.feedbackWasSent = true;
            this.$http
                .post(
                    "https://76i3an3137.execute-api.eu-central-1.amazonaws.com/prod/slackbridge/feedback",
                    JSON.stringify({
                        text: this.feedbackMessage
                    }),
                    {
                        headers: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                )
                .then(result => {
                    this.feedbackConfirmation =
                        "Wir haben dein Feedback erhalten - vielen Dank!";
                })
                .catch(error => {
                    // handle error
                    this.feedbackConfirmation =
                        "Leider ist etwas beim Versenden deines Feedbacks schief gegangen, bitte wende dich an einen der oben genannten Supportkontakte!";
                    this.errorModal = true;
                    this.feedbackWasSent = false;
                    console.log(error);
                });
        }
    }
};
</script>

