<template>
    <section class="section section-components">
        <div class="container">
            <h3 class="h4 text-success font-weight-bold mb-4">Tabs</h3>
            <tabs-section></tabs-section>
            <progress-section></progress-section>
            <div class="row row-grid justify-content-between">
                <div class="col-lg-5">
                    <h3 class="h4 text-success font-weight-bold mb-5">Navigation Pills</h3>
                    <tabs :fill="false" circle>
                        <tab-pane>
                            <span slot="title" class="nav-link-icon d-block"><i class="ni ni-atom"></i></span>
                        </tab-pane>
                        <tab-pane>
                            <span slot="title" class="nav-link-icon d-block"><i class="ni ni-chat-round"></i></span>
                        </tab-pane>
                        <tab-pane>
                            <span slot="title" class="nav-link-icon d-block"><i
                                    class="ni ni-cloud-download-95"></i></span>
                        </tab-pane>
                    </tabs>
                </div>
                <div class="col-lg-5">
                    <h3 class="h4 text-success font-weight-bold mb-5">Labels</h3>
                    <badge type="primary" class="text-uppercase">Primary</badge>
                    <badge type="success" class="text-uppercase">Success</badge>
                    <badge type="danger" class="text-uppercase">Danger</badge>
                    <badge type="warning" class="text-uppercase">Warning</badge>
                    <badge type="info" class="text-uppercase">Info</badge>
                </div>
            </div>
            <h3 class="mt-lg mb-4">
                <span>Alerts</span>
            </h3>
            <base-alert type="success" icon="ni ni-like-2" dismissible>
                <span slot="text"><strong>Success!</strong> This is a success alert—check it out!</span>
            </base-alert>

            <base-alert type="info" icon="ni ni-bell-55" dismissible>
                <span slot="text"><strong>Info!</strong> This is an info alert—check it out!</span>
            </base-alert>

            <base-alert type="warning" icon="ni ni-bell-55" dismissible>
                <span slot="text"><strong>Warning!</strong> This is a warning alert—check it out!</span>
            </base-alert>

            <base-alert type="danger" icon="ni ni-support-16" dismissible>
                <span slot="text"><strong>Danger!</strong> This is an error alert—check it out!</span>
            </base-alert>

            <typography></typography>
            <!-- Images -->
            <h2 class="mt-lg mb-5">
                <span>Images</span>
            </h2>
            <images></images>
            <h2 class="mt-lg mb-5">
                <span>Javascript Components</span>
            </h2>
            <h3 class="h4 text-success font-weight-bold mb-4">Modals</h3>
            <!-- Modals -->
            <modals></modals>
             Datepicker
            <h3 class="h4 text-success font-weight-bold mt-md mb-4">Datepicker</h3>
            <date-pickers></date-pickers>
            <!-- Tooltips and Popovers -->
            <h3 class="h4 text-success font-weight-bold mt-md mb-4">Tooltips &amp; Popovers</h3>
            <tooltips></tooltips>
        </div>
    </section>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import Modals from "./JavascriptComponents/Modals";
const Tooltips = () => import("./JavascriptComponents/Tooltips");
const DatePickers = () => import("./JavascriptComponents/DatePickers");
import Images from "./JavascriptComponents/Images";
import TabsSection from "./JavascriptComponents/TabsSection";
import ProgressSection from "./JavascriptComponents/ProgressPagination";
import Typography from "./JavascriptComponents/Typography";

export default {
  components: {
    DatePickers,
    Images,
    Modals,
    TabPane,
    Tabs,
    TabsSection,
    ProgressSection,
    Typography,
    Tooltips
  }
};
</script>
<style>
</style>
