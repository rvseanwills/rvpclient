<template>
  <div id="app">
    
    <!-- <div v-if="alert.message" :class="alert {alert.type}">{{alert.message}}</div> -->
    <div class="content">
      <transition
        name="slide-left"
        mode="out-in"
      >
        <router-view />
      </transition>
      <div id="nav" v-if="authenticated">
        <div class="item">
          <router-link to="/Reports" >Reports</router-link> 
        </div>
        <div class="item">
         <router-link to="/Posts" >Posts</router-link> 
        </div>
        <div class="item">
          <router-link to="/Visualisations" >Visuals</router-link> 
        </div>
        <div class="item">
          <router-link to="/Team" >Team</router-link>
        </div>
        <div class="item">
          <router-link to="/Account" >Account</router-link> 
        </div>
        <div class="item">
          <a >Live</a> 
        </div>
        <div class="item">
          <a v-on:click="logoutUser" >Logout</a>
        </div>


      </div>
    </div>
    
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'


export default {
    name: 'app',
    data () {
      return {
        authenticated: true,
        multiple: null
      }
    },
    computed: {

    },
    methods: {

        ...mapActions('account', ['logout']),
        logoutUser () {
          this.logout();
          this.$router.push('/');
        }
    }
};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}


#nav {
  position: fixed;
  bottom: 10px;
  width: 100%;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
}

#nav .item {
  
  
}

.item a {
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px;
  background-color: #4e4376;
  width: 70px;
  height: 10px;
  border-radius: 2px;
  border: white solid 1px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  text-decoration: none;
  font-size: 60%;
  font-weight: 900;
  color: white;
}


#nav .item a:hover {
    background-image: linear-gradient(45deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%) !important;
}


.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}



.item a.router-link-exact-active {
  background-image: linear-gradient(-45deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

.alert-success {
  border: 1px solid green;
}
.alert-danger {
  border: 1px solid red;
}
</style>
