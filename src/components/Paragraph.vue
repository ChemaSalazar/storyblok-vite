<template>
  <div v-editable="blok" class="py-8 mb-6 text-left">
    {{ blok.body }}
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>