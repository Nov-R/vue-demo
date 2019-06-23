<template>
    <div>
        <h1>主页面</h1>
        <router-view/>
        <FooterGuide/>
    </div>
</template>
<script>
import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
export default {
    components:{
        FooterGuide:FooterGuide,
        
    }
}
</script>