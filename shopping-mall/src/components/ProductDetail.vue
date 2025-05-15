<template>
	<div class="card mx-3 mb-3" style="width: 18rem;">
		<img :src="product.imagePath" class="card-img-top" height="386px" alt="...">
		<div class="card-body">
			<h5 class="card-title">{{product.name}}</h5>
			<p class="card-text price">
				{{ product.price }}원
				<span @click="toggleFavorite" :class="{'favorite': product.isFavorite}">
					{{ product.isFavorite ? '🖤' : '🤍' }}
				</span>
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import {useProductStore} from '@/stores/products'
const props = defineProps({
	product: Object
})
const store = useProductStore()

const isFavorite = computed({
  get: () => props.product.isFavorite,
  set: (value) => {
    store.updateFavorite(props.product.name, value);
  }
});

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};
</script>

<style scoped>
.price {
  display: inline-flex;
  align-items: center;
  gap: 5px; /* 가격과 하트 사이 간격 */
}

.favorite {
  cursor: pointer;
}
</style>