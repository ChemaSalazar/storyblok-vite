<template>
  <div v-editable="blok" class="py-8 mb-6 font-bold text-center">
    <img :src='blok.image.filename' :alt='blok.image.alt'>
    <span
        v-if='blok.hide_title==false'
        :class='blok.title_size'
    >{{ blok.image.title }}</span>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>