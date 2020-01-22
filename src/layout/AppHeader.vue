<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/logo.png" alt="logo">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="/">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover">
                <li class="nav-item">
                    <router-link role="button" class="nav-link" to="/about">
                        <span class="nav-link-inner--text">About</span>
                    </router-link>
                </li>
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <router-link role="button" class="nav-link" to="/services">
                            <span class="nav-link-inner--text">Services</span>
                        </router-link>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="/services/re-roofing"
                        class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">re-roofs</h6>
                                <p class="description d-none d-md-inline-block mb-0">brief description on re-roofing</p>
                            </div>
                        </a>
                        <a href="/services/new-construction"
                        class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">new construction</h5>
                                <p class="description d-none d-md-inline-block mb-0">brief description for new construction</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Projects</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="/services/re-roofing"
                        class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">project type one</h6>
                                <p class="description d-none d-md-inline-block mb-0">brief description of project location one</p>
                            </div>
                        </a>
                        <a href="/services/new-construction"
                        class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">project type two</h6>
                                <p class="description d-none d-md-inline-block mb-0">brief description of project location two</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
                <!-- <li class="nav-item">
                    <router-link role="button" class="nav-link" to="/landing">
                        <span class="nav-link-inner--text">Careers</span>
                    </router-link>
                </li> -->
                <li class="nav-item">
                    <router-link role="button" class="nav-link" to="/contact">
                        <span class="nav-link-inner--text">Contact</span>
                    </router-link>
                </li>
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
    BaseDropdown
  }
};
</script>
<style>
</style>
