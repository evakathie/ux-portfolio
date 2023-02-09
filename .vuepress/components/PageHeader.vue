<template>
  <div class="page-header">
      <div class="text">
          <h1><router-link to="/pages/about.html">Hi, Iʼm Eva!</router-link></h1>
          <p>Iʼm a Product Designer based in Hamburg, Germany with experience in delivering end-to-end UX design for software products. Iʼm a creative outside-the-box thinker and passionate for Design Thinking. In this portfolio you will find some of my past work in the form of UX case studies.</p>
      </div>
      <img :src="'/images/about/eva-katharina-wolf.jpg'">
  </div>
</template>

<script>
</script>

<style lang="scss">
@import '~styles/colors';
@import '~styles/fonts';

.page-header{
    margin: 48px 0 0 128px;
    display: flex;
    align-items: center;
    align-content: center;

    p {
        font-size: 16px;
    }

    a {
        color: color(black);

        &:hover, &:focus {
            background: color(color);
            color: color(white);
        }
    }

    .text {
        text-align: right;
        margin-right: 42px;
    }

    img {
        border-top-left-radius: 26px;
        border-bottom-left-radius: 26px;
        width: auto;
        max-width: 50%;
        height: auto;
        max-height: 426px;
    }
}

@media screen and (max-width: 800px) {
  .page-header {
      display: block;
      margin-left: auto;
      margin-right: auto;
      text-align: center;

      .text {
          text-align: center;
          margin: 0px 48px 48px 48px;
      }

      img {
          border-radius: 26px 26px 0px 26px;
          max-width: 80%;
          max-height: 80%;
          margin-top: 0;
      }
  }
}


</style>
