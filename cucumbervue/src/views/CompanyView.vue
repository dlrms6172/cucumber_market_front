<template>
    <div id="app">
        <AboutHeader></AboutHeader>
        <div class="company-body">
            <p class="company-font1">더 가깝고<br> 따뜻한 당신<br>근처를 위하여<br></p>
            <img src="https://about.daangn.com/static/d46325a1bb1b9a2b66dd114738caa857/d91dc/72886561-0427-4038-879f-f8301424bdd9_company_key_visual.avif"
                class="company-pho1-img">

            <p class="company-font2">당근은 활발한 교류가 있는 지역 생활 커뮤니티를 꿈꿉니다.<br> 누구나 동네에서의 즐겁고 따뜻한 연결을 경험할 수 있도록<br> 하이퍼로컬의 새로운
                길을 만들어가고 있습니다.</p>

            <div class="company-mid">
                <div class="company-midd">
                    <p class="company-font2">당근의 시작</p>
                    <p class="company-font3">중고거래로 시작된<br>당신 근처의 이야기</p>
                    <p class="company-font4">당근은 동네의 가치에 주목합니다. 근처에 살고 있는<br> 이웃과의 중고 직거래를 시작으로, 전에 없던 지역<br> 생활 커뮤니티를
                        만들어나가고 있어요. 이웃들은<br> 진짜 우리 동네 이야기를 주고받을 수 있고, 가게<br> 사장님들은 이웃의 목소리를 가장 가까이서 들을 수<br> 있지요. 거래,
                        모임, 홍보, 결제까지, 동네에서<br> 일어나는 다양한 경험을 당근으로 연결하고<br> 있습니다.</p>
                </div>
                <div class="company-midd">
                    <img src="https://about.daangn.com/static/4f3e4f108ccfd1bc2ecb6fec179bcf4f/c65c9/610d3279-1b85-4bb2-a962-e3516f6bb13b_company_02.avif"
                        class="company-pho-img2">
                </div>
            </div>
        </div>
        <div class="user-wrap">
            <div class="user-image">
                <img src="/images/Company/company2.jpg" alt="pho7">
            </div>
            <div class="user-text">
                <p class="company-font5">전 세계 어디라도 동네가 있는 곳이라면</p>
                <p class="company-font6">당근의 도전은 한국을 넘어 세계로 뻗어 나갑니다. 글로벌<br> 서비스 Karrot(캐롯)은 2019년 영국에 첫발을 내디딘 후 일본,<br>
                    캐나다, 미국 지역에서 다양한 지역 기반 서비스를 제공하고<br> 있습니다.</p>
            </div>
        </div>
        <div class="company-body">
            <p class="company-font7">당근은 매일 새로운 역사를<br> 쓰고 있어요</p>

            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card border-light">
                        <div class="card-body" >
                            <h5 class="card-title">누적 가입자 수<br> 3600만명</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-light">
                        <div class="card-body">
                            <h5 class="card-title">MAU 1800만으로<br> 4년 사이 56배<br> 성장</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-light">
                        <div class="card-body ">
                            <h5 class="card-title">국내외 유수<br> 투자자 누적<br> 투자금액 2270억<br> 원 </h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-light">
                        <div class="card-body">
                            <h5 class="card-title">영국, 일본,<br> 캐나다, 미국 등<br> 글로벌 460여 개<br> 지역 진출   </h5>
                        </div>
                    </div>
                </div>
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
.company-body {
    padding: 50px;
    text-align: left;
}

.company-font1 {
    padding-top: 100px;
    font-weight: bold;
    font-size: 52px;
}

.company-pho1-img {
    width: 1160px;
    height: 700px;
    object-fit: cover;
    border-radius: 30px;
    margin-top: 50px;
}

.company-midd {
    display: inline-block;
    vertical-align: text-bottom;
    margin-top: 200px;
}

.company-pho-img2 {
    object-fit: cover;
    border-radius: 30px;
    margin-left: 200px;
}

.company-font2 {
    margin-top: 20px;
    font-size: 25px;
    font-weight: bold;
}

.company-font3 {
    font-weight: bold;
    font-size: 40px;
}

.company-font4 {
    color: gray;
    font-size: 17px;
    margin-top: 15px;

}

.user-wrap {
    width: 100%;
    position: relative;
    z-index: -1;

}

.user-wrap img {
    width: 100%;
    vertical-align: middle;
    margin-top: 150px;
}

.user-text {
    position: absolute;
    margin-top: 80px;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    text-align: center;
    color: white;
}

.company-font5 {
    font-size: 40px;
    font-weight: bold;
}

.company-font6 {
    font-size: 18px;
}

.company-font7 {
    font-weight: bold;
    font-size: 40px;
    margin-top: 180px;
}

.card-title {
    font-size: 30px;
    font-weight: bold;
    margin: 20px;
}

.card-body {
    background-color: #f1f3f5;
    border-radius: 20px;
    height: 300px;
}
.col {
    z-index: -1;
}
</style>