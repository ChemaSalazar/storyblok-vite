<template>
  <div v-editable="blok" class="py-8 mb-6 text-5xl font-bold text-center">
    {{ blok.title }}
  </div>
  <div v-editable="blok" class="flex py-8 mb-6">
    <div v-for="blok in blok.links" :key="blok._uid" class="flex-auto px-6">
      <StoryblokComponent :blok="blok" />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>