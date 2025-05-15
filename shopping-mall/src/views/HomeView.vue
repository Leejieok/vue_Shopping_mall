<template>
	<div class="image-container">
		<img src="@/assets/contents/mainpic.jpg" alt="">
		<div class="overlay-text">
			<h1>2025 S/S LOOKBOOK</h1>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>
img {
  width: 100%;
  height: auto; /* 이미지 비율 유지 */
  display: block; /* 여백 제거 */
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  /* background-color: rgba(0, 0, 0, 0.5);  */
  padding: 10px 20px;
  border-radius: 8px;
  text-align: center;
  font-size: 42px;
}

</style>