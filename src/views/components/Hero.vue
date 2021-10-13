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
                                    <!-- toggle between the sessions -->
                                </div>
                            </div>
                        </div>
                        <!-- form start -->
                        <div class="text-center mt-5">
                            <h3>First Session Form</h3>
                        </div>
                        <div ref="client-information">
                            <div>
                                <h5><u>Client Information</u></h5>
                                <!-- <form class="tr" method="post" action="blah.html"> -->
                                <div class="row">
                                    <div class="col-lg-4 col-sm-6">
                                        <base-input placeholder="Rank/Name"></base-input>
                                        <base-input placeholder="NRIC"></base-input>
                                        <base-input placeholder="Age"></base-input>
                                        <base-input placeholder="Unit"></base-input>
                                        <base-input placeholder="Enlistment Date (for NSFs)"></base-input>
                                    </div>
                                    <div class="col-lg-4 col-sm-6">
                                            <base-input placeholder="Marital Status"></base-input>
                                        <base-input placeholder="Race"></base-input>
                                        <span>Gender:</span>
                                        <div>
                                            <base-radio class="mb-3">Male</base-radio>
                                            <base-radio class="mb-3">Female</base-radio>
                                            <!-- <base-radio name="radio0" class="mb-3" v-model="radio.radio1">Unchecked</base-radio> -->
                                        </div>
                                        <base-input placeholder="Contact No"></base-input>
                                        <base-input placeholder="Expected ORD (for NSFs)"></base-input>
                                    </div>
                                </div>
                                <div>
                                    <span>Source of Referral:</span>
                                    <div class="col-lg-3 col-md-6">
                                        <base-checkbox class="mb-3">Self</base-checkbox>
                                        <base-checkbox class="mb-3">IMH</base-checkbox>
                                    </div>
                                    <div class="col-lg-3 col-sm-6 mt-4 mt-md-0">
                                        <base-checkbox class="mb-3">Supervisor</base-checkbox>
                                        <base-checkbox class="mb-3">Medical Officer</base-checkbox>
                                    </div>
                                    <div class="col-lg-3 col-sm-6 mt-4 mt-md-0">
                                        <base-checkbox class="mb-3">Others:</base-checkbox>
                                        <base-input></base-input>
                                    </div>
                                </div>
                                <div>
                                    <p>Reason(s) for Referral</p>
                                    <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=10 cols=110></textarea>
                                </div>      
                            </div>
                        </div>
                        <div class="mt-5 py-5 border-top text-left">
                            <div class="row justify-content-center">
                                <div>
                                    <h5><u>Counselling Goals</u></h5>
                                    <p>List down client’s counselling/ therapy goals (mutually agreed) to be achieved for counselling and/or during the current session.</p>
                                    <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=10 cols=110></textarea>
                                    <br>

                                    <h5><u>Details Of Session</u></h5>
                                    <p>List down client’s counselling/ therapy goals (mutually agreed) to be achieved for counselling and/or during the current session.</p>
                                    <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=10 cols=110></textarea>
                                    <br>

                                    <h5><u>Case Conceptualisation</u></h5>
                                    <p>Details of the issues discussed during the session. Background information should include
                                        <ul>
                                            <li>family/ childhood background and issues, </li>
                                            <li>educational background,</li>
                                            <li>employment history and issues,</li>
                                            <li>interpersonal relationships, </li>
                                            <li>financial issues, </li>
                                            <li>history of substance use (e.g., alcohol and drugs), </li>
                                            <li>lifestyle issues,</li>
                                            <li>medical history,</li>
                                            <li>mental health history (incl. self-harm and suicide behaviours)</li>
                                        </ul>
                                    </p>
                                    <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=10 cols=110></textarea>
                                    <br>

                                    <h5><u>Intervention(s) provided</u></h5>
                                    <p><em>Brief but clear summary of the intervention work that has been undertaken with the client during the session (e.g., what were the proposed plans that were agreed upon, any homework assigned to the client, etc.). If client expressed suicidal ideation, include suicide safety plan.</em></p>
                                    <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=10 cols=110></textarea>
                                    <br>

                                    <div class="row justify-content-center">
                                        <a href="#">Submit</a>
                                    </div>
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
