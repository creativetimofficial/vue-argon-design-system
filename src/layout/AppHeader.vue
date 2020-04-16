<template>
    <header class="header-global">
        <base-nav class="navbar-main bg-gradient-info" transparent type effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <!-- <img src="img/brand/HfG_Logo.png" alt="logo"> -->
                <h3>
                    <span class="wm_hfg">hfg</span>
                    <span class="wm_dot">.</span>
                    <span class="wm_design">design</span>
                </h3>
            </router-link>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <!-- <li class="nav-item">
                    <router-link to="/">Start</router-link>
                </li>-->
                <li class="nav-item" v-if="this.$store.state.isLoggedIn">
                    <router-link to="knowledgebase">Knowledgebase</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="support">Support</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="datenschutz">Datenschutz</router-link>
                </li>
                <!-- <li class="nav-item">
                    <router-link to="datenschutz">Impressum</router-link>
                </li>-->
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="d-lg-block ml-lg-2 mt-3" v-if="!this.$store.state.isLoggedIn">
                    <a
                        href="#/"
                        rel="noopener"
                        class="btn btn-neutral btn-icon"
                        v-on:click="triggerSignIn"
                    >
                        <span class="btn-inner--icon">
                            <i class="fa fa-sign-in mr-2"></i>
                            Login
                        </span>
                    </a>
                </li>
                <li class="d-none d-block" v-else>
                    <span class="username">{{this.$store.state.loggedInUser.firstname}}</span>
                    <base-dropdown class="dropdown" position="right" :hideArrow="false">
                        <div slot="title" class="initialsMenu">
                            <i class="ni ni-circle-08 usericon"></i>
                        </div>
                        <a
                            class="dropdown-item font-weight-bold"
                            v-on:click="triggerSignOut"
                        >Abmelden</a>
                    </base-dropdown>
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
    },
    methods: {
        triggerSignIn: function() {
            this.$store.dispatch("triggerLogin");
        },
        triggerSignOut: function() {
            this.$store.dispatch("triggerLogout");
            this.$router.push({ path: '/' })
        }
    },
    mounted() {
        this.$store.dispatch("triggerUserGAPI");
    }
};
</script>
<style scoped>
.initialsMenu {
    font-weight: 500;
    font-size: 24pt;
}

.username {
    position: relative;
    top: -10px;
    right: 10px;
    display: inline-block;
    height: 32px;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: white;
}

.usericon {
    margin-top: 11px;
    color: white;
}

.wm_hfg,
.wm_dot,
.wm_design {
    text-transform: lowercase;
    color: white;
}

.wm_hfg {
    color: black;
}

.wm_dot {
    font-weight: 100;
    color: white;
}

.wm_design {
    font-weight: 100;
    color: white;
}
.nav-item {
    font-weight: 200;
    margin-left: 2rem;
}
@media (max-width: 992px) {
    .username {
        right: 0;
    }
    .nav-item {
        margin-left: 0;
    }
    .usericon {
        margin-left: 0.5rem;
    }
}
</style>
