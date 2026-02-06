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
    },
    projectfilter: {
        type: String,
        required: false,
        default: null
    },
    numberfilter: {
        type: Number,
        required: false,
        default: 0
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
      let projects = this.all_projects
      const focusprojects = "Front-end Development"

      // Apply project filter if set
      if (this.projectfilter) {
        if (this.projectfilter === focusprojects) {
          projects = projects.filter(
            p => p.frontmatter.focus == focusprojects
          )
        } else {
          projects = projects.filter(
            p => p.frontmatter.focus != focusprojects
          )
        }
      }

      // Apply number filter if set
      if (this.numberfilter) {
        projects = projects.slice(0, this.numberfilter)
      }

      // Apply company filter if set (optional, still first priority)
      if (this.companyfilter) {
        projects = projects.filter(
          p => p.frontmatter.company == this.companyfilter
        )
      }

      return projects
    }

  },
}
</script>

<style lang="scss">
</style>
