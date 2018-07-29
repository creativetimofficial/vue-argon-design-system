<template>
    <component :is="tag"
               :type="tag === 'button' ? nativeType: ''"
               @click="handleClick"
               class="btn"
               :class="classes">
    <span class="btn-inner--icon" v-if="$slots.icon || icon && $slots.default">
      <slot name="icon">
        <i :class="icon"></i>
      </slot>
    </span>
        <i v-if="!$slots.default" :class="icon"></i>
        <span class="btn-inner--text" v-if="$slots.icon || icon && $slots.default">
          <slot>
            {{text}}
          </slot>
    </span>
        <slot v-if="!$slots.icon && !icon"></slot>
    </component>
</template>
<script>
export default {
  name: "base-button",
  props: {
    tag: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    },
    icon: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    outline: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    iconOnly: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      let btnClasses = [
        { "btn-block": this.block },
        { "rounded-circle": this.rounded },
        { "btn-icon-only": this.iconOnly },
        { [`text-${this.textColor}`]: this.textColor },
        { "btn-icon": this.icon || this.$slots.icon },
        this.type && !this.outline ? `btn-${this.type}` : "",
        this.outline ? `btn-outline-${this.type}` : ""
      ];
      if (this.size) {
        btnClasses.push(`btn-${this.size}`);
      }
      return btnClasses;
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style>
</style>
