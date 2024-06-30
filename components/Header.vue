<script setup lang="ts" async>
import {useStore} from "~/store/posts";



const store = useStore()
const post = computed(() => store.post)
await useAsyncData(() => store.loadPostById())


</script>

<template>
  <div class="header">
    <ul class="header__menu">
      <nuxt-link to="/">
        <li class="header__menu-item">Главная</li>
      </nuxt-link>
      <nuxt-link :to="`/article/${post?.id}`">
        <li class="header__menu-item">Случайная</li>
      </nuxt-link>
      <nuxt-link to="/contacts">
        <li class="header__menu-item">Контакты</li>
      </nuxt-link>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
  .header {
    margin: 0 auto;
    padding: 20px;
    &__menu {
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-columns: repeat(3, minmax(80px, 1fr));
      &-item {
        margin: 0 40px;
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
</style>