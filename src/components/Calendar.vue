<template>
<div class="row row-grid">
  <div class="col-lg-4" v-for="(item, index) in this.$store.state.eventList" v-bind:key="index">
        <card class="" shadow body-classes="py-5">
          <icon name="ni ni-books" type="default" rounded class="mb-4">
            {{item.organizer.displayName}}
          </icon>
          <h6 class="text-default">{{item.summary}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">{{formatDatetime(item.start.dateTime)}}</h6>
          <p class="card-text"> Teilnehmer:</p>
          <badge v-for="(att, indexAtt) in item.attendees" v-bind:key="indexAtt" rounded type="info">
            {{att.email}}
          </badge>
          <br />
          <base-button tag="a" href="#" type="default" class="mt-4">
            <i class="fa fa-calendar"></i>
          </base-button>
          <base-button tag="a" href="#" type="default" class="mt-4">
            <i class="fa fa-video-camera"></i>
          </base-button>
        </card>
      </div>
</div>
</template>
<script>
  export default {
    components: {

    },
    name: "Calendar",
    props: {},
    data() {
      return {}
    },
    watch: {

    },
    methods: {
      formatDatetime: function (dateTime) {
        let d = new Date(dateTime);
        return d.toLocaleString();
      }
    },
    mounted() {

    },
  };
</script>
<style scoped>
  .spinner {
    display: block;
    margin: auto;
  }

  .container {
    width: 100%;
  }
</style>