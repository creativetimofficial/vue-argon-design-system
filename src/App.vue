<template>
    <div id="app">
        <modal :show="!this.$store.getters.currentTosAccepted" modalClasses="largeModal">
          <template slot="header">
              <h4 class="modal-title" id="exampleModalLabel">Nutzungsvereinbarung hfg.design</h4>
          </template>
          <div class="modal-scroll">
              <MDRenderer file="1vyRnemezQCPbRLmJLyDCieKZNyE_GJrT" class="tos_mdrenderer"></MDRenderer>
          </div>
          <template slot="footer">
              <!-- <base-button type="secondary" @click="modals.modal0 = false">Close</base-button> -->
              <base-button type="primary" v-on:click="acceptTos()">Akzeptieren</base-button>
          </template>
        </modal>
        <router-view name="header"></router-view>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import Modal from "@/components/Modal"
import MDRenderer from "@/components/MDRenderer"

export default {
  components: {
    FadeTransition,
    Modal,
    MDRenderer,
  },
  methods: {
    acceptTos() {
      console.log("Set tos acceptance for hash "+this.$store.state.tosVersion);
      this.$http.post("https://76i3an3137.execute-api.eu-central-1.amazonaws.com/prod/accept-tos", JSON.stringify({
          uid: this.$store.state.loggedInUser.id,
          toshash: this.$store.state.tosVersion,
      }),{
          headers: {
              'Accept': 'application/json, text/plain, */*',
          },
      })
      .then((response) => {
        console.log(response);
        this.$store.dispatch("triggerGetTosStatus");
      })
      .catch((error) => {
        console.log(error);
        this.$store.dispatch("triggerGetTosStatus");
      });
    }
  }
};
</script>
<style lang="scss">
  .modal-dialog.largeModal {
    max-width:80vw !important;
    height:80%;
  }

  .modal-scroll {
    max-height: 70vh;
    overflow-y: scroll;
  }

  .tos_mdrenderer {
    width:90%;
  }
</style>