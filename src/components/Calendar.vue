<template>
<div class="row row-grid">
  <div class="col-lg-12" v-for="(item, index) in nextUpItems" v-bind:key="index">
        <card class="calcard" shadow body-classes="py-3">
          <div style="position:absolute; right:1rem; top:1rem;">
            {{item.organizer.displayName}}
          </div>
          <h6 class="text-default" style="max-width:75%">
            {{item.summary}}
            <span v-if="isToday(item.start.dateTime) && !isNow(item.start.dateTime, item.end.dateTime)" class="today"> (heute)</span>
            <span v-if="isNow(item.start.dateTime, item.end.dateTime)" class="now"> (läuft gerade)</span>
          </h6>
          <span class="text-muted">{{formatDatetime(item.start.dateTime)}} Uhr</span>          
          <div class="botbut">
            <base-button tag="a" href="#" type="default" class="mt-3" :class="isToday(item.start.dateTime) ? '' : 'disabled'">
              <i class="fa fa-video-camera"></i>
            </base-button>
            <base-button tag="a" href="#" type="default" class="mt-3">
              <i class="fa fa-slack"></i>
            </base-button>
            <base-button tag="a" href="#" type="default" class="mt-3">
              <i class="fa fa-calendar"></i>
            </base-button>
            <base-button tag="a" href="#" type="default" class="mt-3">
              <i class="fa fa-hdd-o"></i>
            </base-button>
          </div>
        </card>
      </div>
</div>
</template>
<script>
  export default {
    components: {

    },
    name: "Calendar",
    props: {
      maxItems: {
        type: Number,
        default: 3,
      },
    },
    data() {
      return {}
    },
    watch: {

    },
    methods: {
      formatDatetime: function (dateTime) {
        let d = new Date(dateTime);
        return d.toLocaleString().substring(0,16);
      },
      isToday: function(dateTime) {
        let d = new Date(dateTime);
        let today = new Date();
        return today.getFullYear() === d.getFullYear()
                && today.getDate() === d.getDate()
                && today.getMonth() === d.getMonth();
      },
      isNow:function(dateTimeStart, dateTimeEnd) {
        let ds = new Date(dateTimeStart);
        let de = new Date(dateTimeEnd);
        let d = new Date();
        return (
            isFinite(d.valueOf()) &&
            isFinite(ds.valueOf()) &&
            isFinite(de.valueOf()) ?
            ds <= d && d <= de :
            NaN
        );
      },
      isFuture: function(dateTime) {
        return new Date(dateTime) > new Date();
      }
    },
    mounted() {

    },
    computed: {
      nextUpItems: function () {
        let future = this.$store.state.eventList.filter((event) => {
          return this.isFuture(event.end.dateTime);
        }); 
        return future.slice(0, this.maxItems);
      }
    }
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

  .calcard {
    margin-bottom: 1rem;
  }

  .calcard .botbut {
    /*position:absolute;
    bottom:1.3rem;
    right:1.3rem;*/
    color:black;
    border-top:1px solid #ededed;
  }
  .now {
    color:#fb6340;
  }
  .today {
    color:#11cdef;
  }
</style>