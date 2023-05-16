<template>
    <div class="project-header">
        <img :src="this.current.frontmatter.image" class="image-desktop" alt="">
        <img :src="this.current.frontmatter.imgmobile" class="image-mobile" alt="">
        <div class="wrapper">
            <h1 v-if="!this.shortened">{{ this.current.frontmatter.title }}</h1>
        </div>
            <div class="overview">
                <div class="wrapper">
                    <div class="col-left">
                        <h2 class="highlighted-title" v-if="!this.shortened">Overview</h2>
                        <slot></slot>
                        <p class="project-timeline" v-if="this.current.frontmatter.from && this.current.frontmatter.to">{{ this.current.frontmatter.from }} ➙ {{ this.current.frontmatter.to }}</p>
                        <p class="project-timeline" v-if="this.current.frontmatter.from && !this.current.frontmatter.to">{{ this.current.frontmatter.from }}</p>
                    </div>
                    <div class="col-right">
                        <div class="col-container">
                            <h2 class="highlighted-title">Skills</h2>
                            <ul class="competences">
                                <li class="competence" v-for="competence in project_competences">{{ competence }}</li>
                            </ul>
                        </div>
                        <div class="col-container">
                            <h2 class="highlighted-title" v-if="project_tools">Tools</h2>
                            <ul class="competences">
                                <li class="competence" v-for="tool in project_tools">{{ tool }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'ProjectHeader',

  props: {
    currentPage: {
      type: Object,
      required: true,
    },
    shortened: {
        type: Boolean,
        required: false,
        default: false
    }
  },

  computed: {

      current(){
          return this.currentPage.$options.parent.$page
      },

      project_competences(){
        return this.current.frontmatter.competences.split(",")
        },

      project_tools(){
          const tools = this.current.frontmatter.tools;
          if(tools) {
              return tools.split(",")
          }

      }
  }
}
</script>

<style lang="scss">
@import '~styles/colors';

.project-header {
    margin-bottom: 24px;

    h1 {
        font-size: 32px;
        text-align: left;
        line-height: 120%;
        margin-top: 64px;
        padding: 0;
    }

    img {
        margin-top: 0;
    }

    .image-mobile {
        display: none;
    }

    @media screen and (max-width: 600px) {

      .image-desktop {
          display: none;
      }

      .image-mobile {
          display: block;
      }

      h1 {
          text-align: center;
      }
    }

    p, li {
        font-size: 14px;
    }

    .overview {
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

    .project-timeline {
        padding: 0;
        margin-top: 24px;
        text-transform: uppercase;
        font-weight: normal;
    }

    .competence {
        padding: 0;
        line-height: 150%;
        padding-bottom: 8px;
    }

    .col-left {
        width: 60%;

        @media screen and (max-width: 600px) {
            width: 100%;
        }
    }

    .col-right {
        width: 40%;
        margin-left: 48px;
        display: flex;

        .col-container {
            padding-left: 32px;

            &:first-child {
                padding-left: 0;
            }
        }

        @media screen and (max-width: 1000px) and (min-width: 600px) {
            display: block;

            .col-container {
                padding-left: 0;
            }
        }

        @media screen and (max-width: 600px) {
            width: 100%;
            margin-left: 0;
            margin-top: 24px;
        }
    }

}

</style>
