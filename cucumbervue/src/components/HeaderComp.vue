<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">
        <img src="/images/main/11.svg" alt="로고" />
      </router-link>
    </div>
    <nav class="navigation">
      <ul>
        <li
            v-for="item in menuItems"
            :key="item.name"
            :class="{ active: activeTab === item.name }"
        >
          <router-link :to="item.link" @click="setActive(item.name)">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="search-chat">
      <input type="text" placeholder="물품이나 동네를 검색해보세요" />

      <router-link v-if="!isLoggedIn" to="/login" class="login-button">
        로그인
      </router-link>

      <div v-else-if="isLoggedIn && userInfo" class="user-profile">
        <router-link to="/profile">
          <img :src="userInfo.profileImageUrl" alt="프로필 이미지" />
        </router-link>
        <span>{{ userInfo.memberId }}</span>
        <button @click="logout">로그아웃</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const menuItems = [
  { name: "중고거래", link: "/readviewcomp" },
  { name: "동네업체", link: "/neighborcom" },
  { name: "알바", link: "/partjob" },
  { name: "부동산", link: "/realestate" },
  { name: "중고차직거래", link: "/usedcardeal" },
];

const activeTab = ref("중고거래");
const userInfo = ref(null);
const isLoggedIn = ref(false);
const router = useRouter();

function initTokensFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const accessToken = urlParams.get("access");
  const refreshToken = urlParams.get("refresh");

  if (accessToken && refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    console.log("[토큰 저장] 액세스 토큰:", accessToken);
    console.log("[토큰 저장] 리프레시 토큰:", refreshToken);
    window.history.replaceState({}, document.title, router.currentRoute.value.path);
  }
}

function loadUserInfoFromStorage() {
  const storedUser = localStorage.getItem("userInfo");
  if (storedUser) {
    userInfo.value = JSON.parse(storedUser);
    isLoggedIn.value = true;
  }
}

async function fetchUserInfo() {
  const accessToken = localStorage.getItem("accessToken");
  console.log("[API 요청] 액세스 토큰 사용하여 프로필 조회");
  if (!accessToken) {
    isLoggedIn.value = false;
    userInfo.value = null;
    console.log("[API 요청 실패] 액세스 토큰 없음");
    return;
  }

  try {
    const response = await axios.get("https://api.oi-market.kro.kr/user/profile", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    console.log("[API 응답] 사용자 정보:", response.data);
    if (response.data.resultCode === 200) {
      userInfo.value = response.data.data;
      isLoggedIn.value = true;
      localStorage.setItem("userInfo", JSON.stringify(response.data.data)); // 유저 정보 저장
    } else {
      console.error("[API 응답 오류] 사용자 정보 불러오기 실패:", response.data.resultMsg);
      await refreshAccessToken();
    }
  } catch (error) {
    console.error("[API 오류] 사용자 정보 요청 중 오류 발생:", error);
    await refreshAccessToken();
  }
}

async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  console.log("[토큰 갱신] 리프레시 토큰 사용하여 새 액세스 토큰 요청");
  if (!refreshToken) {
    logout();
    return;
  }

  try {
    const response = await axios.post("https://api.oi-market.kro.kr/user/refreshToken", {
      refreshToken,
    });

    console.log("[토큰 갱신 응답] 새로운 액세스 토큰:", response.data.accessToken);
    if (response.data.accessToken) {
      localStorage.setItem("accessToken", response.data.accessToken);
      await fetchUserInfo();
    } else {
      logout();
    }
  } catch (error) {
    console.error("[토큰 갱신 실패] 오류 발생:", error);
    logout();
  }
}

function logout() {
  console.log("[로그아웃] 토큰 제거 및 로그아웃");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userInfo");
  userInfo.value = null;
  isLoggedIn.value = false;
  router.push("/login");
}

function setActive(name) {
  activeTab.value = name;
}

onMounted(() => {
  initTokensFromURL();
  loadUserInfoFromStorage();
  fetchUserInfo();
});
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
