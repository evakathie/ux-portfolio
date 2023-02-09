<template>
  <div class="quote">
      <div class="quote-container">
          <p class="quote-text">»{{ quote }}«</p>
          <p class="quote-author" v-if="author">- {{ author }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Quote',

  props: {
      quote: {
          type: String,
          required: true,
          default: ''
      },
      author: {
          type: String,
          default: ''
      }
  }
}
</script>

<style lang="scss">
  @import '~styles/colors';
  @import '~styles/fonts';

.quote {
    border-left: 2px solid color(color);
    margin: 16px 0 16px 0;

    .quote-container {
        padding-left: 16px;
    }

    .quote-text {
        font-size: 16px;
        font-style: italic;
    }

    .quote-author {
        padding-top: 0;
    }
}

</style>
