# Slider

Our customized noUiSlider is a lightweight JavaScript range slider library. It offers a wide selection of options and settings, and is compatible with a ton of (touch) devices, including those running iOS, Android, Windows 8/8.1/10, Windows Phone 8.1 and Windows Mobile 10.

<hr>

Our `base-slider` component is a thin wrapper over [noUiSlider](https://refreshless.com/nouislider/)

#### Example

:::demo
```html
<base-slider v-model="sliders.slider1"></base-slider>
<script>
    export default {
      data() {
        return {
           sliders: {
              slider1: 0
           }
        };
      }
    };
</script>
```
:::

#### Range Slider

:::demo
```html
<base-slider v-model="sliders.slider2" :range="{min: 0, max: 500}"></base-slider>
<script>
    export default {
      data() {
        return {
           sliders: {
              slider2: [150, 400]
           }
        };
      }
    };
</script>
```
:::


#### Base Slider Props

<props-table component-name="base-slider"></props-table>

For more info check out [Vue flatpickr](https://github.com/ankurk91/vue-flatpickr-component)
and [Flatpickr website](https://flatpickr.js.org/)

<script>
export default {
  data() {
    return {
      sliders: {
       slider1: 0,
       slider2: [150, 400]
      }
    };
  }
};
</script>
