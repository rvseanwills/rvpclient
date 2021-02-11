<template>
	<div class="reports-container">
		<div class="main">
			<div class="report report-active">
				<div class="report-content">
					<div class="top">
						<div class="social-logo">
							<img :src="require(`../assets/${currentReport.logoAsset}`)" width="50px" height="50px">
						</div>
						<div class="export-report">
							<img src="../assets/export-white.png" width="16px" height="22px">
						</div>
						<div class="fb-page" v-show="currentReport.fbPage">
							{{currentReport.fbPage}}
						</div>
						<div class="week-selector">
							Weeks reported: <span v-show="currentReport.data_weeks.weeks_avail.length == currentReport.data_weeks.weeks_sel.length">All</span>
						</div>
						
					</div>
					<div class="report-main">
						<div class="report-insight">	
							<div class="insight-title"> <p>Views<span>Starting from 01-02-20</span></p> </div>
							<div class="insight-table">
								<div class="table-section table-weeks">
									<div class="heading h-title">Weeks</div>
									<div class="heading">1</div>
									<div class="heading">2</div>
									<div class="heading">3</div>
									<div class="heading">4</div>
								</div>
								<div class="table-section table-stats">
									<div class="heading h-title">Stats</div>
									<div class="heading">100</div>
									<div class="heading">200</div>
									<div class="heading">300</div>
									<div class="heading">400</div>
								</div>

							</div>

						</div>
					</div>
				</div>
			</div>
			<!-- <div class="report instagram-report">
				<div class="content">
					Reports to be put here
				</div>
			</div> -->
		</div>
	</div>
</template>
<script>
	
	export default {
		name: "Reports",
		data() {
			return {
			currentReport: {
				logoAsset: 'fblogosquare.png',
				fbPage: "Wemanagebusiness",
				data_weeks: {
					weeks_avail: [1,2,3,4],
					weeks_sel: [1,2,3,4],
					data: [{week:1}]
				}
			}
			}
		}
	}

</script>
<style scoped>
	
	.reports-container {
		width: 100%;
		height: 100%;
	}
	.main {
		width: 100%;
		height: 98%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.report {
		width: 88%;
		height: 88%;
		padding: 1px;
		background-image: linear-gradient(0deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
	}

	.report-content {
		height: 100%;
		background: #4e4376;

		display: flex;
		flex-direction: column;
	}
	.report-main {
		margin-top: 8px;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

	}
	.report-insight {
		width: 98%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: rgb(67,74,118);
		background: linear-gradient(90deg, rgba(67,74,118,1) 0%, rgba(72,60,113,1) 100%);
		box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	}
	.insight-title {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 30px;
	}
	.insight-title p {
		padding: 8px;
		box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    -webkit-box-sizing: border-box;
	    border-bottom: white 1px solid;
	}
	.insight-title p span {
		margin-left: 12px;
		color: azure;
		font-size: 80%;
	}
	.insight-table {
		background: linear-gradient(90deg, rgb(78 85 128) 0%, rgb(60 47 105) 100%);
		padding: 16px;
		flex-direction: column;
	}
	.table-section {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.table-weeks {
		
	}
	.table-weeks .heading{
		background: rgb(255 204 112);
	}
	.table-stats {
		
	}
	.table-stats .heading{
		background: rgb(66 88 208);
	}
	.heading {
		color: black;
		padding: 8px;
		border-radius: 1px;
		font-size: 70%;
		width: 10%;
		margin: 6px;
		font-weight: 900;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.h-title {
		font-size: 80%;
		width: 12.5%;
		justify-content: left;

	}


	.top {
		width: 100%;
		height: 50px;
		background: #2b5876;
		display: flex;

	}
	.social-logo {
		height: 50px;
		width: 50px;
		border-bottom: white solid 1px;
	}
	.fb-page {
		height: 50px;
		padding-left: 8px;
		padding-right: 8px;
		cursor: pointer;

		box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    -webkit-box-sizing: border-box;
	    border-bottom: white 1px solid;

		font-size: 66%;
		font-weight: 900;
		background-color: #434a76;

		display: flex;
		align-items: center;
	}
	.fb-page:hover {
		border-bottom: #ffcc71 1px solid;
	}
	.week-selector {
		height: 50px;
		padding-left: 8px;
		padding-right: 8px;
		cursor: pointer;

		box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    -webkit-box-sizing: border-box;
	    border-bottom: white 1px solid;

		font-size: 66%;
		font-weight: 900;
		background-color: #404775;

		display: flex;
		align-items: center;
	}
	.week-selector span {
		margin-left: 4px;
	}
	.week-selector:hover {
		border-bottom: #ffcc71 1px solid;
	}
	.export-report {
		cursor: pointer;
		width: 50px;
		height: 50px;
		background-color: #394173;

		display: flex;
		justify-content: center;
		align-items: center; 
	}



</style>