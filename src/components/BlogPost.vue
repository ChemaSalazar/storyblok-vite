<template>
  <div v-editable="blok" class="py-2">
    <img :src='blok.featured_image.filename'>
  </div>
  <div v-editable="blok" class="py-2">
    <h2>{{ blok.title }}</h2>
  </div>
    <div v-editable="blok" class="py-2">
    <span>By: {{ blok.author }}</span>
  </div>
    <div v-editable="blok" class="py-2">
    <span>{{ blok.date }}</span>
  </div>
  <div v-editable="blok" class="py-2">
    <p>{{ blok.content.content[0].content[0].text }}</p>
  </div>
  <div v-editable="blok" class="py-2">
    <span>{{ blok.tags }}</span>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>