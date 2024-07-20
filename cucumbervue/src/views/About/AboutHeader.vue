<template>
    <nav class="navbar navbar-light " style="background-color: white;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/images/main/11.svg" alt="logo">
            </a>
            <ul class="nav justify-content-end">
                <li class="nav-item ">
                    <router-link to="/" class="link-offset-2 link-underline link-underline-opacity-0">회사소개</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="link-offset-2 link-underline link-underline-opacity-0">팀문화</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="link-offset-2 link-underline link-underline-opacity-0">서비스</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="link-offset-2 link-underline link-underline-opacity-0">블로그</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="link-offset-2 link-underline link-underline-opacity-0">채용공고</router-link>
                </li>
            </ul>
        </div>

    </nav>

</template>
<script>
</script>
<style scoped>
.navbar-brand{
    margin-left: 50px;

}

ul li {
    padding: 10px;
    margin-right: 30px;
    font-weight: bold;
}

li {
    color: black;
}
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
.nav-item {
    text-decoration: none;
    color: black;
}

</style>