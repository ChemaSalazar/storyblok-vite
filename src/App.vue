<script setup>
import { RouterLink, RouterView } from "vue-router"
</script>


<template>
  <header>
    <div class="wrapper">
      <nav class="flex-auto px-6">
        <RouterLink class="p-3" to="/">Home</RouterLink>
        <RouterLink class="p-3" to="/blog">Blog</RouterLink>
        <RouterLink class="p-3" to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <Suspense>
    <RouterView />
  </Suspense>
</template>

<!-- <template>
 <Suspense>
   <template #default>
     <Page/>
   </template>

   <template #fallback>
     <div>Loading...</div>
   </template>

 </Suspense>
</template> -->

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  text-align: center;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    /*display: grid;*/
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
