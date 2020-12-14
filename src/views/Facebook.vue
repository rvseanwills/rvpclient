<template>

  <div class="facebook-container">
    <button v-show="facebook_user == null" v-on:click="login">Authorize facebook login</button>

    <FacebookPage></FacebookPage>

  </div>

</template>

<script>
// @ is an alias to /src
import FacebookPage from "@/components/FacebookPage.vue";
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: "Facebook",
  components: {
    FacebookPage
  },
  computed: {
    ...mapState('facebook', ['facebook_user', 'status', 'business_id']),
    ...mapState('account', ['user'])
  },
  methods: {
    ...mapActions('facebook', ['getPageInsights']),
    ...mapMutations('facebook', ['facebookLoginSuccess']),
    login () {
      var _this = this;
      window.FB.login(function(response) {
        if (response.status === 'connected') {
          // Logged into your webpage and Facebook.
          _this.facebookLoginSuccess(response.authResponse);

          const facebook = _this.facebook_user;
          const business = _this.business_id;
          const token = _this.user.token;

          _this.getPageInsights({facebook, business, token});
        } else {
          // The person is not logged into your webpage or we are unable to tell. 
        }
      }, {scope: ['read_insights', 'pages_read_engagement', 'pages_read_user_content']});
    }
  },
  beforeCreate() {
  	// TODO only if admin
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
  created() {
    const facebook = this.facebook_user;
    const business = this.business_id;
    const token = this.user.token;

    this.getPageInsights({facebook, business, token});
  }
};
</script>
<style>
.facebook-container {
  padding: 4px;
  height: 100%;

}
</style>