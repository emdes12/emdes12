<script setup>
import RouteIcon from "../components/RouteIcon.vue";
import FacebookIcon from "../assets/icons/facebook.svg";
import GithubIcon from "../assets/icons/github.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import Button from "../components/Button.vue";
import SendIcon from "../assets/icons/send.svg";
</script>
<template>
  <main>
    <h1>get in <span>touch</span></h1>
    <div class="cont">
      <div class="herodiv">
        <h2>Let's Talk</h2>
        <p>
          Do you have a gig for me, or you have a project you want to collaborations.
          <br />
          Feel free to get in touch with me. I am always open to discussing new projects,
          creative ideas or opportunities to be part of your visions.
        </p>
        <div class="deta">
          <div class="info-icon">
            <img src="../assets/icons/e-mail_icon.svg" alt="mail" />
          </div>
          <div class="info-detail">
            <p>Send an email</p>
            <span>naijabayz@gmail.com</span>
          </div>
        </div>
        <div class="deta">
          <div class="info-icon">
            <img src="../assets/icons/call-icon.svg" alt="call" />
          </div>
          <div class="info-detail">
            <p>Place a call through</p>
            <span>+2349059084617</span>
          </div>
        </div>
        <div class="social-icon">
          <RouteIcon link="./facebook" :src1="FacebookIcon" :src2="FacebookIcon" />
          <RouteIcon link="/github" :src1="GithubIcon" :src2="GithubIcon" />
          <RouteIcon link="/linkedin" :src1="LinkedinIcon" :src2="LinkedinIcon" />
        </div>
      </div>

      <form action="#">
        <input type="text" name="full-name" id="full-name" placeholder="Full Name" />
        <input type="email" name="email-address" id="email-address" placeholder="Email" />
        <textarea name="message" id="message">Your message</textarea>
        <Button :icon="SendIcon" txt="Send Message" />
      </form>
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

.deta {
  display: flex;
  align-items: center;

  gap: 10px;
}

.info-icon {
  padding: 10px;
  background: var(--vt-ash);
  display: flex;
  border-radius: 5px;
}

.info-icon img {
  width: 40px;
}

.info-detail {
  display: flex;
  flex-direction: column;
}

.info-detail p {
  padding: 0;
  margin: 0;
}

.info-detail span {
  font-weight: 700;
  color: var(--vt-grey);
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

.social-icon {
  display: flex;
  gap: 10px;
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
}

form {
  display: flex;
  gap: 10px;
  flex-direction: column;
  flex: 1 1 35px;
}

input,
textarea {
  border-radius: 25px;
  font: inherit;
  padding: 5px 29px;
  border: 2px solid var(--vt-yellow);
  background: transparent;
  width: 100%;
  color: var(--vt-ash);
}

textarea {
  height: 250px;
  color: inherit;
  font: inherit;
}

@media (min-width: 1024px) {
}
</style>
