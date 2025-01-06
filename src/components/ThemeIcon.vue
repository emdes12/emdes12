<script setup>
const className = "circle"
</script>

<template>
  <div :class="className">
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
}

.circle:hover, .circle.active{
    background: var(--vt-yellow);
}
</style>
