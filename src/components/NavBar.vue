<script setup>
import RouteIcon from './RouteIcon.vue'
import HomeIcon from '../assets/icons/home_icon (1).svg'
import HomeIcon2 from '../assets/icons/home_icon (2).svg'
import AboutIcon from '../assets/icons/user_icon (1).svg'
import AboutIcon2 from '../assets/icons/user_icon (2).svg'
import ProjectIcon from '../assets/icons/project_icon (1).svg'
import ProjectIcon2 from '../assets/icons/project_icon (2).svg'
import ContactIcon from '../assets/icons/inbox_icon (1).svg'
import ContactIcon2 from '../assets/icons/inbox_icon (2).svg'
import BlogIcon from '../assets/icons/blog_icon (1).svg'
import BlogIcon2 from '../assets/icons/blog_icon (2).svg'

</script>
<template>
    <nav class="menulist">
        <RouteIcon txt="Home" link="/" :src1="HomeIcon" :src2="HomeIcon2" />
        <RouteIcon txt="About" link="/about" :src1="AboutIcon" :src2="AboutIcon2" />
        <RouteIcon txt="Project" link="/project" :src1="ProjectIcon" :src2="ProjectIcon2" />
        <RouteIcon txt="Contact" link="/contact" :src1="ContactIcon" :src2="ContactIcon2" />
        <RouteIcon txt="Blog" link="/blog" :src1="BlogIcon" :src2="BlogIcon2" />
    </nav>
</template>
<style scoped>
.menulist {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 25px;
}
</style>