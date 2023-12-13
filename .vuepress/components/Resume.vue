<template>
    <div class="resume">
        <div class="wrapper">
            <h2>My Resume</h2>
            <div class="timeline">
                <div class="col-left">
                    <h3 class="highlighted-title timeline-left-title">Education</h3>
                    <div class="resume-element-empty-small"></div>
                    <div class="resume-element resume-left">
                        <div class="station">
                            <p class="role">Masterʼs program in Information Studies</p>
                            <p class="company"><router-link to="/pages/company/aalborg-university.html">University of Aalborg</router-link> &#11049; {{ this.duration(2023, 9) }}</p>
                        </div>
                        <div class="time">
                            <p class="to">since</p>
                            <p class="from">09/2023</p>
                        </div>
                    </div>
                    <div class="resume-element resume-left">
                        <div class="station">
                            <p class="role">Continuous training in UX Design</p>
                            <p class="company">Interaction Design Foundation &#11049; {{ this.duration(2021, 6) }}</p>
                        </div>
                        <div class="time">
                            <p class="to">since</p>
                            <p class="from">06/2021</p>
                        </div>
                    </div>
                    <div class="resume-element resume-left">
                        <div class="station">
                            <p class="role">Mentee in a mentoring program for female junior executives</p>
                            <p class="company"><router-link to="/pages/company/hamburg-university.html">University of Hamburg</router-link> Career Center &#11049; {{ this.duration(2020, 11, 2021, 12) }}</p>
                        </div>
                        <div class="time">
                            <p class="to">12/2021</p>
                            <p class="from">11/2020</p>
                        </div>
                    </div>
                    <div class="resume-element resume-left">
                        <div class="station">
                            <p class="role">B.Sc. Human-Computer-Interaction<br />Grade: 2,0 (good)</p>
                            <p class="company"><router-link to="/pages/company/hamburg-university.html">University of Hamburg</router-link></p>
                        </div>
                        <div class="time">
                            <p class="to">09/2020</p>
                        </div>
                    </div>
                    <div class="resume-element-empty"></div>
                    <div class="resume-element-empty"></div>
                    <div class="resume-element resume-left">
                        <div class="station">
                            <p class="role">Bachelorʼs program in Human-Computer-Interaction</p>
                            <p class="company"><router-link to="/pages/company/hamburg-university.html">University of Hamburg </router-link> &#11049; {{ this.duration(2015, 10, 2020, 9) }}</p>
                        </div>
                        <div class="time">
                            <p class="to">09/2020</p>
                            <p class="from">10/2015</p>
                        </div>
                    </div>
                    <div class="resume-element resume-left">
                        <div class="station">
                            <p class="role">English language course, completed with language level C2</p>
                            <p class="company">EF Education First, Capetown (ZA) &#11049; {{ this.duration(2015, 7, 2015, 9) }}</p>
                        </div>
                        <div class="time">
                            <p class="to">09/2015</p>
                            <p class="from">07/2015</p>
                        </div>
                    </div>
                    <div class="resume-element resume-left">
                        <div class="station">
                            <p class="role">High school graduation: Abitur<br />Grade: 1,6 (good)</p>
                            <p class="company">Käthe-Kollwitz Schule &#11049; Bruchsal</p>
                        </div>
                        <div class="time">
                            <p class="to">06/2015</p>
                        </div>
                    </div>
                </div>
                <div class="col-right">
                    <h3 class="highlighted-title timeline-right-title">Experience</h3>
                    <div class="resume-element">
                        <div class="time">
                            <p class="to">since</p>
                            <p class="from">12/2023</p>
                        </div>
                        <div class="station">
                            <p class="role">Student Assistant<br/>UX Design &amp; Consulting</p>
                            <p class="company"> {{ this.duration(2023, 12) }} &#11049; Novo Nordisk A/S, Copenhagen</p>
                        </div>
                    </div>
                    <div class="resume-element-empty"></div>

                    <div class="resume-element">
                        <div class="time">
                            <p class="to">06/2023</p>
                            <p class="from">10/2020</p>
                        </div>
                        <div class="station">
                            <p class="role">Product Designer</p>
                            <p class="company"> {{ this.duration(2020, 10, 2023, 6) }} &#11049; <router-link to="/pages/company/digitec.html">Digitec GmbH</router-link>, Hamburg</p>
                        </div>
                    </div>
                    <div class="resume-element-empty"></div>
                    <div class="resume-element-empty-small"></div>
                    <div class="resume-element">
                        <div class="time">
                            <p class="to">09/2020</p>
                            <p class="from">02/2019</p>
                        </div>
                        <div class="station">
                            <p class="role">Student Assistent<br/>User Experience Design</p>
                            <p class="company"> {{ this.duration(2019, 2, 2020, 9) }} &#11049; <router-link to="/pages/company/digitec.html">Digitec GmbH</router-link>, Hamburg</p>
                        </div>
                    </div>
                    <div class="resume-element">
                        <div class="time">
                            <p class="to">10/2018</p>
                            <p class="from">12/2018</p>
                        </div>
                        <div class="station">
                            <p class="role">Internship<br/>User Experience Design</p>
                            <p class="company"> {{ this.duration(2018, 10, 2018, 12) }} &#11049; <router-link to="/pages/company/digitec.html">Digitec GmbH</router-link>, Hamburg</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="align-center">
                <router-link to="../resume/CV_Eva_Wolf.pdf" target="_blank" class="button">Download resume as pdf</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Resume',

    methods: {

        duration(start_year, start_month, end_year, end_month) {
            let years = 0;
            let months = 0;

            if (!end_year && !end_month){
                const current_date = new Date();

                end_month = current_date.getMonth() + 1;
                end_year = current_date.getFullYear();
            }

            if (end_month >= start_month - 1) {
                years = end_year - start_year;
                months = end_month - start_month + 1;
            } else {
                years = end_year - start_year - 1;
                months = 12 - start_month + end_month + 1;
            }

            if (years == 0) {
                return months + " mo"
            } else if (months == 0) {
                return years + " yrs"
            } else {
                return years + " yrs " + months + " mo"
            }
        }
    }
}

</script>

<style lang="scss">
@import '~styles/colors';

.resume {

    h2 {
        margin-bottom: 42px;
    }

    .wrapper {
        padding-bottom: 24px;
    }

    .timeline {
        display: flex;

        @media screen and (max-width: 600px) {
            display: block;
        }

        .col-left {
            width: 50%;

            @media screen and (max-width: 600px) {
                width: 100%;
                border-right: 1px solid color(black);
            }
        }

        .col-right {
            width: 50%;
            border-left: 1px solid color(black);

            @media screen and (max-width: 600px) {
                width: 100%;
                border-left: none;
                border-left: 1px solid color(black);
            }
        }

        .timeline-left-title {
            text-align: right;
            padding: 0 94px 48px 0;
            color: color(color);

            @media screen and (max-width: 600px) {
                text-align: center;
                padding: 24px 0 24px 0;
            }
        }

        .timeline-right-title {
            padding: 0 0 48px 94px;
            color: color(color);

            @media screen and (max-width: 600px) {
                padding: 24px 0 24px 0;
                text-align: center;
            }
        }
    }

    .resume-element {
        display: flex;
        margin-bottom: 24px;


        .from, .company {
            padding-top: 0;
        }

        .to, .role {
            padding-bottom: 0;
        }

        .to {
            border-bottom: 1px solid color(black);
        }

        .to, .from {
            padding-left: 8px;
            padding-right: 8px;
            font-size: 14px;

        }

        .station {
            padding-left: 24px;
            padding-right: 24px;
        }

        .role {
            font-size: 18px;
            font-weight: normal;
            line-height: 120%;
        }

        .company {
            font-size: 14px;
        }
    }

    .resume-element-empty {
        height: 64px;
        margin-bottom: 24px;

        @media screen and (max-width: 600px) {
            display: none;
        }

        @media screen and (max-width: 1250px) {
            height: 128px;
        }
    }

    .resume-element-empty-small {
        height: 24px;
        margin-bottom: 12px;

        @media screen and (max-width: 600px) {
            display: none;
        }
    }

    .resume-left {
        text-align: right;
        padding-right: 0;
        justify-content: flex-end;
    }

}

</style>
