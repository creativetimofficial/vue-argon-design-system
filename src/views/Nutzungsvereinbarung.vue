<template>
    <div>
        <AppSubheader></AppSubheader>        
        <section class="section section-lg pt-lg-0 mt-5">
            <div class="container">
                <div class="row mb-lg">
                    <div class="col-lg-12 mb-lg">
                        <h2>Nutzungsvereinbarung</h2>
                    </div>
                    <div class="col-lg-12">
                        <MDRenderer file="1vyRnemezQCPbRLmJLyDCieKZNyE_GJrT" class="tos_mdrenderer"></MDRenderer>
                    </div>
                </div>
            </div>
        </section>

      
    </div>
</template>

<script>
import Modal from "../components/Modal";
import AppSubheader from "@/layout/AppSubheader"
import MDRenderer from "@/components/MDRenderer"

export default {
    name: "home",
    components: {
        AppSubheader,
        Modal,
        MDRenderer
    },

    data: function() {
        return {
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
