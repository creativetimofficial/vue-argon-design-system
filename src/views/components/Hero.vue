<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center pt-lg">
                        <h1 class="text-white mt-5 mb-6"><span>Session Case Notes</span></h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <span></span>
                                <div>
                                    <base-button type="info" size="sm" class="mr-4">First Session</base-button>
                                    <base-button type="default" size="sm" class="float-right">Subsequent Sessions</base-button>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>First Session Form</h3>
                        </div>
                        <div class="mt-5 py-5 border-top text-left">
                            <div class="row justify-content-center">
                                <div>
                                    <h5><u>Counselling Goals</u></h5>
                                    <p>List down client’s counselling/ therapy goals (mutually agreed) to be achieved for counselling and/or during the current session.</p>
                                    <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=10 cols=110></textarea>
                                    <br></br>

                                    <h5><u>Case Conceptualisation</u></h5>
                                    <p>Your assessment of the client’s key underlying issues, obstacles that prevent him / her from resolving the issues, factors that have contributed to his / her progress, personal strengths that could be leveraged to help client manage his / her issues better, perceived social support network to help client manage presenting problem(s), any suspected psychological conditions that the client may be presenting, etc.</p>
                                    <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=10 cols=110></textarea>
                                    <br></br>

                                    <h5><u>Intervention(s) provided</u></h5>
                                    <p><em>Brief but clear summary of the intervention work that has been undertaken with the client during the session (e.g., what were the proposed plans that were agreed upon, any homework assigned to the client, etc.). If client expressed suicidal ideation, include suicide safety plan.</em></p>
                                    <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=10 cols=110></textarea>
                                    <br></br>

                                    <a href="#">Submit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
