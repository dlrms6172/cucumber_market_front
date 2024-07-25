<template>
  <div class="login-container">
    <div class="login-button" @click="loginWithKakao">
      <img src="/images/main/11.svg" alt="카카오로 로그인">
      <span>당신 근처의 당근! <br> 지금 내 동네를 선택하고 시작하세요!</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const isKakaoInitialized = ref(false);

    onMounted(() => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init('7bd42029832e37ace5ab332fcde915fc');
        isKakaoInitialized.value = true;
      }
    });

    const loginWithKakao = () => {
      if (isKakaoInitialized.value) {
        window.Kakao.Auth.login({
          success: function(authObj) {
            alert(JSON.stringify(authObj));
            // success
          },
          fail: function(err) {
            alert(JSON.stringify(err));
          }
        });
      }
    };

    return { loginWithKakao };
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.login-button img {
  margin-bottom: 20px;
}

.login-button span {
  color: black;
  font-size: 14px;
  text-align: center;
}
</style>
