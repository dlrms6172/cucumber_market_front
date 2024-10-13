<template>
  <header-view></header-view>
  <div class="signup-form">
    <h1>회원가입</h1>
    <form @submit.prevent="onSubmit">
      <div class="input-group">
        <label for="id">아이디</label>
        <input type="text" id="id" v-model="form.id" required>
      </div>
      <div class="input-group">
        <label for="email">이메일</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="input-group">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="form.password" required>
      </div>
      <div class="address-container">
        <label for="postcode">거래 희망 장소</label>
        <div class="postcode-section">
          <input type="text" placeholder="우편번호" :value="addresses.zonecode" readonly class="postcode-input" />
          <button id="postcode" @click="openPostcode" class="postcode-button">검색</button>
        </div>
        <input type="text" :value="addresses.roadAddress" placeholder="주소" readonly class="address-input" />
        <input type="text" v-model="addresses.detailAddress" placeholder="상세주소" class="detail-address-input" />
      </div>
      <button type="submit" class="submit-btn">회원가입</button>
    </form>
  </div>
  <footer-view></footer-view>
</template>

<script setup>
import { ref } from 'vue';
import HeaderView from '@/components/HeaderComp.vue'
import FooterView from '@/components/FooterComp.vue'
// import axios from 'axios';
const form = ref({
  id: '',
  email: '',
  password: ''
});
const addresses = ref({
  zonecode: "",
  roadAddress: "",
  detailAddress: ""
});
const openPostcode = () => {
  new window.daum.Postcode({
    oncomplete: (data) => {
      addresses.value.zonecode = data.zonecode;
      addresses.value.roadAddress = data.roadAddress;
    },
  }).open();
};

function onSubmit() {
  console.log('Form Data:', form.value);
  alert('회원가입이 완료되었습니다.');
}
const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};
loadScript("https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");
</script>

<style scoped>
.signup-form {
  max-width: 450px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  color: white;
  background-color: orange;
  cursor: pointer;
}

.submit-btn {
  background-color: #f60;
}

.address-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.postcode-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.postcode-input {
  flex-grow: 1;
}

.postcode-button {
  width: 120px;
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.address-input {
  width: 100%;
}

.detail-address-input {
  width: 100%;
  margin-top: 5px;
}
</style>
