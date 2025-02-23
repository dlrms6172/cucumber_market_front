<template>
    <div>
        <div class="item_name">{{ data.itemName }}</div>
        <div class="member_ID">{{ data.memberId }}</div>
        <div class="item_info">{{ data.iteminfo }}</div>
        <div>{{ data.town }}</div>
        <div>{{ data.price }}</div>
        <button @click="updateData">수정</button>
        <button @click="deleteData(index)">삭제</button>        
    </div>
</template>

<script>
import data from '@/data/ItemList';
export default {
    name: 'DetViewComp',
    data() {
        const index = this.$route.params.contentId
        return {
            data: data[index],
            index: index
        }
    },
    methods: {
        // 특정인덱스인 값을 삭제할 때 사용함
        deleteData() {
            data.splice(this.index, 1)
            this.$router.push({
                path:"/readviewcomp"
            })
        },

        updateData() {
            this.$router.push({
                name: 'createviewcomp',
                params: {
                    contentId: this.index
                }
            })
        }

    },
}
</script>

<!-- <template>
    <HeaderComp></HeaderComp>
    <div class="body-400px">
        <div class="det-itemimage">
            <img :alt="item.itemImage" :src="item.itemImageUrls">
        </div>
        <div class="profile">
            <div>
                <img src="/images/Detail/profile.png" class="profile-img">
            </div>
            <div class="member-for">
                <p class="font-bold">{{ item.memberId }}</p>
                <p>{{ item.town }}</p>
            </div>



        </div>
        <hr>
        <div>
            <div class="font-bold">{{ item.itemName }}</div>
            <div class="font-size15 fontcol-gray">{{ item.categoryId }} ∙ {{ item.postDate }}시간전</div>
            <div class="martop-15">{{ item.price }}</div>
            <div class="martop-15">{{ item.iteminfo }}</div>
            <div class="martop-15 marbot-15 font-size15 fontcol-gray">관심 {{ item.likeCount }} ∙ 조회 {{
                item.viewCount }}</div>
            <button @click="updateData">수정</button>
            <button @click="deleteData(index)">삭제</button>
        </div>

        <div>
            <p class="font-bold martop-15">당근 인기중고</p>
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
    <FooterComp></FooterComp>
</template>

<script>
import item from '@/data/ItemList';
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';

const BASE_URL = "https://api.oi-market.kro.kr/";

export default {
    name: 'DetViewComp',
    components: { HeaderComp, FooterComp },
    data() {
        const index = this.$route.params.contentId
        return {
            item: item[index],
            index: index
        }
    },
    methods: {
        getData() {
            this.$axios
                .get(BASE_URL + "/item/${itmeId}")
                .then((res) => {
                    console.log("성공", res);
                })
                .catch((error) => {
                    console.log("실패", error);
                })
        },

        // 특정인덱스인 값을 삭제할 때 사용함
        deleteData() {
            if (!confirm("삭제하시겠습니까?")) return

            item.splice(this.index, 1)
            this.$router.push({
                path: "/readviewcomp"
            })
        },

        updateData() {
            this.$router.push({
                name: 'CreateViewComp',
                params: {
                    contentId: this.index
                }
            })
        }
    },
}
</script> -->
<style scoped>
.body-400px {
    padding-left: 400px;
    padding-right: 400px;
}

.det-itemimage {
    width: 500px;
    height: 500px;
    border-radius: 10px;
}

.profile-img {
    border-radius: 50px;
    width: 50px;
    height: 50px;
}

.profile {
    display: flex;
}

.member {
    display: flex;
}

.member-for {
    margin-top: 10px;
    margin-left: 10px;
    line-height: 50%;
}

.font-bold {
    font-weight: bold;
}

.fontcol-gray {
    color: #868e96;
}

.font-size15 {
    font-size: 15px;
}

.martop-15 {
    margin-top: 15px;
}

.marbot-15 {
    margin-bottom: 15px;
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


</style>