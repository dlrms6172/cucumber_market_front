<template>
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