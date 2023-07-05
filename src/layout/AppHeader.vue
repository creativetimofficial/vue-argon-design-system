<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="none" effect="none" expand>
      <ul class="navbar-nav navbar-nav align-items-lg-center">
        <a slot="title" href="#" class="nav-link" role="button">
          <i class="ni ni-collection d-lg-none"></i>
          <h2 class="text-white" href="/"><strong>Roxhers Bozali</strong></h2>
        </a>
      </ul>
      <ul class="navbar-nav align-items-lg-center mr-1">
        <router-link to="/" class="dropdown-item text-white"
          >Profile</router-link
        >
        <router-link to="/work" class="dropdown-item text-white"
          >Work</router-link
        >
        <router-link to="/education" class="dropdown-item text-white"
          >Education</router-link
        >
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
};
</script>
<style>
</style>
