<template>
  <div class="page-header">
      <h1 style="display: none;">About Me: Eva Katharina Wolf</h1>
      <div class="text">
          <h2 class="page-title">A little bit about myself</h2>
          <!--<p>Iʼm Eva, a {{ this.age }} year old UX Designer and Researcher from Germany. Iʼm a creative outside-the-box thinker and passionate for Design Thinking. Living in the beautiful city of Copenhagen, I’m currently completing my Masterʼs degree in Information Studies at the <router-link to="/pages/company/aalborg-university.html">University of Aalborg</router-link>. Between my masterʼs and bachelorʼs degrees, I gained professional experience as a Product Designer at a Fintech company for several years. I believe in lifelong learning and love to improve myself and to dive into new challenges and opportunities.</p>-->
          <p>Iʼm Eva, a {{ this.age }} year old aspiring front-end developer from Germany. Iʼm passionate about user-centered development and a creative outside-the-box thinker. My background lies in Human-computer-interaction (B.Sc. and M.Sc.), where I learned many skills in computer science, development and psychology. Additionally, I gained professional experience as a Product Designer at a Fintech and a Pharma company for several years.</p>
          <p>Living in the beautiful city of Copenhagen, I’m currently looking for positions as a front-end developer. I believe in lifelong learning and love to improve myself and to dive into new challenges and opportunities.</p>
          <p>Outside the office, I enjoy spending time in nature or at the gym, and learning Danish. Creativity is also a big part of my free time, I have been an <router-link to="/pages/play.html">amateur photographer</router-link> for many years and enjoy pottery and painting.</p>
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
