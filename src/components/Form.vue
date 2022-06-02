<template>
  <div v-editable="blok">
    <h2>{{ blok.title }}</h2>
  </div>
  <div v-editable="blok" class="flex py-8 mb-6">
    <div v-for="blok in blok.fields" :key="blok._uid" class="flex-auto px-6">
      <StoryblokComponent :blok="blok" />
    </div>
  </div>
 <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" v-editable="blok">
    <span>{{ blok.submit }}</span>
 </button>
</template>


<script setup>

defineProps({ blok: Object })
</script>