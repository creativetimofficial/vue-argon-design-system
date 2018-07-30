<template>
    <div class="status" :class="{[status]: status}">
      {{status}}
    </div>
</template>

<script>
  export default {
    name: 'component-status',
    props: {
      componentName: String,
      propStatus: String
    },
    data(){
      return {
        status: ''
      }
    },
    mounted(){
      try {
        let rawComponent = this.$docs.find(c => c.name === this.componentName) || {}
        if(rawComponent && this.componentName) {
          this.status = rawComponent.status;
        } else {
          this.status = this.propStatus;
        }
      } catch (e) {
        console.warn(e)
      }
    }
  }
</script>

<style scoped>
  .status{
    color: white;
    padding: 5px;
    width: 100px;
    font-size: 12px;
    display: flex;
    justify-content: center;
  }
  .ready {
    background-color: rgb(39, 228, 125);
  }
  .prototype{
    background-color: rgb(13, 25, 69);
  }
  .deprecated {
    background-color: rgb(255, 72, 72);
  }
  .review {
    background-color: rgb(255, 240, 46);
  }
</style>
