<template>
  <footer>
    <div class="footer-content">
      <div class="footer-links">
        <a href="#">중고거래</a>
        <a href="#">당근비즈니스</a>
        <a href="#">자주 묻는 질문</a>
        <a href="#">동네업체</a>
        <a href="#">채팅하기</a>
        <a href="#">회사 소개</a>
        <a href="#">당근알바</a>
        <a href="#">인재 채용</a>
        <a href="#">부동산</a>
        <a href="#">중고차 직거래</a>
        <a href="#">제휴 문의</a>
        <a href="#">광고 문의</a>
        <a href="#">PR 문의</a>
        <a href="#">IR 문의</a>
        <a href="#">이용약관</a>
        <a href="#">개인정보처리방침</a>
        <a href="#">운영정책</a>
        <a href="#">위치기반서비스 이용약관</a>
        <a href="#">이용자보호 비전과 계획</a>
        <a href="#">청소년보호정책</a>
      </div>
      <div class="footer-icons">
        <a href="https://www.facebook.com"><img src="" alt="Facebook" /></a>
        <a href="https://www.instagram.com"><img src="" alt="Instagram" /></a>
        <a href="https://www.twitter.com"><img src="" alt="Twitter" /></a>
      </div>
      <div class="footer-apps">
        <a href="https://apps.apple.com/app"><img src="" alt="App Store" /></a>
        <a href="https://play.google.com/store"><img src="" alt="Google Play" /></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterView'
}
</script>

<style scoped>
footer {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}

.footer-links a, .footer-icons a, .footer-apps a {
  padding: 0 10px;
  color: #000;
  text-decoration: none;
}

.footer-icons img, .footer-apps img {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
</style>
