<template>
  <main>
    <h1><span>about</span> me</h1>
    <div class="skills-list">
      <div class="skills">
        <h3>Frontend Engineer</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores, quis
          at quaerat enim ad, doloribus maxime eos aliquam qui omnis voluptatibus
          temporibus quod dolor in quasi consequatur praesentium voluptate.
        </p>
      </div>

      <div class="skills">
        <h3>Graphics Designer</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores, quis
          at quaerat enim ad, doloribus maxime eos aliquam qui omnis voluptatibus
          temporibus quod dolor in quasi consequatur praesentium voluptate.
        </p>
      </div>

      <div class="skills">
        <h3>Digital Marketing</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores, quis
          at quaerat enim ad, doloribus maxime eos aliquam qui omnis voluptatibus
          temporibus quod dolor in quasi consequatur praesentium voluptate.
        </p>
      </div>

      <div class="skills">
        <h3>Funnel Designer/Builder</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolores, quis
          at quaerat enim ad, doloribus maxime eos aliquam qui omnis voluptatibus
          temporibus quod dolor in quasi consequatur praesentium voluptate.
        </p>
      </div>
    </div>

    <div class="tools">
      <h4>skills</h4>

      <div class="tools-list">
        <div class="tool-circle">
          <div class="level-circle">
            <div class="im-circle">
              <img class="img-th-light" src="../assets/icons/html.svg" alt="" /><img
                class="img-th-dark"
                src="../assets/icons/html2.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="tool-circle">
          <div class="level-circle">
            <div class="im-circle">
              <img class="img-th-light" src="../assets/icons/css.svg" alt="" /><img
                class="img-th-dark"
                src="../assets/icons/css2.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="tool-circle">
          <div class="level-circle">
            <div class="im-circle">
              <img class="img-th-light" src="../assets/icons/js.svg" alt="" /><img
                class="img-th-dark"
                src="../assets/icons/js2.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="tool-circle">
          <div class="level-circle">
            <div class="im-circle">
              <img class="img-th-light" src="../assets/icons/github.svg" alt="" /><img
                class="img-th-dark"
                src="../assets/icons/github2.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="tool-circle">
          <div class="level-circle">
            <div class="im-circle">
              <img class="img-th-light" src="../assets/icons/firebase.svg" alt="" /><img
                class="img-th-dark"
                src="../assets/icons/firebase2.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="tool-circle">
          <div class="level-circle">
            <div class="im-circle">
              <img class="img-th-light" src="../assets/icons/ts.svg" alt="" /><img
                class="img-th-dark"
                src="../assets/icons/ts2.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="tool-circle">
          <div class="level-circle">
            <div class="im-circle">
              <img class="img-th-light" src="../assets/icons/tailwind.svg" alt="" /><img
                class="img-th-dark"
                src="../assets/icons/tailwind2.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="tool-circle">
          <div class="level-circle">
            <div class="im-circle">
              <img class="img-th-light" src="../assets/icons/vue.svg" alt="" /><img
                class="img-th-dark"
                src="../assets/icons/vue2.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="tool-circle">
          <div class="level-circle">
            <div class="im-circle">
              <img class="img-th-light" src="../assets/icons/node.svg" alt="" /><img
                class="img-th-dark"
                src="../assets/icons/node2.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="tool-circle">
          <div class="level-circle">
            <div class="im-circle">
              <img class="img-th-light" src="../assets/icons/cdr.svg" alt="" /><img
                class="img-th-dark"
                src="../assets/icons/cdr2.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="tool-circle">
          <div class="level-circle">
            <div class="im-circle">
              <img class="img-th-light" src="../assets/icons/seo.svg" alt="" /><img
                class="img-th-dark"
                src="../assets/icons/seo2.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.tools {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 30px;
}

h4 {
  text-transform: uppercase;
}

.tools-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.tool-circle {
  background-color: var(--vt-ash);
  border-radius: 50%;
}

.img-th-dark {
  display: none;
}

.level-circle {
  width: 260px;
  height: 260px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background-color: var(--vt-yellow);
  clip-path: 0% 0%, 0% 100%, 100% 100%, 100% 50%, 50% 50%, 100% 100%;
}

.im-circle {
  width: 230px;
  height: 230px;
  background-color: var(--vt-ash);
  padding: 20px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

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
  overflow: hidden;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--vt-grey);
}

im-circle img {
  width: 75%;
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
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 121.12%;
}

@media (min-width: 1024px) {
}

@media (prefers-color-scheme: dark) {
}
</style>
