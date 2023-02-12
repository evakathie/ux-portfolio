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

          /* Styling */
          color: color(black);
          background: rgba(color(color), 0.2);
          border: 1px solid rgba(color(color), 0.0);
          border-top-left-radius: 26px;
          border-bottom-left-radius: 26px;
          font-size: 36px;
          padding: 8px 18px 8px 12px;

          /* Position */
          position: fixed;
          bottom: 45px;
          right: 0px;
          z-index: 201;

          @media screen and (max-width: 600px) {
              padding-left: 8px;
              padding-right: 8px;
              font-size: 32px;
          }

          &:hover {
              border: 1px solid color(color);
              outline: none;
          }
      }
  }

</style>
