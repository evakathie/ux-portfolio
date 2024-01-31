<template>
  <div class="photographs" alt="29 photographs from the previously mentioned areas.">
      <div class="images-container" v-for="src in img_srcs">
          <img :src="src" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Photographs',

  computed: {
      img_srcs() {
          const img_srcs = [];
          let number_of_images = 29;

          for (let i = 1; i <= number_of_images; i++) {
              if(i < 10 ) {
                  img_srcs.push("/images/play/photographs/photography-0" + i + ".jpeg");
              } else {
                  img_srcs.push("/images/play/photographs/photography-" + i + ".jpeg");
              }
          }

          return img_srcs;
    }
  },

}
</script>

<style lang="scss">
  @import '~styles/colors';
  @import '~styles/fonts';

.photographs {
    column-count: 4;
    margin-top: 24px;

    .images-container {
        display: inline-block;

        img {
            margin: 8px 0px;
        }

        :hover {
            scale: 1.2;
            box-shadow: 0px 2px 3px rgba(0,0,0,0.1), 0px 3px 8px rgba(0,0,0,0.1);
            z-index: 10;
        }
    }

    @media screen and (max-width: 600px) {
        column-count: 2;
    }
}

</style>
