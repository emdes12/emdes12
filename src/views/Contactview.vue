<script setup>
import RouteIcon from "../components/RouteIcon.vue";
import FacebookIcon from "../assets/icons/facebook.svg";
import GithubIcon from "../assets/icons/github.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import Button from "../components/Button.vue";
import SendIcon from "../assets/icons/send.svg";
import { ref } from "vue";
import emailjs from "emailjs-com";

const messageSenderName = ref("");
const messageSenderEmail = ref("");
const messageContent = ref("");

const messageData = ref({
  name: "",
  email_add: "",
  message: "",
});

const formCOntroler = () => {
  // console.log(messageSenderName.value, messageSenderEmail.value, messageContent.value);
  console.log(messageData);
  const serviceID = "service_huxuawf"; // Replace with your EmailJS Service ID
  const templateID = "template_emdrnzf"; // Replace with your EmailJS Template ID
  const userID = "fe6kZOI9B-mOF96Gs"; // Replace with your EmailJS User ID

  emailjs.send(serviceID, templateID, messageData.value, userID).then(
    (response) => {
      alert("Email sent successfully!");
      // Reset the form after sending
      messageData.value = { name: "", email_add: "", message: "" };
    },
    (error) => {
      // this.errorMessage = "Failed to send email. Please try again.";
      console.error(error);
    }
  );
};
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
          <RouteIcon link="/facebook" :src1="FacebookIcon" :src2="FacebookIcon" />
          <RouteIcon link="/github" :src1="GithubIcon" :src2="GithubIcon" />
          <RouteIcon link="/linkedin" :src1="LinkedinIcon" :src2="LinkedinIcon" />
        </div>
      </div>

      <form @submit.prevent="formCOntroler">
        <input
          type="text"
          name="full-name"
          v-model="messageData.name"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email-address"
          v-model="messageData.email_add"
          placeholder="Email"
        />
        <textarea name="message" v-model="messageData.message">Your message</textarea>
        <button type="submit">
          Send Message
          <div class="btnimg">
            <img :src="SendIcon" alt="btn-icon" />
          </div>
          <span class="btn-span"></span>
        </button>
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
  height: 48.75px;
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

.btn-span {
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

button:hover .btn-span {
  left: 0;
}

@media (max-width: 850px) {
  button {
    font-size: 1rem;
  }
}
</style>
