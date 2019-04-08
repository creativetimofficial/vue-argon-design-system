<template>
  <section class="section section-lg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2 class="display-3">Spinners</h2>
          <p class="lead">
            The spinner component can be used to show the loading state in your
            projects. They're rendered only with basic HTML and CSS as a
            lightweight Vue functional component. Their appearance, alignment,
            and sizing can be easily customized with a few built-in props and/or
            Bootstrap V4 utility classes.
          </p>
        </div>
      </div>
      <div class="text-center mt-5 mb-3 d-flex justify-content-between">
        <spinner
          v-for="(variant, index) in variants"
          v-bind:key="index"
          label="Spinning"
          size="md"
          :variant="variant"
          type="border"
        >
        </spinner>
      </div>
      <div class="text-center mt-5 mb-1 d-flex justify-content-between">
        <spinner
          v-for="(variant, index) in variants"
          v-bind:key="index"
          label="Spinning"
          :variant="variant"
          type="grow"
        >
        </spinner>
      </div>
    </div>
  </section>
</template>

<script>
import Spinner from "../../components/Spinner";
export default {
  name: "Spinners",
  components: { Spinner },
  data() {
    return {
      variants: [
        "primary",
        "secondary",
        "danger",
        "warning",
        "success",
        "info",
        "light",
        "dark"
      ]
    };
  }
};
</script>

<style scoped></style>
