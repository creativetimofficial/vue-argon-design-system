<template>
  <div class="progress-wrapper">
    <div :class="`progress-${type}`">
      <div class="progress-label">
        <slot name="label">
          <span>{{label}}</span>
        </slot>
      </div>
      <div class="progress-percentage">
        <slot>
          <span>{{value}}%</span>
        </slot>
      </div>
    </div>
    <div class="progress" :style="`height: ${height}px`">
      <div class="progress-bar"
           :class="computedClasses"
           role="progressbar"
           :aria-valuenow="value"
           aria-valuemin="0"
           aria-valuemax="100"
           :style="`width: ${value}%;`">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "base-progress",
  props: {
    striped: Boolean,
    showValue: Boolean,
    animated: Boolean,
    label: String,
    height: {
      type: Number,
      default: 8
    },
    type: {
      type: String,
      default: "default"
    },
    value: {
      type: Number,
      default: 0,
      validator: value => {
        return value >= 0 && value <= 100;
      }
    }
  },
  computed: {
    computedClasses() {
      return [
        { "progress-bar-striped": this.striped },
        { "progress-bar-animated": this.animated },
        {[`bg-${this.type}`]: this.type}
      ];
    }
  }
};
</script>
<style>
</style>
