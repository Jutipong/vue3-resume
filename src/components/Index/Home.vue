<template>
  <div class="full-width window-height justify-between parallax">
    <q-parallax>
      <transition appear enter-active-class="animated fadeInDown">
        <div class="name">JUTIPONG SUBIN</div>
      </transition>
      <hr :style="$q.platform.is.desktop ? 'width: 350px;' : 'width: 80%;'" />
      <transition appear enter-active-class="animated fadeInUp">
        <div class="full_stack">Full-Stack Developer</div>
      </transition>
    </q-parallax>
  </div>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
@import "../../css/constants.scss";

.parallax {
  // background-image: url("../../assets/img/bg.jpg");
  background-image: url("../../assets/img/bg.webp");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.name {
  font-size: 2.2rem;
  padding: 2px 10px;
  text-align: center;
  text-transform: uppercase;
  color: whitesmoke;
}

.full_stack {
  font-size: 1.6rem;
  text-align: center;
  margin: 5px auto;
  color: whitesmoke;
}

hr {
  border: 1px solid whitesmoke;
}
// }

// @media (min-width: #{map-get($breakpoints, small)}) {
//   .name_h {
//     .wrapper-name {
//       width: 55%;
//     }
//     .name {
//       font-size: 2.2rem;
//       padding: 4% 8%;
//     }
//     p {
//       font-size: 1.6rem;
//     }
//   }
// }
// @media (min-width: #{map-get($breakpoints, medium)}) {
//   .name_h {
//     .wrapper-name {
//       width: 450px;
//     }
//     .name {
//       font-size: 2.4rem;
//       padding: 4% 10%;
//     }
//     p {
//       font-size: 1.6rem;
//     }
//   }
// }
// @media only screen and (max-device-width: 1024px) {
//   .parallax {
//     background-attachment: scroll;
//   }
// }
</style>









<!-- <template> -->
  <!-- <v-layout column justify-center align-center class="mt-4 pt-2"> -->
  <!-- <VueCompareImage
      class="hidden-md-and-down"
      hover
      :style="{ minWidth: '1300px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    />
    <VueCompareImage
      class="hidden-lg-and-up"
      hover
      :style="{ maxWidth: '400px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage2"
      :rightImage="rightImage2"
      :sliderPositionPercentage="sliderPosition"
  />-->

  <!-- <br /> -->

  <!-- <vue-typer class="headline" :repeat="0" text="Eldin Zaimovic"></vue-typer> -->
  <!-- <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
  ></vue-typer>-->
  <!-- <br /> -->
  <!-- <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <span>About</span>
              <span class="green--text">Me</span>
            </h3>
            <div>
              <p>
                Hello! I’m Eldin Zaimovic. I'm a front-end developer who
                is passionate about
                <span
                  class="green--text font-weight-bold"
                >VUE</span>, building great user experiences,
                fighting for simplicity over complexity and constantly learning.
                When I'm not coding or making videos, you'll find me traveling across Europe.
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outline
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outline
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-flex>-->
  <!-- </v-layout> -->
<!-- </template> -->

<!-- <script> -->
<!-- // import { VueTyper } from "vue-typer";
// // import VueCompareImage from "vue-compare-image";

// export default {
//   metaInfo: {
//     title: "Home",
//     titleTemplate: "%s ← Eldin's Space",
//     meta: [
//       // { name: "viewport", content: "width=device-width, initial-scale=1" },
//       // { name: "description", content: "Eldin Zaimovic's Portfolio" },
//       // { charset: "utf-8" },
//       // { property: "og:title", content: "Eldin' Space" },
//       // { property: "og:site_name", content: "Eldin' Space" },
//       // { property: "og:type", content: "website" },
//       // { property: "og:url", content: "https://eldin.space" },
//       // {
//       //   property: "og:image",
//       //   content: "https://i.imgur.com/Dcz2PGx.jpg"
//       // },
//       // { property: "og:description", content: "Eldin Zaimovic's Portfolio" }
//     ]
//   },
//   components: {
//     'vue-typer': VueTyper
//     // VueCompareImage
//   },
//   data() {
//     return {
//       icons: [
//         // { href: "https://github.com/EldinZaimovic", icon: "fab fa-github" },
//         // {
//         //   href: "https://stackoverflow.com/users/story/9660700",
//         //   icon: "fab fa-stack-overflow"
//         // },
//         // { href: "https://twitter.com/EldinMatricar", icon: "fab fa-twitter" },
//         // {
//         //   href: "https://www.linkedin.com/in/eldin-zaimovic",
//         //   icon: "fab fa-linkedin-in"
//         // },
//         // {
//         //   href: "https://www.xing.com/profile/Eldin_Zaimovic?sc_o=mxb_p",
//         //   icon: "fab fa-xing"
//         // },
//         // {
//         //   href: "https://www.facebook.com/EldinVasVoli",
//         //   icon: "fab fa-facebook-f"
//         // },
//         // { href: "https://www.instagram.com/matricar", icon: "fab fa-instagram" }
//       ],
//       // text1: ["Front-End Developer", "Web Developer", "Web Designer"],
//       // leftImage: "https://i.imgur.com/bU50uS9.jpg",
//       // rightImage: "https://i.imgur.com/z3ZoEEw.jpg",
//       // leftImage2: "https://i.imgur.com/SXBitjh.jpg",
//       // rightImage2: "https://i.imgur.com/Dcz2PGx.jpg",
//       sliderLine: 0,
//       hSize: 0,
//       sliderPosition: 0.5
//     };
//   }
// }; -->
<!-- </script> -->


<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: green;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: green;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
</style>

