<template>
    <div class="" style="height:100px;">
            <section class="section-shaped my-0 mb-0">
                <div class="shape bg-gradient-info">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-12">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="container shape-container d-flex" :class="this.$store.state.isLoggedIn ? '' : 'pb-5'">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-sm-12 text-right">
                                <Toolbar v-if="this.$store.state.isLoggedIn"></Toolbar>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
</template>
<script>
import Toolbar from "@/components/Toolbar";

export default {
  components: {
    Toolbar,
  },  
  methods: {
    
  },
  mounted(){
    this.$store.dispatch('triggerUserGAPI');
  },
}
</script>
<style scoped>

</style>
