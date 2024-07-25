<template>
    <div id="app">
        <AboutHeader></AboutHeader>
        <div class="culture-body">
            <div class="culture-font1">
                <p>즐겁게 몰입하고<br> 크게 성장합니다</p>
            </div>

            <img src="/images/Culture/culture1.png" class="culture-pho1-img">

            <div class="culture-font2">
                <p>당근 팀에는 일에 몰입할 때 즐거움을 느끼는 사람들이<br> 모였습니다. 개인은 자신의 역량을 마음껏 발휘하고 팀은<br> 서로의 잠재력을 최대로 끌어내면서, 혼자서는 상상할 수
                    없던<br> 눈부신 성장을 함께 이루어가고 있습니다.</p>
            </div>

            <div class="clture-center">
                <p>당근 팀은 이렇게 일해요</p>
            </div>

            <div class="culture-card">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card border-light mb-3">
                            <div class="card-body">
                                <h5 class="card-title-1">스스로 판단하고<br> 주도적으로<br> 일해요</h5>
                                <p class="card-text-1">우리는 모두 주도적으로 일해요. 누가<br> 시켜서가 아니라 스스로 팀에 기여할<br> 일을 찾고 몰입을 통해 일의
                                    재미를<br> 느끼며 성장해요.</p>
                            </div>
                            <img src="/images/Culture/culture2.jpg" class="card-img-top" alt="...">
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-light mb-3">

                            <div class="card-body">
                                <p class="card-title-1">빠르게 실험하고<br> 확실히 성공해요</p>
                                <p class="card-text-1">정답을 찾겠다며 오랜 시간 고민하지<br> 않아요. 사용자의 목소리에 귀 기울이고<br> 빠르게 실험하며 사용자를
                                    위한 정답을<br> 만들어가요.</p>
                            </div>
                            <img src="/images/Culture/culture3.jpg" class="card-img-top" alt="...">
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-light mb-3">

                            <div class="card-body">
                                <h5 class="card-title-1">서로 신뢰하고<br> 솔직하게<br> 소통해요</h5>
                                <p class="card-text-1">최고의 결과물을 위해 열정적으로 의견을<br> 주고받고 충돌도 두려워하지 않습니다.<br> 단단한 신뢰를 바탕으로
                                    편안하고<br> 안정적으로 소통할 수 있어요.</p>
                            </div>
                            <img src="/images/Culture/culture4.jpg" class="card-img-top" alt="...">
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-light mb-3">

                            <div class="card-body">
                                <h5 class="card-title-1">기록은 꼼꼼하게<br> 공유는 투명하게</h5>
                                <p class="card-text-1">모두가 사용자를 위한 결정을 내릴 수<br> 있도록, 일의 맥락과 흐름, 정보를 철저히<br> 기록하고 투명하게
                                    공유합니다.</p>
                            </div>
                            <img src="/images/Culture/culture5.jpg" class="card-img-top" alt="...">
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-light mb-3">

                            <div class="card-body">
                                <h5 class="card-title-1">나보다 뛰어난<br> 동료와 함께 해요</h5>
                                <p class="card-text-1">업계 최고 수준의 동료들과 함께하는<br> 것은 배움과 성장의 가장 큰 원동력이<br> 됩니다.</p>
                            </div>
                            <img src="/images/Culture/culture6.jpg" class="card-img-top" alt="...">
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border-light mb-3">

                            <div class="card-body">
                                <div class="card-6">
                                    <h5 class="card-title-1">당근 팀 문화는<br> 끊임없이 발전<br> 중이에요</h5>
                                    <p class="card-text-2">블로그 글 보러가기!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="clture-center">
                <p>지속가능한 성장을<br> 위해 아낌없이<br> 지원합니다</p>
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
<style>
.culture-body {
    padding: 50px;
    text-align: left;
}

.culture-font1 {
    padding-top: 100px;
    font-weight: bold;
    font-size: 52px;
}

.culture-pho1-img {
    width: 1160px;
    height: 600px;
    object-fit: cover;
    border-radius: 30px;
    margin-top: 50px;
}

.culture-font2 {
    margin-top: 40px;
    font-weight: bold;
    font-size: 25px;
}

.clture-center {
    text-align: center;
    margin-top: 100px;
    font-size: 40px;
    font-weight: bold;
}

.culture-card {
    width: 800px;
    display: block;
    margin: auto;
    margin-top: 50px;
}

.card-img-top {
    width: 100px;
    height: 100px;
}

.card-title-1 {
    font-weight: bold;
    font-size: 40px;
}
.col {
    z-index: -1;
}

</style>