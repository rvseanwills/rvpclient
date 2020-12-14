<template>
	<div class="facebookpage-container">

		<div class="insights-cont">
			
			<div class="insightslab">
				
			</div>
		</div>
		<div class="highlights-cont">
			<div class="page-details">
			
				<!-- <img v-bind:src="pageDetails.cover.source" width="180" height="90"> -->
				<img v-bind:src="pageDetails.picture.data.url">
				<div class="info">
					<p>{{pageDetails.name}}</p>
					<p>Other details</p>
				</div>
				

			</div>
			<FacebookPageInsights></FacebookPageInsights>
		</div>
		<div class="manager-cont">
			
		</div>
	
		
	</div>
</template>
<script>
	
import { mapState, mapActions } from 'vuex'
import FacebookPageInsights from './FacebookPageInsights'

export default {

	name: "FacebookPage",
	components: {
		FacebookPageInsights
	},
	computed: {
		...mapState('account', ['user']),
		...mapState('facebook', ['pageDetails'])
	},
	methods: {
		...mapActions('facebook', ['getPageDetails'])
	},
	created () {
		var token = this.user.token;
		var page_id = '1'
		this.getPageDetails({page_id, token });
		console.log(this.pageDetails);
	}
}

</script>
<style>

.facebookpage-container {
	height: 98%;
	display: flex;
	align-content: center;
	justify-content: space-between;
}

.facebookpage-container > div {
	width: 37.5%;
}

/* INSIGHTS */
.insights-cont {

	/*background: #e52d27;  
	background: -webkit-linear-gradient(to right, #b31217, #e52d27); 
	background: linear-gradient(to right, #b31217, #e52d27); */
	border-radius: 24px;
	display: flex;
	flex-direction: column;
}

.page-details {
	margin-bottom: 32px;
	display: flex;

 }

.info {
	display: flex;
	flex-direction: column;
	text-align: right;
	width: 80%;
}

.page-details img {
	width: 20%;
	-webkit-box-shadow: 0px 12px 15px 0px rgba(132,132,132,0.5); 
  	box-shadow: 0px 10px 20px 0px rgba(132,132,132,0.5);
	border-radius: 16px;
}

.page-details p {
	display: inline;
	font-size: 12px;
	text-transform: uppercase;
	margin: 0;
	margin-left: 12px !important;
}





.highlights-cont {
	padding: 12px;
	width: 20% !important;
}

.manager-cont {
	border-radius: 24px;
	/*background: #fc4a1a;  
	background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a); 
	background: linear-gradient(to right, #f7b733, #fc4a1a);*/

}






</style>