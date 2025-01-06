<script setup>
import { RouterLink, RouterView } from "vue-router";
import Logo from "./components/icons/Logo.vue";
import NavBar from "./components/NavBar.vue";
import ThemeIcon from "./components/ThemeIcon.vue";
</script>

<template>
  <main id="container">
    <div class="mrging">
      <header>
        <Logo />
        <NavBar />
        <ThemeIcon />
      </header>

    <RouterView />
    </div>
  </main>
</template>

<style scoped>
.mrging {
  padding: 0 0 0 150px;
  width: 100%;
  height: 100%;
}
header {
  height: 100vh;
  display: flex;
  padding: 20px 0;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 80px;
  transform: translate(-50%, -50%);
  z-index: 1000000;
}

@media (min-width: 1024px) {
}
</style>
