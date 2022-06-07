<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('portfolio', { version: 'draft' });
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>