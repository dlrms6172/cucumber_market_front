<template>
    <div id="app">
        <BusinessHeader></BusinessHeader>
        <div class="business-video">
            <video width="100%" autoplay="" muted="" loop="" playsinline="">
                <source src="https://business.karroter.net/daangn-business/home-v2/hero_back_1440_black.mp4">
            </video>
            <h1 class="video-font">당근이웃, 내 고객이 되다</h1>
            <div class="video-button">
                <button class="video-button-1"><a href="https://business.daangn.com/login?type=signup">무료로
                        시작하기</a></button>
            </div>

        </div>

        <div class="business-font2">
            <img src="/images/Business/business1.png" class="business-pho1-img">
            <p class="business-font3">당근사장님을 위한 최대 26만원 광고비 혜택</p>
        </div>

        <div class="business-back">
            <div class="business-pho1-img2">
                <img src="/images/Business/business2.png" class="business-pho2-img">
            </div>
            <div class="pho1-text">
                <p class="business-font4">3900만 당근이웃이 내 단골이 된다면<br> 얼마나 힘이 날까요?</p>
                <p class="business-font5">대한민국 모든 동네의 이웃이 모인 곳에<br> 나의 비즈니스를 알리세요.</p>

                <p class="business-font6">서비스 가입자</p>
                <p class="business-font7">3,900만 +</p>

                <p class="business-font8">이용자 하루 평균 체류 시간</p>
                <p class="business-font9">20분 +</p>

                <p class="business-font10">월간 이용자 수 (MAU)</p>
                <p class="business-font11">1,900만 +</p>
            </div>
        </div>

        <div class="body-200px">
            <div class="dang-gwang">
                <p class="font-orange">광고 상품</p>
                <p class="gwang-font1">당근이라서 가능한 <br>동네 기반 광고 </p>

            </div>
        </div>


    </div>
    <BusinessFooter></BusinessFooter>

</template>

<script>
import { ref } from 'vue'
import BusinessHeader from './Busiess/BusinessHeader.vue';
import BusinessFooter from './Busiess/BusinessFooter.vue';


export default {
    name: 'AboutView',
    components: { BusinessFooter, BusinessHeader },
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
video::-webkit-media-controls {
    display: none !important;
}

.business-video {
    position: relative;
}

.business-video video {
    z-index: -1500;
    margin-top: 45px;
}

video {
    overflow-clip-margin: content-box;
    overflow: hidden;
}

.video-font {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 70px;

}

.video-font h1 {
    color: white;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

}

.business-pho1-img {
    width: 50px;
}

.business-font2 {
    justify-content: center;
    display: flex;
}

.business-font3 {
    margin-top: 20px;
    margin-left: 20px;
    font-weight: bold;
}

.business-back {
    background-color: #edece9;
    height: 300px;
    margin-top: 10px;
    position: relative;
}

.business-pho2-img {
    width: 100%;
    height: 300px;
    position: absolute;

}

.pho1-text {
    position: absolute;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    text-align: center;
}

.pho1-text p {
    display: flex;
    position: absolute;

}

.business-font4 {
    margin-top: 100px;
    font-weight: bold;
    margin-left: 140px;
    font-size: 25px;
    text-align: left;
}

.business-font5 {
    margin-top: 185px;
    margin-left: 140px;
    font-size: 15px;
    text-align: left;
    color: #868b94;

}

.business-font6 {
    margin-top: 115px;
    margin-left: 600px;
    font-size: 15px;
    font-weight: bold;
}

.business-font7 {
    margin-top: 150px;
    margin-left: 540px;
    font-weight: bold;
    font-size: 45px;
}

.business-font8 {
    margin-top: 115px;
    margin-left: 830px;
    font-size: 15px;
    font-weight: bold;
}

.business-font9 {
    margin-top: 150px;
    margin-left: 840px;
    font-weight: bold;
    font-size: 45px;
}

.business-font10 {
    margin-top: 115px;
    margin-left: 1070px;
    font-size: 15px;
    font-weight: bold;
}

.business-font11 {
    margin-top: 150px;
    margin-left: 1050px;
    font-weight: bold;
    font-size: 45px;
}

.dang-go {
    padding-left: 250px;
    padding-right: 250px;
}

.danggo-font1 {
    font-weight: bold;
    color: #ff7e36;
    margin-top: 100px;
    font-size: 20px;
}

.danggo-font2 {
    font-weight: bold;
    font-size: 40px;
}

.dango-video {
    display: flex;
}

.danggo-video1 {
    width: 100%;
    border-radius: 10px 10px 0 0;
    margin-right: 20px;
}

.danggo-video2 {
    width: 100%;
    border-radius: 10px 10px 0 0;
    margin-left: 20px;
}

.danggo-video1-2 a {
    text-decoration: none;
    color: black;
}

.danggo-video1-2 {
    border: 1px solid #dcdee3;
    border-radius: 0 0 10px 10px;
    border-top: none;
    height: 30%;

}

.danggo-font3 {
    font-weight: bold;
    font-size: 18px;
    margin: 20px;
    margin-bottom: 0%;
}

.danggo-font4 {
    color: #868b94;
    margin-left: 20px;
}

.danggo-video2-2 {
    border: 1px solid #dcdee3;
    border-radius: 0 0 10px 10px;
    border-top: none;
    height: 30%;
    margin-left: 20px;

}

.video-button-1 {
    border-radius: 10px;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 210px;
    height: 60px;
    background-color: #ff6f0f;
    font-size: 20px;
    font-weight: bold;
    border: none;
}

.video-button-1 a {
    text-decoration: none;
    color: white;
}

.font-orange {
    color: #ff6f0f;
    font-size: 20px;
    font-weight: bold;
}
.gwang-font1 {
    text-align: left;
    font-size: 45px;
    font-weight: bold;
}
.body-200px {
    padding: 200px;
}
</style>