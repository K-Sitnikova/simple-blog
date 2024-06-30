<script setup lang="ts" async>
import {useStore} from "~/store/posts";

definePageMeta({
  layout: 'desktop-default'
})

const store = useStore();
const posts = computed(() => store.posts);
await useAsyncData(() => store.loadPostsList());

</script>

<template>
  <NuxtLayout>
    <div class="main">
      <h1 class="main__title">Добро пожаловать в мой мини-блог</h1>
      <p class="main__text">Здесь я буду публиковать статьи и маленькие заметки обо всем</p>
    </div>
    <section class="body">
      <nuxt-link v-for="item in posts" key="id" :to="`/article/${item.id}`">
        <Card :title="item.title" :tags="item.tags"/>
      </nuxt-link>
    </section>
  </NuxtLayout>
</template>

<style lang="postcss" scoped>
  .main {
    max-width: 848px;
    text-align: left;
    margin-top: 150px;
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 6.2rem;
    &__title {
      font-size: 5.7rem;
      margin-bottom: 115px;
    }
    &__text {
      font-size: 2.2rem;
    }
  }

  .body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 4.6rem;
    margin-bottom: 6.2rem;
  }
</style>