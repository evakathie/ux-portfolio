<template>
    <footer class="footer">
        <div class="col-left">
            <router-link to="/pages/legal-notice.html">Legal Notice</router-link>
        </div>
        <div class="col-right">
            <p>© {{ this.current_year }} Eva Wolf</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Resume',

    computed: {
        current_year() {
            const current_date = new Date();

            return current_date.getFullYear();
        }
    },
}
</script>

<style lang="scss">
  @import '~styles/colors';
  @import '~styles/fonts';

  .footer {
      width: 100%;
      height: 44px;
      background: #fff;
      border-top: 1px solid color(black_25);
      margin-top: 42px;

      display: flex;
      align-items: center;

      .col-left {
          width: 50%;
          text-align: left;
          margin-left: 128px;

          @media screen and (max-width: 600px) {
            margin: auto;
            text-align: center;
          }
      }

      .col-right {
          width: 50%;
          text-align: right;
          margin-right: 128px;

          p {
              padding: 0px;
          }

          @media screen and (max-width: 600px) {
            display:none;
          }
      }

      a {
          font-weight: lighter;
          color: color(black);

          &:hover {
                text-decoration: underline solid color(color);
          }
      }
  }
</style>
