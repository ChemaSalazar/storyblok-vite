<template>
  <div v-editable="blok">
    <h2>{{ blok.title }}</h2>
  </div>
  <!-- <div v-editable="blok" class="flex py-8 mb-6"> -->
  <div v-editable="blok" class="lg:columns-3 md:columns-2 sm:columns-1">
    <!-- <div v-for="blok in blok.images" :key="blok._uid" class="flex-auto px-6"> -->
    <div v-for="blok in blok.images" :key="blok._uid" class="">
      <StoryblokComponent :blok="blok" />
    </div>
  </div>
</template>


<script setup>

defineProps({ blok: Object })
</script>