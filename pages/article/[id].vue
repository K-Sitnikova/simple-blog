<script setup lang="ts" >
definePageMeta({
  layout: 'desktop-default'
})
const { id } = useRoute().params
const {data: post} = await useFetch(`https://dummyjson.com/posts/${id}`)
</script>

<template>
  <NuxtLayout>
    <div class="post">
      <h1 class="post__title">{{post.title}}</h1>
      <p class="post__text">{{post.body}}</p>
    </div>
    <nuxt-link to="/">
      <BaseButton :value="`НАЗАД`"/>
    </nuxt-link>
  </NuxtLayout>
</template>

<style scoped lang="postcss">
  .post {
    display: grid;
    grid-auto-rows: auto 1fr;
    background-color: #5dc9c4;
    padding: 20px;
    margin-top: 35px;
    border-radius: 6px;
    -webkit-box-shadow: .5rem -0.7rem 1.3rem 0 #dda21c;
    -moz-box-shadow: .5rem -0.7rem 1.3rem 0 #dda21c;
    box-shadow: .5rem -0.7rem 1.3rem 0 #dda21c;
    &__title {
      font-size: 30px;
    }
    &__text {
      font-size: 20px;
    }
  }
</style>