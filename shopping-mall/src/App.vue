<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useProductStore } from './stores/products';

const store = useProductStore();
</script>

<template>
  <header>
    <nav class="navbar bg-body-tertiary">
      <a class="navbar-brand" href="#">
        <img src="@/assets/loogoo.svg" alt="Bootstrap">
      </a>
      <ul class="nav justify-content-end">
      <li class="nav-item">
        <RouterLink class="nav-link text-dark" to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link text-dark" to="/Products">Products</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link text-dark d-flex align-items-center gap-1" to="/Favorite">
          Favorite
          <span 
            v-if="store.doneFavoriteCount > 0"
            class="badge rounded-pill bg-danger">
            {{store.doneFavoriteCount}}
            <span class="visually-hidden">unread messages</span>
          </span>
        </RouterLink>
      </li>
      </ul>
    </nav>
    <RouterView />
  </header>
</template>

<style scoped>
.navbar {
  background-color: white;
  padding: 10px 20px;
}

.navbar img {
  height: 40px;
}

.text-dark {
  color: black !important;
}
</style>
