<template>
    <footer class="footer">         
        <div class="container">
           <div class="row row-grid align-items-center">
                <div class="col-lg-6 mt-4">
                    <h3 class="text-info font-weight-light mb-2">Wir freuen uns über euer Feedback!</h3>
                    <p class="mb-0 font-weight-light">Einfach hier eintippen und absenden – komplett anonym und direkt ans Team</p>
                </div>
                <div class="col-lg-6 mt-5">
                    <div class="" v-if="!feedbackWasSent">
                        <form class="mt-5">
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
                    <div class="col-lg-6 ml-auto mt-1" v-if="feedbackWasSent">
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
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}} Hochschule für Gestaltung Schwäbisch Gmünd
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://www.hfg-gmuend.de" class="nav-link" target="_blank" rel="noopener">Hochschul-Website</a>
                        </li>
                        <li class="nav-item" v-if="this.$store.state.isLoggedIn">
                            <router-link to="nutzungsvereinbarung" class="nav-link">
                                Nutzungsvereinbarung
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="impressum" class="nav-link">
                                Impressum
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import Modal from "../components/Modal";

export default {
  name: 'app-footer',
  components: {
     Modal
  },
  data() {
    return {
        year: new Date().getFullYear(),
        feedbackMessage: "",
        feedbackWasSent: false,
        feedbackConfirmation: "Sende Feedback...",
        errorModal: false,
    }
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
<style>
</style>
