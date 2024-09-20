<!--<template>-->
<!--  <div class="business-detail">-->
<!--    &lt;!&ndash; 이미지 슬라이더 &ndash;&gt;-->
<!--    <swiper :slides-per-view="1" :space-between="10" class="image-slider">-->
<!--      <swiper-slide v-for="(image, index) in images" :key="index">-->
<!--        <img :src="image.url" :alt="'Image ' + (index + 1)" />-->
<!--      </swiper-slide>-->
<!--      <swiper-pagination></swiper-pagination>-->
<!--    </swiper>-->

<!--    &lt;!&ndash; 업체 정보 &ndash;&gt;-->
<!--    <div class="company-info">-->
<!--      <img class="company-logo" src="path/to/logo.jpg" alt="Company Logo" />-->
<!--      <h1>{{ companyName }}</h1>-->
<!--      <button class="favorite-button">단골맺기</button>-->
<!--    </div>-->

<!--    &lt;!&ndash; 액션 버튼 &ndash;&gt;-->
<!--    <div class="actions">-->
<!--      <button>전화문의</button>-->
<!--      <button>채팅문의</button>-->
<!--      <button>후기작성</button>-->
<!--    </div>-->

<!--    &lt;!&ndash; 탭과 동적 컨텐츠 &ndash;&gt;-->
<!--    <div>-->
<!--      <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{ tab }}</button>-->
<!--      <div v-if="currentTab === 'Home'">홈 컨텐츠</div>-->
<!--      <div v-else-if="currentTab === 'News'">소식</div>-->
<!--      <div v-else-if="currentTab === 'Products'">상품</div>-->
<!--      <div v-else-if="currentTab === 'Reviews'">후기</div>-->
<!--    </div>-->

<!--    &lt;!&ndash; 지도 &ndash;&gt;-->
<!--    <div class="map-view">-->
<!--      &lt;!&ndash; 지도 컴포넌트 삽입 위치 &ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { ref } from 'vue';-->
<!--import { Swiper, SwiperSlide, SwiperPagination } from 'swiper/vue';-->
<!--import 'swiper/swiper-bundle.css';-->

<!--export default {-->
<!--  components: {-->
<!--    Swiper,-->
<!--    SwiperSlide,-->
<!--    SwiperPagination-->
<!--  },-->
<!--  setup() {-->
<!--    const images = ref([-->
<!--      { url: 'path/to/image1.jpg' },-->
<!--      { url: 'path/to/image2.jpg' }-->
<!--    ]);-->
<!--    const companyName = ref('업체명');-->
<!--    const tabs = ref(['Home', 'News', 'Products', 'Reviews']);-->
<!--    const currentTab = ref('Home');-->

<!--    return {-->
<!--      images,-->
<!--      companyName,-->
<!--      tabs,-->
<!--      currentTab-->
<!--    };-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--.business-detail {-->
<!--  text-align: center;-->
<!--}-->
<!--.image-slider {-->
<!--  margin-bottom: 20px;-->
<!--}-->
<!--.company-logo {-->
<!--  width: 50px;-->
<!--  height: 50px;-->
<!--  border-radius: 50%;-->
<!--}-->
<!--.favorite-button {-->
<!--  background-color: orange;-->
<!--  color: white;-->
<!--  border: none;-->
<!--  padding: 10px 20px;-->
<!--}-->
<!--.actions button {-->
<!--  margin-right: 10px;-->
<!--}-->
<!--</style>-->
