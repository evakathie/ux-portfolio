<template>
    <div class="project-header">
        <img :src="this.current.frontmatter.image" class="image-desktop" alt="">
        <img :src="this.current.frontmatter.imgmobile" class="image-mobile" alt="">
        <div class="wrapper">
            <h1>{{ this.current.frontmatter.title }}</h1>
        </div>
            <div class="overview">
                <div class="wrapper">
                    <div class="col-left">
                        <h3 class="highlighted-title">Overview</h3>
                        <slot></slot>
                        <p class="project-timeline" v-if="this.current.frontmatter.from && this.current.frontmatter.to">{{ this.current.frontmatter.from }} ➙ {{ this.current.frontmatter.to }}</p>
                        <p class="project-timeline" v-if="this.current.frontmatter.from && !this.current.frontmatter.to">{{ this.current.frontmatter.from }}</p>
                    </div>
                    <div class="col-right">
                        <h3 class="highlighted-title">Skills</h3>
                        <ul class="competences">
                            <li class="competence" v-for="competence in project_competences">{{ competence }}</li>
                        </ul>
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
  },

  computed: {

      current(){
          return this.currentPage.$options.parent.$page
      },

      project_competences(){
        return this.current.frontmatter.competences.split(",")
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
        background: color(color_hover);
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

        @media screen and (max-width: 600px) {
            width: 100%;
            margin-left: 0;
            margin-top: 24px;
        }
    }

}

</style>
