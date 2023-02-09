<template>
  <div class="other-projects">
      <div class="wrapper">
          <h2>View my other Case Studies</h2>
          <router-link to="/pages/planeatary.html" v-if="this.currentProject != 1">
            <div class="project">
                    <img :src="'/images/planeatary/planeatary.png'">
                    <div class="text">
                        <h3>Creating the app Planeatary for a sustainable and healthy diet in everyday life</h3>
                        <p>Planeatary is a mobile app designed to support users to follow a healthy and environmentally friendly diet.</p>
                    </div>
            </div>
          </router-link>

          <router-link to="/pages/cookie-notices.html" v-if="this.currentProject != 2">
            <div class="project">
                    <img :src="'/images/cookie-notices/cookie-notices.png'">
                    <div class="text">
                        <h3>The usability of Cookie Notices — Eye-tracking study</h3>
                        <p>I conducted an eye-tracking study to investigate the usability of common types of cookie notices, and designed a prototype for better usability. </p>
                    </div>
            </div>
          </router-link>

            <router-link to="/pages/spotify-audiobooks.html" v-if="this.currentProject != 3">
              <div class="project">
                      <img :src="'/images/spotify-audiobooks/audiobooks.png'">
                      <div class="text">
                          <h3>Redesigning Spotify with audiobook listeners in mind</h3>
                          <p>I used Design Thinking to empathize with audiobook listeners and create a prototype to integrate audiobooks into Spotify.</p>
                      </div>
              </div>
            </router-link>

      </div>
  </div>
</template>

<script>
export default {
  name: 'OtherProjects',

  props: {
    currentProject: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@import '~styles/colors';
@import '~styles/fonts';

.other-projects {

    h2 {
        margin-top: 48px;
    }

    .project {
        display: flex;
        border: 1px solid color(black_25);
        margin-top: 24px;

        img {
            width: 30%;
            height: 30%;
            margin: 0;
        }

        h3 {
            padding-top: 0;
        }

        .text {
            padding-left: 24px;
            padding-right: 48px;
            margin-top: auto;
            margin-bottom: auto;

            p {
                color: color(black);
                font-weight: lighter;
                font-size: 16px;
            }
        }

        &:hover, &:focus {
            border: 1px solid color(color);
            background: color(color_hover);

            h3 {
                text-decoration: underline solid color(color_hover);
            }

            p {
                text-decoration: underline solid color(color_hover);
            }
        }

        @media screen and (max-width: 1000px) {
          display: block;

          img {
              width: 100%;
              height: 100%;
          }

          .text {
              padding: 24px;
          }
        }
    }
}

</style>
