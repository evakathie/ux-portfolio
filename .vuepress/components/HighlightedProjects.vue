<template>
  <div class="projects">
      <div class="wrapper">

          <router-link class="project" to="/projects/planeatary.html" v-if="this.currentProject != 1">
                <img :src="'/images/planeatary/planeatary.png'" alt="">
                <div class="text">
                    <h3>Creating the App Planeatary for a Sustainable and Healthy Diet</h3>
                    <p>Planeatary is a mobile app designing to support users to follow a healthy and environmentally friendly diet.</p>
                    <ProjectFocus focus="UX Design, FrontEnd Development" domain="Mobile"/>
                </div>
          </router-link>

            <router-link class="project" to="/projects/conscious-choice-platform.html" v-if="this.currentProject != 2">
                 <img :src="'/images/conscious-choice-platform/conscious-choice-platform.png'" alt="">
                 <div class="text">
                     <h3>Creating a Sustainable Fashion Comparison Platform</h3>
                     <p>CONSCIOUS.CHOICE is an e-commerce platform visualizing sustainability in fashion products that allows users to make sustainable decisions.</p>
                     <ProjectFocus focus="UX Design, User Research" domain="Web"/>
                </div>
            </router-link>

            <router-link class="project" to="/projects/cookie-notices.html" v-if="this.currentProject != 3">
                  <img :src="'/images/cookie-notices/cookie-notices.png'" alt="">
                  <div class="text">
                      <h3>The Usability of Cookie Notices — Eye-tracking Research</h3>
                      <p>An eye-tracking research for investigating the usability of common types of cookie notices and designing a prototype for better usability.</p>
                      <ProjectFocus focus="User Research" domain="Web"/>
                  </div>
            </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HighlightedProjects',

  props: {
    currentProject: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">



</style>
