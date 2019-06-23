<template>
    <div class="header">
        <slot name="left"></slot>
        {{title}}
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    props:{
        title:String
    }
}
</script>

<style lang="">
    .header{
        width: 100%;
        height:30px;
        color:blue;
        background-color: #CCC;
    }
</style>