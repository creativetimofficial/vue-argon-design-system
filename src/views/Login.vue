<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <form role="form" ref = "form" @submit.prevent="authenticate">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83"
                                            name="email">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            name="password">
                                </base-input>
                                <!-- <base-checkbox>
                                    Remember me
                                </base-checkbox> -->
                                <div class="text-center" id="signin-button">
                                    <input class="btn btn-success" type="submit" value="Sign In">
                                    <!-- <base-button type="primary" class="my-4" v-on:click="authenticate">Sign In</base-button> -->
                                </div>
                            </form>
                        </template>
                    </card>
                    <!-- <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small>Forgot password?</small>
                            </a>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'signin-button',
    data() {},
    methods: {
        authenticate() {
            var email = this.$refs.form.email.value;
            var password = this.$refs.form.password.value;
            if (email != '1') {
                alert("Email not registered")
            } else if (password != '2') {
                alert("Incorrect password")
            }
            else {
                console.log("Login successful")
                //Change landing page
                this.$router.push('/register') 
            }
        }
    }
}

</script>
<style>
</style>
