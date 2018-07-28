<template>
    <div class="input-slider-container">
        <div class="input-slider"
             ref="slider"
             :class="[`slider-${type}`]"
             :disabled="disabled">
        </div>
    </div>
</template>
<script>
  import noUiSlider from 'nouislider'

  export default {
    name: 'base-slider',
    props: {
      value: [String, Array, Number],
      disabled: Boolean,
      start: {
        type: [Number, Array],
        default: 0
      },
      range: {
        type: Object,
        default: () => {
          return {
            min: 0,
            max: 100
          }
        }
      },
      type: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    computed: {
      connect(){
        return Array.isArray(this.value);
      }
    },
    data() {
      return {
        slider: null
      }
    },
    methods: {
      createSlider() {
        noUiSlider.create(this.$refs.slider, {
          start: this.value || this.start,
          connect: this.connect,
          range: this.range,
          ...this.options
        });
        const slider = this.$refs.slider.noUiSlider
        slider.on('slide', () => {
          let value = slider.get()
          if (value !== this.value) {
            this.$emit('input', value)
          }
        })
      }
    },
    mounted() {
      this.createSlider()
    },
    watch: {
      value(newValue, oldValue) {
        const slider = this.$refs.slider.noUiSlider
        const sliderValue = slider.get()
        if (newValue !== oldValue && sliderValue !== newValue) {
          if (Array.isArray(sliderValue) && Array.isArray(newValue)) {
            if (oldValue.length === newValue.length && oldValue.every((v, i) => v === newValue[i])) {
              slider.set(newValue)
            }
          } else {
            slider.set(newValue)
          }
        }
      }
    }
  }
</script>
