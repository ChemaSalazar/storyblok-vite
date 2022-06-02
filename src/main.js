import { createApp } from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from "vue-router";
import Home from "./pages/Home.vue"
import Contact from "./pages/Contact.vue"
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
//Import components
import Grid from "./components/Grid.vue";
import Page from "./components/Page.vue";
import Teaser from "./components/Teaser.vue";
import Feature from "./components/Feature.vue";
import Image from "./components/Image.vue";
import ImageGallery from "./components/ImageGallery.vue";
import PageTitle from "./components/PageTitle.vue";
import MainMenu from "./components/MainMenu.vue";
import Link from "./components/Link.vue";
import Paragraph from "./components/Paragraph.vue";
//Import config
import { storyBlokAccessToken } from '../storyblokaccess';
const app = createApp(App)

const routes = [
    {path: '/', component: Home},
    {path: '/contact', component: Contact},

]

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes,
})
//Load the components
app.component("Grid", Grid);
app.component("Page", Page);
app.component("Teaser", Teaser);
app.component("Feature", Feature);
app.component("Image", Image);
app.component("ImageGallery", ImageGallery);
app.component("PageTitle", PageTitle);
app.component("MainMenu", MainMenu);
app.component("Link", Link);
app.component("Paragraph", Paragraph);

app.use(StoryblokVue, {
    accessToken: storyBlokAccessToken,
    bridge: import.meta.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
    use: [apiPlugin],
});

app.use(router)

app.mount('#app')
