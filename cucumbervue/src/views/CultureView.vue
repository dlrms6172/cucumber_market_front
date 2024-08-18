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

            <div class="culture-card-1">
                <div class="card-1-1">
                    <h3 class="card-1-1-font">스스로 판단하고<br> 주도적으로 일해요</h3>
                    <p class="card-1-2-font">우리는 모두 주도적으로 일해요. 누가<br> 시켜서가 아니라 스스로 팀에 기여할<br> 일을 찾고 몰입을 통해 일의 재미를<br>
                        느끼며 성장해요.</p>
                    <img src="images/Culture/culture2.jpg" class="card-img1">
                </div>

                <div class="card-1-2">
                    <h3 class="card-1-1-font">빠르게 실험하고<br> 확실히 성공해요</h3>
                    <p class="card-1-2-font">정답을 찾겠다며 오랜 시간 고민하지<br> 않아요. 사용자의 목소리에 귀 기울이고<br> 빠르게 실험하며 사용자를 위한 정답을<br> 만들어가요.</p>
                    <img src="images/Culture/culture2.jpg" class="card-img1">
                </div>

                <div class="culture-card-2">
                    <div class="card-1-3">
                        <h3 class="card-1-1-font">서로 신뢰하고<br> 솔직하게 소통해요</h3>
                        <p class="card-1-2-font">최고의 결과물을 위해 열정적으로 의견을<br>주고받고 충돌도 두려워하지 않습니다.<br> 단단한 신뢰를 바탕으로 편안하고<br> 안정적으로 소통할 수 있어요.</p>
                        <img src="images/Culture/culture2.jpg" class="card-img1">
                    </div>

                    <div class="card-1-4">
                        <h3 class="card-1-1-font">기록은 꼼꼼하게<br> 공유는 투명하게</h3>
                        <p class="card-1-2-font">모두가 사용자를 위한 결정을 내릴 수<br> 있도록, 일의 맥락과 흐름, 정보를 철저히<br> 기록하고 투명하게 공유합니다.</p>
                        <img src="images/Culture/culture2.jpg" class="card-img1">
                    </div>

                </div>
                <div class="culture-card-2">
                    <div class="card-1-1">
                        <h3 class="card-1-1-font">스스로 판단하고<br> 주도적으로 일해요</h3>
                        <p class="card-1-2-font">우리는 모두 주도적으로 일해요. 누가<br> 시켜서가 아니라 스스로 팀에 기여할<br> 일을 찾고 몰입을 통해 일의
                            재미를<br> 느끼며 성장해요.</p>
                        <img src="images/Culture/culture2.jpg" class="card-img1">
                    </div>

                    <div class="card-1-6">
                        <h3 class="card-1-1-font">당근 팀 문화는 끊임없이<br> 발전 중이에요</h3>
                        <p class="card-1-2-font">우리는 모두 주도적으로 일해요. 누가<br> 시켜서가 아니라 스스로 팀에 기여할<br> 일을 찾고 몰입을 통해 일의
                            재미를<br> 느끼며 성장해요.</p>
                    </div>

                </div>

            </div>
            

            <div class="clture-center">
                
                <p class="culture-center-text">지속가능한 성장을<br> 위해 아낌없이<br> 지원합니다</p>
                
                <div class="culture-slide">
                    <img src="images/Culture/culture7.avif" class="culture-img-7">
                    <p class="slide-text1">자율의 문화</p>
                    <p class="slide-text2">매년 최대 25일의 휴가 / 선택적 근로시간제 / 재택&사무실 하이브리드 근무</p>
                </div>
            </div>
        </div>

        <div class="culture-img-9-1">
            <div>
                <img src="images/Culture/culture8.avif" class="culture-img-8">
            </div>

            <div>
                <p class="culture-imgtext-9-1">따뜻한 세상을 꿈꾸는 동료들과<br> 몰입의 즐거움을 느끼며 성장해요</p>
            </div>
        </div>

        <div class="user-wrap">
            <div class="user-image">
                <img src="/images/About/aboutview7.png" alt="pho7">
            </div>
            <div class="user-text">
                <p class="about-font6">당근과 함께 성장해보세요</p>
                <p class="about-font3">채용공고 보러가기</p>
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
.culture-body {
    padding: 200px;
    padding-top: 0%;
    text-align: left;
}

.culture-font1 {
    padding-top: 100px;
    font-weight: bold;
    font-size: 52px;
}

.culture-pho1-img {
    width: 100%;
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

}
.culture-center-text {
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

.culture-card-1 {
    margin-top: 100px;
}

.card-1-1 {
    margin-top: 0%;
    display: inline-block;
    width: 400px;
    height: 470px;
    border-radius: 20px;
    border: 1px solid #f7f8fa;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 8px 0px;
    margin-left: 140px;
    margin-right: 15px;


}

.card-1-2 {
    display: inline-block;
    width: 400px;
    height: 470px;
    border-radius: 20px;
    border: 1px solid #f7f8fa;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 8px 0px;
    margin-left: 15px;

}
.card-1-3 {
    margin-top: 30px;
    display: inline-block;
    width: 400px;
    height: 470px;
    border-radius: 20px;
    border: 1px solid #f7f8fa;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 8px 0px;
    margin-left: 140px;
    margin-right: 15px;


}

.card-1-4 {
    display: inline-block;
    width: 400px;
    height: 470px;
    border-radius: 20px;
    border: 1px solid #f7f8fa;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 8px 0px;
    margin-left: 15px;

}
.card-1-6 {
    margin-top: 0%;
    display: inline-block;
    width: 400px;
    height: 470px;
    border-radius: 20px;
    border: 1px solid #f7f8fa;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 8px 0px;
    margin-left: 15px;
    background-color: #FFDD87;;

} 

.card-1-1-font {
    text-align: left;
    margin-top: 40px;
    margin-left: 40px;
    font-weight: bold;
    font-size: 35px;
}

.card-1-2-font {
    text-align: left;
    margin-left: 40px;
    margin-top: 20px;
}

.card-img1 {
    width: 100px;
    margin-left: 40px;
    margin-top: 50px;
}
.culture-img-7{
    border-radius: 20px;
    width: 100%;
}
.culture-slide {
    margin-top: 100px;
    padding-left: 100px;
    padding-right: 100px;

}
.slide-text1 {
    font-weight: bold;
    font-size: 25px;
    margin-top: 20px;
}
.slide-text2 {
    font-size: 17px;
    color: #868b94;
}
.culture-img-8 {
    width: 100%;
    height: 500px;
    background-size: cover;
}
.culture-img-9-1{
    position: relative;
}
.culture-imgtext-9-1 {
    color: white;
    text-align: center;
}
</style>