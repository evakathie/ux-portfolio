<template>
  <div class="back-to-top" >
    <button v-on:click="totop" class="btt-button" v-show="scrollHeight > 150" alt="">
        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 96 960 960" width="32">
            <path d="M305.902 949V639H93l387-485 389 485H654.944v310H305.902Z"/>
        </svg>

    </button>
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
          background: color(black);
          border-radius: 26px 0 0 26px;
          font-size: 36px;
          padding: 8px 18px 2px 12px;

          path {
              fill: color(white);
          }

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



          &:hover, &:focus {
              /*border: 1px solid color(color);*/
              color: color(white);
              background: color(color);
              outline: none;
          }
      }
  }

</style>
