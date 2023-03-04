<template>
    <div class="certificates">
        <div class="wrapper">
            <h2>Certificates</h2>
            <div class="certificate-container">
                <div class="grid-item">
                    <img :src="'/images/certificates/course-certificate-skiplevel.jpg'" alt="Course certificate by the Skiplevel from Dezember 2022. It says: completed Skiplevel Program and is up-to-date on the latest available technologies, able to communicate technically and knowledgeable on the software development lifecycle.">
                    <p class="image-description">Skiplevel Program: Fundamentals of Software by Skiplevel</p>
                </div>
                <div class="grid-item">
                    <img :src="'/images/certificates/course-certificate-visual-design-the-ultimate-guide.jpg'" alt="Course certificate in Visual Design by the Interaction Design Foundation from July 2022">
                    <p class="image-description">Visual Design: The Ultimate Guide by Interaction Design Foundation</p>
                </div>
                <div class="grid-item">
                    <img :src="'/images/certificates/course-certificate-journey-mapping.jpg'" alt="Course certificate in User Journey Mapping by the Interaction Design Foundation from May 2022">
                    <p class="image-description">Journey Mapping by Interaction Design Foundation</p>
                </div>
                <div class="grid-item">
                    <img :src="'/images/certificates/course-certificate-agile-methods-for-ux-design.jpg'" alt="Course certificate in Agile Methods by the Interaction Design Foundation from April 2022">
                    <p class="image-description">Agile Methods for UX Design by Interaction Design Foundation</p>
                </div>
                <div class="grid-item">
                    <img :src="'/images/certificates/course-certificate-design-thinking-the-ultimate-guide.jpg'" alt="Course certificate in Design Thinking by the Interaction Design Foundation from March 2022">
                    <p class="image-description">Design Thinking: The Ultimate Guide by Interaction Design Foundation</p>
                </div>
                <div class="grid-item">
                    <img :src="'/images/certificates/course-certificate-affordances-designing-intuitive-user-interfaces.jpg'" alt="Course certificate in Affordances by the Interaction Design Foundation from November 2021">
                    <p class="image-description">Affordances: Designing Intuitive User Interfaces by Interaction Design Foundation</p>
                </div>
                <div class="grid-item">
                    <img :src="'/images/certificates/course-certificate-data-driven-design-quantitative-research-for-ux.jpg'" alt="Course certificate in Data-Driven Design by the Interaction Design Foundation from October 2021">
                    <p class="image-description">Data-Driven Design: Qualitative Research for UX by Interaction Design Foundation</p>
                </div>
                <div class="grid-item">
                    <img :src="'/images/certificates/course-certificate-creativity-methods-to-design-better-products-and-services.jpg'" alt="Course certificate in Creativity Methods by the Interaction Design Foundation from October 2021">
                    <p class="image-description">Creativity: Methods to Design Better Products and Services by Interaction Design Foundation</p>
                </div>
                <div class="grid-item">
                    <img :src="'/images/certificates/course-certificate-user-research-methods-and-best-practices.jpg'" alt="Course certificate in User Research by the Interaction Design Foundation from July 2021">
                    <p class="image-description">User Research: Methods and Best Practices by Interaction Design Foundation</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
@import '~styles/colors';

.certificates {
    margin-bottom: 24px;

    h2 {
        line-height: 120%;
        margin-top: 48px;
        padding: 0;

    }

    .certificate-container {
            display: flex;
            flex-wrap: wrap;
            column-gap: 12px;

            @media screen and (max-width: 600px) {
                display:block;
            }

            .grid-item {
                width: 48%;

                @media screen and (max-width: 600px) {
                    width: 100%;
                }
            }
    }
}

</style>
