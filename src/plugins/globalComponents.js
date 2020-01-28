import Badge from "../components/Badge";
import BaseAlert from "../components/BaseAlert";
import BaseButton from "../components/BaseButton";
import BaseCheckbox from "../components/BaseCheckbox";
import BaseInput from "../components/BaseInput";
import BasePagination from "../components/BasePagination";
import BaseProgress from "../components/BaseProgress";
import BaseRadio from "../components/BaseRadio";
import BaseSlider from "../components/BaseSlider";
import BaseSwitch from "../components/BaseSwitch";
import Card from "../components/Card";
import Icon from "../components/Icon";
import VideoBackground from "vue-responsive-video-background-player";
import { BListGroup } from 'bootstrap-vue';
import { BListGroupItem } from 'bootstrap-vue';
import { BCard } from 'bootstrap-vue';
import { BCardBody } from 'bootstrap-vue';

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSlider.name, BaseSlider);
    Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(Card.name, Card);
    Vue.component(Icon.name, Icon);
    Vue.component('video-background', VideoBackground );
    Vue.component('b-list-group', BListGroup);
    Vue.component('b-list-group-item', BListGroupItem);
    Vue.component('b-card', BCard);
    Vue.component('b-card-body', BCardBody);
  }
};
