<template>
  <div class="full-width window-height">
    <header class="header parallax">
      <div class="name">
        <div class="wrapper-name">
          <transition style="animation-duration: 6s" appear enter-active-class="animated fadeIn">
            <div class="namex">jutipong subinxx</div>
          </transition>
          <hr />
          <p class="line anim-typewriter">Full-Stack Developer</p>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
@import "../css/constants.scss";

.header {
  padding: 20px;
  background-color: map-get($colors, dark);
}

.parallax {
  background-image: url("../assets/img/bg.jpeg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.name {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  margin: 0 auto;
  z-index: 400;

  .wrapper-name {
    width: 320px;
  }

  .namex {
    font-size: 2.2rem;
    padding: 2px 10px;
    text-align: center;
    text-transform: uppercase;
    color: white;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
    margin: 5px auto;
    color: white;
    margin-top: 10px !important;
  }

  hr {
    border: 1px solid white;
  }
}

/*Animation*/
.line {
  position: relative;
  border-right: 2px solid white;
  white-space: nowrap;
  overflow: hidden;
}

.anim-typewriter {
  animation: typewriter 5s steps(30) 1s 1 normal both,
    blinkTextCursor 1000ms steps(30) infinite normal;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 10em;
  }
}

@keyframes blinkTextCursor {
  from {
    // border-right-color: white
  }
  to {
    border-right-color: transparent;
  }
}

@media (min-width: #{map-get($breakpoints, small)}) {
  .name {
    .wrapper-name {
      width: 55%;
    }
    .namex {
      font-size: 1.8rem;
      padding: 4% 8%;
    }
    p {
      font-size: 1.5rem;
    }
  }
}
@media (min-width: #{map-get($breakpoints, medium)}) {
  .name {
    .wrapper-name {
      width: 450px;
    }
    .namex {
      font-size: 2.2rem;
      padding: 4% 10%;
    }
    p {
      font-size: 1.5rem;
    }
  }
}
@media only screen and (max-device-width: 1024px) {
  .parallax {
    background-attachment: scroll;
  }
}
</style>