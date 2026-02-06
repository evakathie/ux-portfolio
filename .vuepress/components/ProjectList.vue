<template>
  <div class="project-list">
      <div class="wrapper">
          <div class="project-preview">
              <router-link class="project" :to="project.path" v-for="project in filtered_projects">
                    <img :src="project.frontmatter.imgmobile" alt="">
                    <div class="text">
                        <p class="project-timeline" v-if="project.frontmatter.from && project.frontmatter.to">{{ project.frontmatter.from }} ➙ {{ project.frontmatter.to }}</p>
                        <p class="project-timeline" v-if="project.frontmatter.from && !project.frontmatter.to">{{ project.frontmatter.from }}</p>
                        <h3> {{ project.frontmatter.title }} </h3>
                        <p> {{ project.frontmatter.description }} </p>
                        <ProjectFocus :focus="project.frontmatter.focus" :domain="project.frontmatter.domain"/>
                    </div>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',

  props: {
    companyfilter: {
        type: String,
        required: false,
        default: null
    }
  },

  computed: {
      all_projects() {

          return this.$site.pages
            .filter(p => p.path.startsWith('/projects/'))
            .sort((a, b) => {
              const aMonth = a.frontmatter.month
              const aYear = a.frontmatter.year
              const bMonth = b.frontmatter.month
              const bYear = b.frontmatter.year

              if (aYear > bYear) return -1
              if (aYear < bYear) return 1

              if (aMonth > bMonth) return -1
              if (aMonth < bMonth) return 1

              return 0
            })
    },

    filtered_projects() {
        if(this.companyfilter) {
            return this.all_projects.filter(p => p.frontmatter.company == this.companyfilter)
        }
        return this.all_projects
    }
  },
}
</script>

<style lang="scss">
</style>
