<template>
    <div id="app">
        <AboutHeader></AboutHeader>
            
    
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

</style>