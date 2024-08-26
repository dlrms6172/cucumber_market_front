<template>
  <header-view></header-view>
  <main>
    <section class="fleamarket-cover">
      <div class="cover-content">
        <h1 class="cover-title">믿을만한<br>이웃 간 중고거래</h1>
        <span class="cover-description">동네 주민들과 가깝고 따뜻한 거래를<br>지금 경험해보세요.</span>
        <div class="cover-image">
        <span class="fleamarket-cover-image">
          <img
              srcset="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/fleamarket-39d1db152a4769a6071f587fa9320b254085d726a06f61d544728b9ab3bd940a.webp "
              alt="믿을만한 이웃 간 중고거래"
              src="/images/UsedTradeView/fleamarket-39d1db152a4769a6071f587fa9320b254085d726a06f61d544728b9ab3bd940a.webp">
        </span>
          <span class="fleamarket-cover-image-mobile">
          <img
              srcset="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/mobile/3x/fleamarket-1caf5c24c82acb20bd86fa8c018987be7812a1f0ce0858dcf175568bfc3cf87d.webp 3x"
              alt="믿을만한 이웃 간 중고거래"
              src="/images/UsedTradeView/fleamarket-1caf5c24c82acb20bd86fa8c018987be7812a1f0ce0858dcf175568bfc3cf87d.webp">
        </span>
        </div>
      </div>
    </section>
    <section class="fleamarket-article-list">
      <h1 class="text-center article-list-title">
        중고거래 인기매물
      </h1>

      <div class="cards-wrap">
        <article class="card-top" v-for="item in items" :key="item.id">
          <a class="card-link" :href="item.link">
            <div class="card-photo">
              <img :alt="item.title" :src="item.image">
            </div>
            <div class="card-desc">
              <h2 class="card-title">{{ item.product_name }}</h2>
              <div class="card-price">{{ item.price }}</div>
              <div class="card-region-name">{{ item.region }}</div>
              <div class="card-counts">
                <span>관심 {{ item.likes }}</span> ∙ <span>채팅 {{ item.chats }}</span>
              </div>
            </div>
          </a>
        </article>
      </div>

      <div class="text-center article-list-more">
        <a class="text-bold text-black text-m" id="hot-articles-more" data-url="/hot_articles">인기매물 더 보기</a>
      </div>
    </section>

    <section class="fleamarket-keywords background-gray">
      <h3 class="keywords-title">
        <a class="text-m text-bold text-black " href="https://www.daangn.com/top_keywords">중고거래 인기검색어</a>
      </h3>
      <ul class="keywords-list">
        <li class="keyword-item text-m">
          <a class="keyword-link" rel="nosublink" href="https://www.daangn.com/search/%EB%82%98%EB%88%94">나눔</a>
        </li>
        <li class="keyword-item text-m">
          <a class="keyword-link" rel="nosublink"
             href="https://www.daangn.com/search/%EC%97%90%EC%96%B4%EC%BB%A8">에어컨</a>
        </li>
        <li class="keyword-item text-m">
          <a class="keyword-link" rel="nosublink"
             href="https://www.daangn.com/search/%EB%83%89%EC%9E%A5%EA%B3%A0">냉장고</a>
        </li>
        <li class="keyword-item text-m">
          <a class="keyword-link" rel="nosublink"
             href="https://www.daangn.com/search/%ED%9D%A0%EB%BB%91%EC%87%BC">흠뻑쇼</a>
        </li>
        <li class="keyword-item text-m">
          <a class="keyword-link" rel="nosublink"
             href="https://www.daangn.com/search/%EC%9E%90%EC%A0%84%EA%B1%B0">자전거</a>
        </li>
        <li class="keyword-item text-m">
          <a class="keyword-link" rel="nosublink"
             href="https://www.daangn.com/search/%EC%A0%9C%EC%8A%B5%EA%B8%B0">제습기</a>
        </li>
        <li class="keyword-item text-m">
          <a class="keyword-link" rel="nosublink"
             href="https://www.daangn.com/search/%EC%82%BC%EC%84%B1%EB%9D%BC%EC%9D%B4%EC%98%A8%EC%A6%88">삼성라이온즈</a>
        </li>
        <li class="keyword-item text-m">
          <a class="keyword-link" rel="nosublink" href="https://www.daangn.com/search/%ED%95%9C%ED%99%94">한화</a>
        </li>
        <li class="keyword-item text-m">
          <a class="keyword-link" rel="nosublink"
             href="https://www.daangn.com/search/%EC%BB%B4%ED%93%A8%ED%84%B0">컴퓨터</a>
        </li>
        <li class="keyword-item text-m">
          <a class="keyword-link" rel="nosublink" href="https://www.daangn.com/search/%EC%B1%85%EC%83%81">책상</a>
        </li>
      </ul>
    </section>
  </main>
  <footer-view></footer-view>
</template>
<script>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import FooterView from "@/components/FooterComp.vue";
import HeaderView from "@/components/HeaderComp.vue";

export default {
  name: 'UsedTradeView',
  components: {HeaderView, FooterView},
  setup() {
    const items = ref([]);

    const fetchItems = async () => {
      try {
        const response = await axios.get('https://76e400ec-6988-4d48-b158-a38a21a4df51.mock.pstmn.io/list'); // TODO. 포스트맨 api 실 uri로 수정필요
        items.value = response.data;
      } catch (error) {
        console.error("Failed to fetch items with axios:", error);
      }
    };

    onMounted(fetchItems);

    return {
      items
    };
  }
}
</script>
<style>
@media (min-width: 768px) {
  .fleamarket-cover {
    height: 315px;
    padding: 0 16px 0 16px;
  }
}

.fleamarket-cover .cover-content {
  position: relative;
  height: 100%;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .cover-content {
    padding-top: 50px;
    max-width: 768px;
    margin: 0 auto;
  }
}

* {
  padding: 0;
  margin: 0;
  outline: none;
}

h1, h2, h3, h4, h5, h5 {
  font-weight: 700;
  line-height: 1.5;
}

@media (min-width: 768px) {
  .cover-title {
    line-height: 1.5;
    font-size: 34px;
    letter-spacing: -0.32px;
  }
}

@media (min-width: 768px) {
  .cover-description {
    line-height: 1.32;
    font-size: 18px;
    letter-spacing: -0.18px;
    margin-top: 16px;
    display: block;
  }
}

.fleamarket-cover .cover-content .cover-image {
  position: absolute;
  bottom: 0;
  display: flex;
}

@media (min-width: 768px) {
  .cover-image {
    right: 0;
    height: 315px;
    width: 416px;
  }
}

.fleamarket-cover .cover-content .cover-image span {
  box-sizing: border-box;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@media (min-width: 768px) {
  .cover-image .fleamarket-cover-image {
    display: block;
  }
}

.fleamarket-cover .cover-content .cover-image span img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
  margin: auto;
  width: 0;
  height: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

@media (min-width: 768px) {
  .cover-image .fleamarket-cover-image img {
    display: block;
  }
}

.fleamarket-cover {
  background-color: #FFF1AA;
}

section, article, aside, footer, header, nav, hgroup {
  display: block;
}

@media (min-width: 768px) {
  .fleamarket-article-list {
    padding-top: 64px;
  }
}

@media (min-width: 768px) {
  .fleamarket-article-list .article-list-title {
    font-size: 32px;
    line-height: 43.2px;
  }
}

.text-center {
  text-align: center;
}

@media (min-width: 768px) {
  .fleamarket-article-list .cards-wrap {
    margin-top: 40px;
    width: 757px;
  }
}

.cards-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .fleamarket-article-list .cards-wrap .card-top, .fleamarket-article-list .cards-wrap .card {
    width: 223px;
    margin-bottom: 56px;
  }
}

.cards-wrap .card-link {
  text-decoration: none;
  color: #212529;
}

@media (min-width: 768px) {
  .fleamarket-article-list .cards-wrap .card-top .card-photo, .fleamarket-article-list .cards-wrap .card .card-photo {
    width: 100%;
    padding-top: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    background-color: #F8F9FA;
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
  }
}

@media (min-width: 768px) {
  .fleamarket-article-list .cards-wrap .card-top .card-photo img, .fleamarket-article-list .cards-wrap .card .card-photo img {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    border-radius: 12px;
    border: 1px solid transparent;
  }
}

@media (min-width: 768px) {
  .fleamarket-article-list .cards-wrap .card-top .card-desc, .fleamarket-article-list .cards-wrap .card .card-desc {
    margin-top: 12px;
  }
}

@media (min-width: 768px) {
  .fleamarket-article-list .cards-wrap .card-top .card-desc .card-title, .fleamarket-article-list .cards-wrap .card .card-desc .card-title {
    font-size: 16px;
    letter-spacing: -0.02px;
    color: #212529;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 4px;
    line-height: 1.5;
    font-weight: normal;
  }
}

@media (min-width: 768px) {
  .fleamarket-article-list .cards-wrap .card-top .card-desc .card-price, .fleamarket-article-list .cards-wrap .card .card-desc .card-price {
    font-size: 15px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 4px;
  }
}

@media (min-width: 768px) {
  .fleamarket-article-list .cards-wrap .card-top .card-desc .card-region-name, .fleamarket-article-list .cards-wrap .card .card-desc .card-region-name {
    font-size: 13px;
    color: #212529;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 4px;
    line-height: 1.5;
  }
}

@media (min-width: 768px) {
  .fleamarket-article-list .cards-wrap .card-top .card-desc .card-counts, .fleamarket-article-list .cards-wrap .card .card-desc .card-counts {
    color: #868e96;
    font-size: 13px;
  }
}

@media (min-width: 768px) {
  .fleamarket-article-list .article-list-more {
    padding-bottom: 80px;
  }
}

@media (min-width: 768px) {
  .fleamarket-article-list .article-list-more a {
    text-decoration: underline;
    cursor: pointer;
  }
}

.text-m {
  font-size: 1.6rem !important;
  line-height: 1.5;
  letter-spacing: -0.3px;
}

.text-black {
  color: #212529;
}

.text-bold {
  font-weight: bold;
}

@media (min-width: 768px) {
  .fleamarket-keywords {
    width: 100%;
    display: flex;
    height: 104px;
  }
}

.background-gray {
  background-color: #F8F9FA;
}

@media (min-width: 768px) {
  .fleamarket-keywords .keywords-title {
    margin: auto 40px auto auto;
  }
}

h3 {
  font-size: 1.6rem;
}

@media (min-width: 768px) {
  .fleamarket-keywords .keywords-list {
    margin: auto auto auto 0;
  }
}

ul {
  list-style-type: disc;
}

@media (min-width: 768px) {
  .fleamarket-keywords .keywords-list .keyword-item {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1.6rem;
  }
}

@media (min-width: 768px) {
  .fleamarket-keywords .keywords-list .keyword-item .keyword-link {
    text-decoration: none;
    color: #212529;
  }
}

img {
  overflow-clip-margin: content-box;
  overflow: clip;
}
</style>
