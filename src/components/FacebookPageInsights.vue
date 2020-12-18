<template>
	<div class="lab">
		<!-- <div class="title">

			<p><span>SUMMITS</span></p>
			<p>60 DAYS HIGH-SPEED OBSERVATIONS</p>
			<p>LEFT IS THE RECENT THIRTY DAYS</p>
			<p>RIGHT IS INCREASE OR DECREASE</p>
			<p>KEY PAGE STATISTICS</p>
			
		</div> -->
		<div class="views stat" @mouseenter="transitionTrend('viewsTrend')" @mouseleave="transitionTrend('viewsTrend')">
			
			<div v-show="viewsTrend">

				<trend
				   v-if="viewsData"
				  :data="viewsData"
				  :height="100"
				  :gradient="['#42b983', '#d6d6d6', '#f94144']"
				  :padding="12"
				  :radius="4"
				  :stroke-width="2"
				  auto-draw
				  smooth>
				</trend>
				<p v-else style="text-align: center;"> Trend currently unavailable </p>			
			</div>
			<div class="overview" v-show="!viewsTrend">
				<p>Views</p>
				<p v-bind:class="{'increase': !viewsPercent.decrease,  'decrease': viewsPercent.decrease}">{{viewsPercent.percent}}%</p>
			</div>
		</div>

		<div class="likes stat" @mouseenter="transitionTrend('likesTrend')" @mouseleave="transitionTrend('likesTrend')">
			
			<div v-show="likesTrend">

				<trend
				   v-if="likesData"
				  :data="likesData"
				  :height="100"
				  :gradient="['#42b983', '#d6d6d6', '#f94144']"
				  :padding="12"
				  :radius="4"
				  :stroke-width="2"
				  auto-draw
				  smooth>
				</trend>
				<p v-else style="text-align: center;"> Trend currently unavailable </p>			
			</div>
			<div class="overview" v-show="!likesTrend">
				<p>likes</p>
				<p v-bind:class="{'increase': !likesPercent.decrease,  'decrease': likesPercent.decrease}">{{likesPercent.percent}}%</p>
			</div>
		</div>

		<div class="cta stat" @mouseenter="transitionTrend('ctaTrend')" @mouseleave="transitionTrend('ctaTrend')">
			
			<div v-show="ctaTrend">

				<trend
				   v-if="ctaData"
				  :data="ctaData"
				  :height="100"
				  :gradient="['#42b983', '#d6d6d6', '#f94144']"
				  :padding="12"
				  :radius="4"
				  :stroke-width="2"
				  auto-draw
				  smooth>
				</trend>
				<p v-else style="text-align: center;"> Trend currently unavailable </p>			
			</div>
			<div class="overview" v-show="!ctaTrend">
				<p>cta</p>
				<p v-bind:class="{'increase': !ctaPercent.decrease,  'decrease': ctaPercent.decrease}">{{ctaPercent.percent}}%</p>
			</div>
		</div>

		
	
		<div class="engagement stat" @mouseenter="transitionTrend('engagementTrend')" @mouseleave="transitionTrend('engagementTrend')">
			
			<div v-show="engagementTrend">

				<trend
				   v-if="engagementData"
				  :data="engagementData"
				  :height="100"
				  :gradient="['#42b983', '#d6d6d6', '#f94144']"
				  :padding="12"
				  :radius="4"
				  :stroke-width="2"
				  auto-draw
				  smooth>
				</trend>
				<p v-else style="text-align: center;"> Trend currently unavailable </p>			
			</div>
			<div class="overview" v-show="!engagementTrend">
				<p>cta</p>
				<p v-bind:class="{'increase': !engagementPercent.decrease,  'decrease': engagementPercent.decrease}">{{engagementPercent.percent}}%</p>
			</div>
		</div>
			
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Trend from "vuetrend"

export default {

	name: "FacebookPageInsights",
	components: {
		Trend
	},
	data () {
		return {
			viewsTrend: false,
			likesTrend: false,
			ctaTrend: false,
			engagementTrend: false,
			viewsData: null,
			viewsPercent: {
				decrease: null,
				change: "unavailable"
			},
			likesData: null,
			likesPercent: {
				decrease: null,
				change: "unavailable"
			},
			ctaData: null,
			ctaPercent: {
				decrease: null,
				change: "unavailable"
			},
			engagementData: null,
			engagementPercent: {
				decrease: null,
				change: "unavailable"
			}
		}
	},
	computed: {
	    ...mapState('facebook', ['facebook_user', 'business_id', 'pageInsights']),
	    ...mapState('account', ['user', 'token'])
	},
	methods: {
		...mapActions('facebook', ['getPageInsights']),
		sortPageInsights (unsorted_insights) {

			//Loop insights into views, likes, cta and engagement
			var _this = this;
			var currentMonth = '12'

			unsorted_insights.forEach( (insightCont) => {
				if (insightCont.name == 'page_views_total') {
					_this.viewsData = sortCurrentMonth(insightCont);
					_this.viewsPercent = calcPercent(insightCont)
				}
				if (insightCont.name == 'page_fan_adds_unique') {
					_this.likesData = sortCurrentMonth(insightCont);
					_this.likesPercent = calcPercent(insightCont)
				}
				if (insightCont.name == 'page_total_actions') {
					_this.ctaData = sortCurrentMonth(insightCont);
					_this.ctaPercent = calcPercent(insightCont)
				}
				if (insightCont.name == 'page_engaged_users') {
					_this.engagementData = sortCurrentMonth(insightCont);
					_this.engagementPercent = calcPercent(insightCont)
				}
			} )
			
			//Sort into a array of single values
			function sortCurrentMonth(fb_array) {
				
				var formattedArr = [];
				fb_array.values.forEach( (v) => {
					//Extract value
					if (v.end_time.substring(5,7) == currentMonth) {

						formattedArr.push(v.value);
					}
					
				})
				return formattedArr;
			}
			
			//Calculate if the data has increased or descreased by percentage
			function calcPercent(fb_array) {
				var values = fb_array.values;
				var lastValueDay = parseInt(values[values.length-1].end_time.substring(8,10))
				var formattedArr = [];

				values.forEach( (v) => {
					//Extract value
					if (parseInt(v.end_time.substring(8,10)) <= lastValueDay) {
						formattedArr.push(v.value);
					}
	
				})
				
				//Split formatted array into two seperate arrays for comparison
				var lastMonth = formattedArr.splice(0, lastValueDay);
				var thisMonth = formattedArr;
				
				//Add both arrays seperately and calc the percent incfease of decrease
				var lastMonthTotal = lastMonth.reduce((a, b) => a + b, 0);
				var thisMonthTotal = thisMonth.reduce((a, b) => a + b, 0);

				var percent = (( lastMonthTotal - thisMonthTotal ) / lastMonthTotal) * 100
					
				percent = percent.toFixed(1);

				var decrease;

				if (lastMonthTotal > thisMonthTotal) {
					percent = "-"+percent;
					decrease = true;
				}


				return {decrease, percent};
			}


		},
		transitionTrend(trend) {
			if (trend === 'viewsTrend'){
				this.viewsTrend = !this.viewsTrend;	
			}
			if (trend === 'likesTrend'){
				this.likesTrend = !this.likesTrend;	
			}
			if (trend === 'ctaTrend'){
				this.ctaTrend = !this.ctaTrend;	
			}
			if (trend === 'engagementTrend'){
				this.engagementTrend = !this.engagementTrend;	
			}
			
		}
	},
	created() {
		this.sortPageInsights(this.pageInsights.data);
	},
	beforeMount() {
    	var payLoad = {
    		business: this.user.business_id,
    		token: this.token,
    		facebook: null
       	}
    	if (this.facebook_user) {
    		payLoad.facebook = this.facebook_user;
    	}
    
		this.getPageInsights(payLoad);	
	}
}

</script>
<style>
	
.lab {
	width: 22%;
	height: 200px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	background-image: url("../assets/mountain.png");
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	padding: 8px;
	border-radius: 4px;
	/*-webkit-box-shadow: 0px 12px 15px 0px rgba(132,132,132,0.5); 
  	box-shadow: 0px 5px 8px 0px rgba(132,132,132,0.5);*/
}
.lab > div {
	width: 40%;
	color: black;
	display: flex;
	flex-direction: column;
	border-radius: 32px;
	margin-bottom: 26px;
	height: 80px;
	justify-content: center;
	align-content: center;
	border: solid 1px white;
	-webkit-box-shadow: 0px 12px 15px 0px rgba(132,132,132,0.5); 
  	box-shadow: 0px 5px 8px 0px rgba(132,132,132,0.5);

	
}

.decrease {
	color: red;
}
.increase {
	color: green;
}

.title {
	box-shadow: none !important;
	flex-direction: column;
	font-size: 8px;
	border-radius: 2px !important;
	height: 82px !important;
}
.title p {
	margin: 1px;
	font-style: italic;
}
.title p span {
	font-size: 8px;
	font-style: normal !important;
	font-weight: 900;
}

.trend {
	display: flex;
	flex-direction: column;
}

.overview {
	display: flex;
	justify-content: space-around;

}
.overview p {
    font-size: 16px;
    font-style: italic;
    font-weight: 600;
}






/*.likes {
	background-image: linear-gradient(130deg, #89f7fe 0%, #66a6ff 100%) !important;
}
.cta {
	background-image: linear-gradient(160deg, #89f7fe 0%, #66a6ff 100%) !important;
}

.clicks {
	background-image: linear-gradient(170deg, #89f7fe 0%, #66a6ff 100%) !important;
}*/




/*.views div:nth-child(1), .cta div:nth-child(1){
	width: 60%;
}
.views div:nth-child(2), .cta div:nth-child(2){
	width: 35%;
}*/

</style>