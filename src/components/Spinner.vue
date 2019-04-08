<template>
  <div :style="sizeStyle()"
       :class="bindClass(variant, type)"
       role="status">
    <span class="sr-only">{{ label }}</span>
  </div>
</template>
<script>
export default {
  name: "Spinner",
  props: {
    size: {
      type: String,
      default: function() {
        return "sm";
      }
    },
    variant: {
      type: String,
      default: function() {
        return "primary";
      }
    },
    label: {
      type: String,
      default: function() {
        return "Spinning";
      }
    },
    type: {
      type: String,
      default: function() {
        return "border";
      }
    }
  },
  methods: {
    bindClass: function(variant, type) {
      return `text-${variant} spinner-${type}`;
    },
    sizeStyle: function() {
      switch (this.size) {
        case "sm":
          return "";
          break;
        case "md":
          return "width: 3rem; height: 3rem;";
          break;
        case "lg":
          return "width: 9rem; height: 9rem;";
          break;
        case "xl":
          return "width: 12rem; height: 12rem;";
          break;
      }
    }
  }
};
</script>
