<template>
    <div id="app">
        <AboutHeader></AboutHeader>
        <div class="about-body">
            <p class="about-font1">이웃과 더 가까워지는<br> 따뜻한 동네를 만들어요</p>

            <img src="/images/About/aboutview1.jpg" class="about-pho1-img">

            <p class="about-font2">우리 동네 이웃 5명 중 3명은 당근으로 이웃과 함께하고<br> 있습니다. 중고 직거래로 시작한 당근은 이웃과 이웃, 흩어져<br> 있던 정보를 연결하며
                세상에 없던 지역 기반 커뮤니티<br> 서비스를 만들어 나가고 있어요.</p>

            <div class="about-center">
                <p class="about-font3">당근이 일하는 방식</p>
                <p class="about-font4">사용자 가치를 가장 중요하게<br> 생각해요</p>
                <p class="about-font5">좋은 서비스에 대한 답은 항상 사용자에게 있어요. 오래<br> 고민하는 대신 빠르게 실험하며 사용자를 위한 서비스를<br> 만들어요.</p>
            </div>

            <!-- card부분 그림자, 옆으로 넘어가는 버튼 넣어야함 -->
            <div class="about-card">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card border-light mb-3">
                            <img src="/images/About/aboutview2.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title-1">전단지를 대체할 당근 광고의 등장</h5>
                                <p class="card-text-1">당근 광고실을 소개합니다!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-light mb-3">
                            <img src="/images/About/aboutview3.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-title-1">혹시...? 네, '당근'입니다!</p>
                                <p class="card-text-1">당근마켓에서 당근으로, 리브랜딩에 대한 모든 것</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="about-culture">
                <div style="float: right">
                    <img src="/images/About/aboutview4.jpg" />
                </div>

                <div>
                    <p class="about-font3">당근이 일하는 문화</p>
                    <p class="about-font1">함께의 가치를 만드는<br>사람들은 어떤 문화에서<br> 일할까요?</p>
                    <p class="about-font3">자세히 보기</p>
                </div>
            </div>
        </div>


        <img src="/images/About/aboutview5.jpg" alt="pho5" class="about-pho5-img">


        <div class="about-center">
            <p class="about-font6">당근 팀 이야기가 더 궁금하다면</p>
            <p class="about-font3">블로그 글 보러가기</p>

        </div>
        <div class="about-img-slide">
            <div class="about-slide1">
                <img src="images/About/about7.avif" class="slide1">
                <p class="slide-font1">당근 광고가 만들어지는 <br>곳, DSP</p>
            </div>
            <div class="about-slide1">
                <img src="images/About/about8.avif" class="slide1">
                <p class="slide-font1">따뜻하고 정겨운 동네<br> 같은 당근 오피스에서의<br> 하루</p>
            </div>
            <div class="about-slide1">
                <img src="images/About/about9.avif" class="slide1">
                <p class="slide-font1">협업과 몰입을 극강으로,<br> 부동산팀 피처톤 데이</p>
            </div>
            <div class="about-slide1">
                <img src="images/About/about10.avif" class="slide1">
                <p class="slide-font1">‘당근다움’을 어떻게<br> 보여줄 것인가</p>
            </div>
            <div class="about-slide1">
                <img src="images/About/about11.avif" class="slide1">
                <p class="slide-font1">리더는 혼자가 아니니까,<br> Cheer Leaders!</p>
            </div>
            
        </div>

        <div class="user-wrap">
            <div class="user-image">
                <img src="/images/About/aboutview7.png" alt="pho7">
            </div>
            <div class="user-text">
                <p class="about-font6">당근과 함께 성장해보세요</p>
                <a href="https://about.daangn.com/jobs/" class="about-font3">채용공고 보러가기</a>
            </div>
        </div>





        <AboutFooter></AboutFooter>
    </div>

</template>

<script>
import { ref } from 'vue'
import AboutHeader from './About/AboutHeader.vue';
import AboutFooter from './About/AboutFooter.vue';

export default {
    name: 'AboutView',
    components: { AboutFooter, AboutHeader },
    setup() {
        const state = ref({
            message: 'Hello Vue 3!'
        });


        return {
            state
        };
    }
}
</script>

<style scoped>
.about-body {
    padding: 200px;
    padding-top: 0%;
    text-align: left;
}

.about-font1 {
    padding-top: 100px;
    font-weight: bold;
    font-size: 52px;
}

.about-pho1-img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 30px;
    margin-top: 50px;
}

.about-font2 {
    font-weight: bold;
    font-size: 25px;
    margin-top: 60px;
}

.about-center {
    text-align: center;
    margin-top: 150px;
    padding: 15px;
}

.about-font3 {
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    color: black;
}

.about-font4 {
    font-weight: bold;
    font-size: 40px;
}

.about-font5 {
    color: gray;
    font-size: 20px;
}

.about-font6 {
    font-size: 40px;
    font-weight: bold;
}

.col {
    z-index: -1;
}

.card-body {
    margin: 20px;
}

.card-title-1 {
    font-weight: bold;
    font-size: 25px;
}

.card-text-1 {
    margin-top: 10px;
}

.about-card {
    margin-top: 50px;
}

.about-culture {
    margin-top: 120px;
}

.about-pho6-img {
    float: right;
    clear: both;
}

.about-culture {
    margin-top: 30px;
}

.about-pho5-img {
    margin-top: 150px;
    width: 100%;
}

.user-wrap {
    width: 100%;
    position: relative;
}

.user-wrap img {
    width: 100%;
    vertical-align: middle;
    margin-top: 150px;
}

.user-text {
    position: absolute;
    top: 72%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    text-align: center;
}
.about-blog {
    margin-top: 140px;
}
.about-img-slide{
    display: flex;
    position: relative;
    margin-top: 100px;
    z-index: -1;
    margin-left: 30px;
}
.slide1 {
    border-radius: 20px;
    width: 250px;
    margin: 20px;
}
.slide-font1{
    color: white;
    position: absolute;
    top: 65%;
    margin-left: 30px;
    font-weight: bold;
    font-size: 20px;
}

</style>
