<template>
<div class="lab lab-genders">
	<div class="genders">
		<div class="overview highest">
			<p>Male</p>
			<p>30%</p>
		</div>

		<div class="overview lowest">
			<p>Female</p>
			<p>20%</p>
		</div>

		<div class="overview lowest">
			<p>Other</p>
			<p>20%</p>
		</div>

	</div>

	<div class="ages">
		<div class="overview highest">
			<p>&lt; 35</p>
			<p>20%</p>
		</div>

		<div class="overview lowest">
			<p>&gt; 35</p>
			<p>20%</p>
		</div>

		<div class="overview avg">
			<p>Avg.</p>
			<p>36</p>
		</div>

	</div>


</div>
</template>
<script>

import Trend from "vuetrend"


export default {
	name: 'FacebookPageGenders',
	components: {
	    Trend
	},
	data () {
		return {
			viewsData: null,
			viewsPercent: {
				decrease: null,
				change: "unavailable"
			}
		}
	}
}
	
</script>
<style type="text/css" scoped>

.lab {
	display: flex;
	flex-direction: column;

}

.lab-genders > div {
	display: flex;
	align-items: center;
}

.genders, .ages {
	margin: 6px;
	padding: 6px;
	font-size: 12px;
}


.genders > div, .ages > div {
	padding: 6px;
}


.overview {
	width: 30%;
	display: flex;
}

.overview p {
	margin: 2px;
}



.avg {
	border-bottom: 2px solid yellow;
}

</style>