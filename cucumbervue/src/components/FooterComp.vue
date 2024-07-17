<template>
  <footer class="footer">
    <div class="grid-section">
      <!-- 3x5 그리드 메뉴 -->
      <div class="grid-menu">
        <button class="text-button" @click="navigate('secondhand')">중고거래</button>
        <button class="text-button" @click="navigate('business')">당근 비즈니스</button>
        <button class="text-button" @click="navigate('faq')">자주 묻는 질문</button>
        <button class="text-button" @click="navigate('neighborhood')">동네업체</button>
        <button class="text-button" @click="navigate('chat')">채팅하기</button>
        <button class="text-button" @click="navigate('company')">회사 소개</button>
        <button class="text-button" @click="navigate('jobs')">당근알바</button>
        <button class="text-button" @click="navigate('recruitment')">인재 채용</button>
        <button class="text-button" @click="navigate('realEstate')">부동산</button>
        <button class="text-button" @click="navigate('cars')">중고차 직거래</button>
      </div>
    </div>
    <div class="download-section">
      <p class="download-text">당근 앱 다운로드</p>
      <button class="icon-button" @click="navigate('appstore')">App Store</button>
      <button class="icon-button" @click="navigate('googleplay')">Google Play</button>
    </div>
    <hr>
    <div class="info-section">
      <div class="company-info">
        <p>대표 김용현 | 사업자번호 375-87-00088</p>
        <p>통신판매업 신고번호 J1200020200016</p>
        <p>서울특별시 성북구 성북로 12J1200020200016</p>
        <p>전화 1544-9996 | 이메일 cs@daangnservice.com</p>
      </div>
      <div class="social-links">
        <button class="icon-button" @click="navigate('facebook')">Facebook</button>
        <button class="icon-button" @click="navigate('instagram')">Instagram</button>
        <button class="icon-button" @click="navigate('youtube')">YouTube</button>
      </div>
    </div>
  </footer>
</template>

<script setup>
function navigate(link) {
  console.log(`Navigating to ${link}`);
}
</script>

<style scoped>
.footer {
  padding: 20px;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

.grid-section, .info-section {
  display: flex;
  justify-content: space-between;
}

.grid-menu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.icon-button {
  background-color: #ccc;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.icon-button:hover {
  background-color: #ddd;
}

.text-button {
  background-color: transparent;
  color: black;
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
}

.text-button:hover {
  background-color: #eee;
}

.download-section {
  text-align: center;
}

.download-text {
  font-weight: bold;
  margin-bottom: 10px;
}

hr {
  border-top: 1px solid #e0e0e0;
  margin: 20px 0;
}

.social-links {
  display: flex;
  gap: 10px;
}

.company-info p {
  color: #666;
  font-size: 12px;
}
</style>
