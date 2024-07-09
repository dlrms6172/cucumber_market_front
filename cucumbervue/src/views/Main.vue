<template>
  <div>
     <footer-vue>footer</footer-vue>
    <header-vue>header</header-vue>

  </div>


</template>
<script>
 import HeaderVue from '@/components/Header.vue'
 import FooterVue from "@/components/Footer.vue";

 export default {
   name: 'main-vue',
   props: [],
   components: {FooterVue, HeaderVue},
   data() {
     return {
       sampleData: ''
     };
   },
   setup() {}, // 컴포지션 API
   created() {},
   mounted() {},
   unmounted() {},
   methods: {},
   computed: {},
   watch: {}
 }
</script>
<style>

</style>
