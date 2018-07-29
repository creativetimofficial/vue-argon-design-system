<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container shape-container py-0 pb-5">
            <div class="row row-grid justify-content-between align-items-center">
                <div class="col-lg-6">
                    <h3 class="display-3 text-white">A beautiful Design System
                        <span class="text-white">completed with examples</span>
                    </h3>
                    <p class="lead text-white">The Design System comes with four pre-built pages to help you get started
                        faster. You can change the text and images and you're good to go. More importantly, looking at
                        them will give you a picture of what you can built with this powerful Bootstrap 4 Design
                        System.</p>
                    <div class="btn-wrapper">
                        <router-link to="/login" class="btn btn-success">
                            Login Page
                        </router-link>
                        <router-link to="/register" class="btn btn-success">
                            Register Page
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-5 mb-lg-auto">
                    <div class="transform-perspective-right">
                        <card class="border-0" type="secondary" shadow
                              body-classes="px-lg-5 py-lg-5"
                              header-classes="pb-5 bg-white">
                            <template slot="header">
                                <div class="text-muted text-center mb-3">
                                    <small>Sign in with</small>
                                </div>
                                <div class="btn-wrapper text-center">
                                    <base-button type="neutral">
                                        <img slot="icon" src="img/icons/common/github.svg">
                                        Github
                                    </base-button>

                                    <base-button type="neutral">
                                        <img slot="icon" src="img/icons/common/google.svg">
                                        Google
                                    </base-button>
                                </div>
                            </template>
                            <template>
                                <div class="text-center text-muted mb-4">
                                    <small>Or sign in with credentials</small>
                                </div>
                                <form role="form">
                                    <base-input alternative
                                                placeholder="Email"
                                                addon-left-icon="ni ni-email-83">
                                    </base-input>
                                    <base-input alternative
                                                type="password"
                                                placeholder="Password"
                                                addon-left-icon="ni ni-lock-circle-open">
                                    </base-input>
                                    <base-checkbox>
                                        Remember me
                                    </base-checkbox>
                                    <div class="text-center">
                                        <base-button type="primary" class="my-4">Sign In</base-button>
                                    </div>
                                </form>
                            </template>
                        </card>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
