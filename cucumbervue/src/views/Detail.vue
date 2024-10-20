<template>
    <HeaderComp></HeaderComp>
    <div>
        <ListComp :item = "item"></ListComp>

    </div>
    <FooterComp></FooterComp>
</template>
<script>
import { ref } from 'vue'
import HeaderComp from '@/components/HeaderComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import ItemList from '@/data/ItemList';
import ListComp from '@/components/ListComp.vue';

export default {
    name: 'DetailView',
    data(){
        return{
            item : ItemList
        }
    },
    components: { ListComp, HeaderComp, FooterComp},

    setup() {
        const state = ref({
            message: 'list'
        });

        return {
            state
        };
    }
}
</script>
<style></style>