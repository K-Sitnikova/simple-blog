<script setup lang="ts">

</script>

<template>
  <div class="header">
    <ul class="header__menu">
      <li class="header__menu-item">Главная</li>
      <li class="header__menu-item">Статьи</li>
      <li class="header__menu-item">Контакты</li>
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
      grid-template-columns: repeat(3, fit-content(50px));
      &-item {
        justify-self: center;
        margin: 0 40px;
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
</style>