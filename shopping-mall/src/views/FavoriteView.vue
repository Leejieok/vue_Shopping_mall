<template>
	<div>
		<!-- <h1>장바구니 페이지</h1> -->
		<div class="container">
		  <div class="content">
			<div class="left">
			  <!-- 왼쪽 콘텐츠 -->
			  <hr>
			  <input type="checkbox" name="" id="product">
			  <label for="product">전체선택</label>
			  <hr>
			  <p>Favorite</p>
			  <div class="flexproduct" v-for="product in store.favoriteList" :key="product.name">
				  <input type="checkbox" name="" id="product">
				  <img :src="product.imagePath" alt="" width="85px" height="114px">
				    <div class="productInfo">
					  <p>{{product.name}}</p>
					  <p>{{product.price}}</p>
					  <p>- 오늘도착 : 지금 결제 시 내일 도착</p>
					  <p>[옵션:레드/S]</p>
					  <div class="quantityControl">
						<button class="quantityBtn">-</button>
						<span class="quantityValue">1</span>
						<button class="quantityBtn">+</button>
					  </div>
					</div>
				</div>
				<hr>
			</div>
			<div class="right">
			  <!-- 오른쪽 콘텐츠 -->
			  <h3>총 상품 금액</h3>
			  <p>총 금액 내용 여기에 표시</p>
			  <img src="../assets/contents/price.png" alt="">
			</div>
		  </div>
		</div>
	</div>
</template>

<script setup>
	import { useProductStore } from '@/stores/products.js'

	const store = useProductStore()
	// console.log(store.favoriteList)
</script>

<style scoped>
 	body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .container {
      display: flex;
      justify-content: center;
      padding: 20px;
      min-height: 100vh;
      background-color: #f5f5f5;
    }

    .content {
      display: flex;
      gap: 20px;
      max-width: 1200px;
      width: 100%;
    }

    .left {
      flex: 2;
      background-color: white;
      padding: 20px;
    }

    .right {
      flex: 1;
      background-color: white;
      padding: 20px;
    }

	.flexproduct {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		margin: 30px
	}

	.productInfo {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 114px;
	}
	.productInfo p {
		margin: 0;
		}

	.quantityControl {
	display: flex;
	align-items: center;
	gap: 5px;
	}

	.quantityBtn {
	width: 30px;
	height: 30px;
	background-color: #f3f3f3;
	border: 1px solid #ddd;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	line-height: 1;
	border-radius: 5px;
	}

	.quantityValue {
	min-width: 30px;
	text-align: center;
	}

</style>