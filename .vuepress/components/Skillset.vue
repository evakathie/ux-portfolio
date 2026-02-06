<template>
    <div class="skillset-header">
        <div class="wrapper">
            <h2>Skillset</h2>
        </div>
            <div class="skillset-container">
                <div class="wrapper">
                    <div class="col-left">
                        <!--
                        <h3 class="highlighted-title">UX Expertise</h3>
                        <ul>
                            <li>Design Thinking</li>
                            <li>User Research (qualitative &amp; quantitative)</li>
                            <li>Design Sprints</li>
                            <li>Journey Mapping</li>
                            <li>Prototyping</li>
                            <li>Accessibility</li>
                        </ul>
                        -->
                        <h3 class="highlighted-title">Expertise</h3>
                        <ul>
                            <li>User interface development</li>
                            <li>Fundamentals of databases</li>
                            <li>Component-based development</li>
                            <li>Responsive Web Design</li>
                            <li>Accessibility</li>
                            <li>UX design &#38; research</li>
                        </ul>
                        <h3 class="highlighted-title">Programming</h3>
                        <ul>
                            <li>HTML &#38; CSS</li>
                            <li>JavaScript</li>
                            <li>R</li>
                        </ul>
                    </div>
                    <div class="col-right">
                        <h3 class="highlighted-title">Tools</h3>
                        <!-- UX TOOLS-->
                        <!--
                        <ul>
                            <li>Prototyping: Figma | Adobe XD | Sketch</li>
                            <li>Wireframing: Balsamiq</li>
                            <li>User Research: Dovetail | Maze | Loop11</li>
                            <li>Product Management: Atlassian Jira &amp; Confluence</li>
                            <li>Collaboration: Miro | FigJam | Microsoft Teams</li>
                            <li>GenAI: ChatGPT | Microsoft Copilot</li>
                        </ul>
                        -->
                        <!-- DEV TOOLS -->
                        <ul>
                            <li>Development: Git | GitHub </li>
                            <li>Frameworks: Vue.js</li>
                            <li>Design &amp; Prototyping: Figma</li>
                            <li>Product Management: Atlassian Jira &amp; Confluence</li>
                            <li>Collaboration: Miro | FigJam | Microsoft Teams</li>
                            <li>GenAI: ChatGPT | Claude</li>
                        </ul>
                        <h3 class="highlighted-title">Languages</h3>
                        <ul>
                            <li>German (native speaker)</li>
                            <li>English (C2 - full professional proficiency)</li>
                            <li>Danish (A2 - beginner)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
</script>

<style lang="scss">
@import '~styles/colors';

.skillset-header {
    margin-bottom: 24px;

    h2 {
        text-align: left;
        line-height: 120%;
        margin-top: 64px;
        padding: 0;

    }

    img {
        margin-top: 0;
    }

    p, li {
        font-size: 14px;
    }

    .skillset-container {
        background: color(color_lightest);
        margin-top: -9px;
        padding: 48px 0 48px 0;

        .wrapper {
            display: flex;

            @media screen and (max-width: 600px) {
              display: block;
            }
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
