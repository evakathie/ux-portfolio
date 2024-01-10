<template>
  <div class="problem-definition">
      <div class="problem-def-container">
          <p class="problem-def-text">{{ definition }}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProblemDefinition',

  props: {
      definition: {
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

.problem-definition {
    border-left: 2px solid color(color);
    margin: 16px 0 16px 0;

    .problem-def-container {
        padding-left: 16px;
    }

    .problem-def-text {
        font-size: 16px;
        font-weight: normal;
    }

    .quote-author {
        padding-top: 0;
    }
}

</style>
