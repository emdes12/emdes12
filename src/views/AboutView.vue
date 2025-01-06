<template>
  <main>
    <h1><span>about</span> me</h1>
    <div class="skills-list">
      <div class="skills">
        <h3>Frontend Engineer</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          dolores, quis at quaerat enim ad, doloribus maxime eos aliquam qui
          omnis voluptatibus temporibus quod dolor in quasi consequatur
          praesentium voluptate.
        </p>
      </div>
      
      <div class="skills">
        <h3>Graphics Designer</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          dolores, quis at quaerat enim ad, doloribus maxime eos aliquam qui
          omnis voluptatibus temporibus quod dolor in quasi consequatur
          praesentium voluptate.
        </p>
      </div>
      
      <div class="skills">
        <h3>Digital Marketing</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          dolores, quis at quaerat enim ad, doloribus maxime eos aliquam qui
          omnis voluptatibus temporibus quod dolor in quasi consequatur
          praesentium voluptate.
        </p>
      </div>
      
      <div class="skills">
        <h3>Funnel Designer/Builder</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          dolores, quis at quaerat enim ad, doloribus maxime eos aliquam qui
          omnis voluptatibus temporibus quod dolor in quasi consequatur
          praesentium voluptate.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 50px 0;
  justify-content: center;
}

h1 span {
  font: inherit;
  color: var(--vt-yellow);
}

h1 {
  text-align: center;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
}

.skills {
  display: flex;
  flex-direction: column;
  flex: 1 1 350px;
  padding: 15px;
  background-color: var(--vt-ash);
  color: var(--vt-grey);
}

h3 {
  color: var(--theme-bg);
  height: 58px;
  overflow: hidden;
  padding-bottom: 5px;
  border-bottom: 1px solid ;
}

span {
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: var(--vt-ash);
}

p {
  height: 100px;
  overflow: hidden;
  color: #ccc;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 121.12%;
}

@media (min-width: 1024px) {
}
</style>
