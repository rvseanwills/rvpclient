<template>
  <div id="app">
    
    <!-- <div v-if="alert.message" :class="alert {alert.type}">{{alert.message}}</div> -->
    <div class="content">
      <router-view />
    </div>
    

    <div id="nav">
        <div 
        @mouseenter="navEnabled = true"
        @mouseleave="navEnabled = false" 
        class="navlinks-container" >
            
            <router-link to="/facebook" v-if="navEnabled" >Facebook</router-link> 
            <!-- <router-link to="/instagram" v-if="navEnabled" >Instagram</router-link>  -->  
            <a v-on:click="logoutUser" v-if="navEnabled" >Logout</a>   
        </div>  
    </div>
    

  </div>
</template>
<script>
import {  mapActions } from 'vuex'


export default {
    name: 'app',
    data () {
      return {
        navEnabled: false
      }
    },
    computed: {
        // ...mapState({
        //     alert: state => state.alert
        // })
    },
    methods: {
        // ...mapActions({
        //     clearAlert: 'alert/clear'
        // }),
        ...mapActions('account', ['logout']),
        logoutUser () {
          this.logout();
          this.$router.push('/login');
        }
    },
    // watch: {
    //     $route (){
    //         // clear alert on location change
    //         this.clearAlert();
    //     }
    // }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-content: center;
  justify-content: center;
}

.content {
  flex: 1;
  height: 100%;
}

#app > div {
  width: 100%;
}

#nav {
  position: fixed;
  bottom: 15px;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
}


/*Nav show styles*/




.navlinks-container {

  min-width: 35%;
  min-height: 6px;
  background-image: linear-gradient(to left, rgba(0,0,255,0.2), rgba(255,0,0,0.4));
  /*background: rgba(255,255,255, 0.8);*/
  border-radius: 12px;
  margin: 15px;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;

  -webkit-box-shadow: 0px 12px 15px 0px rgba(132,132,132,0.5); 
  box-shadow: 0px 10px 20px 0px rgba(132,132,132,0.5);
}

.navlinks-container a {
  text-decoration: none;
  margin: 5px 8px 5px 8px;
  border-radius: 12px;
  padding: 1px 10px 1px 10px;
  font-size: 12px;
  font-weight: 500;
  color: #2c3e50;
  line-height: 25px;
  height: 25px;
  transition: 0.1s ease-in;
}


.navlinks-container a.router-link-exact-active {
  background-color: #85FFBD;
  background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
}

.inactive {
  opacity: 0.9;
}

.alert-success {
  border: 1px solid green;
}
.alert-danger {
  border: 1px solid red;
}
</style>
