<template>
  <header-view></header-view>
  <div class="app-container">
    <h1>내 물건 팔기</h1>

    <div class="form-group">
      <label for="businessName">제목</label>
      <input id="businessName" v-model="businessName" placeholder="물품 명을 입력하세요."/>
    </div>

    <div class="form-group">
      <label for="category">카테고리</label>
      <select id="category" v-model="category">
        <option value="option1">디지털기기</option>
        <option value="option2">생활가전</option>
        <option value="option3">가구/인테리어</option>
        <option value="option4">생활/주방</option>
        <option value="option5">유아동</option>
        <option value="option6">유아도서</option>
        <option value="option7">여성의류</option>
        <option value="option8">여성잡화</option>
        <option value="option9">남성패션/잡화</option>
        <option value="option10">뷰티/미용</option>
        <option value="option11">스포츠/레저</option>
        <option value="option12">취미/게임/음반</option>
        <option value="option13">도서</option>
        <option value="option14">티켓/교환권</option>
        <option value="option15">가공식품</option>
        <option value="option16">건강기능식품</option>
        <option value="option17">반려동물용품</option>
        <option value="option18">식물</option>
        <option value="option19">기타 중고물품</option>
        <option value="option20">삽니다</option>

      </select>
    </div>
    <div class="sell">
      <p class="b-title">거래 방식</p>
      <div>
        <input class="sell-btn"  type="button" value="판매하기">
        <input class="sell-btn"  type="button" value="나눔하기">

      </div>
      <input class="input" placeholder="가격을 입력해주세요." type="text">
      <span class="textbox"></span>
      <div class="checkbox">
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">가격 제안 받기

      </div>
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

    <div class="form-group">
      <label for="description">물품 소개</label>
      <textarea id="description" v-model="description" placeholder="물품을 소개 해보세요." rows="4"></textarea>
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
import { ref } from 'vue';
import HeaderView from "@/components/HeaderComp.vue";
import FooterView from "@/components/FooterComp.vue";

const businessName = ref('');
const category = ref('');
const description = ref('');
const images = ref([]);
const fileInput = ref(null);
const addresses = ref({
  zonecode: "",
  roadAddress: "",
  detailAddress: ""
});

const openPostcode = () => {
  new window.daum.Postcode({
    oncomplete: (data) => {
      console.log(data);
      addresses.value.zonecode = data.zonecode;
      addresses.value.roadAddress = data.roadAddress;
    },
  }).open();
};

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileUpload = event => {
  const files = event.target.files;
  for (let file of files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      images.value.push({ id: file.name, url: e.target.result }); // `.value`를 사용
    };
    reader.readAsDataURL(file);
  }
};

const removeImage = index => {
  images.value.splice(index, 1); // `.value`를 사용
};

const submitData = async () => {
  // API 호출 로직 구현
};

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

.textbox {
  display: inline-block;
  height: 2px;
  position: absolute;
  top: 185px;
  width: 202px;
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
  width: 50%; /* 선택박스의 너비를 줄임 */
  padding: 8px;
  margin-bottom: 10px;
}

 </style>
