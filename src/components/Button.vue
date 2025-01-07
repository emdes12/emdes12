<script setup>
import { useLink } from "vue-router";

defineProps({
  icon: {
    type: String,
    require: true,
  },
  txt: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: false,
  },
});
</script>

<template>
  <RouterLink :to="link">
    <button>
      {{ txt }}
      <div class="btnimg">
        <img :src="icon" alt="btn-icon" />
      </div>
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

.btnimg {
  background: var(--vt-yellow);
  border-radius: 50%;
  position: absolute;
  border: 1px solid var(--vt-yellow);
  right: 0;
  top: 0;
  width: 48.75px;
  height: 48.75px;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 30px;
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
