# Vue.js 상품 목록 및 찜하기 기능 프로젝트

## 📌 프로젝트 소개

Vue.js로 구현된 상품 목록 및 찜하기 기능을 가진 웹 애플리케이션입니다. 사용자는 상품 목록에서 각 상품의 정보를 확인하고, 찜하기 버튼을 통해 즐겨찾기에 추가할 수 있습니다.

## 🚀 설치 및 실행 방법

1. 프로젝트 클론

```bash
git clone [your-repo-url]
```

2. 프로젝트 디렉토리로 이동

```bash
cd [your-project-directory]
```

3. 의존성 설치

```bash
npm install
```

4. 개발 서버 실행

```bash
npm run serve
```

## 📌 주요 기능

* 홈(Home), 상품 목록(Products), 찜하기(Favorite) 페이지 제공
* 상품 목록 페이지에서 상품 정보 확인 및 즐겨찾기(찜하기) 기능
* 즐겨찾기 페이지에서 즐겨찾기한 상품 확인
* Vuex Store를 사용하여 상태 관리 (찜하기 기능)
* 상품의 즐겨찾기 상태에 따라 UI 동적 변경

## 📂 디렉토리 구조

```
src/
├── assets/            # 상품 이미지 파일
├── components/        # ProductDetail 컴포넌트
├── stores/            # Vuex store (productList, isFavorite 관리)
├── views/             # Home, Products, Favorite 페이지
└── router/            # Vue Router 설정
```

## ⚙️ 기술적 구현 설명

* 각 상품은 store의 productList 배열로 관리되며, ProductDetail 컴포넌트로 렌더링됩니다.
* isFavorite 상태는 Vuex store에서 관리되며, actions를 통해 토글할 수 있습니다.
* getters를 사용하여 찜한 상품 개수를 계산하고, App.vue에서 Favorite 메뉴에 표시합니다.
* Favorite 페이지에서는 찜한 상품만 필터링하여 보여줍니다.
