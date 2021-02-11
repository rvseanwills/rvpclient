<template>
	
<div class="key-insights ">
	<div class="key-top-row">
		<FacebookPageGenders></FacebookPageGenders>
		<FacebookPageCountries></FacebookPageCountries>
	</div>
	<div class="key-chart-row">
		<FacebookPageInsights></FacebookPageInsights>
	</div>
</div>

</template>
<script>
	
import FacebookPageInsights from '@/components/FacebookPageInsights'
import FacebookPageDetails from '@/components/FacebookPageDetails'
import FacebookPageGenders from '@/components/FacebookPageGenders'
import FacebookPageCountries from '@/components/FacebookPageCountries'

import { mapMutations } from 'vuex'	

export default {
	name: "FacebookPageKey",
	components: {
	    FacebookPageInsights,
	    FacebookPageDetails,
	    FacebookPageGenders,
	    FacebookPageCountries,
  	},
  	methods: {
  		...mapMutations('facebook', ['unselectPage'])
  	}
}

</script>
<style type="text/css">
	
.key-insights {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
}

.key-insights > div {
	display: flex;
	width: 98%;
	padding: 8px;
}


.key-top-row {
	width: 99%;
	height: 20%;
	display: flex;
	justify-content: space-around;
}
.key-top-row > div {
	margin: 12px;
}
.key-chart-row {
	height: 70%;
}



</style>