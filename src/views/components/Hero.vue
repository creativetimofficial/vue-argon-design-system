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
                            <div class="col-lg-5 order-lg-3">
                                <span></span>
                                <div>
                                    <br><br>
                                    <base-button type="info" class="mr-4">First Session</base-button>
                                    <base-button type="default" class="float-right">Subsequent Sessions</base-button> 
                                    <!-- toggle between the sessions -->
                                </div>
                            </div>
                        </div>
                        <!-- form start -->
                        <div class="text-center mt-5">
                            <h2><strong>First Session Form</strong></h2>
                            <br><br>
                        </div>
                        <div ref="client-information">
                            <div>
                                <h2 class="heading-title text-warning mb-0">Client Information</h2>
                                <br>
                                <!-- <form class="tr" method="post" action="blah.html"> -->
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6">
                                        <base-input label="Rank/Name"></base-input>
                                        <base-input label="NRIC"></base-input>
                                        <base-input label="Age"></base-input>
                                        <base-input label="Unit"></base-input>
                                        <base-input label="Enlistment Date (for NSFs)"><date-pickers></date-pickers></base-input>
                                    </div>
                                    <div class="col-lg-6 col-sm-6">
                                            <base-input label="Marital Status"></base-input>
                                        <base-input label="Race"></base-input>
                                        <span>Gender:</span>
                                        <div>
                                            <base-radio class="mb-3">Male</base-radio>
                                            <base-radio class="mb-3">Female</base-radio>
                                            <!-- <base-radio name="radio0" class="mb-3" v-model="radio.radio1">Unchecked</base-radio> -->
                                        </div>
                                        <base-input label="Contact No"></base-input>
                                        <base-input label="Expected ORD (for NSFs)"><date-pickers></date-pickers></base-input>
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
                                    <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=10 cols=95></textarea>
                                </div>      
                            </div>
                        </div>
                        <br><br>
                        <div>
                            <div>
                                <h2 class="heading-title text-warning mb-0">Session Information</h2>
                                <br>
                                <!-- <form class="tr" method="post" action="blah.html"> -->
                                <div class="row">
                                    <div class="col-lg-6 col-sm-6">
                                        <!-- <base-input placeholder="Date"></base-input> -->
                                        <!-- <input type="text" data-input="true" class="form-control datepicker flatpickr-input active"> -->
                                        <base-input label="Session Date"><date-pickers></date-pickers></base-input>
                                        <base-input label="Start Time"></base-input>
                                        <base-input label="End Time"></base-input>
                                    </div>
                                    <div class="col-lg-6 col-sm-6">
                                        <base-input label="Venue"></base-input>
                                        <!-- <base-input placeholder="Counsellor(s)"></base-input> -->
                                        <base-input label= "Counsellor">
                                            <select class="form-control">
                                                <option>Shichao</option>
                                                <option>Clara</option>
                                                <option>Keif</option>
                                                <option>Wang Zi</option>
                                                <option>Amanda</option>
                                            </select>
                                        </base-input>
                                    </div>
                                </div>
                                <br>
                                <div>
                                    <h2 class="heading-title text-warning mb-0">Observations of Presentation</h2>
                                    <br>
                                    <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=100 cols=110></textarea>
                                </div>      
                            </div>
                        </div>
                        <br>
                        <div>
                            <div>
                                <div>
                                    <h2 class="heading-title text-warning mb-0">Counselling Goals</h2>
                                    <br>
                                    <p>List down client’s counselling/ therapy goals (mutually agreed) to be achieved for counselling and/or during the current session.</p>
                                    <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=10 cols=110></textarea>
                                    <br><br>

                                    <h2 class="heading-title text-warning mb-0">Details Of Session</h2>
                                    <br>
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
                                    <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=10 cols=95></textarea>
                                    <br><br>

                                    <h2 class="heading-title text-warning mb-0">Case Conceptualisation</h2>
                                    <br>
                                    <p>Your assessment of the client’s key underlying issues, obstacles that prevent him / her from resolving the issues, factors that have contributed to his / her progress, personal strengths that could be leveraged to help client manage his / her issues better, perceived social support network to help client manage presenting problem(s), any suspected psychological conditions that the client may be presenting, etc.</p>
                                    <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=10 cols=95></textarea>
                                    <br><br>

                                    <h2 class="heading-title text-warning mb-0">Intervention(s) provided</h2>
                                    <br>
                                    <p><em>Brief but clear summary of the intervention work that has been undertaken with the client during the session (e.g., what were the proposed plans that were agreed upon, any homework assigned to the client, etc.). If client expressed suicidal ideation, include suicide safety plan.</em></p>
                                    <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=10 cols=95></textarea>
                                    <br><br>

                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 class="heading-title text-warning mb-0">Suicide Risk Considerations (If Relevant)</h2>
                            <br>
                            <p>Indicate clients’ responses during current session, if applicable.<br>In an event that client presents with active suicidal ideation during the current session, please refer client to a Medical Centre immediately. Please ensure the safety of the client before reaching out to your Parac TL and/or EBSC, if in doubt.</p>
                            <h5>1. Intent</h5>
                            <p>Verbalises thoughts of suicide</p>
                            <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=20 cols=95></textarea>
                            <p>Ambivalence towards suicide</p>
                            <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=20 cols=95></textarea>
                            <br><br>
                            <h5>2. Plans</h5>
                            <p>Explore about suicide (e.g., research)</p>
                            <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=20 cols=95></textarea>
                            <p>Have concrete plans to attempt suicide</p>
                            <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=20 cols=95></textarea>
                            <p>Have access to lethal means for suicide</p>
                            <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=20 cols=95></textarea>
                            <br><br>
                            <h5>3. Resources</h5>
                            <p>Strength of social support</p>
                            <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=20 cols=95></textarea>
                            <p>Problem solving skills</p>
                            <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=20 cols=95></textarea>
                            <br><br>
                            <h5>4. Past Attempt</h5>
                            <p>History of past suicide attempts</p>
                            <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=20 cols=95></textarea>
                            <br><br>
                            <h5>5. Mental Health</h5>
                            <p>Presence of mental health illness</p>
                            <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=20 cols=95></textarea>
                            <br><br>

                            <h2 class="heading-title text-warning mb-0">Overall Risk Level</h2>
                            <br>
                            <tabs tabNavClasses="nav-fill flex-column flex-sm-row">
                                <tab-pane title="Low"></tab-pane>
                                <tab-pane title="Moderate"></tab-pane>
                                <tab-pane title="High"></tab-pane>
                            </tabs>
                            <p>It is recommended that suicide risk is managed during and immediately after the session. If there is a high risk of suicide, attending aracounsellors/ counsellors should inform and discuss with the unit supervisor on the safety plan. <br>The safety plan can include seeking medical attention from the SCDF Medical Centre, conveyance to IMH or the nearest A&E or a restructured hospital. <br>When in doubt, please reach out to EBSC or the SCDF Counselling Helpline (1800 286 6666).
                            </p>
                        </div>
                        <br><br>
                        <div>
                            <h2 class="heading-title text-warning mb-0">Follow-up Plans</h2>
                            <br>
                            <p>Indicate your follow-up plans for the case.</p>
                            <h6><u>Case management:</u></h6>
                            <p><i>To update or reach out to the following:</i></p>
                            <div>
                                <base-checkbox class="mb-3">Client’s supervisors</base-checkbox>
                                <base-checkbox class="mb-3">Unit Paracounsellor to monitor</base-checkbox>
                                <base-checkbox class="mb-3">Medical Officer</base-checkbox>
                                <base-checkbox class="mb-3">Other agencies</base-checkbox>
                            </div>
                            <p><i>Apart from suicide risk, the following are common areas of update (subjected to client’s consent): </i></p>
                            <h6> - Mental health condition</h6>
                            <h6> -  Coping strategies</h6>
                            <h6> - Recommended work arrangements</h6>
                            <p>Note: Advocacy for posting is discouraged during counselling sessions. Please contact EBSC for further discussion prior to updating supervisors if a change in posting is recommended. </p>
                            <h6><u>Follow-Up Plans:</u></h6>
                            <p><i>Include next date of session, if applicable. <br>If no follow up is required, state reasons for closure. <br>If case is required for handover, please append handover form upon submission of case notes. </i></p>
                            <textarea name="textarea" v-model.lazy.trim="textAreaValue" row=100 cols=95></textarea>
                        </div>
                        <br><br>
                        <div>
                            <h2 class="heading-title text-warning mb-0">Summary</h2>
                            <br>
                            <small>Report Prepared By:</small>
                            <tabs tabNavClasses="nav-fill flex-column flex-sm-row">
                                <tab-pane title="EBSC staff"></tab-pane>
                                <tab-pane title="Paracounsellor"></tab-pane>
                            </tabs>
                            <base-input label="Rank/Name"></base-input>
                            <base-input label="Signature"></base-input>
                            <base-input label="Date of Report"><date-pickers></date-pickers></base-input>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                                        <a href="#">Submit</a>
                    </div>
                    <br>
                </card>
            </div>
        </section>
    </div>
    </section>
</template>
<script>
const DatePickers = () => import("./JavascriptComponents/DatePickers");
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import TabsSection from "./JavascriptComponents/TabsSection";
export default {
  components: {
    DatePickers,
    TabPane,
    Tabs,
    TabsSection
  },
};
</script>

<style>
</style>

