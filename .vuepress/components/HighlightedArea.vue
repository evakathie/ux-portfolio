<template>
    <div class="highlighted-area">
        <div class="wrapper">
            <h3 class="highlighted-title" v-if="title">{{ title }}</h3>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HighlightedArea',

  props: {
    title: {
      type: String,
    },
  }
}
</script>

<style lang="scss">
@import '~styles/colors';

.highlighted-area {
    background: color(color_hover);
    margin-top: 24px;

    .highlighted-title {
        padding-top: 24px;
    }

    .wrapper {
        padding: 24px 0 24px 0;
    }

    h3 {
        padding: 0 0 12px 0;
    }

    p, li {
        font-size: 14px;
    }

}

</style>
