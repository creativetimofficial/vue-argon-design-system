import Badge from '../components/Badge';
import BaseButton from '../components/BaseButton';
import BaseInput from '../components/BaseInput';
import Card from '../components/Card';
import Icon from '../components/Icon';

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(Card.name, Card);
    Vue.component(Icon.name, Icon);
  }
}
