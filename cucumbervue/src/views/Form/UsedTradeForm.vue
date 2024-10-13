<template>
  <header-view></header-view>
  <div class="app-container">
    <h1>내 물건 팔기</h1>

    <div class="form-group">
      <label for="businessName">제목</label>
      <input id="businessName" v-model="businessName" placeholder="물품 명을 입력하세요." />
    </div>

    <div class="form-group">
      <label for="category">카테고리</label>
      <select id="category" v-model="category">
        <option value="1">디지털기기</option>
        <option value="2">생활가전</option>
        <option value="3">가구/인테리어</option>
        <!-- 카테고리 옵션 계속 추가 -->
      </select>
    </div>

    <div class="sell">
      <p class="b-title">거래 방식</p>
      <div>
        <input class="sell-btn" type="button" value="판매하기" @click="setDonationFlag(false)">
        <input class="sell-btn" type="button" value="나눔하기" @click="setDonationFlag(true)">
      </div>
      <input class="input" v-model="price" placeholder="가격을 입력해주세요." type="text" />
      <div class="checkbox">
        <input class="form-check-input" type="checkbox" v-model="priceNegotiationYn" value="1" /> 가격 제안 받기
      </div>
    </div>

    <div class="form-group">
      <label for="description">물품 소개</label>
      <textarea id="description" v-model="description" placeholder="물품을 소개 해보세요." rows="4"></textarea>
    </div>

    <div class="image-upload">
      <button @click="triggerFileInput" class="image-button">+</button>
      <div class="image-preview">
        <div v-for="(image, index) in images" :key="image.id" class="image-container">
          <img :src="image.url" class="uploaded-image" />
          <button @click="removeImage(index)" class="delete-button">X</button>
        </div>
      </div>
      <input type="file" id="image-file" ref="fileInput" @change="handleFileUpload" multiple hidden>
    </div>

    <button class="submit-button" @click="submitData">등록하기</button>
  </div>
  <footer-view></footer-view>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import HeaderView from '@/components/HeaderComp.vue'
import FooterView from '@/components/FooterComp.vue'

const businessName = ref('');
const category = ref('');
const description = ref('');
const price = ref('');
const priceNegotiationYn = ref(0);
const donationFlag = ref(0);
const images = ref([]);
const fileInput = ref(null);

const handleFileUpload = (event) => {
  const files = event.target.files;
  for (let file of files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      images.value.push({ id: file.name, url: e.target.result });
    };
    reader.readAsDataURL(file);
  }
};

const removeImage = (index) => {
  images.value.splice(index, 1);
};

const setDonationFlag = (isDonation) => {
  donationFlag.value = isDonation ? 1 : 0;
};

const submitData = async () => {
  const formData = new FormData();
  formData.append('memberId', 1); // TODO. 멤버아이디 수정요망
  formData.append('itemName', businessName.value);
  formData.append('itemInfo', description.value);
  formData.append('donationFlag', donationFlag.value);
  formData.append('categoryId', category.value);
  formData.append('priceNegotiationYn', priceNegotiationYn.value);
  formData.append('price', price.value);

  for (let i = 0; i < fileInput.value.files.length; i++) {
    formData.append('files', fileInput.value.files[i]);
  }

  try {
    const response = await axios.post('http://localhost:8080/items', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
</script>



<style>
.app-container {
  margin: 20px auto;
  width: 80%;
  max-width: 600px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group select, .form-group input, .form-group textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}

.image-upload {
  display: flex;
  align-items: center;
}

.image-button {
  background-color: lightgray;
  color: white;
  border: none;
  width: 100px;
  height: 100px;
  font-size: 36px;
  cursor: pointer;
  margin-right: 10px;
}

.image-container {
  position: relative;
  display: inline-block;
  margin-right: 20px;
}

.uploaded-image {
  width: 100px;
  height: 100px;
}

.delete-button {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: red;
  color: white;
  cursor: pointer;
}

.submit-button {
  background-color: orange;
  color: white;
  padding: 15px 35px;
  border: none;
  cursor: pointer;
  display: block;
  margin-top: 30px;
  font-size: 20px;
}

.sell {
  padding-top: 30px;
}

.input {
  border-radius: 10px;
  border: 1px solid #CCC;
  color: #555;
  box-sizing: border-box;
  font-size: 15px;
  height: 50px;
  padding: 10px 0px;
  position: relative;
  width: 200px;
}

.input:focus {
  outline: none;
}

.checkbox {
  margin: 15px 0px 15px 0px;
}

.sell-btn {
  border: 1px solid #CCC;
  border-radius: 15px;
  background-color: white;
  font-size: 15px;
  width: 80px;
  height: 40px;
  margin: 0px 15px 15px 0px;
}

.sell-btn:active {
  background-color: black;
  color: white;
}

.sell-btn:visited {
  background-color: black;
  color: white;
}
.form-group select {
  width: 50%;
  padding: 8px;
  margin-bottom: 10px;
}

 </style>
