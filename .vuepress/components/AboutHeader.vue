<template>
  <div class="about-header">
      <h1 style="display: none;">About Me: Eva Katharina Wolf</h1>
      <div class="text">
          <h2 class="about-title">A little bit about myself</h2>
          <p>Iʼm Eva, a {{ this.age }} year old Product Designer from Germany. Iʼm a creative outside-the-box thinker and passionate for Design Thinking. Living in the beautiful city of Hamburg, I currently work at a Fintech company called Digitec. Iʼm responsible for the usability of a b2b software product family in the financial sector. I believe in lifelong learning and love to improve myself and to dive into new challenges and opportunities.</p>
          <p>Outside the office, I enjoy spending time in nature or at the gym. I am an environmentalist, enjoy meeting friends and learning Danish. Creativity is also a big part of my free time, I have been an amateur photographer for many years and enjoy pottery and sewing.</p>
      </div>
      <img :src="'/images/about/eva-katharina-wolf-02.jpg'" alt="Professional job application photo: Eva stands in front of an office building in a blazer and white turtleneck shirt and smiles at the camera.">
  </div>
</template>

<script>
export default {
    name: 'AboutHeader',

    computed: {

        age() {
            const current_date = new Date();
            let age = 0;

            let current_day = current_date.getDate();
            let current_month = current_date.getMonth() + 1;
            let current_year = current_date.getFullYear();

            let birth_day = 22;
            let birth_month = 7;
            let birth_year = 1996;

            if (current_month >= birth_month) {
                if (current_day >= birth_day) {
                    age = current_year - birth_year;
                } else {
                    age = current_year - birth_year - 1;
                }
            } else {
                age = current_year - birth_year - 1;
            }

            return age;
        }
    },
}
</script>

<style lang="scss">
@import '~styles/colors';
@import '~styles/fonts';

.about-header{
    margin: 48px 0 0 128px;
    display: flex;
    align-items: center;
    align-content: center;

    p {
        font-size: 16px;
    }

    .about-title {
        text-align: right;

        @media screen and (max-width: 800px) {
            text-align: center;
        }
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
  .about-header {
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
