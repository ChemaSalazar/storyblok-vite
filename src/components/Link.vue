<template>
  <div v-editable="blok" class="py-8 mb-6 text-5md font-bold text-center">
    <a :href='blok.url.cached_url'> {{ blok.name }}</a>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>