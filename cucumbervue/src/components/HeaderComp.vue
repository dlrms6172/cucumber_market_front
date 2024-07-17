<template>
  <header class="header">
    <div class="logo">
      <img src="/images/main/11.svg" alt="로고">
    </div>
    <nav class="navigation">
      <ul>
        <li v-for="item in menuItems" :key="item" :class="{ active: activeTab === item }" @click="setActive(item)">
          {{ item }}
        </li>
      </ul>
    </nav>
    <div class="search-chat">
      <input type="text" placeholder="물품이나 동네를 검색해보세요">
      <button @click="openChat">채팅하기</button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const menuItems = ['중고거래', '동네업체', '알바', '부동산', '중고차직거래'];
const activeTab = ref('중고거래');

function setActive(item) {
  activeTab.value = item;
}

function openChat() {
  console.log('채팅하기 버튼 클릭');
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.logo img {
  height: 50px; /* 로고 크기 조정 */
}

.navigation ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navigation li {
  margin-right: 20px;
  cursor: pointer;
  color: black;
}

/* 탭 눌렀을 시 글씨색 전환 */
.navigation li.active {
  color: orange;
}

.search-chat input {
  margin-right: 10px;
  padding: 5px 10px;
}

button {
  padding: 5px 10px;
  background-color: white;
  border: 1px solid gray;
  cursor: pointer;
}

button:hover {
  background-color: #f0f0f0;
}
</style>

