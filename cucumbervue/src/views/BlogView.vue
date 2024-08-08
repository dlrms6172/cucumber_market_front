<template>
    <div id="app">
        <AboutHeader></AboutHeader>
        <div class="blog-body">
            <img src="/images/Blog/blog1.png" class="blog-pho1-img">

            <div class="blog-center">
                <p class="blog-font1">'당근다움'을 어떻게 보여줄 것인가</p>
                <p class="blog-font2">당근 리브랜딩 비하인드 스토리 2: 핵심가치부터 캠페인까지</p>
            </div>

            <div class="blog-button">
                <button class="blog-button1" data-filter="all">전체</button>
                <button class="blog-button1" data-filter="cul">문화</button>
                <button class="blog-button1" data-filter="ser">서비스</button>
                <button class="blog-button1" data-filter="cur">커리어</button>
            </div>


            
            <div class="blog-list" data-filter-id="blog-listt">
                

                <div class="blog-list1" data-filter="cul">
                    <img src="/Images/Blog/blog2.png" class="blog-pho2-img">
                    <p class="blog-font3">따뜻하고 정겨운 동네 같은 당근 오피스에서의<br> 하루</p>
                    <p class="blog-font2">당근 팀원이 소개하는 당근 오피스 A to Z 누리는 방법</p>
                    <button class="blog-button2">문화</button>
                </div>


                <div class="blog-list2" data-filter="cul">
                    <img src="/Images/Blog/blog15.jpg" class="blog-pho2-img">
                    <p class="blog-font3">협업과 몰입을 극강으로, 부동산팀 피처톤 데이</p>
                    <p class="blog-font2">제안부터 배포까지 딱 하루면 됩니다</p>
                    <button class="blog-button2">문화</button>
                </div>

                <div class="blog-list3" data-filter="ser">
                    <img src="/Images/Blog/blog3.avif" class="blog-pho2-img">
                    <p class="blog-font3">'당근다움을 어떻게 보여줄 것인가'</p>
                    <p class="blog-font2">당근 리브랜딩 비하인드 스토리2 : 핵심가치부터 캠페인까지</p>
                    <button class="blog-button3">서비스</button>
                </div>

                <div class="blog-list4" data-filter="cul">
                    <img src="/Images/Blog/blog4.jpg" class="blog-pho2-img">
                    <p class="blog-font3">리더는 혼자가 아니니까, Cheer Leaders!</p>
                    <p class="blog-font2">당근 리더 네트워킹의 장, 제1회 당근 리더 워크샵</p>
                    <button class="blog-button2">문화</button>
                </div>

                <div class="blog-list1" data-filter="ser">
                    <img src="/Images/Blog/blog6.jpg" class="blog-pho2-img">
                    <p class="blog-font3">모두가 최적의 집을 찾도록, 부동산팀이 그리는<br> 시장의 미래</p>
                    <p class="blog-font2">당신 근처를 바꾸는 사람들 - 부동산 서비스를 만드는 부동산팀</p>
                    <button class="blog-button3">서비스</button>
                </div>


                <div class="blog-list2" data-filter="ser">
                    <img src="/Images/Blog/blog7.jpg" class="blog-pho2-img">
                    <p class="blog-font3">고민보다 실행하라, 성장 궤도를 달리는 중고차<br> 직거래</p>
                    <p class="blog-font2">당신 근처를 바꾸는 사람들 - 중고차 직거래를 만드는 중고차팀</p>
                    <button class="blog-button3">서비스</button>
                </div>

                <div class="blog-list3" data-filter="ser">
                    <img src="/Images/Blog/blog8.jpg" class="blog-pho2-img">
                    <p class="blog-font3">동네에서 만나요! 그룹플랫폼팀이 꿈꾸는<br> 새로운 라이프스타일</p>
                    <p class="blog-font2">당신 근처를 바꾸는 사람들 - 당근 모임을 만드는 그룹플랫폼팀</p>
                    <button class="blog-button3">서비스</button>
                </div>

                <div class="blog-list4" data-filter="ser">
                    <img src="/Images/Blog/blog9.jpg" class="blog-pho2-img">
                    <p class="blog-font3">동네부터 기업까지, 공고실이 목표를 향해<br> 달리는 법</p>
                    <p class="blog-font2">당근 근처를 바꾸는 사람들 - 당근 광고를 만드는 광고실</p>
                    <button class="blog-button3">서비스</button>
                </div>

                <div class="blog-list1" data-filter="cul">
                    <img src="/Images/Blog/blog10.jpg" class="blog-pho2-img">
                    <p class="blog-font3">당근 문화의 날을 소개합니다</p>
                    <p class="blog-font2">솔직하게 충돌하고 다같이 신나게 노는 날 | 피플팀 조직문화 Luke 인터뷰</p>
                    <button class="blog-button2">문화</button>
                </div>


                <div class="blog-list2" data-filter="cul">
                    <img src="/Images/Blog/blog11.png" class="blog-pho2-img">
                    <p class="blog-font3">우리 동네 선거 서비스, 당근 최고 DAU를<br> 기록하다</p>
                    <p class="blog-font2">2024 선거 서비스 TF 4인 인터뷰</p>
                    <button class="blog-button3">서비스</button>
                </div>

                <div class="blog-list3" data-filter="cul">
                    <img src="/Images/Blog/blog12.jpg" class="blog-pho2-img">
                    <p class="blog-font3">당근의 실험 문화는 어떻게 자리 잡았을까</p>
                    <p class="blog-font2">데이터 분석가 출신 PM이 말하는 '실험에 강한 팀' 만드는 방법</p>
                    <button class="blog-button2">문화</button>
                </div>

                <div class="blog-list4" data-filter="cur">
                    <img src="/Images/Blog/blog13.jpg" class="blog-pho2-img">
                    <p class="blog-font3">당근 중고거래가 아직 현재진행형인 이유</p>
                    <p class="blog-font2">당근 리더 인터뷰 - 중고거래실</p>
                    <button class="blog-button3">커리어</button>
                </div>

                <div class="blog-list1" data-filter="cur">
                    <img src="/Images/Blog/blog14.jpg" class="blog-pho2-img">
                    <p class="blog-font3">성장하는 엔지니어링 리더는 어떻게 일할까</p>
                    <p class="blog-font2">당근 리더 인터뷰 - 공통 서비스 개발팀</p>
                    <button class="blog-button3">커리어</button>
                </div>


                <div class="blog-list2" data-filter="cul">
                    <img src="/Images/Blog/blog15.jpg" class="blog-pho2-img">
                    <p class="blog-font3">20년 커리어, 또 한번의 성장에 도정할 때</p>
                    <p class="blog-font2">당근 리더 인터뷰 - 로컬 비즈니스 실</p>
                    <button class="blog-button2">문화</button>
                </div>

                <div class="blog-list3" data-filter="cur">
                    <img src="/Images/Blog/blog3.avif" class="blog-pho2-img">
                    <p class="blog-font3">주도적인 팀을 만드는 가장 강력한 리더십 도구</p>
                    <p class="blog-font2">당근 리더 인터뷰 - 검색실</p>
                    <button class="blog-button3">커리어</button>
                </div>

                <div class="blog-list4" data-filter="cur">
                    <img src="/Images/Blog/blog4.jpg" class="blog-pho2-img">
                    <p class="blog-font3">서비스 성장을 가속하는 팀워크를 만드는 법</p>
                    <p class="blog-font2">당근 리더 인터뷰 - 당근알바팀</p>
                    <button class="blog-button3">커리어</button>
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

    //     const filterMenuInit = () => {
    //     const filters = document.querySelectorAll('[data-filter-id]');

    //     filters.forEach(filter => {
    //         const filterBtns = [...filter.querySelectorAll('[data-filter]')].filter(el => el.nodeName === 'BUTTON');
    //         const filterLists = [...filter.querySelectorAll('[data-filter]')].filter(el => el.nodeName === 'LI');

    //         filterBtns.forEach(btn => {
    //             btn.addEventListener('click', () => {
    //                 const filterType = btn.getAttribute('data-filter');

    //                 filterBtns.forEach(btn => btn.classList.remove('active'));
    //                 btn.classList.add('active');

    //                 filterLists.forEach(list => {
    //                     if (filterType === 'all'){
    //                         list.style.display = 'list-item';
    //                         return;
    //                     }
                        
    //                     list.style.display = list.getAttribute('data-filter') === filterType ? 'list-item' : 'none';
    //                 })
    //             });
    //         })
    //     })
    // };
    
    // filterMenuInit();

    }
}
</script>
<style>
.blog-body {
    padding: 160px;
    min-height: 100%;
}

.blog-pho1-img {
    width: 1200px;
    height: 550px;
    object-fit: cover;
    border-radius: 30px;
}

.blog-center {
    text-align: center;
    margin-top: 30px;
    padding: 15px;
}

.blog-font1 {
    font-weight: bold;
    font-size: 30px;
}

.blog-font2 {
    color: gray;
    font-size: 16px;
}

.blog-button1 {
    width: 60px;
    border-radius: 12px;
    background-color: #f1f3f5;
    color: gray;
    border: none;
    display: inline-block;
    margin-right: 10px;
}
.blog-button2 {
    width: 50px;
    border-radius: 12px;
    background-color: #f1f3f5;
    color: gray;
    border: none;
    margin-right: 10px;
    margin-top: 20px;
    display: block;
}

.blog-button3 {
    width: 70px;
    border-radius: 12px;
    background-color: #f1f3f5;
    color: gray;
    border: none;
    margin-right: 10px;
    margin-top: 20px;
    display: block;
}

.blog-button1:hover {
    background-color: black;
    color: white;
}

.blog-pho2-img {
    width: 500px;
    border-radius: 20px;
    margin-top: 40px;
}
.blog-font3{
    font-weight: bold;
    font-size: 26px;
    margin-top: 20px;
}
.blog-list{
    display: flex;
    flex-wrap: wrap;
}
.blog-list2{
    margin-left: 140px;
}
.blog-list4{
    margin-left: 140px;

}
</style>