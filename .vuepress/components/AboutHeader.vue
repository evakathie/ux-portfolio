<template>
  <div class="page-header">
      <h1 style="display: none;">About Me: Eva Katharina Wolf</h1>
      <div class="text">
          <h2 class="page-title">A little bit about myself</h2>
          <!--<p>Iʼm Eva, a {{ this.age }} year old Product Designer from Germany. Iʼm a creative outside-the-box thinker and passionate for Design Thinking. Living in the beautiful city of Hamburg, I currently work at a Fintech company called <router-link to="/pages/company/digitec.html">Digitec</router-link>. Iʼm responsible for the usability of a b2b software product family in the financial sector. I believe in lifelong learning and love to improve myself and to dive into new challenges and opportunities.</p>-->
          <p>Iʼm Eva, a {{ this.age }} year old Product Designer from Germany. Iʼm a creative outside-the-box thinker and passionate for Design Thinking. Living in the beautiful city of Copenhagen, I’m currently completing my Masterʼs degree in Information Studies at the <router-link to="/pages/company/aalborg-university.html">University of Aalborg</router-link>. Between my masterʼs and bachelorʼs degrees, I gained professional experience as a Product Designer at a Fintech company for several years. I believe in lifelong learning and love to improve myself and to dive into new challenges and opportunities.</p>
          <p>Outside the office, I enjoy spending time in nature or at the gym. I am an environmentalist, enjoy meeting friends and learning Danish. Creativity is also a big part of my free time, I have been an <router-link to="/pages/play.html">amateur photographer</router-link> for many years and enjoy pottery and sewing.</p>
      </div>
      <img :src="'/images/about/eva-katharina-wolf-02.jpg'" alt="Professional job application photo: Eva stands in front of an office building in a blazer and white turtleneck shirt and smiles.">
  </div>
</template>

<script>
export default {
    name: 'AboutHeader',

    computed: {

        age() {
            const birthDate = new Date('1996-07-22');
            const currentDate = new Date();

            let age = currentDate.getFullYear() - birthDate.getFullYear();

            // Check if birthday has occurred this year
            if (currentDate.getMonth() < birthDate.getMonth() ||
                (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
            ) {
                age--;
            }

            return age;
        }
    },
}
</script>

<style lang="scss">

</style>
