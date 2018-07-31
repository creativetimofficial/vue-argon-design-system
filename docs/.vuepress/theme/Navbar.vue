<template>
    <base-nav class="main-nav flex-row align-items-md-center" type="" effect="light" expand>
        <a slot="brand" class="navbar-brand mr-0 mr-md-2" href="/"
           aria-label="Bootstrap">
            <img src="https://demos.creative-tim.com/vue-argon-design-system/img/brand/white.png">
            <sup>Docs</sup>
        </a>

        <div class="row" slot="content-header" slot-scope="{closeMenu}">
            <div class="col-6 collapse-brand">
                <a href="/">
                    <img src="https://demos.creative-tim.com/vue-argon-design-system/img/brand/white.png">
                </a>
            </div>
            <div class="col-6 collapse-close">
                <close-button @click="closeMenu"></close-button>
            </div>
        </div>

        <ul class="navbar-nav flex-row mr-auto ml-4 d-none d-md-flex">
            <li class="nav-item">
                <a class="nav-link" href="https://demos.creative-tim.com/vue-argon-design-system/#/">Live Preview</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://github.com/creativetimofficial/vue-argon-design-system/issues"
                   target="_blank">Support</a>
            </li>
        </ul>
        <div class="d-none d-sm-block ml-auto">
            <ul class="navbar-nav ct-navbar-nav flex-row align-items-center">
                <li class="nav-item dropdown d-none">
                    <a class="btn-link text-white dropdown-toggle mr-sm-3" href="#" id="ct-versions"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">1.0</a>
                    <div class="dropdown-menu" aria-labelledby="ct-versions">
                        <a class="dropdown-item active" href="../..//docs/1.0/">Latest - 1.0</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank">
                        <i class="fa fa-twitter"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank">
                        <i class="fa fa-instagram"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank">
                        <i class="fa fa-dribbble"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank">
                        <i class="fa fa-github"></i>
                    </a>
                </li>
            </ul>
        </div>
        <SearchBox v-if="$site.themeConfig.search !== false"/>
        <a href="https://www.creative-tim.com/product/vue-argon-design-system" target="_blank"
           class="btn btn-neutral btn-icon ml-sm-3 d-none d-md-block">
      <span class="btn-inner--icon">
        <i class="fa fa-cloud-download mr-2"></i>
      </span>
            <span class="nav-link-inner--text">Download</span>
        </a>
    </base-nav>
</template>
<script>
  import SearchBox from '../../node_modules/vuepress/lib/default-theme/SearchBox.vue';

  export default {
    components: {
      SearchBox
    }
  }
</script>
<style lang="scss">
    nav.main-nav {
      z-index: 50;
        &.navbar {
            background-color: #5e72e4;
            box-shadow: rgba(116, 129, 141, .1) 0 1px 1px 0;
            position: fixed;
            .container {
                max-width: 100%;
                width: 100%;
            }
            .navbar-brand,
            .navbar-brand:hover{
                color: white;
            }
        }

        &.navbar .nav-link {
            color: white !important;
            &:hover {
                border: 0 !important;
                margin: 0 !important;
            }
            &.router-link-active {
                color: white !important;
                border-bottom: 2px solid white !important;
            }
        }

        &.navbar .search-box .suggestion a {
            color: inherit;
        }
    }
</style>
