<template>
  <header-comp></header-comp>
  <div class="sales-history">
    <h1 class="text-center">판매 내역</h1>
    <div v-if="sales.length > 0">
      <ul>
        <li v-for="sale in sales" :key="sale.itemId">
          {{ sale.itemName }} - {{ sale.price }}원 (판매일: {{ sale.postDate }})
        </li>
      </ul>
    </div>
    <div v-else>
      <p>판매 내역이 없습니다.</p>
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
  name: 'SalesHistory',
  components: { HeaderComp, FooterComp },
  setup() {
    const sales = ref([]);

    const fetchSales = async () => {
      try {
        const response = await axios.get('http://localhost:8080/history/sales');
        if (response.data.resultCode === 200 && response.data.data) {
          sales.value = response.data.data.sales;
        }
      } catch (error) {
        console.error("판매 내역을 가져오는데 실패하였습니다:", error);
      }
    };

    onMounted(fetchSales);

    return {
      sales
    };
  }
}
</script>

<style scoped>
.sales-history {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.sales-history h1 {
  color: #333;
  margin-bottom: 20px;
}

.sales-history ul {
  list-style: none;
  padding: 0;
}

.sales-history li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.sales-history p {
  text-align: center;
  color: #666;
}
</style>
