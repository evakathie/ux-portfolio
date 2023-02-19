<template>
  <div class="project-list">
      <div class="wrapper">
          <div class="project-preview" v-for="project in all_projects">
              <router-link :to="project.path">
                    <div class="project">
                        <img :src="project.frontmatter.imgmobile" alt="">
                        <div class="text">
                            <h3> {{ project.frontmatter.title }} </h3>
                            <p> {{ project.frontmatter.description }} </p>
                            <p class="project-timeline" v-if="project.frontmatter.from && project.frontmatter.to">{{ project.frontmatter.from }} ➙ {{ project.frontmatter.to }}</p>
                            <p class="project-timeline" v-if="project.frontmatter.from && !project.frontmatter.to">{{ project.frontmatter.from }}</p>
                        </div>
                    </div>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',

  computed: {
      all_projects() {

        return this.$site.pages.filter(p => p.path.substring(0, 9) == '/projects').sort((a, b) => {
          let aDate = a.frontmatter.year
          let bDate = b.frontmatter.year

          if (aDate > bDate) {
            return -1
          } else if (aDate < bDate) {
            return 1
          }
          return 0
        })
    }
  },
}
</script>

<style lang="scss">
@import '~styles/colors';
@import '~styles/fonts';

.project-list {

}

</style>
