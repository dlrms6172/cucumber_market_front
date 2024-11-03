<template>
  <header-comp></header-comp>
  <div class="interests-history">
    <h1 class="text-center">관심 상품 내역</h1>
    <div v-if="interests.length > 0">
      <ul>
        <li v-for="interest in interests" :key="interest.itemId">
          {{ interest.itemName }} - {{ interest.price }}원 (관심 등록일: {{ interest.postDate }})
        </li>
      </ul>
    </div>
    <div v-else>
      <p>관심 상품 내역이 없습니다.</p>
    </div>
  </div>
  <footer-comp></footer-comp>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import FooterComp from "@/components/FooterComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";

export default {
  name: 'InterestsHistory',
  components: { HeaderComp, FooterComp },
  setup() {
    const interests = ref([]);

    const fetchInterests = async () => {
      try {
        const response = await axios.get('http://localhost:8080/history/interests');
        if (response.data.resultCode === 200 && response.data.data) {
          interests.value = response.data.data.interests;
        }
      } catch (error) {
        console.error("관심 상품 내역을 가져오는데 실패하였습니다:", error);
      }
    };

    onMounted(fetchInterests);

    return {
      interests
    };
  }
}
</script>

<style scoped>
.interests-history {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.interests-history h1 {
  color: #333;
  margin-bottom: 20px;
}

.interests-history ul {
  list-style: none;
  padding: 0;
}

.interests-history li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.interests-history p {
  text-align: center;
  color: #666;
}
</style>
