<template>
  <div class="project-list">
      <div class="wrapper">
          <div class="project-preview">
              <router-link class="project" :to="project.path" v-for="project in filtered_projects">
                    <img :src="project.frontmatter.imgmobile" alt="">
                    <div class="text">
                        <h3> {{ project.frontmatter.title }} </h3>
                        <p> {{ project.frontmatter.description }} </p>
                        <p class="project-timeline" v-if="project.frontmatter.from && project.frontmatter.to">{{ project.frontmatter.from }} ➙ {{ project.frontmatter.to }}</p>
                        <p class="project-timeline" v-if="project.frontmatter.from && !project.frontmatter.to">{{ project.frontmatter.from }}</p>
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

        return this.$site.pages.filter(p => p.path.substring(0, 9) == '/projects').sort((a, b) => {
            let aMonth = a.frontmatter.month
            let aYear = a.frontmatter.year
            let bMonth = b.frontmatter.month
            let bYear = b.frontmatter.year

            if (aYear > bYear) {
                return -1
            } else if (aYear < bYear) {
                return 1
            } else if(aYear = bYear){
                if (aMonth > bMonth) {
                    return -1
                } else {
                    return 1
                }
            }
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
