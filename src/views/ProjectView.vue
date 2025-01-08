<script setup>
import data from "../../data.js";

const projectData = data.data;
</script>
<template>
  <main>
    <h1>My <span>Portfolio</span></h1>
    <div>
      <div>
        <h2>Websites</h2>
        <ul class="cont">
          <li
            class="herodiv"
            v-for="(website, index) in projectData.website"
            :key="index"
          >
            <img :src="website.imageURL" alt="{{ website.name }} Image" />
            <h3>{{ website.name }}</h3>
            <p>{{ website.desc }}</p>
            <p>
              Tech Stack: <b>{{ website.stack }}</b>
            </p>
            <span>
              <a :href="website.link" target="_blank" rel="noopener noreferrer"
                >Live Site</a
              >
              <a :href="website.githubLink" target="_blank" rel="noopener noreferrer"
                >Github Repo</a
              >
            </span>
          </li>
        </ul>

        <h2>Logos</h2>
        <ul class="cont">
          <li class="herodiv" v-for="(logo, index) in projectData.logo" :key="index">
            <img :src="logo.imageURL" alt="{{ logo.name }} Logo" />
            <h3>{{ logo.name }}</h3>
            <p>{{ logo.desc }}</p>
            <p>
              Designed with: <b>{{ logo.stack }}</b>
            </p>
            <span>
              <a :href="logo.link" target="_blank" rel="noopener noreferrer"
                >View Full Image</a
              >
            </span>
          </li>
        </ul>

        <h2>Flyers</h2>
        <ul class="cont">
          <li class="herodiv" v-for="(flyer, index) in projectData.flyer" :key="index">
            <img :src="flyer.imageURL" alt="{{ flyer.name }} Flyer" />
            <h3>{{ flyer.name }}</h3>
            <p>{{ flyer.desc }}</p>
            <p>
              Designed with: <b>{{ flyer.stack }}</b>
            </p>
            <span>
              <a :href="flyer.link" target="_blank" rel="noopener noreferrer"
                >View Full Image</a
              >
            </span>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
  color: var(--vt-yellow);
}

h3 {
  color: var(--vt-yellow);
}

main {
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 50px 0;
  justify-content: center;
}

.cont {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}

h1 span {
  font: inherit;
  color: var(--vt-yellow);
}

h1 {
  text-align: center;
}

.herodiv {
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1 1 300px;
  background-color: var(--vt-grey-2);
  padding: 20px;
}

img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: top center;
}

.herodiv p {
  height: 65px;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.herodiv span {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
}

@media (min-width: 850px) {
}
</style>
