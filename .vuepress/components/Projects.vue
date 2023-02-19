<template>
  <div class="projects">
      <div class="wrapper">
          <h2>My UX Case Studies</h2>

          <router-link to="/pages/planeatary.html">
            <div class="project first">
                    <img :src="'/images/planeatary/planeatary.png'" alt="">
                    <div class="text">
                        <h3>Creating the app Planeatary for a sustainable and healthy diet in everyday life</h3>
                        <p>Planeatary is a mobile app designed to support users to follow a healthy and environmentally friendly diet.</p>
                    </div>
            </div>
          </router-link>

          <router-link to="/pages/cookie-notices.html">
            <div class="project">
                    <img :src="'/images/cookie-notices/cookie-notices.png'" alt="">
                    <div class="text">
                        <h3>The usability of Cookie Notices — Eye-tracking study</h3>
                        <p>I conducted an eye-tracking study to investigate the usability of common types of cookie notices, and designed a prototype for better usability. </p>
                    </div>
            </div>
          </router-link>

            <router-link to="/pages/spotify-audiobooks.html">
              <div class="project last">
                      <img :src="'/images/spotify-audiobooks/audiobooks.png'" alt="">
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
</script>

<style lang="scss">
@import '~styles/colors';
@import '~styles/fonts';

.projects {

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

        &:hover {
            border: 1px solid color(color);
            background: color(color_hover);

            h3, p {
                text-decoration: underline solid color(color_hover);
            }
        }

        @media screen and (max-width: 1000px) {
          display: block;
          border-radius: 0px 0px 0px 26px;

          img {
              width: 100%;
              height: 100%;
          }

          .text {
              padding: 24px;
          }
        }

    }

    .first {
        border-top-right-radius: 26px;

        @media screen and (max-width: 1000px) {
            border-top-right-radius: 0px;
        }
    }

    .last {
        border-bottom-right-radius: 26px;

        @media screen and (max-width: 1000px) {
            border-bottom-right-radius: 0px;
        }
    }

}

</style>
