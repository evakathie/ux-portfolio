<template>
    <div class="resume">
        <div class="wrapper">
            <h2>My Resume</h2>
            <div class="timeline">
                <div class="col-left">
                    <h3 class="highlighted-title timeline-left-title">Experience</h3>
                    <div class="resume-element-empty"></div>
                    <div class="resume-element-empty"></div>
                    <div class="resume-element resume-right">
                        <div class="station">
                            <p class="role">Product Designer</p>
                            <p class="company">Digitec GmbH, Hamburg</p>
                        </div>
                        <div class="time">
                            <p class="to">since</p>
                            <p class="from">10/2020</p>
                        </div>
                    </div>
                    <div class="resume-element-empty-small"></div>
                    <div class="resume-element resume-right">
                        <div class="station">
                            <p class="role">Working Student<br/>User Experience Design</p>
                            <p class="company">Digitec GmbH, Hamburg</p>
                        </div>
                        <div class="time">
                            <p class="to">09/2020</p>
                            <p class="from">02/2019</p>
                        </div>
                    </div>
                    <div class="resume-element resume-right">
                        <div class="station">
                            <p class="role">Internship<br/>User Experience Design</p>
                            <p class="company">Digitec GmbH, Hamburg</p>
                        </div>
                        <div class="time">
                            <p class="to">10/2018</p>
                            <p class="from">12/2018</p>
                        </div>
                    </div>
                </div>
                <div class="col-right">
                    <h3 class="highlighted-title timeline-right-title">Education</h3>
                    <div class="resume-element">
                        <div class="time">
                            <p class="to">since</p>
                            <p class="from">06/2021</p>
                        </div>
                        <div class="station">
                            <p class="role">Continuous training in UX Design</p>
                            <p class="company">Interaction Design Foundation</p>
                        </div>
                    </div>
                    <div class="resume-element">
                        <div class="time">
                            <p class="to">12/2021</p>
                            <p class="from">11/2020</p>
                        </div>
                        <div class="station">
                            <p class="role">Mentee in a mentoring program for female junior executives</p>
                            <p class="company">Career Center, University of Hamburg</p>
                        </div>
                    </div>
                    <div class="resume-element-empty-small"></div>
                    <div class="resume-element">
                        <div class="time">
                            <p class="to">10/2020</p>
                        </div>
                        <div class="station">
                            <p class="role">B.Sc. Human-Computer-Interaction<br />Grade: 2,3 (good)</p>
                            <p class="company">University of Hamburg</p>
                        </div>
                    </div>
                    <div class="resume-element-empty"></div>
                    <div class="resume-element-empty"></div>
                    <div class="resume-element">
                        <div class="time">
                            <p class="to">09/2020</p>
                            <p class="from">10/2015</p>
                        </div>
                        <div class="station">
                            <p class="role">Bachelor's degree program in Human-Computer-Interaction</p>
                            <p class="company">University of Hamburg</p>
                        </div>
                    </div>
                    <div class="resume-element">
                        <div class="time">
                            <p class="to">09/2015</p>
                            <p class="from">07/2015</p>
                        </div>
                        <div class="station">
                            <p class="role">English language course, completed with language level C2</p>
                            <p class="company">EF Education First &#11049; Capetown, Südafrika</p>
                        </div>
                    </div>
                    <div class="resume-element">
                        <div class="time">
                            <p class="to">06/2015</p>
                        </div>
                        <div class="station">
                            <p class="role">High school graduation: Abitur<br />Grade: 1,6 (good)</p>
                            <p class="company">Käthe-Kollwitz Schule &#11049; Bruchsal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
    }

    .resume-element-empty-small {
        height: 24px;
        margin-bottom: 12px;

        @media screen and (max-width: 600px) {
            display: none;
        }
    }

    .resume-right {
        text-align: right;
        padding-right: 0;
        justify-content: flex-end;
    }

}

</style>
