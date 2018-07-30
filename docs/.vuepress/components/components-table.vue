<template>
  <div>
      <div v-for="(comp, key) in $docs" :key="key" class="text-default component-name">
        - {{comp.name}}
      </div>
  </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style scoped lang="scss">
.component-name {
  height: 30px;
  font-size: 24px;
}

.components-table{
  width: 100%;
}
</style>
