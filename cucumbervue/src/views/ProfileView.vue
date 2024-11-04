<template>
  <header-view></header-view>
  <div class="outer-container">
    <h1 class="title">나의 당근</h1>
    <hr class="section-divider">
    <div class="profile-section">
      <img :src="userProfile.image" alt="프로필 이미지" class="profile-image">
      <h2 class="nickname">{{ userProfile.name }}</h2>
    </div>
    <hr class="section-divider">
    <div class="icon-row">
      <router-link to="/saleshistory" class="icon-item">
        <img src="/images/main/rebranded-icon-story-3.svg" alt="판매 내역">
        <h2>판매 내역</h2>
      </router-link>
      <router-link to="/purchasehistory" class="icon-item">
        <img src="/images/main/rebranded-icon-story-3.svg" alt="구매 내역">
        <h2>구매 내역</h2>
      </router-link>
      <router-link to="/wishlist" class="icon-item">
        <img src="/images/main/rebranded-icon-story-3.svg" alt="관심 목록">
        <h2>관심 목록</h2>
      </router-link>
    </div>
    <hr class="section-divider">
    <router-link to="/modProfile" class="menu-item">
      <h2>프로필 수정</h2>
    </router-link>
    <router-link to="/" @click="logout" class="menu-item">
      <h2>로그아웃</h2>
    </router-link>
  </div>
  <footer-view></footer-view>
</template>

<script>
import axios from 'axios';
import FooterView from "@/components/FooterComp.vue";
import HeaderView from "@/components/HeaderComp.vue";

export default {
  components: {
    FooterView,
    HeaderView
  },
  data() {
    return {
      userProfile: {
        image: '/images/Detail/profile.png',
        name: '닉네임'
      }
    }
  },
  mounted() {
    this.getUserProfile();
  },
  methods: {
    getUserProfile() {
      const userInfoJSON = localStorage.getItem('userInfo');
      if (userInfoJSON) {
        try {
          const userInfo = JSON.parse(userInfoJSON);
          if (userInfo && userInfo.memberId) {
            axios.get(`https://api.oi-market.kro.kr/user/profile`, {
              headers: {
                memberId: userInfo.memberId
              }
            }).then(response => {
              const data = response.data.data;
              this.userProfile.image = data.image || '/images/Detail/profile.png';
              this.userProfile.name = data.name || '닉네임';
            }).catch(error => {
              console.error('호출 실패 :', error);
            });
          }
        } catch (e) {
          console.error('파싱 에러', e);
        }
      } else {
        // userInfo 값이 없을때
        console.log('유저 정보를 가져올 수 없습니다.');
      }
    },
    logout() {
      localStorage.removeItem('userInfo');
      this.$router.push('/');
    }
  }
}
</script>

<style>
.outer-container {
  border: 1px solid black;
  width: 32%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

.title {
  text-align: center;
}

.section-divider {
  border: none;
  height: 1px;
  background-color: lightgrey;
  margin: 20px 0;
}

.profile-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 10px;
}

.nickname {
  font-size: 20px;
  font-weight: 700;
}

.icon-row {
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
}

.icon-item {
  text-align: center;
}

.icon-item img {
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
}

.menu-item h2 {
  font-weight: normal;
  font-size: 14px;
  margin: 10px 0;
  text-align: center;
}

.menu-item {
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

hr {
  width: 90%;
  border-color: grey;
}
.title {
  text-align: left;
  font-size: 20px;
  font-weight: 700;
}

.icon-item h2 {
  font-size: 19px;
}

.menu-item h2 {
  font-weight: 700;
  font-size: 18px;
  margin: 10px 0;
  text-align: center;
}

</style>
