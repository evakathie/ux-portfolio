<template>
  <div class="projects">
      <div class="wrapper">

          <router-link class="project" to="/projects/planeatary.html" v-if="this.currentProject != 1">
                <img :src="'/images/planeatary/planeatary.png'" alt="">
                <div class="text">
                    <h3>Creating the app Planeatary for a sustainable and healthy diet in everyday life</h3>
                    <p>Planeatary is a mobile app designed to support users to follow a healthy and environmentally friendly diet.</p>
                </div>
          </router-link>

          <router-link class="project" to="/projects/cookie-notices.html" v-if="this.currentProject != 2">
                <img :src="'/images/cookie-notices/cookie-notices.png'" alt="">
                <div class="text">
                    <h3>The usability of Cookie Notices — Eye-tracking study</h3>
                    <p>I conducted an eye-tracking study to investigate the usability of common types of cookie notices, and designed a prototype for better usability.</p>
                </div>
          </router-link>

            <router-link class="project" to="/projects/spotify-audiobooks.html" v-if="this.currentProject != 3">
                 <img :src="'/images/spotify-audiobooks/audiobooks.png'" alt="">
                 <div class="text">
                     <h3>Redesigning Spotify with audiobook listeners in mind</h3>
                     <p>I used Design Thinking to empathize with audiobook listeners and create a prototype to integrate audiobooks into Spotify.</p>
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
