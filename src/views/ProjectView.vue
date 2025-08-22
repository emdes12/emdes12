<script setup>
import data from "./data.js";
import Web1 from "@/assets/images/rcrmweb.png"
import Web2 from "@/assets/images/rpweb.png"
import Web3 from "@/assets/images/peweb.png"
import Web4 from "@/assets/images/web(4).png"
import Logo1 from "@/assets/images/logo(1).jpg"
import Logo2 from "@/assets/images/logo(4).jpg"
import Logo3 from "@/assets/images/logo(3).jpg"
import Logo4 from "@/assets/images/logo(2).jpg"
import Flyer1 from "@/assets/images/flyer(1).png"
import Flyer2 from "@/assets/images/flyer(2).jpg"
import Flyer3 from "@/assets/images/flyer(3).jpg"

const projectData = {
        website : [
             {
                name: "Relate+ CRM",
                desc : 'A mini Customer Relationship Management Web App',
                imageURL : Web1,
                stack : "VUE.js | Firebase",
                link : "http://relateplus.netlify.app",
                githubLink : "http://github.com/emdes12/relateplus.git"
            },
            {
                name : "Ribdex Property",
                desc : 'A website build for Ribdex Global Concept Ltd for listing their available property',
                imageURL : Web2,
                stack : "HTML | Tailwind CSS | JS | Firebase",
                link : "http://new-ribdex-property.netlify.app",
                githubLink : "http://github.com/emdes12/ribdex-property.git"
            },
            {
                name : "PayEvi",
                desc : 'A Online Invoice Generator Web App',
                imageURL : Web3,
                stack : "VUE.js | Firebase",
                link : "http://payevi.vercel.app",
                githubLink : "http://github.com/emdes12/payevi.git"
            },
            {
                name : "Ribdex Global Concept Website",
                desc : 'Ribdex Global Concept Limited Website',
                imageURL : Web4,
                stack : "HTML | Tailwind CSS | JS",
                link : "http://ribdexglobal.netlify.app",
                githubLink : "http://github.com/emdes12/Ribdex-Real-Repo.git"
            },
        ],
        logo : [
            {
                name : "Relate+ CRM",
                desc : 'A mini Customer Relationship Management Web App',
                imageURL : Logo1,
                stack : "CorelDraw",
                link : "http://alawiye.netlify.appsrc/assets/images/logo(1).jpg",
            },
            {
                name : "Havan FX",
                desc : 'A Forex Trading Company into Investment and Training',
                imageURL : Logo2,
                stack : "CorelDraw",
                link : "http://alawiye.netlify.appsrc/assets/images/logo(4).jpg",
            },
            {
                name : "Osun Aseyori",
                desc : 'A Tradomedical Center',
                imageURL : Logo3,
                stack : "CorelDraw",
                link : "http://alawiye.netlify.appsrc/assets/images/logo(3).jpg",
            },
            {
                name : "Luke Ink Notary",
                desc : 'a mini Customer Relationship Management Web App',
                imageURL : Logo4,
                stack : "CorelDraw",
                link : "http://alawiye.netlify.appsrc/assets/images/logo(2).jpg",
            },
        ],
        flyer : [
            {
                name : "Al-Itqon Online Academy",
                desc : 'An online institue for learning Tajweed and Memorizing the Quran',
                imageURL : Flyer1,
                stack : "CorelDraw",
                link : "src/assets/images/flyer(1).png",
            },
            {
                name : "Siaat Cakes Training",
                desc : 'Ballon Class Training organized by Siaat Cakes and Party Planning',
                imageURL : Flyer2,
                stack : "CorelDraw",
                link : "src/assets/images/flyer(2).jpg",
            },
            {
                name : "Ribdex Property",
                desc : 'A property showcasing flyer',
                imageURL : Flyer3,
                stack : "CorelDraw",
                link : "src/assets/images/flyer(3).jpg",
            },
        ],
    };
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
            <img :src="website.imageURL" :alt="website.name + ` image`" />
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
            <img :src="logo.imageURL" :alt="logo.name +` Logo`" />
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
            <img :src="flyer.imageURL" :alt="flyer.name +` flyer`" />
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
  gap: 20px;
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

@media(max-width: 850px) {
  .herodiv {
    gap: 10px;
  }
}
</style>
