<template>
  <header-view></header-view>
  <div class="signup-form">
    <h1>프로필 수정</h1>
    <form @submit.prevent="onSubmit">
      <!-- 프로필 이미지 업로드 -->
      <div class="profile-image">
        <label for="profileImage">프로필 이미지</label>
        <input type="file" id="profileImage" @change="handleFileUpload" accept="image/*">
        <img v-if="previewImage" :src="previewImage" alt="프로필 이미지 미리보기" class="profile-preview">
      </div>

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

      <!-- 주소 검색 -->
      <div class="address-container">
        <label for="postcode">주소</label>
        <div class="postcode-section">
          <input type="text" placeholder="우편번호" v-model="addresses.zonecode" readonly class="postcode-input" />
          <button id="postcode" @click="openPostcode" class="postcode-button">검색</button>
        </div>
        <input type="text" v-model="addresses.roadAddress" placeholder="주소" readonly class="address-input" />
        <input type="text" v-model="addresses.detailAddress" placeholder="상세주소" class="detail-address-input" />
      </div>

      <button type="submit" class="submit-btn">수정하기</button>
    </form>
  </div>
  <footer-view></footer-view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import HeaderView from '@/components/HeaderComp.vue';
import FooterView from '@/components/FooterComp.vue';
import axios from 'axios';

const router = useRouter();

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

const profileImage = ref(null);
const previewImage = ref(null);

onMounted(() => {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    const user = JSON.parse(userInfo);
    form.value.id = user.memberId || '';
    form.value.email = user.email || '';
  }

  // Daum 주소 API 로드
  if (typeof window.daum === "undefined") {
    const script = document.createElement("script");
    script.src = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.onload = () => console.log("Daum Postcode API 로드 완료");
    document.head.appendChild(script);
  }
});

const openPostcode = () => {
  if (!window.daum || !window.daum.Postcode) {
    alert("주소 검색 API가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.");
    return;
  }

  new window.daum.Postcode({
    oncomplete: (data) => {
      addresses.value.zonecode = data.zonecode;
      addresses.value.roadAddress = data.roadAddress;
    },
  }).open();
};

// 프로필 이미지 업로드
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    profileImage.value = file;
    previewImage.value = URL.createObjectURL(file);
  }
};

const onSubmit = async () => {
  try {
    const url = "https://api.oi-market.kro.kr/user/profile";

    // 기본 정보
    const payload = {
      memberId: form.value.id,
      snsId: 0,
      name: form.value.id,
      email: form.value.email,
      password: form.value.password,
      regionId: 0
    };

    if (profileImage.value) {
      const formData = new FormData();
      formData.append("profileImage", profileImage.value);
      formData.append("data", JSON.stringify(payload));

      await axios.put(url, formData, {
        headers: {"Content-Type": "multipart/form-data"}
      });
    } else {
      await axios.put(url, payload);
    }

    alert('프로필 수정이 완료되었습니다.');
    router.push('/');
  } catch (error) {
    console.error('오류 발생:', error);
    alert('프로필 수정에 실패했습니다.');
  }
};
</script>

<style scoped>
.signup-form {
  max-width: 450px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-group, .profile-image {
  margin-bottom: 20px;
}

.input-group label, .profile-image label {
  display: block;
  margin-bottom: 5px;
}

.input-group input, .profile-image input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.profile-preview {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 10px;
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

.submit-btn:hover {
  background-color: #e55a00;
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

.address-input, .detail-address-input {
  width: 100%;
}
</style>
