<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ""
    },
    tags: {
      type: Array,
      default: []
    }
  })
</script>

<template>
  <div class="card">
      <div class="card__image">
        <img class="card__image-item"  src="/assets/img/humster.svg" alt="">
      </div>
      <h2 class="card__title">{{title}}</h2>
      <p class="card__description" v-for="tag in tags" key="id">{{tag}}</p>
  </div>
</template>

<style scoped lang="postcss">
  .card {
    margin-bottom: 4rem;
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
      background-color: #c5d954;
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
            -webkit-box-shadow: 1.3rem -0.8rem 1.3rem 0 #1c32dd;
            -moz-box-shadow: 1.3rem -0.8rem 1.3rem 0 #1c32dd;
            box-shadow: 1.3rem -0.8rem 1.3rem 0 #1c32dd;
          }
        }
    }
    &__title {
      transition: 1s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
</style>