<template>
	<div class="lab">


		<div class="title">

			<p><span>SUMMITS</span></p>
			<p>60 DAYS HIGH-SPEED OBSERVATIONS</p>
			<p>LEFT IS THE RECENT THIRTY DAYS</p>
			<p>RIGHT IS INCREASE OR DECREASE</p>
			<p>KEY PAGE STATISTICS</p>
		</div>

		<div class="views">
			<div ref="trendContainer">
				<trend
				  :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0, 0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
				  :gradient="['#0000ff', '#b8f2e6', '#f94144']"
				  :height="80"
				  :padding="12"
				  :radius="1"
				  :stroke-width="4"
				  :stroke-linecap="butt"
				  auto-draw
				  smooth>
				</trend>			
			</div>
			<div class="overview">
				<p><img alt="By FADLI AINUL KIFLI, ID " src="../assets/insightsreview.png" width="8" height="8" /></p>
				<p>20%</p>
				<p class="overview-title">VIEWS</p>	
			</div>
		</div>

		<div class="likes">
			<div ref="trendContainer">
				<trend
				  :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
				  :gradient="['#0000ff', '#b8f2e6', '#f94144']"
				  :height="80"
				  :padding="12"
				  :radius="1"
				  :stroke-width="4"
				  :stroke-linecap="butt"
				  auto-draw
				  smooth>
				</trend>			
			</div>
			<div class="overview">
				<p><img alt="By FADLI AINUL KIFLI, ID " src="../assets/insightsreview.png" width="8" height="8" /></p>
				<p>20%</p>
				<p class="overview-title">LIKES</p>	
			</div>
		</div>

		<div class="cta">
			<div ref="trendContainer">
				<trend
				  :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
				  :gradient="['#0000ff', '#b8f2e6', '#f94144']"
				  :height="80"
				  :padding="12"
				  :radius="1"
				  :stroke-width="4"
				  :stroke-linecap="butt"
				  auto-draw
				  smooth>
				</trend>			
			</div>
			<div class="overview">
				<p><img alt="By FADLI AINUL KIFLI, ID " src="../assets/insightsreview.png" width="8" height="8" /></p>
				<p>20%</p>
				<p class="overview-title">CTA</p>	
			</div>
		</div>
	
		<div class="clicks">
			<div ref="trendContainer">
				<trend
				  :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
				  :gradient="['#0000ff', '#b8f2e6', '#f94144']"
				  :height="80"
				  :padding="12"
				  :radius="1"
				  :stroke-width="4"
				  :stroke-linecap="butt"
				  auto-draw
				  smooth>
				</trend>			
			</div>
			<div class="overview">
				<p><img alt="By FADLI AINUL KIFLI, ID " src="../assets/insightsreview.png" width="8" height="8" /></p>
				<p>20%</p>
				<p class="overview-title">CLICKS</p>	
			</div>
		</div>
			
	</div>
</template>
<script>
import Trend from "vuetrend"

export default {

	name: "FacebookPageInsights",
	components: {
		Trend
	},
	props: ['viewsSixtyDays'],
	data () {
		return {}
	},
	methods: {
		
	}
}

</script>
<style>
	
.lab {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-image: url("../assets/mountain-background.png");
	background-repeat: no-repeat;
}
.lab > div {
	color: black;
	display: flex;
	border-radius: 32px;
	margin-bottom: 26px;
	padding: 2px;
	height: 80px;
	justify-content: center;
	align-content: center;
	-webkit-box-shadow: 0px 12px 15px 0px rgba(132,132,132,0.5); 
  	box-shadow: 0px 5px 8px 0px rgba(132,132,132,0.5);

	
}

.title {
	box-shadow: none !important;
	flex-direction: column;
	font-size: 10px;
	border-radius: 2px !important;
	height: 82px !important;
}
.title p {
	margin: 3px;
	font-style: italic;
}
.title p span {
	font-size: 16px;
	font-style: normal !important;
	font-weight: 900;
}

.overview {
	color: white;
	font-size: 14px;
	margin: 10px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-left: 3px solid white;
}
.overview-title {
	font-size: 8px;
	float: right;
}
.overview p{
	width: 98%;
	text-align: center;
	margin: 0;
}


.views {
	background-image: linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%) !important;

}

.likes {
	background-image: linear-gradient(130deg, #89f7fe 0%, #66a6ff 100%) !important;
}
.cta {
	background-image: linear-gradient(160deg, #89f7fe 0%, #66a6ff 100%) !important;
}

.clicks {
	background-image: linear-gradient(170deg, #89f7fe 0%, #66a6ff 100%) !important;
}




/*.views div:nth-child(1), .cta div:nth-child(1){
	width: 60%;
}
.views div:nth-child(2), .cta div:nth-child(2){
	width: 35%;
}*/

</style>