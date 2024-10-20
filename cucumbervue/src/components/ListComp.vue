<template>

    <div class="body-500">


        <div class="post-img">
            <img src="/images/Detail/detail1.webp" class="post">
        </div>
        <div class="profile-1">
            <div class="profile-1-1">
                <img src="/images/Detail/profile.png" class="profile-img">
            </div>
            <div class="profile-1-2">
                <div class="profile-wrap">
                    <div class="profile-left">
                        <p class="font-bold">{{ item[$route.params.id].nickname }}</p>
                        <p class="font-line">{{ item[$route.params.id].town }}</p>

                    </div>
                    <div class="profile-right">
                        <div class="temperature">
                            <p class="temperture-num">{{ item[$route.params.id].temperature }}</p>
                            <progress class="temp-bar line-hei" max="100" min="0" value="35"></progress>
                            <div>
                                <p class="fontcol-gray temp-font">매너온도</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div class="temperatuer-bar">
                    </div>
                </div>
            </div>

        </div>
        <hr>
        <div>
            <p class="font-bold font-size20">{{ item[$route.params.id].product_name }}</p>
            <p class="font-size15 fontcol-gray">{{ item[$route.params.id].category }}</p>
            <p class="font-bold">{{ item[$route.params.id].product_price}}</p>
            <p>{{ item[$route.params.id].content }}</p>
            <p class="font-size15 fontcol-gray">관심 {{ item[$route.params.id].like }}  ∙ 채팅 {{ item[$route.params.id].chat }} ∙ 조회 {{ item[$route.params.id].view }}</p>
        </div>
        <div class="common-buttons">
            <button type="button"  @click="updateData">수정</button>&nbsp;
            <button type="button"  @click="deleteData">삭제</button>&nbsp;
        </div>
        <hr>
        <div>
            <p class="font-bold">당근 인기중고</p>
            <div class="fam-1">
                <div class="fam-2">
                    <img src="/images/Detail/detail2.webp" class="fam-used margin-right-20px">
                    <p class="line-heii">LG 제습기</p>
                    <p class="line-heii font-bold">20,000원</p>
                    <p class="line-hei">부산 사하구 다대제2동</p>
                    <p class="font-size15 fontcol-gray line-hei">관심 3 ∙ 채팅 22</p>
                </div>
                <div class="fam-2">
                    <img src="/images/Detail/detail3.webp" class="fam-used margin-right-20px">
                    <p class="line-heii">고구마 캐기 체험</p>
                    <p class="line-heii font-bold">5,000원</p>
                    <p class="line-hei">경기도 평택시 송북동</p>
                    <p class="font-size15 fontcol-gray line-hei">관심 37 ∙ 채팅 15</p>
                </div>
                <div class="fam-2">
                    <img src="/images/Detail/detail4.webp" class="fam-used margin-right-20px">
                    <p class="line-heii">아이폰 14 팔아요</p>
                    <p class="line-heii font-bold">100,000원</p>
                    <p class="line-hei">경남 진주시 내동면</p>
                    <p class="font-size15 fontcol-gray line-hei">관심 25 ∙ 채팅 10</p>
                </div>
            </div>
            <div class="fam-1 margin-top-30px">
                <div class="fam-2">
                    <img src="/images/Detail/detail5.webp" class="fam-used margin-right-20px">
                    <p class="line-heii">신일 이동식에어컨 판매합니다</p>
                    <p class="line-heii font-bold">20,000원</p>
                    <p class="line-hei">경기도 수원시 장안구 천천동</p>
                    <p class="font-size15 fontcol-gray line-hei">관심 20 ∙ 채팅 6</p>
                </div>
                <!-- <img src="/images/Detail/detail2.webp" class="fam-used margin-right-20px"> -->
                <div class="fam-2">
                    <img src="/images/Detail/detail6.webp" class="fam-used margin-right-20px">
                    <p class="line-heii">화목난로</p>
                    <p class="line-heii font-bold">30,000원</p>
                    <p class="line-hei">광주 서구 퐁암동</p>
                    <p class="font-size15 fontcol-gray line-hei">관심 27 ∙ 채팅 24</p>
                </div>
                <div class="fam-2">
                    <img src="/images/Detail/detail7.webp" class="fam-used margin-right-20px">
                    <p class="line-heii">삼성 냉장고</p>
                    <p class="line-heii font-bold">50,000원</p>
                    <p class="line-hei">대구 동구 각산동</p>
                    <p class="font-size15 fontcol-gray line-hei">관심 25 ∙ 채팅 10</p>
                </div>
            </div>





        </div>
    </div>
</template>
<script>
import ItemList from '@/data/ItemList';
export default {
    name: 'ListComp',
    props: {
        item: Array
    },
    data() {
        const index = this.$route.params.id
        return {
            ItemList:ItemList[index],
            index: index,
        }
    },
    methods: {
        deleteData(){
            if (!confirm("삭제하시겠습니까?")) return

            ItemList.splice(this.index, 1)
            this.$router.push({
                path: '/usedtrade'
            })
        },
        updateData(){
            this.$router.push({
                name: 'usedtradeform',
                params: {
                    id: this.index
                }
            })
        },
        
    }
    // fnUpdate() {
    //     this.$router.push({
    //         name: 'usedtradeform',
    //         params:{
    //             Id: this.index
    //         }
    //     })
    // },
    // fnDelete() {
    //     ItemList.splice(this.index,1)
    //     this.$route.push({
    //         path:"/"
    //     })
            
    // }
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

.fam-used {
    width: 210px;
    height: 210px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.margin-right-20px {
    margin-right: 30px;
}

.margin-left-20px {
    margin-left: 10px;
}

.fam-1 {
    display: flex;
}

.margin-top-30px {
    margin-top: 30px;
}

.line-hei {
    line-height: 55%;

}

.line-heii {
    line-height: 100%;
}
.profile-wrap {
    display: flex;
}
.temperture-num {
    margin-left: 450px;
}
.temp-bar {
    float: right;
}
.temp-font {
    text-align: right;
    margin-top: 40px;
    font-size: 13px;
}
</style>