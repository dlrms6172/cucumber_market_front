<template>
  <header-view></header-view>
  <div class="main-container">
    <div class="main-text">
      <img src="/images/main/11.svg" alt="로고">
      <h1>당신 근처의 당근마켓</h1>
      <p>내 동네를 설정하고<br>당근마켓을 시작해보세요.</p>
    </div>
  </div>
  <div class="login-container">
<!--    <div class="login-button" @click="loginWithKakao">-->
<!--      <img src="/images/sns/Kakao.png" alt="카카오로 로그인">-->
<!--    </div>-->
    <div class="login-button" @click="loginWithGoogle">
      <img src="/images/sns/Google.png" alt="구글로 로그인">
    </div>
<!--    <div class="login-button" @click="loginWithNaver">-->
<!--      <img src="/images/sns/Naver.png" alt="네이버로 로그인">-->
<!--    </div>-->
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import HeaderView from '@/components/HeaderComp.vue';

export default {
  components: { HeaderView },
  setup() {
    function loginWithGoogle() {
      axios.get('https://localhost:8080/user/signin', {
        params: {
          platform: 'google'
        }
      }).then(response => {
        const signInPage = response.data.data.signInPage;
        window.location.href = signInPage;
        router.push('/');
      }).catch(error => {
        console.error('Login failed:', error);
        alert('로그인에 실패하였습니다: ' + error.message);
      });
    }

    return { loginWithGoogle };
  }
}
</script>




<style scoped>
body, html {
  height: 100%;
  margin: 0;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.main-text {
  text-align: center;
  max-width: 600px;
}

.main-text img {
  width: 70%;
  max-width: 400px;
  margin-bottom: 20px;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0vh;
}

.login-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
}

.login-button img {
  margin-bottom: 20px;
  max-width: 170px;
  height: auto;
}

.login-button span {
  color: black;
  font-size: 14px;
  text-align: center;
}
</style>

