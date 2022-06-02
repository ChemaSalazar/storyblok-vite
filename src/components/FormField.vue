<template>
  <label :for='blok.name'>{{ blok.name }}</label>
  <div v-if="blok.field_type=='text-area'">
    <textarea :name='blok.name' class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
  </div>
  <div v-else>
  <input :type='blok.field_type' v-editable="blok" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :name='blok.name'>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>