<template>
  <div v-editable="blok">
    <h2>{{ blok.title }}</h2>
  </div>
  <!-- <div v-editable="blok" class="flex py-8 mb-6">
    <div v-for="blok in blok.images" :key="blok._uid" class="flex-auto px-6">
      <StoryblokComponent :blok="blok" />
    </div>
  </div> -->
 <button class="button" type="button" v-editable="blok">
    <span>{{ blok.submit }}</span>
 </button>
</template>


<script setup>

defineProps({ blok: Object })
</script>