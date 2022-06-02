<template>

  <div v-editable="blok" class="px-12">
    <StoryblokComponent

        v-for="blok in blok.body"

        :blok="blok"

        :key="blok._uid"

    />

  </div>

  <div>
    <MainFooter></MainFooter>
  </div>

</template>



<script setup>
import MainFooter from './MainFooter.vue';

defineProps({ blok: Object })

</script>