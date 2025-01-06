<script setup>
const className = "circle";
let theme = "light";

const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

const toggleTheme = () => {
      theme = theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', theme); // Save theme preference
      document.documentElement.setAttribute('data-theme', theme);
}


</script>

<template>
  <div @click="toggleTheme" :class="className">
    <img src="../assets/icons/theme_icon.svg" class="src1"/>
  </div>
</template>

<style scoped>
.circle {
  width: 50px;
  height: 50px;
  background: var(--theme-bg);
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.circle:hover, .circle.active{
    background: var(--vt-yellow);
}
</style>
