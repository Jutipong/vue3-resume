<template>
  <div class="full-width window-height justify-between parallax">
    <q-parallax>
      <transition appear enter-active-class="animated fadeInDown">
        <div class="name" :style="$q.platform.is.desktop ? 'font-size: 2.2rem' : 'font-size: 2rem;'">Mr.JUTIPONG SUBIN</div>
      </transition>
      <hr :style="$q.platform.is.desktop ? 'width: 400px;' : 'width: 85%;'" />
      <transition appear enter-active-class="animated fadeInUp">
        <div class="full_stack">Full-Stack Developer</div>
      </transition>
    </q-parallax>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.parallax {
  background-image: url("../assets/img/bg.webp");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.name {
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
</style>


