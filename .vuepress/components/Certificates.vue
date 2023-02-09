<template>
    <div class="certificates">
        <div class="wrapper">
            <h2>Certificates</h2>
            <div class="certificate-container">
                <div class="col-left">
                    <div class="image-container">
                        <img :src="'/images/certificates/course-certificate-design-thinking-the-ultimate-guide.jpg'">
                        <p class="image-description">Design Thinking: The Ultimate Guide by Interaction Design Foundation</p>
                    </div>
                    <div class="image-container">
                        <img :src="'/images/certificates/course-certificate-data-driven-design-quantitative-research-for-ux.jpg'">
                        <p class="image-description">Data-Driven Design: Qualitative Research for UX by Interaction Design Foundation</p>
                    </div>
                    <div class="image-container">
                        <img :src="'/images/certificates/course-certificate-agile-methods-for-ux-design.jpg'">
                        <p class="image-description">Agile Methods for UX Design by Interaction Design Foundation</p>
                    </div>
                    <div class="image-container">
                        <img :src="'/images/certificates/course-certificate-affordances-designing-intuitive-user-interfaces.jpg'">
                        <p class="image-description">Affordances: Designing Intuitive User Interfaces by Interaction Design Foundation</p>
                    </div>
                    <div class="image-container">
                        <img :src="'/images/certificates/course-certificate-skiplevel.jpg'">
                        <p class="image-description">Skiplevel Program: Fundamentals of Software by Skiplevel</p>
                    </div>
                </div>
                <div class="col-right">
                    <div class="image-container">
                        <img :src="'/images/certificates/course-certificate-creativity-methods-to-design-better-products-and-services.jpg'">
                        <p class="image-description">Creativity: Methods to Design Better Products and Services by Interaction Design Foundation</p>
                    </div>
                    <div class="image-container">
                        <img :src="'/images/certificates/course-certificate-user-research-methods-and-best-practices.jpg'">
                        <p class="image-description">User Research: Methods and Best Practices by Interaction Design Foundation</p>
                    </div>
                    <div class="image-container">
                        <img :src="'/images/certificates/course-certificate-journey-mapping.jpg'">
                        <p class="image-description">Journey Mapping by Interaction Design Foundation</p>
                    </div>
                    <div class="image-container">
                        <img :src="'/images/certificates/course-certificate-visual-design-the-ultimate-guide.jpg'">
                        <p class="image-description">Visual Design: The Ultimate Guide by Interaction Design Foundation</p>
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

.certificates {
    margin-bottom: 24px;

    h2 {
        line-height: 120%;
        margin-top: 48px;
        padding: 0;

    }

    .certificate-container {
            display: flex;

            @media screen and (max-width: 600px) {
                display: block;
            }
    }

    .col-left {
        width: 50%;

        @media screen and (max-width: 600px) {
            width: 100%;
        }
    }

    .col-right {
        width: 50%;
        margin-left: 48px;

        @media screen and (max-width: 600px) {
            width: 100%;
            margin-left: 0;
            margin-top: 24px;
        }
    }

}

</style>
