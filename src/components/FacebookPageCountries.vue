<template>

<div class="countries">
	<!-- Loop countries with stat and flag symbol -->

	<div class="country ">
		<img src="../assets/canada.png">
		<p>15%</p>
	</div>
	<div class="country">
		<img src="../assets/united-kingdom.png">
		<p class="highest">80%</p>
	</div>
	<div class="country">
		<img src="../assets/united-states.png">
		<p>5%</p>
	</div>
</div>

</template>
<script>

export default {
	name: "FacebookPageCountries"
}

</script>
<style>

.countries {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  /*-webkit-box-shadow: 0px 10px 10px 0px rgba(132,132,132,0.5); 
    box-shadow: 0px 10px 10px 0px rgba(132,132,132,0.5);*/
}

.country {
	display: flex;
	flex-direction: column;
	padding: 12px;
}

.country img {
	max-width: 40px;
}

.country p {
	padding: 4px;
	text-align: center;
}

.highest p {
	font-weight: 700;
	color: green;
}

</style>