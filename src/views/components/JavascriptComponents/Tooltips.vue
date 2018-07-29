<template>
    <div class="row">
        <div class="col-lg-6">
            <small class="d-block text-uppercase font-weight-bold mb-3">Tooltips</small>
            <base-button size="sm" type="primary" class="btn-tooltip"
                         v-b-tooltip.hover.left title="Tooltip on left">On left
            </base-button>
            <base-button size="sm" type="primary" class="btn-tooltip"
                         v-b-tooltip.hover.top title="Tooltip on top">On top
            </base-button>
            <base-button size="sm" type="primary" class="btn-tooltip"
                         v-b-tooltip.hover.bottom title="Tooltip on bottom">On bottom
            </base-button>
            <base-button size="sm" type="primary" class="btn-tooltip"
                         v-b-tooltip.hover.right title="Tooltip on right">On right
            </base-button>
        </div>
        <div class="col-lg-6 mt-4 mt-lg-0">
            <small class="d-block text-uppercase font-weight-bold mb-3">Popovers</small>
            <base-button size="sm" type="default"
                         v-b-popover.hover.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                         title="Popover On Left">On left
            </base-button>

            <base-button size="sm" type="default"
                         v-b-popover.hover.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                         title="Popover On Left">On left
            </base-button>

            <base-button size="sm" type="default"
                         v-b-popover.hover.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                         title="Popover On Top">On top
            </base-button>
            <base-button size="sm" type="default"
                         v-b-popover.hover.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                         title="Popover On right">On right
            </base-button>
            <base-button size="sm" type="default"
                         v-b-popover.hover.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'"
                         title="Popover On bottom">On bottom
            </base-button>
        </div>
    </div>
</template>
<script>
import BTooltip from "bootstrap-vue/es/directives/tooltip/tooltip";
import BPopover from "bootstrap-vue/es/directives/popover/popover";

export default {
  directives: {
    BTooltip,
    BPopover
  }
};
</script>
