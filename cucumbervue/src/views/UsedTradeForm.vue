<template>
    <header-view></header-view>

    <div class="top-header">
        <p class="top-font">내 물건 팔기</p>
        <p></p>
    </div>

    

    <div class="body">

        <div class="image-trade">
            <ul class="image-button-plus">
                <label for="file">
                    <div class="btn-upload">

                        <img src="images/UsedTradeWritten/camera.png" class="camera-icon">
                    </div>
                </label>
                <input type="file" name="file" id="file">
            </ul>
        </div>


        <div class="title">
            <p class="b-title">제목</p>
            <input class="input" placeholder="제목" type="text" maxlength="10">
            <span class="textbox"></span>
        </div>

        <div class="sell">
            <p class="b-title">거래 방식</p>
            <div>
                <input class="sell-btn"  type="button" value="판매하기">
                <input class="sell-btn"  type="button" value="나눔하기">

            </div>
            <input class="input" placeholder="가격을 입력해주세요." type="text">
            <span class="textbox"></span>
            <div class="checkbox">
                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">가격 제한 받기

            </div>
        </div>

        <div class="explan">
            <p class="b-title">자세한 설명</p>
            <input class="ex-input" placeholder="---에 올릴 게시글 내용을 작성해주세요.(판매 금지 물품은 게시가 제한될 수 있어요.)" type="text">
            <span class="textbox"></span>
            
        </div>

        <div class="explan">
            <p class="b-title">거래 희망 장소</p>
            <input class="input" placeholder="위치 추가" type="text" maxlength="10">
            <span class="textbox"></span>
        </div>

        
    </div>



    <footer-view></footer-view>
</template>
<script>
import { ref } from 'vue'
import FooterView from "@/components/FooterComp.vue";
import HeaderView from "@/components/HeaderComp.vue";

export default {
    name: 'UsedTradeWrittenView',
    components: { HeaderView, FooterView },
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
.top-header{
    width: 100%;
    height: 250px;
    background-color: #FFF1AA;

}
.top-font {
    font-weight: bold;
    font-size: 30px;
    padding-left: 150px;
    padding-top: 50px;
}
.body {
    padding: 50px 0px 0px 150px;
}

.btn-upload {
    width: auto;
    height: auto;
    background: white;
    color: black;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    margin-left: -40px;


}

#file {
    display: none;
}


.input {
    border-radius: 10px;
    border: 1px solid #CCC;
    color: #555;
    box-sizing: border-box;
    font-size: 15px;
    height: 50px;
    padding: 10px 0px;
    position: relative;
    width: 200px;

    &:focus {
        outline: none;
    }
}

.sell {
    padding-top: 30px;
}

/* .input:focus+.underline {
    transform: scale(1);
} */

.textbox {
    display: inline-block;
    height: 2px;
    position: absolute;
    top: 185px;
    width: 202px;
}
.checkbox{
    margin: 15px 0px 15px 0px;
}
.explan {
    padding-top: 30px;
}
.b-title{
    font-weight: bold;
    font-size: 14px;
}
.ex-input {
    border-radius: 10px;
    border: 1px solid #CCC;
    color: #555;
    box-sizing: border-box;
    font-size: 15px;
    height: 400px;
    padding: 10px 0px;
    position: relative;
    width: 500px;

}
.sell-btn{
    border: 1px solid #CCC;
    border-radius: 15px;
    background-color: white;
    font-size: 15px;
    width: 80px;
    height: 40px;
    margin: 0px 15px 15px 0px;

}
.sell-btn:active {
    background-color: black;
    color: white;
}
.sell-btn:visited {
    background-color: black;
    color: white;
}
.camera-icon{
    width: 70px;
}
</style>