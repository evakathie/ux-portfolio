<template>
  <div class="infobox">
      <div class="info-icon">&#9432;</div>
      <div class="info-slot">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'InfoBox',
}
</script>

<style lang="scss">
  @import '~styles/colors';
  @import '~styles/fonts';

.infobox {
    border: 1px solid color(color);
    padding: 16px;
    margin: 16px 0 16px 0;

    display: flex;
    align-items: center;

    .info-icon {
        padding-right: 16px;
        font-size: 24px;
        font-weight: bold;
        color: color(color);
    }

    .info-slot {
        display: block;

        h2 {
            text-transform: uppercase;
            text-align: left;
            font-size: 14px;
            padding: 12px 0 12px 0;
        }
    }
}

</style>
