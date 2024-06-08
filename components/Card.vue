<script setup lang="ts">

</script>

<template>
  <div class="card">
    <div class="card__image">
      <img class="card__image-item"  src="https://img.freepik.com/free-photo/lovely-pet-portrait-isolated_23-2149192347.jpg?t=st=1717842397~exp=1717845997~hmac=928b5f937b8233ef3db377f304c29a1a2f9bcdb54907eb6bde2791cf26c906ac&w=740" alt="">
    </div>
    <h2 class="card__title">Статья</h2>
    <p class="card__description">Описание статьи</p>
  </div>
</template>

<style scoped lang="postcss">
  .card {
    margin-bottom: 1.3rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    &__image {
      flex: 0 0 33.33%;
      position: relative;
      min-height: 19.5rem;
      max-height: 20rem;
      max-width: 19.5rem;
      border-radius: .4rem;
      -webkit-box-shadow: 1.3rem -0.8rem 1.3rem 0 #dda21c;
      -moz-box-shadow: 1.3rem -0.8rem 1.3rem 0 #dda21c;
      box-shadow: 1.3rem -0.8rem 1.3rem 0 #dda21c;
        &-item {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          top: 0;
          left: 0;
          border-radius: .4rem;
          transition: 1s;
          &:hover {
            transform: scale(1.1);
          }
        }
    }
  }
</style>