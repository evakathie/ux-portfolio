<template>
  <div class="back-to-top" >
    <button v-on:click="totop" class="btt-button" v-show="scrollHeight > 150">⇧</button>
  </div>
</template>

<script>
  export default {
    name: 'BackToTop',

    data() {
      return {
        scrollHeight: 0
      }
    },

    mounted() {
      document.addEventListener('scroll',this.onScroll.bind(this))
    },

    methods: {

      totop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      },

      onScroll() {
        this.scrollHeight = document.documentElement.scrollTop || document.body.scrollTop
      }
    }
  }
</script>

<style lang="scss">
  @import '~styles/colors';

  .back-to-top {

      button {
          border: none;
          background: none;
          cursor: pointer;
          font-size: 36px;
          padding: 8px;

          &:hover, &:focus {
              background: color(color_hover);
              border: 1px solid color(color);
              border-radius: 60px;
              outline: none;
          }
      }

    .btt-button {
      position: fixed;
      bottom: 44px;
      right: 44px;
      z-index: 201;
      padding-left: 8px;
      padding-right: 8px;
      padding-top: 6px;
    }
  }

</style>
