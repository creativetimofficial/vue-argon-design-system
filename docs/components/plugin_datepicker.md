# Datepicker

The datepicker is tied to a standard form input field. Focus on the input (click, or use the tab key) to open an interactive calendar in a small overlay. Choose a date, click elsewhere on the page (blur the input), or hit the Esc key to close. If a date is chosen, feedback is shown as the input’s value.

<hr>

We used [Vue flatpickr](https://github.com/ankurk91/vue-flatpickr-component) which is a wrapper component
over one of the most popular open source datepickers [Flatpickr](https://flatpickr.js.org/)

Initialization:

```js
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  components: {flatPicker}
}
```


Flatpickr can be used in combination with our `base-input` in order to achieve the same look
as other form inputs.

#### Example

:::demo
```html
<base-input addon-left-icon="ni ni-calendar-grid-58">
    <flat-picker slot-scope="{focus, blur}"
                 @on-open="focus"
                 @on-close="blur"
                 :config="{allowInput: true}"
                 class="form-control datepicker"
                 v-model="dates.simple">
    </flat-picker>
</base-input>
<script>
    export default {
      data() {
        return {
          dates: {
            simple: "2018-07-17"
          }
        };
      }
    };
</script>
```
:::

#### Range

:::demo
```html
<base-input addon-left-icon="ni ni-calendar-grid-58">
    <flat-picker slot-scope="{focus, blur}"
                 @on-open="focus"
                 @on-close="blur"
                 :config="{allowInput: true, mode: 'range'}"
                 class="form-control datepicker"
                 v-model="dates.range">
    </flat-picker>
</base-input>
<script>
    export default {
      data() {
        return {
          dates: {
            range: "2018-07-17 to 2018-07-19"
          }
        };
      }
    };
</script>
```
:::


#### Props

For more info check out [Vue flatpickr](https://github.com/ankurk91/vue-flatpickr-component)
and [Flatpickr website](https://flatpickr.js.org/)

<script>
export default {
  data() {
    return {
      dates: {
        simple: "2018-07-17",
        range: "2018-07-17 to 2018-07-19"
      }
    };
  }
};
</script>
