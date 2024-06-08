<script setup lang="ts">
defineProps({
  value: {
    type: String,
    default: 'button'
  }
})
</script>

<template>
  <button class="button">{{value}}</button>
</template>

<style scoped lang="postcss">
  .button {
    background-color: #1c32dd;
    border-radius: 4px;
    padding: .5rem 1.5rem;
    border-color: transparent;
    cursor: pointer;
    color: #36e4da;
    margin: 25px 0;
    &:hover {
      -webkit-box-shadow: .5rem -0.4rem 1.3rem 0 #dda21c;
      -moz-box-shadow: .5rem -0.4rem 1.3rem 0 #dda21c;
      box-shadow: .5rem -0.4rem 1.3rem 0 #dda21c;
    }
  }
</style>