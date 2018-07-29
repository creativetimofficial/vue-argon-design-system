<template>
    <div class="row">
        <div class="col-sm-3 col-6">
            <small class="d-block text-uppercase font-weight-bold mb-4">Image</small>
            <img v-lazy="'img/theme/team-1-800x800.jpg'" alt="Rounded image" class="img-fluid rounded shadow"
                 style="width: 150px;">
        </div>
        <div class="col-sm-3 col-6">
            <small class="d-block text-uppercase font-weight-bold mb-4">Circle Image</small>
            <img v-lazy="'img/theme/team-2-800x800.jpg'" alt="Circle image"
                 class="img-fluid rounded-circle shadow" style="width: 150px;">
        </div>
        <div class="col-sm-3 col-6 mt-5 mt-sm-0">
            <small class="d-block text-uppercase font-weight-bold mb-4">Raised</small>
            <img v-lazy="'img/theme/team-3-800x800.jpg'" alt="Raised image" class="img-fluid rounded shadow-lg"
                 style="width: 150px;">
        </div>
        <div class="col-sm-3 col-6 mt-5 mt-sm-0">
            <small class="d-block text-uppercase font-weight-bold mb-4">Circle Raised</small>
            <img v-lazy="'img/theme/team-4-800x800.jpg'" alt="Raised circle image"
                 class="img-fluid rounded-circle shadow-lg" style="width: 150px;">
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style>
</style>
