<template>
	<div class="welcome-container">
		<div class="user-details">
			<p>Welcome Sean Wills</p> <p>Your new here ?</p>
		</div>
		<div class="link">
			<router-link to="/Facebook"><p>Take me to the dashboard</p></router-link>
		</div>
	</div>
</template>
<script>
	
	export default {
		name: 'Welcome'
	}	

</script>
<style type="text/css" scoped>
	
.welcome-container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	width: 100%;
	height: 100%;
}

.user-details {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;
}

.link {
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;
}

</style>
