import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
    const products = ref([
      {
        name: "[20만장판매] [B-BASIC] 스탠다드 유넥 반팔티 (2SIZE)",
        imagePath: "src/assets/contents/list1.webp",
        price: 22000,
        isFavorite: true,
      },
      {
        name: "[1만장판매] [MADE] 디키든 버뮤다 오버핏 밴딩팬츠",
        imagePath: "src/assets/contents/list.webp",
        price: 32000,
        isFavorite: false,
      },
      {
        name: "[MADE] 로란트 도트 레이어드 랩스커트",
        imagePath: "src/assets/contents/list2.webp",
        price: 28000,
        isFavorite: true,
      },
      {
        name: "뎀쿠 라운드 니트 가디건",
        imagePath: "src/assets/contents/list.gif",
        price: 21000,
        isFavorite: false,
      },
    ]);

    const updateFavorite = function(selectedName) {
        const product = products.value.find((product) => product.name === selectedName);
        if (product) {
          product.isFavorite = !product.isFavorite
        }
    }

    const doneFavoriteCount = computed(() => {
      const Favorite = products.value.filter((product) => product.isFavorite);
      return Favorite.length;
    });
    
    const favoriteList = computed(() => {
      console.log(123);
      return products.value.filter((prod) => prod.isFavorite);
    });

    return {
      products,
      updateFavorite,
      doneFavoriteCount,
      favoriteList,
    };
})