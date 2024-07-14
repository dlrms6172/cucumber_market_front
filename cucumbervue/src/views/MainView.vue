<template>
  <div id="app">
    <header-view></header-view>

    <div>
      <section class="intro">
        <h1>당신 근처의 지역 생활 커뮤니티</h1>
        <p>동네라서 가능한 모든 것, 당근에서 가까운 이웃과 함께해요.</p>
      </section>
      <section class="features">
        <div class="feature">
          <h2>믿을만한 이웃 간 중고거래</h2>
          <p>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</p>
        </div>
        <div class="feature">
          <h2>이웃만 아는 동네 정보와 이야기</h2>
          <p>우리동네의 다양한 정보와 이야기를 공감과 댓글로 나누어요.</p>
        </div>
      </section>
    </div>
    <footer-view></footer-view>
  </div>
</template>

<script>
import { ref } from 'vue'
import HeaderView from '@/views/HeaderView.vue'
import FooterView from '@/views/FooterView.vue'

export default {
  name: 'MainView',
  components: {FooterView, HeaderView},
  setup() {
    const state = ref({
      message: 'Hello Vue 3!'
    });


    return {
      state
    };
  }
}
</script>

<style scoped>
header, footer {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

.feature {
  margin-top: 20px;
}

.intro, .features {
  text-align: center;
}
</style>
