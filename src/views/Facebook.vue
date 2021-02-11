<template>

  <div class="facebook-container">
    <button v-show="facebook_user == null && user.permission_type == 'ADMIN'" v-on:click="login">Authorize facebook login</button>
    <div class="row-nav">
      <div class="nav-box">
        <img v-bind:src="pageDetails.picture.data.url" width="20" height="20">
        <router-link to="/facebookPages">Pages</router-link>
         change page
      </div>
      <div class="nav-box box-selected">
        reports
      </div>
      <div class="nav-box">
        posts
      </div>
      <div class="nav-box">
        insights
      </div>
      <div class="nav-box">
        team
      </div>
      <div class="nav-box">
        live
      </div>
    </div>

    <div class="row">
      <FacebookPageKey></FacebookPageKey>
      <!-- <FacebookPageUpload></FacebookPageUpload> -->
    </div>
    <FacebookPageMenu></FacebookPageMenu>

  </div>

</template>

<script>
// @ is an alias to /src
import FacebookPageUpload from '@/components/FacebookPageUpload'
import FacebookPageKey from '@/components/FacebookPageKey'
import FacebookPageMenu from '@/components/FacebookPageMenu'

import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: "Facebook",
  components: {
    FacebookPageUpload,
    FacebookPageKey,
    FacebookPageMenu
  },
  computed: {
    ...mapState('facebook', ['facebook_user', 'status', 'pageDetails']),
    ...mapState('account', ['user', 'token'])

  },
  methods: {
    ...mapMutations('facebook', ['facebookLoginSuccess','getPageDetails']),
    login () {
      var _this = this;
      window.FB.login(function(response) {
        if (response.status === 'connected') {
          // Logged into your webpage and Facebook.
          _this.facebookLoginSuccess(response.authResponse);

          // const facebook = _this.facebook_user;
          // const business = _this.business_id;
          // const token = _this.user.token;
        } else {
          // The person is not logged into your webpage or we are unable to tell. 
        }
      }, {scope: ['read_insights', 'pages_read_engagement', 'pages_read_user_content']});
    }
  },
  created() {
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

    var page_id = 'wemanagebusiness' // Get from DB

    //How do we check that the page is under the users business profile

    var payLoad = {
        page_id: page_id,
        token: this.token
        }

      this.getPageDetails(payLoad);

  }
};
</script>
<style>
.facebook-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}


.facebook-container .row {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


}

.row-nav {
  display: flex;
  justify-content: center;
  width: 100%;
}

.box-selected {
  box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px !important;
}

.nav-box {
  width: 10%;
  margin: 10px;
  height: 20px;
  font-size: 60%;
  font-weight: 900;
  color: white;
  
  background-color: purple;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.nav-box a {
  color: white;
  text-decoration: none;
}





.row {
  width: 100%;
  height: 100%;
  display: flex;
}

.row > div {
/*  border: white 3px solid !important;
*//*  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
*/}

.title {
  font-size: 12px;
  position: absolute;
  top: 8px;
  margin-top: 8px !important;
}
.title-bottom {
  font-size: 12px;
  position: relative;
  top: -35px;
  left: 46%;
  margin-top: 8px !important;
}

/*HELPERS*/
.bd-grey {
  border: white solid 1px;
}

.highest {
  border-bottom: 2px solid green;
}

.lowest {
  border-bottom: 2px solid red;
}

/* Media Query for Mobile Devices */ 
@media (max-width: 480px) { 
    .facebook-container .row < div {
      width: 100% !important;
    }

} 
  
/* Media Query for low resolution  Tablets, Ipads */ 
@media (min-width: 481px) and (max-width: 767px) { 
    .facebook-container .row < div {
      width: 100% !important;
    }
} 
  
/* Media Query for Tablets Ipads portrait mode */ 
@media (min-width: 768px) and (max-width: 1024px){ 
    .facebook-container .row < div {
      width: 100% !important;
    } 
} 

</style>