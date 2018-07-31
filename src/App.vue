<template>
    <div id="app">
        <router-view name="header"></router-view>
        <main>
            <router-view/>
        </main>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
</style>
