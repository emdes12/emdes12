<script setup>
import { RouterLink, RouterView } from "vue-router";
import Logo from "./components/icons/Logo.vue";
import NavBar from "./components/NavBar.vue";
import ThemeIcon from "./components/ThemeIcon.vue";
import { ref } from "vue";

const showMenu = ref(false);

const showMenuBtn = () => {
  showMenu.value = !showMenu.value;
  console.log(showMenu.value);
};
</script>

<template>
  <main id="container">
    <div class="mrging">
      <header class="desktop">
        <Logo />
        <NavBar />
        <ThemeIcon />
      </header>

      <header class="mobile">
        <Logo />
        <div @click="showMenuBtn" class="menu-icon">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div v-if="showMenu" class="mobile-menu">
          <Logo @click="showMenuBtn" />
          <NavBar @click="showMenuBtn" />
          <ThemeIcon @click="showMenuBtn" />
        </div>
      </header>

      <RouterView />
    </div>
  </main>
</template>

<style scoped>
.menu-icon {
  width: 50px;
  height: 50px;
  padding: 10px;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.line {
  content: "";
  width: 100%;
  height: 1px;
  border: 3px solid var(--color-head-c);
}

.mrging {
  padding: 0 0 0 150px;
  width: 100%;
  height: 100%;
}

header {
  display: flex;
  padding: 20px 0;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
}

header.desktop {
  flex-direction: column;
  height: 100vh;
  top: 50%;
  left: 80px;
  transform: translate(-50%, -50%);
}

header.mobile {
  top: 0;
  left: 0;
  flex-direction: row;
  right: 0;
  width: 100%;
  display: none;
  background-color: var(--color-background);
}

.mobile-menu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 50px;
  position: absolute;
  height: 100vh;
  background: var(--color-background);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

@media (max-width: 850px) {
  header.desktop {
    display: none;
  }

  header.mobile {
    display: flex;
  }

  .mrging {
    padding: 80px 0 0 0;
  }
}
</style>
