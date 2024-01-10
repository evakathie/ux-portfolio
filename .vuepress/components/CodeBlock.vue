<template>
  <div class="code-block">
      <div class="code-block-container">
          <h4 class="code-language">{{ language }}</h4>
          <p class="code-text"><slot></slot></p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CodeBlock',

  props: {
      language: {
          type: String,
          required: true,
          default: ''
      }
  }
}
</script>

<style lang="scss">
  @import '~styles/colors';
  @import '~styles/fonts';

.code-block {

    .code-block-container {
        padding: 16px;
        background: color(color_lightest);
        border-top-right-radius: 26px;
    }

    .code-language {
        font-weight: normal;
        padding: 0;
    }

    p {
        font-size: 14px;
        padding-bottom: 0;
    }

    .code-comment {
        font-style: italic;
        color: color(color_dark);
        padding-top: 16px;
    }
}

</style>
