<template>
  <header-comp></header-comp>
  <div class="purchase-history">
    <h1 class="text-center">구매 내역</h1>
    <div v-if="purchases.length > 0">
      <ul>
        <li v-for="purchase in purchases" :key="purchase.itemId">
          {{ purchase.itemName }} - {{ purchase.price }}원 (구매일: {{ purchase.postDate }})
        </li>
      </ul>
    </div>
    <div v-else>
      <p>구매 내역이 없습니다.</p>
    </div>
  </div>
  <footer-comp></footer-comp>
</template>

<script>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import FooterComp from "@/components/FooterComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";

export default {
  name: 'PurchaseHistory',
  components: {HeaderComp, FooterComp},
  setup() {
    const purchases = ref([]);

    const fetchPurchases = async () => {
      try {
        const response = await axios.get('http://localhost:8080/history/purchases');
        if (response.data.resultCode === 200 && response.data.data) {
          purchases.value = response.data.data.purchases;
        }
      } catch (error) {
        console.error("구매 내역을 가져오는데 실패하였습니다:", error);
      }
    };

    onMounted(fetchPurchases);

    return {
      purchases
    };
  }
}
</script>

<style scoped>
.purchase-history {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.purchase-history h1 {
  color: #333;
  margin-bottom: 20px;
}

.purchase-history ul {
  list-style: none;
  padding: 0;
}

.purchase-history li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.purchase-history p {
  text-align: center;
  color: #666;
}
</style>
