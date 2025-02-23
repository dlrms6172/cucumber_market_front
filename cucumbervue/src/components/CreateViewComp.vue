<!-- <!— 글 수정 되는 부분 —> -->

<template>
    <div>
        <input type="text" placeholder="상품명" v-model="itemName" />
        <input type="text" placeholder="사용자" v-model="memberId"/>
        <input type="text" placeholder="동네" v-model="town"/>
        <input type="text" placeholder="가격" v-model="price"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="내용" v-model="iteminfo"></textarea>
        <button @click="index !== undefined ? update() : write()">{{ index !== undefined ? "수정" : "작성" }}</button>
    </div>
</template>

<script>
import data from '@/data/ItemList'
export default {
    name: 'CreateViewComp',
    data() {
        const index = this.$route.params.contentId;
        return {
            data: data,
            index: index,
            itemName: index !== undefined ? data[index].itemName : "", 
            memberId: index !== undefined ? data[index].memberId : "",
            iteminfo: index !== undefined ? data[index].iteminfo : "",
            town: index !== undefined ? data[index].town : "",
            price: index !== undefined ? data[index].price : "",
        }
    },
    methods: {
        write() {
            this.data.push({
                itemName: this.itemName,
                memberId: this.memberId,
                iteminfo: this.iteminfo,
                town: this.town,
                price: this.price
            })
            this.$router.push({
                path:"/readeviewcomp"
            })
        },
        update() {
            data[this.index].itemName = this.itemName
            data[this.index].memberId = this.memberId
            data[this.index].iteminfo = this.iteminfo
            data[this.index].town = this.town
            data[this.index].price = this.price
            this.$router.push({
                path:"/readviewcomp"
            })
        }
    }
}
</script>




<!-- <template>
    <div>
        <input type="text" placeholder="상품명" v-model="itmeName" />
        <textarea name="" id="" cols="30" rows="10" placeholder="내용" v-model="itmeInfo"></textarea>
        <button @click="index !== undefined ? update() : write()">{{ index !== undefined ? "수정" : "작성" }}</button>
    </div>
</template>

<script>
import data from '@/data/ItemList'
export default {
    name: 'CreateViewComp',
    data() {
        const index = this.$route.params.contentId;
        return {
            data: data,
            index: index,
            itmeName: index !== undefined ? data[index].itmeName : "", 
            itmeInfo: index !== undefined ? data[index].itmeInfo : "",
        }
        },
    methods: {
        write() {
            this.data.push({
                itemName: this.itemName,
                itmeInfo: this.itmeInfo
            })
            this.$router.push({
                path:"/readviewcomp"
            })
        },
        update() {
            data[this.index].itmeName = this.itmeName
            data[this.index].itmeInfo = this.itmeInfo
            this.$router.push({
                path:"/readviewcomp"
            })
        }
    }
}
</script>



-->



