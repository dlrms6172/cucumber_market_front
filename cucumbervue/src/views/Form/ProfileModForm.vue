<template>
  <header-view></header-view>
  <div class="signup-form">
    <h1>프로필 수정</h1>
    <form @submit.prevent="onSubmit">
      <div class="input-group">
        <label for="id">아이디</label>
        <input type="text" id="id" v-model="form.id" required disabled>
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
        <label for="postcode">주소</label>
        <div class="postcode-section">
          <input type="text" placeholder="우편번호" :value="addresses.zonecode" readonly class="postcode-input" />
          <button id="postcode" @click="openPostcode" class="postcode-button">검색</button>
        </div>
        <input type="text" :value="addresses.roadAddress" placeholder="주소" readonly class="address-input" />
        <input type="text" v-model="addresses.detailAddress" placeholder="상세주소" class="detail-address-input" />
      </div>
      <button type="submit" class="submit-btn">수정하기</button>
    </form>
  </div>
  <footer-view></footer-view>
</template>

<script setup>
import { ref } from 'vue';
import HeaderView from '@/components/HeaderComp.vue';
import FooterView from '@/components/FooterComp.vue';
import axios from 'axios';

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
  const url = "http://localhost:8080/user/profile";
  const payload = {
    memberId: form.value.id,
    snsId: 0,
    name: form.value.id,
    email: form.value.email,
    regionId: 0
  };
  axios.put(url, payload)
      .then(response => {
        console.log('응답:', response.data);
        alert('프로필 수정이 완료되었습니다.');
      })
      .catch(error => {
        console.error('오류 발생:', error);
        alert('프로필 수정에 실패했습니다.');
      });
}
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
