<template>
  <div class="navbar">
      <div class="col-left">
          <router-link to="/" class="navbar-header">
              <p class="title-navbar">Eva Katharina Wolf</p>
              <p class="job-navbar">Product Designer</p>
          </router-link>
      </div>
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

  %a {
    display: block;
    font-family: font(roboto);
    font-weight: lighter;
    font-size: 16px;
    color: black;
  }

.navbar-header {

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

      &:hover, &:focus {
          .title-navbar {
              font-weight: bold;
              text-decoration: underline solid color(white);
          }

          .job-navbar {
              font-weight: normal;
              text-decoration: underline solid color(white);
          }
      }
  }

  .navbar {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    align-content: center;
    background: #fff;
    border-bottom: 1px solid color(black_25);
    position: sticky;
    top: 0;

    nav {

      ul {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
          padding: 0;
          display: block;
          position: relative;

          &:hover ul {
            display: block;
          }

          a {
            @extend %a;
            padding: 16px 8px 16px 8px;
          }

          ul {
            display: none;
            position: absolute;
            top: 50px;
            left: 0;

            background-color: #fff;
            min-width: 130px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

            li a {
              padding: {
                left: 16px;
                right: 16px;
                top: 8px;
                bottom: 8px;
              }
            }
          }
        }
      }
    }


    .col-left {
      width: 50%;
      padding-left: 128px;

      @media screen and (max-width: 800px) {
          padding-left: 64px;
      }

      @media screen and (max-width: 600px) {
        padding-left: 64px;
        width: 90%;
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
        list-style-type: none;
        margin: 0;
        padding: 0;

        li {
          display: block;
          padding: 0;

          a {
            @extend %a;
            padding: 12px;
          }
        }
      }
    }

    .col-right-mobile {
        display: none;
        width: 10%;
        justify-content: flex-end;
        padding-right: 64px;

        @media screen and (max-width: 600px) {
          display:flex;
        }

        ul {
            display: block;
            position: absolute;
            z-index: 100;
            top: 65px;
            right: 0px;

            background-color: #fff;
            min-width: 240px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
            padding-top: 16px;
            padding-bottom: 16px;

            li {
                text-align: right;
                padding-right: 64px;
                list-style-type: none;
            }

            a {
                font-weight: lighter;
            }

            &.hide {
                display: none;
            }
        }

        a.fa {

            &:hover, &:focus {
                color: color(color);
                text-decoration: none;
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
            .burger-menu-line {
                background: color(color);
            }
        }
    }
  }
</style>
