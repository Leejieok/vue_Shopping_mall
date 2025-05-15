<template>
	<div>
		<div class="keyword-section">
			<h2>트렌드 키워드</h2>
			<p>참고하기 좋은 패션 트렌드를 확인해 보세요.</p>
			<div class="keyword-list">
				<button class="keyword-btn active">가디건</button>
				<button class="keyword-btn">나시</button>
				<button class="keyword-btn">부츠컷 팬츠</button>
				<button class="keyword-btn">반팔 티</button>
				<button class="keyword-btn">스트라이프</button>
				<button class="keyword-btn">와이드 팬츠</button>
			</div>
		</div>
		<div class="container d-flex flex-wrap">
		<ProductDetail
			v-for="product in store.products"
			:key="product.name"
			:product="product"
		/>
		</div>
	</div>
</template>

<script setup>
	import ProductDetail from '@/components/ProductDetail.vue'
	import { useProductStore } from '@/stores/products.js'

	const store = useProductStore()
</script>

<style scoped>
		/* .container{
			padding: 30px 15px;
		} */

    .keyword-section {
      text-align: center;
      padding: 40px;
    }

    .keyword-section h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .keyword-section p {
      font-size: 1rem;
      margin-bottom: 20px;
    }

    .keyword-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }

    .keyword-btn {
      padding: 8px 16px;
      font-size: 1rem;
      border: none;
      background-color: white;
      color: black;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      transition: background-color 0.3s, color 0.3s;
    }

    .keyword-btn.active {
      background-color: black;
      color: white;
      border: none;
    }

    .keyword-btn:hover {
      background-color: black;
      color: white;
    }
</style>