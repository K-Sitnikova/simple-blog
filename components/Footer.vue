<script setup lang="ts">

</script>

<template>
  <div class="footer">
    <ul class="footer__list">
      <li class="footer__list-item">Мой github</li>
      <li class="footer__list-item">Мой ТГ</li>
    </ul>
  </div>
</template>

<style scoped lang="postcss">
  .footer {
    display: grid;
    align-self: end;
    margin: 0 auto;
    padding: 20px;
    &__list {
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-columns: repeat(3, fit-content(160px));
      &-item {
        justify-self: center;
        margin: 0 40px;
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
</style>