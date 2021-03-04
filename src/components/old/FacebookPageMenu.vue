<template>
<div class="pages_menu">
	<div class="page" v-for="page in pages">
		<router-link to="/facebook" ><img v-bind:src="page.cover.source" width="360px" height="180px" v-on:click="selectPage(page.id)"></router-link>
	</div>
</div>
</template>
<script type="text/javascript">

import { mapState, mapActions, mapMutations } from 'vuex'	

export default {
	name: "FacebookPageMenu",
	computed: {
		...mapState('facebook', ['pages']),
		...mapState('account', ['token'])
	},
	methods: {
		...mapActions('facebook', ['getPages']),
		...mapMutations('facebook', ['selectPage']),
	},
	beforeMount() {
		//How do we check that the page is under the users business profile
		var payLoad = {
    		token: this.token
       	}
    	this.getPages(payLoad);
	}
}
	
</script>
<style type="text/css" scoped>

.pages_menu {
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;

}

.page {
	border-radius: 6px;
	padding: 6px;
	background-image: linear-gradient(-45deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
	cursor: pointer;
	margin: auto;
}

.page:hover {
	background-image: linear-gradient(45deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

.page img {
	border-radius: 4px;
	box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

</style>