<template>
    <header>
        <nav class="business-navbar fixed-top">
            <div class="navbar-logo">
                <img src="images/Business/businesslogo.png" alt="logo" class="logo1">
            </div>

            <ul class="navbar-menu">

                <li>
                    <router-link to="/">비즈프로필</router-link>
                    <ul class="navbar-dropdown">
                        <li><router-link to="/">비즈프로필이란?</router-link></li>
                    </ul>
                </li>

                <li>
                    <router-link to="/">광고</router-link>
                    <ul class="navbar-dropdown">
                        <li><router-link to="/">비즈프로필이란?</router-link></li>
                        <li><router-link to="/">비즈프로필이란?</router-link></li>
                    </ul>

                </li>
                
                <li>
                    <router-link to="/">성공사례, 교육</router-link>
                </li>

                <li><router-link to="/">이용가이드</router-link></li>
            </ul>
        </nav>
    </header>


    <!-- <nav class="navbar navbar-light " style="background-color: white;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="images/Business/businesslogo.png" alt="logo" class="logo1">
            </a>
            <ul class="nav justify-content-end">
                <li class="nav-item ">
                    <router-link to="/company" class="link-offset-2 link-underline link-underline-opacity-0">회사소개</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/culture" class="link-offset-2 link-underline link-underline-opacity-0">팀문화</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/service" class="link-offset-2 link-underline link-underline-opacity-0">서비스</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/blog" class="link-offset-2 link-underline link-underline-opacity-0">블로그</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="link-offset-2 link-underline link-underline-opacity-0">채용공고</router-link>
                </li>
            </ul>
        </div>

    </nav> -->

</template>
<script>
</script>
<style scoped>
a {
    text-decoration: none;
    color: black;
}

.business-navbar {
    display: flex;
    justify-content: space-between;
    justify-content: start;
    align-items: center;
    background-color: white;
    padding: 10px;
}

.logo1 {
    width: 130px;
    margin-left: 80px;

}

.navbar-menu {
    display: flex;
    list-style: none;
    height: 23px
}

.navbar-menu li {
    padding: 10px 14px;
}

.navbar-dropdown {
    display: none;
    position: absolute;
    z-index: 1;
    background-color: #f9f9f9;
    min-width: 200px;
    list-style: none;
}

.navbar-dropdown a {
    display: block;
}

/* .navbar-menu:hover .navbar-dropdown {
    display: block;
} */

/* .navbar-brand {
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

a {
    text-decoration: none;
    color: black;
}

.logo1 {
    width: 130px;
} */
</style>