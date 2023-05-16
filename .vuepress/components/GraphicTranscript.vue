<template>
  <div class="graphic-transcript">
      <button class="expand" v-on:click="isOpen = !isOpen">
          <div class="expand-link">Textual description of the image</div>
          <div class="arrow" :class="[{hide: isOpen}]" alt="display">▾</div>
          <div class="arrow arrowdown" :class="[{hide: !isOpen}]" alt="hide">▾</div>
      </button>
      <div class="transcript" :class="[{hide: !isOpen}]">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: 'GraphicTranscript',

    data() {
        return {
            isOpen: false,
        }
    },

    watch: {
        "$route"() {
            this.isOpen = false
        }
    },
}
</script>

<style lang="scss">
  @import '~styles/colors';
  @import '~styles/fonts';

.graphic-transcript {
    margin-top: -24px;
    margin-bottom: 16px;
    font-size: 14px;

    .hide {
        display: none;
    }

    .transcript {
        padding: 16px;
        margin-top: -5px;
        background: color(color_lightest);
        border-bottom: 1px solid color(color_light);
    }

    .arrow {
        padding-left: 4px;
    }

    .arrowdown {
        margin-left: 4px;
        transform: rotate(180deg);
    }

    .expand {
        text-align: center;
        cursor: pointer;
        color: color(color);
        font-weight: bold;
        display: flex;

        &:hover, &:focus {
            color: color(color_dark);
            outline: none;
        }
    }

    button {
        margin: 0;
        padding: 0;
        background: none;
        font-size: 14px;
    }

    ul, ol {
        margin-bottom: 0;
    }
}

</style>
