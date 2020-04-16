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
                </div>

                <DatenschutzCard :passDatenschutzContent="passDatenschutzContent1" />
            </div>
        </section>

        <section class="section section-lg pt-lg-0">
            <div class="container">
                <div class="row mb-md">
                    <div class="col-lg-12">
                        <h2>StudentenInnen und Lehrbeauftrage</h2>
                    </div>
                </div>

                <DatenschutzCard :passDatenschutzContent="passDatenschutzContent2" />
            </div>
        </section>

        <section class="section section-lg pt-lg-0">
            <div class="container">
                <div class="row mb-md">
                    <div class="col-lg-12">
                        <h2>Bereichsübergreifende Personendaten</h2>
                        <h2 class="font-weight-normal">Professoren, Lehrbeauftrage, Mitarbeiter und StudentenInnen</h2>
                    </div>
                </div>

                <DatenschutzCard :passDatenschutzContent="passDatenschutzContent3" />
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
                    id: Math.random()
                        .toString(36)
                        .substring(7),
                    title: "Personenangaben <br>mit Arbeitsbezug",
                    ampel: "green",
                    info: "",
                    bsp: [
                        { text: "Professor", high: false },
                        { text: "Max Mustermann", high: true },
                        { text: "Rektor-Klaus-Str. 100", high: true },
                        { text: "74597 Schwäbisch Gmünd", high: true },
                        { text: "max.mustermann@hfg.design", high: true }
                    ],
                    tech: "Hochschulwebseite, Portfolio"
                },
                {
                    id: Math.random()
                        .toString(36)
                        .substring(7),
                    title: "Private<br>Personenangaben",
                    ampel: "yellow",
                    info: "",
                    bsp: [
                        { text: "Professor", high: false },
                        { text: "Max Mustermann", high: false },
                        { text: "Rektor-Klaus-Str. 100", high: true },
                        { text: "74597 Schwäbisch Gmünd", high: true },
                        { text: "Tel: 07171/xxx xxx", high: true },
                        { text: "max.mustermann@hfg.design", high: true }
                    ],
                    tech: "Google Drive, E-Maildienste"
                },
                {
                    id: Math.random()
                        .toString(36)
                        .substring(7),
                    title: "Vertrauliche<br>Personenangaben",
                    ampel: "red",
                    info: "",
                    bsp: [
                        { text: "Professor", high: false },
                        { text: "Max Mustermann", high: false },
                        { text: "Rektor-Klaus-Str. 100", high: false },
                        { text: "74597 Schwäbisch Gmünd", high: false },
                        { text: "Tel: 07171/xxx xxx", high: false },
                        { text: "max.mustermann@hfg.design", high: false },
                        { text: "in ärtzlicher Behandlung", high: true }
                    ],
                    tech:
                        "interne Dateiablage, clientseitige verschlüsselte Daten in Public-Clouds"
                }
            ],
            passDatenschutzContent2: [
                {
                    id: Math.random()
                        .toString(36)
                        .substring(7),
                    title: "Ohne<br>Personenangaben",
                    ampel: "green",
                    info: "",
                    bsp: [
                        { text: "Projektarbeiten", high: true }
                    ],
                    tech: "Hochschulwebseite, Portfolio, Youtube, Vimeo"
                },
                {
                    id: Math.random()
                        .toString(36)
                        .substring(7),
                    title: "Mit<br>Personenangaben",
                    ampel: "yellow",
                    info: "",
                    bsp: [
                        { text: "Projektarbeit", high: true }
                    ],
                    tech: "Google Drive, E-Maildienste"
                },
                {
                    id: Math.random()
                        .toString(36)
                        .substring(7),
                    title: "Vertrauliche<br>Personenangaben",
                    ampel: "red",
                    info: "",
                    bsp: [
                        { text: "Noten", high: true },
                        { text: "Feedback", high: true }
                    ],
                    tech: "interne Dateiablage, clientseitige verschlüsselte Daten in Public-Clouds "
                }
            ],
            passDatenschutzContent3: [
                {
                    id: Math.random()
                        .toString(36)
                        .substring(7),
                    title: "Medien ohne<br>Personenangaben",
                    ampel: "green",
                    info: "",
                    bsp: [
                        { text: "Keine Person erkennbar", high: true }
                    ],
                    tech: "Hochschulwebseite, Portfolio, Youtube, Vimeo"
                },
                {
                    id: Math.random()
                        .toString(36)
                        .substring(7),
                    title: "Medien mit Personenangaben",
                    ampel: "yellow",
                    info: "",
                    bsp: [
                        { text: "Personen erkennbar", high: true }
                    ],
                    tech: "Google Drive, E-Maildienste"
                },
                {
                    id: Math.random()
                        .toString(36)
                        .substring(7),
                    title: "Medien mit vertraulichen Personenangaben",
                    ampel: "red",
                    info: "",
                    bsp: [
                        { text: "Medien mit Personendaten", high: true },
                        { text: "Studiengang", high: true },
                        { text: "Max Mustermann", high: true },
                        { text: "Rektor-Klaus-Str. 100", high: true },
                        { text: "74597 Schwäbisch Gmünd", high: true },
                        { text: "Tel: 07171/xxx xxx", high: true },
                        { text: "max.mustermann@hfg.design", high: true }
                    ],
                    tech: "interne Dateiablage, clientseitige verschlüsselte Daten in Public-Clouds "
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

<style scoped>
</style>