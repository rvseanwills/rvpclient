<template>
	
	<div class="page-details">   
	    <div class="info">
	    	<div>
	    		<router-link to="/facebookPages">Pages</button></router-link>
	    		<img v-bind:src="pageDetails.picture.data.url" width="25" height="25">
	    	</div>
	    	<div>
	    		<p>Creator</p>
	    	</div>
	    	<div>
	    		<p>Your account</p>
	    	</div>
	    	<div>
	    		<p>Fans</p>
	    	</div>
	    	<div>
	    		<p>Show Live View</p>
	    	</div>
	    
	    </div>
	</div>

</template>
<script>
import { mapState, mapActions } from 'vuex'
	

export default {
	name: "FacebookPageDetails",
	computed: {
		...mapState('facebook', ['pageDetails']),
		...mapState('account', ['token'])
	},
	methods: {
		...mapActions('facebook', ['getPageDetails']),
	},
	beforeMount() {

		var page_id = 'wemanagebusiness' // Get from DB

		//How do we check that the page is under the users business profile

		var payLoad = {
    		page_id: page_id,
    		token: this.token
       	}

    	this.getPageDetails(payLoad);

	}

}

</script>
<style type="text/css" scoped>
	
/*Details styles*/

.page-details {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100%;
}

.info {
	display: flex;
	justify-content: space-around;
	width: 100%;
}

.info div {
	font-size: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	width: 18%;
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
}



.page-details img {
  margin: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  border-radius: 32px;
}

</style>