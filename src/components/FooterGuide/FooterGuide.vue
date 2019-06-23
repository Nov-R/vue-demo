<template>
    <div>
        <hr>
        <router-link to='/index/msite'  :class="{clickbtn:'/index/msite'===$route.path}">msite</router-link>
        <router-link to='/index/order' :class="{clickbtn:'/index/order'===$route.path}">order</router-link>
        <router-link to='/index/profile' :class="{clickbtn:'/index/profile'===$route.path}">profile</router-link>
        <router-link to='/index/search' :class="{clickbtn:'/index/search'===$route.path}">search</router-link>
    </div>
</template>

<script>

export default {
    
}
</script>

<style lang="">
    .clickbtn{
        color: blue
    }
</style>