<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const props = defineProps({
  src1: {
    type: String,
    required: true,
  },
  src2: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: true,
  },
  txt: {
    type: String,
    required: false,
  },
});

const clsNm = ref("yes");
const route = useRoute();

const getPath = () => {
  const ptNm = route.path;
  if (ptNm === props.link) {
    clsNm.value = "active";
  } else {
    clsNm.value = "yes";
  }
};

// Update the class whenever the route changes
watch(
  () => route.path,
  () => {
    getPath();
  }
);

// Run the logic on component load
getPath();
</script>

<template>
  <RouterLink :to="link">
    <div @click="getPath" :class="`circle ${clsNm}`">
      <img :src="src1" class="src1" /><img :src="src2" class="src2" />
      <p>{{ txt }}</p>
    </div></RouterLink
  >
</template>

<style scoped>
.circle {
  padding: 10px;
  background: var(--vt-ash);
  border-radius: 25px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--vt-white);
  width: fit-content;
}

img {
  width: 30px;
}

.circle:hover,
.circle.active {
  background: var(--vt-yellow);
}

p {
  display: none;
}

.circle:hover p {
  display: block;
}

.src2 {
  display: none;
}

.circle:hover img.src2,
.circle.active img.src2 {
  display: block;
}

.circle:hover img.src1,
.circle.active img.src1 {
  display: none;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
