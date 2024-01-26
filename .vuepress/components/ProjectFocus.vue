<template>
  <div class="project-focus-areas">
      <div class="project-focus" v-for="focus in focus_areas">{{ focus }}</div>
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
    },

    computed: {

        focus_areas(){
          return this.focus.split(",")
          }
    }
}
</script>

<style lang="scss">
  @import '~styles/colors';
  @import '~styles/fonts';

  .project-focus-areas{
      display: flex;

      .project-focus {
          background: color(color_light);
          color: color(white);
          font-weight: normal;
          font-size: 12px;
          text-transform: uppercase;
          padding: 6px 12px 6px 12px;
          margin: 12px 6px 0px 0px;
          border-radius: 16px;
      }
  }


</style>
