<script setup>
defineProps({
  icon : {
    type: String,
    require: true,
  },
  txt : {
    type: String,
    require: true,
  }
})
</script>

<template>
  <RouterLink :to="link">
    <button>
      {{ txt }}
      <img :src="icon" alt="btn-icon">
      <span></span>
    </button>
  </RouterLink>
</template>

<style scoped>
button {
  position: relative;
  color: var(--vt-ash);
  font-family: Inter;
  font-size: 22px;
  padding: 10px 60px 10px 30px;
  border: 1px solid var(--vt-yellow);
  background-color: transparent;
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
}

img {
  background: var(--vt-yellow);
  border-radius: 50%;
  position: absolute;
  border: 1px solid var(--vt-yellow);
  right: 0;
  top: 0;
  height: 100%;
}

span {
  content: "";
  position: absolute;
  border: 1px solid var(--vt-yellow);
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
  background: var(--vt-yellow);
  z-index: -5;
}

button:hover {
  color: var(--vt-white);
}

button:hover span {
  left: 0;
}
</style>
