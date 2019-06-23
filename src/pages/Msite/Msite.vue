<template>
	<div>
		<HeaderTop title="你好呀">
			<span slot="left"><b>huwiadhuwa</b></span>
			<span slot="right"><b>fe</b></span>
		</HeaderTop>
		<h1>Msite</h1>
		<img src="./images/1.jpg" alt="" style="width:150px;height:150px">	
		<img src="./images/2.jpg" alt="" style="width:150px;height:150px">	
		<img src="./images/3.jpg" alt="" style="width:150px;height:150px">	
		<ShopList/>
	</div>
</template>
<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
import ShopList from "../../components/ShopList/ShopList.vue"
export default {
	components:{
		HeaderTop,
		ShopList
	}
}
</script>