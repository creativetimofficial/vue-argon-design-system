<template>
    <div class="row">
        <div class="col-md-4">
            <small class="d-block text-uppercase font-weight-bold mb-3">Single date</small>
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                    </div>
                    <input class="form-control datepicker" placeholder="Select date" type="text"
                           value="06/20/2018">
                </div>
            </div>
        </div>
        <div class="col-md-8 mt-4 mt-md-0">
            <small class="d-block text-uppercase font-weight-bold mb-3">Date range</small>
            <div class="input-daterange datepicker row align-items-center">
                <div class="col">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                            </div>
                            <input class="form-control" placeholder="Start date" type="text" value="06/18/2018">
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                            </div>
                            <input class="form-control" placeholder="End date" type="text" value="06/22/2018">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {}
</script>
<style>
</style>
