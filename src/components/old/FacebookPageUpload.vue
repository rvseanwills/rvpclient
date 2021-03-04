<template>
	
<div class="upload ">

	<div class="posts-cont">
		<div v-for="{created_time, message, full_picture, id} in pagePosts.data" :key="id" class="post-cont">
			<!-- <div class="post-text">
				<p v-if="message">{{message}}</p>
				<p v-else>There was no message attached to this post</p>
			</div> -->
			<div class="post-img">
				
				<img v-bind:src="full_picture">
				
			</div>
		</div>

	</div>
	
	<div class="post-info">
		<div class="post-info-top">
			<div class="post-nav active">
				Current Post
			</div>
			<div class="post-nav">
				New Post
			</div>
			<div class="post-nav">
				Posts from > 01-05-20:
			</div>
		</div>

		<div class="post-current">
			<div class="post-details">
				<div class="post-message">
					This is test message for the RVP demo.
				</div>
				<div class="post-date">
					01-15-20
				</div>
			</div>
			<div class="post-stats">
				<FacebookPageInsights></FacebookPageInsights>
			</div>
			<div class="post-comments">
				<div class="post-comment">
					<label>John Doe said</label>
					<span> "Hey this is a great demo!"</span>
					<button>Reply!</button>
				</div>
			</div>
		</div>
	</div>

	
</div>

</template>
<script>
import FacebookPageInsights from '@/components/FacebookPageInsights'
import { mapState, mapActions } from 'vuex'	

export default {
	name: "FacebookPageUpload",
	components: {
		FacebookPageInsights
	},
	computed: {
		...mapState('facebook', ['business_id', 'pagePosts']),
		...mapState('account', ['token'])
	},
	methods: {
		...mapActions('facebook', ['getPagePosts']),
	},
	created () {
		console.log('posts', this.pagePosts);
	},
	beforeMount() {

		var page_id = 'wemanagebusiness' // Get from DB

		//How do we check that the page is under the users business profile

		var payLoad = {
    		page_id: page_id,
    		token: this.token
       	}

    	this.getPagePosts(payLoad);

	}
}

</script>
<style type="text/css" scoped>
	
.upload {
	display: flex;
	width: 58%;
	height: 100%;
/*	border-radius: 4px;
*/	border: 1px #eaeaea solid;
	justify-content: center;
	align-items: center;
	background-color: #f0f2f5;
}

.posts-cont {
	overflow-y: scroll;
	width: 32%;
	height: 99%;
	display: flex;
	flex-direction: column;
}

.post-info {
	width: 68%;
	height: 100%;
	display: flex;
	flex-direction: column;
}

.post-info-top {
	margin-top: 8px;
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: 10%;
}

.post-current {
	height: 90%;
}

.post-details {
	height: 10%;
	display: flex;
	justify-content: space-between;
}
.post-message {
 	margin-left: 16px;
}
.post-date {
 	margin-right: 16px;
}


.post-stats {
	background: white;
	height: 60%;
}

.post-comments {
	height: 30%;
	background-color: azure;

}
.post-comment {
	display: flex;
	justify-content: space-around;
	padding: 12px;
}



.active {
	font-size: 80% !important;
	color: white;
	font-weight: 900;
	background-image: linear-gradient(-45deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
	/*box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px !important;*/
}

.post-nav {
	font-size: 70%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	height: 28px;
	width: 30%;
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
}

.posts-cont::-webkit-scrollbar {
	width: 0px;  /* Remove scrollbar space */
}
.posts-cont {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.post-cont {
	width: 96%;
	margin-bottom: 12px;
	background: #f0f2f5;
}

.post-img:hover {
	opacity: 0.5;
}

.post-img img{
	width: 100%;
}


</style>