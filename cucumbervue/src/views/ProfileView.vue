<template>
  <header-view></header-view>
  <div class="outer-container">
    <h1 class="title">나의 당근</h1>
    <div class="profile-container">
      <router-link to="/modProfile" class="menu-item">
        <h2>프로필 수정</h2>
      </router-link>
      <hr>
      <router-link to="/interests" class="menu-item">
        <h2>관심목록</h2>
      </router-link>
    </div>
  </div>
  <footer-view></footer-view>
</template>

<script>
import FooterView from "@/components/FooterComp.vue";
import HeaderView from "@/components/HeaderComp.vue";

export default {
  components: {
    FooterView,
    HeaderView
  }
}
</script>

<style>
.outer-container {
  border: 2px solid black;
  width: 25%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

.title {
  text-align: center;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
}

.menu-item h2 {
  font-weight: normal;
  font-size: 14px;
  margin: 10px 0;
  text-align: center;
}

.menu-item {
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

hr {
  width: 90%;
  border-color: grey;
}
</style>
