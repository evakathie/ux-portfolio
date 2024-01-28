<template>
  <div class="project-focus">
         <div class="project-focus-batch" v-for="focus in focus_areas">{{ focus }}</div>
         <div class="project-focus-batch project-domain" v-for="domain in domains"> {{ domain }}</div>
  </div>
</template>

<script>
export default {
    name: 'ProjectFocus',

    props: {
      focus: {
        type: String,
        required: true,
      },
      domain: {
          type: String,
          required: false,
      }
    },

    computed: {

        focus_areas(){
          return this.focus.split(",")
        },

        domains(){
            if (this.domain) {
                return this.domain.split(",")
            }
        }
    }
}
</script>

<style lang="scss">
  @import '~styles/colors';
  @import '~styles/fonts';

  .project-focus{
      display: flex;
      flex-wrap: wrap;
      margin: 2px 0px 6px 0px;

      .project-focus-batch {
          background: color(color);
          color: color(white);
          border-radius: 16px;

          display: flex;
          align-items: center;
          text-align: center;

          font-weight: normal;
          font-size: 12px;
          text-transform: uppercase;

          padding: 6px 12px 6px 12px;
          margin: 4px 6px 0px 0px;
      }

      .project-domain {
          background: color(color_light)
      }

      @media screen and (max-width: 600px) {

      }
  }


</style>
