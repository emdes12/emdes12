<script setup>
import Button from "../components/Button.vue";
import Arrow from "../assets/icons/arrow_icon.svg";
</script>

<template>
  <img src="../assets/icons/homeshape.svg" alt="rect" class="right-bg" />
  <main>
    <div class="herodiv">
      <h1>I'm <span>Alawiye Muritala</span></h1>
      <h2>Front end Developer</h2>
      <p>
        I'm passionate about crafting innovative web solutions and driving results for
        businesses.
      </p>
      <Button txt="Hire Me" link="/contact" :icon="Arrow" />
    </div>
    <img src="../assets/images/me.png" alt="Alawiye-Muritala" class="herodiv me" />
  </main>
</template>

<style scoped>
template {
  padding: 30px;
}
.right-bg {
  position: absolute;
  height: 100%;
  bottom: 0%;
  right: 0%;
  z-index: -230;
}

.herodiv {
  display: flex;
  flex-direction: column;
  flex: 1 1 300px;
}

h1 {
  color: var(--vt-yellow);
  margin-bottom: 10px;
}

h1 span {
  position: relative;
  font: inherit;
}

h1 span::before {
  content: "";
  width: 100%;
  height: 5px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -10;
}

h2,
p {
  margin-bottom: 30px;
}

main {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  gap: 30px;
}

img {
  max-width: 500px;
  width: 80%;
}

@media (max-width: 980px) {
  .right-bg {
    display: none;
  }

  main {
    align-items: flex-start;
    height: fit-content;
    justify-content: center;
    padding-bottom: 30px;
  }

  img {
    width: 50%;
  }

  h2,
  p {
    margin-bottom: 15px;
  }
}
</style>
