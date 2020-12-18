<template>

  <div class="facebook-container">
    <button v-show="facebook_user == null && user.permission_type == 'ADMIN'" v-on:click="login">Authorize facebook login</button>

    <div class="page-details">   
        <!-- <img v-bind:src="pageDetails.cover.source" width="180" height="90"> -->
        <img v-bind:src="pageDetails.picture.data.url" width="50" height="50">
        <div class="info">
          <p>{{pageDetails.name}}</p>
          <p>Other details</p>
        </div>
    </div>

    <FacebookPageInsights></FacebookPageInsights>


    

  </div>

</template>

<script>
// @ is an alias to /src
import FacebookPageInsights from '@/components/FacebookPageInsights'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: "Facebook",
  components: {
    FacebookPageInsights
  },
  computed: {
    ...mapState('facebook', ['facebook_user', 'status', 'business_id', 'pageDetails']),
    ...mapState('account', ['user', 'token'])
  },
  methods: {
    ...mapMutations('facebook', ['facebookLoginSuccess']),
    ...mapActions('facebook', ['getPageDetails']),
    login () {
      var _this = this;
      window.FB.login(function(response) {
        if (response.status === 'connected') {
          // Logged into your webpage and Facebook.
          _this.facebookLoginSuccess(response.authResponse);

          const facebook = _this.facebook_user;
          const business = _this.business_id;
          const token = _this.user.token;
        } else {
          // The person is not logged into your webpage or we are unable to tell. 
        }
      }, {scope: ['read_insights', 'pages_read_engagement', 'pages_read_user_content']});
    }
  },
  created() {
  	// TODO only if admin
    

    //Check if admin needs to login
    if (this.user.permission_type !== 'ADMIN') {
      return;
    }

    console.log('Hello' + this.user.permission_type);

  	// TODO unload when component closed
  	(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '289313119164357',
        xfbml      : true,
        version    : 'v9.0'
      });
    };

  },
  beforeMount() {
    
    //Get details
    const token = this.token;

    var page_id = '1' // Get from DB

    this.getPageDetails({page_id, token });

  }
};
</script>
<style>
.facebook-container {
  height: 98%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.facebook-container > div {
  margin: 32px !important;
}

/*Details styles*/

.page-details {
  width: 12%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border: white 1px solid;
  border-radius: 16px;
  -webkit-box-shadow: 0px 12px 15px 0px rgba(132,132,132,0.5); 
    box-shadow: 0px 10px 20px 0px rgba(132,132,132,0.5);
}

.info {
  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: 12px;
}

.page-details img {
  border-radius: 32px;
}

</style>