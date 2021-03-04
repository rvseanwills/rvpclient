<template>
  <div class="cont">

    
    <div class="login" v-if="!registerShow">
      <h1>Login</h1>
      <div>
        <label for="email">Email</label>
        <input type="text" v-model="loginDetails.email" name="email" :class="{ 'is-invalid': submitted && !loginDetails.email }" />
        <div v-show="submitted && !loginDetails.email" class="invalid-feedback">Email is required</div>
      </div>
      <div>
        <label htmlFor="password">Password</label>
          <input type="password" v-model="loginDetails.password" name="password" :class="{ 'is-invalid': submitted && !loginDetails.password }" />
          <div v-show="submitted && !loginDetails.password" class="invalid-feedback">Password is required</div>
      </div>
      <div>
        <button :disabled="status.loggingIn" v-on:click="loginUser()">Login</button>
           <img v-show="status.loggingIn" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP" />
      </div>
      <div v-show="error" class="error"> {{error}} </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'

export default {
  name: "Login",
  data () {
  	return {
  	  error: null,
      loginDetails: {
        email: '',
        password: ''
      },
      submitted: false
  	}
  },
  computed: {
        ...mapState('account', ['status', 'user'])
  },
  created () {
    	// reset login status
    	// this.logout();
  },
  methods: {
	    ...mapActions('account', ['login']),
	    loginUser () {
	        this.submitted = true;
          this.login( this.loginDetails )
	    }
  }
}
</script>
<style>

.cont {
  height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
}

.cont div input{
	border: 1px solid;
	margin: 10px;
}

.cont div button {
	border: 1px solid;
	margin: 10px;
	cursor: pointer;
}

.is-invalid {
  border: 1px red solid !important;
}

/* Inserting this collapsed row between two flex items will make 
 * the flex item that comes after it break to a new row */
.break {
  flex-basis: 100%;
  height: 0;
}

.error {
  width: 50%;
  border: 1px solid #ff0033; /* Slightly friendlier red */
}

</style>
