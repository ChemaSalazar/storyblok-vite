<template>
  <div v-editable="blok" class="py-8 mb-6 text-left">
    <h3 v-if="blok.title">{{ blok.title }}</h3>
    {{ blok.body }}
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>