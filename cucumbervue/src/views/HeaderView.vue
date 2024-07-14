<template>
  <header>
    <div class="header-content">
      <img src="" alt="Logo" class="logo" />
      <nav>
        <ul>
          <li><a href="#!">중고거래</a></li>
          <li><a href="#!">동네업체</a></li>
          <li><a href="#!">알바</a></li>
          <li><a href="#!">부동산</a></li>
          <li><a href="#!">중고차 직거래</a></li>
        </ul>
      </nav>
      <button class="contact-button">채팅하기</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderView'
}
</script>

<style scoped>
header {
  background-color: #fff;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.logo {
  height: 36px;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0 20px;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

.contact-button {
  padding: 10px 20px;
  background-color: #f8f9fa;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>
