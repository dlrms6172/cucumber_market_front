<template>
  <header-view></header-view>
  <div class="app-container">
    <h1>동네 업체 등록</h1>

    <div class="form-group">
      <label for="businessName">업체 명</label>
      <input id="businessName" v-model="businessName" placeholder="업체 명을 입력하세요"/>
    </div>

    <div class="form-group">
      <label for="category">업종</label>
      <select id="category" v-model="category">
        <option value="option1">통신판매</option>
        <option value="option2">의류판매</option>
        <option value="option2">광고/인쇄</option>
        <option value="option2">클래스</option>
        <option value="option2">학원</option>

      </select>
    </div>

    <!-- TODO. 주소api -->
    <div class="form-group">
      <label for="address">주소</label>
      <input id="address" v-model="address" placeholder="주소를 입력하세요" @focus="searchAddress"/>
    </div>

    <div class="form-group">
      <label for="description">업체 소개</label>
      <textarea id="description" v-model="description" placeholder="업체를 소개 해보세요." rows="4"></textarea>
    </div>

    <div class="image-upload">
      <button @click="triggerFileInput" class="image-button">+</button>
      <div class="image-preview">
        <div v-for="(image, index) in images" :key="image.id" class="image-container">
          <img :src="image.url" class="uploaded-image"/>
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
import {ref} from 'vue';
import HeaderView from "@/components/HeaderComp.vue";
import FooterView from "@/components/FooterComp.vue";

const businessName = ref('');
const category = ref('');
const address = ref('');
const description = ref('');
const images = ref([]);
const fileInput = ref(null);

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileUpload = event => {
  const files = event.target.files;
  for (let file of files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      images.value.push({id: file.name, url: e.target.result});
    };
    reader.readAsDataURL(file);
  }
};

const removeImage = index => {
  images.value.splice(index, 1);
};

const searchAddress = () => {
  // TODO. 주소검색api
};

const submitData = async () => {
  // API 호출
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

.form-group select {
  width: 35%;
} </style>
