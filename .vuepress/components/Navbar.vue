<template>
  <div class="navbar">
      <header class="col-left">
          <router-link to="/" class="navbar-header">
              <p class="title-navbar">Eva Katharina Wolf</p>
              <p class="job-navbar">Product Designer</p>
          </router-link>
      </header>
      <nav class="col-right">
          <ul>
              <li>
                  <router-link to="/pages/about.html">About</router-link>
              </li>
              <li>
                  <router-link to="/pages/work.html">Work</router-link>
              </li>
              <li>
                  <router-link to="/pages/play.html">Play</router-link>
              </li>
              <li>
                  <a href="https://medium.com/@evakatharinawolf" target="_blank">Blog</a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/eva-katharina-wolf-420b9a182/" target="_blank">LinkedIn</a>
              </li>
          </ul>
      </nav>
      <div class="col-right-mobile">
          <nav class="burger-menu" v-on:click="isOpen = !isOpen" v-on:keyup="isOpen = !isOpen" tabindex="0" alt="Menu">
              <div class="burger-menu-line"></div>
              <div class="burger-menu-line"></div>
              <div class="burger-menu-line"></div>
          </nav>
          <ul :class="[{hide: !isOpen}]">
            <li>
                <router-link to="/pages/about.html">About</router-link>
            </li>
            <li>
                <router-link to="/pages/work.html">Work</router-link>
            </li>
            <li>
                <router-link to="/pages/play.html">Play</router-link>
            </li>
            <li>
                <a href="https://medium.com/@evakatharinawolf" target="_blank">Blog</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/eva-katharina-wolf-420b9a182/" target="_blank">LinkedIn</a>
            </li>
          </ul>
          <div class="overlay" v-show="isOpen" v-on:click="isOpen = false"></div>
      </div>
  </div>
</template>

<script>
  export default {
      name: 'Navbar',

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

.navbar {
    display: flex;
    align-items: center;
    align-content: center;

    width: 100%;
    height: 64px;

    background-color: #fff;
    border-bottom: 1px solid color(color_light);

    position: sticky;
    top: 0;

    a {
        text-decoration: none;
        font-weight: lighter;

        &:hover, &:focus {
            text-decoration: underline solid color(color);
        }
    }

    .col-left {
        width: 50%;
        padding-left: 128px;

        @media screen and (max-width: 800px) {
            padding-left: 64px;
        }

        @media screen and (max-width: 600px) {
            width: 90%;
        }

        .title-navbar {
            color: color(black);
            font-size: 16px;
            padding: 0px;
            font-family: font(roboto);
            line-height: 1;
            font-weight: normal;
        }

        .job-navbar {
            color: color(black);
            font-size: 12px;
            padding: 0px;
            font-family: font(roboto);
            font-weight: lighter;
        }

        .navbar-header {
            text-decoration: none;

            &:hover, &:focus {
                .title-navbar {
                    font-weight: bold;
                }

                .job-navbar {
                    font-weight: normal;
                }
            }
        }

    }

    .col-right {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        padding-right: 128px;

        @media screen and (max-width: 800px) {
            padding-right: 64px;
        }

        @media screen and (max-width: 600px) {
            display:none;
        }

        ul {
            display: flex;
            margin: 0;
            padding: 0;

            li {
                display: block;
                padding: 12px;
            }

        }
    }

    .col-right-mobile {
        display: none;
        width: 10%;
        padding-right: 64px;

        @media screen and (max-width: 600px) {
            display:flex;
            justify-content: flex-end;
        }

        ul {
            display: block;

            position: absolute;
            z-index: 100;
            top: 65px;
            right: 0px;

            background-color: #fff;
            min-width: 200px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
            padding: 16px 0 16px 0;

            li {
                text-align: right;
                list-style-type: none;
                padding-right: 64px;
            }

            &.hide {
                display: none;
            }
        }

        .overlay {
            background: rgba(color(color_light), 0.2);
            width: 100%;
            height: 100%;
            top: 65px;
            left: 0;
            position: fixed;
            z-index: 99;
        }

        .burger-menu {
            width: 24px;
            height: 24px;

            .burger-menu-line {
                height: 2px;
                width: 80%;
                background: color(black);
                border-radius: 6px;

                &:first-child {
                    margin: 4px 0 4px 0;
                }

                &:last-child {
                    margin: 4px 0 4px 0;
                }
            }

            &:hover, &:focus {
                outline: none;

                .burger-menu-line {
                    background: color(color);
                }
            }
        }
    }
}

</style>
