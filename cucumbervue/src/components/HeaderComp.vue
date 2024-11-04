<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">
        <img src="/images/main/11.svg" alt="로고">
      </router-link>
    </div>
    <nav class="navigation">
      <ul>
        <li v-for="item in menuItems" :key="item.name" :class="{ active: activeTab === item.name }">
          <router-link :to="item.link" @click="setActive(item.name)">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="search-chat">
      <input type="text" placeholder="물품이나 동네를 검색해보세요">
      <router-link v-if="!userLoggedIn" to="/login" class="login-button">로그인</router-link>
      <div v-if="userLoggedIn" class="user-profile">
        <router-link to="/profile">
          <img :src="userInfo.profileImg" alt="프로필 이미지">
        </router-link>
        <span>{{ userInfo.memberId }}</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue';

const menuItems = [
  { name: '중고거래', link: '/usedtrade' },
  { name: '동네업체', link: '/neighborcom' },
  { name: '알바', link: '/partjob' },
  { name: '부동산', link: '/realestate' },
  { name: '중고차직거래', link: '/usedcardeal' }
];
const activeTab = ref('중고거래');

const userInfo = computed(() => {
  const userString = localStorage.getItem('userInfo');
  try {
    return JSON.parse(userString);
  } catch (e) {
    return null;
  }
});

const userLoggedIn = computed(() => !!userInfo.value);

function setActive(itemName) {
  activeTab.value = itemName;
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
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo img {
  height: 50px;
}

.navigation ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
}

.navigation li {
  margin-right: 20px;
  cursor: pointer;
}

.navigation li a {
  color: black;
  text-decoration: none;
  padding: 10px;
  display: block;
  transition: color 0.3s;
}

.navigation li a:hover {
  color: #ccc;
}

.navigation li.active a {
  color: orange;
}

.search-chat {
  display: flex;
  align-items: center;
}

.search-chat input {
  margin-right: 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  width: 200px;
}

.login-button {
  padding: 5px 10px;
  color: black;
  background-color: white;
  border: 1px solid gray;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}

.login-button:hover {
  background-color: #f0f0f0;
}

.user-profile img {
  width: 30px;
  border-radius: 50%;
}

.user-profile span {
  margin-left: 10px;
}
</style>


