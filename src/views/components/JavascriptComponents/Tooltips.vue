<template>
    <div class="row">
        <div class="col-lg-6">
            <small class="d-block text-uppercase font-weight-bold mb-3">Tooltips</small>
            <button type="button" class="btn btn-sm btn-primary btn-tooltip" data-toggle="tooltip"
                    data-placement="left" title="Tooltip on left" data-container="body" data-animation="true"
                    data-delay="100">On left
            </button>
            <button type="button" class="btn btn-sm btn-primary btn-tooltip" data-toggle="tooltip"
                    data-placement="top" title="Tooltip on top" data-container="body" data-animation="true">On
                top
            </button>
            <button type="button" class="btn btn-sm btn-primary btn-tooltip" data-toggle="tooltip"
                    data-placement="bottom" title="Tooltip on bottom" data-container="body"
                    data-animation="true">On bottom
            </button>
            <button type="button" class="btn btn-sm btn-primary btn-tooltip" data-toggle="tooltip"
                    data-placement="right" title="Tooltip on right" data-container="body" data-animation="true">
                On right
            </button>
        </div>
        <div class="col-lg-6 mt-4 mt-lg-0">
            <small class="d-block text-uppercase font-weight-bold mb-3">Popovers</small>
            <button type="button" class="btn btn-sm btn-default" data-container="body"
                    data-original-title="Popover On Left" data-toggle="popover" data-placement="left"
                    data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On left
            </button>
            <button type="button" class="btn btn-sm btn-default" data-container="body"
                    data-original-title="Popover on Top" data-toggle="popover" data-placement="top"
                    data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On top
            </button>
            <button type="button" class="btn btn-sm btn-default" data-container="body"
                    data-original-title="Popover on Right" data-toggle="popover" data-placement="right"
                    data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On right
            </button>
            <button type="button" class="btn btn-sm btn-default" data-container="body"
                    data-original-title="Popover on Bottom" data-toggle="popover" data-placement="bottom"
                    data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">On bottom
            </button>
        </div>
    </div>
</template>
<script>
  export default {}
</script>
<style>
</style>
