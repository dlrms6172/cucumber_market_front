<template>
    <header-view></header-view>
    <div class="body-500">

        <h5>{{ $route.params.id }}</h5>


        <div class="post-img">
            <img src="/images/Post/post1.webp" class="post"> 
        </div>
        <div class="profile-1">
            <div class="profile-1-1">
                <img src="/images/Post/profile.png" class="profile-img">
            </div>
            <div class="profile-1-2">
                <p class="font-bold">닉네임</p>
                <p class="font-line">동네</p>
            </div>

        </div>
        <hr>
        <div>
            <p class="font-bold font-size20">삼성 라이온즈 28일 LG전 블루존 4연석 팔아요</p>
            <p class="font-size15 fontcol-gray">스포츠/레저 ∙ 22시간 전</p>
            <p class="font-bold">16,000원</p>
            <p>
                정규리그 마지막 경기라 무조건 가려고 했는데
                급한 일이생겨 갑자기 못가게 됐습니다

                일괄 또는 2/2나눠서 거래 하겠습니다
            </p>
            <p class="font-size15 fontcol-gray">관심 28 ∙ 채팅 244 ∙ 조회 1266</p>
        </div>
        <hr>
        <div>
            <p>당근 인기중고</p>

            

        </div>

    </div>




    <footer-view></footer-view>
</template>
<script>
import { ref } from 'vue'
import FooterView from "@/components/FooterComp.vue";
import HeaderView from "@/components/HeaderComp.vue";

export default {
    name: 'DetailView',
    components: {
        HeaderView,
        FooterView,
    },
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
.body-500 {
    padding-left: 400px;
    padding-right: 400px;
}

.post-img {
    width: 100%;
    height: auto;
    padding-bottom: 20px;
}

.post {
    width: 100%;
    height: 100%;
    border-radius: 20px;
}

.font-bold {
    font-weight: bold;
}

.profile-img {
    width: 50px;
    height: 50px;
    border-radius: 70%;
}

.profile-1 {
    display: flex;
}

.font-line {
    margin-top: -20px;
}

.profile-1-2 {
    margin-left: 10px;
    font-size: 15px;
}

.font-size20 {
    font-size: 20px;
}

.font-size15 {
    font-size: 13px;
}

.fontcol-gray {
    color: #868e96;
}
</style>