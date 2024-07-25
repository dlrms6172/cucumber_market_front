<template>
    <div class="about-footer">
        <hr>
        <nav class="about-footer0">
            <ul class="about-footer1" style="display: inline">
                <li><router-link to="/">개인정보처리방침</router-link></li>
                <li><router-link to="/">브랜드 리소스</router-link></li>
                <li><router-link to="/">자주 묻는 질문</router-link></li>
                <li><router-link to="/">IR</router-link></li>
                <li><router-link to="/">PR</router-link></li>
            </ul>

            <ul class="about-link" style="display: inline">
                <li><a href="https://github.com/daangn">github</a></li>
                <li><a href="https://medium.com/daangn">Blog</a></li>
                <li><a href="https://www.facebook.com/daangn/">Facebook</a></li>
                <li><a href="https://www.instagram.com/daangnmarket/">Instagram</a></li>
            </ul>

        </nav>
        
        <p class="about-font1">주소 : 서울특별시 서초구 강남대로 465, 교보강남타워 11층 (IR 관련 문의 : ir@daangn.com)<br>
            (채용 관련 문의 : recruit@daangn.com)</p>
        <p class="about-font2">© 당근마켓</p>

    </div>
</template>

<script>
</script>

<style>
.about-footer {
    text-align: left;
    padding: 20px;
    margin-top: 40px;
}
.about-footer0{
    margin-top: 80px;
}
.about-footer1 {
    list-style-type: none;
}

ul li {
    display: inline-block;
    margin-right: 20px;
}
.about-link{
    margin-left: 350px;
}
.about-font1{
    padding: 25px;
    font-size: 15px;
    color: gray;
}
.about-font2{
    padding: 25px;
    font-size: 13px;
    font-weight: bold;
    color: gray;
}
</style>