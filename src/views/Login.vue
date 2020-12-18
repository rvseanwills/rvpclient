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
        <button v-on:click="registerShow = !registerShow">Switch</button>
        <button :disabled="status.loggingIn" v-on:click="loginUser()">Login</button>
           <img v-show="status.loggingIn" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP" />
      </div>
      <div v-show="error" class="error"> {{error}} </div>
    </div>

    

    <div class="register" v-if="registerShow">
      <h1>Register</h1>
      <!-- v-show="user && user.account_type == 'partner'" -->

      <div>
        <label for="email">Email</label>
        <input type="text" v-model="registerDetails.email" name="email" :class="{ 'is-invalid': submitted && !registerDetails.email }" />
        <div v-show="submitted && !registerDetails.email" class="invalid-feedback">Email is required</div>
      </div>
      <div>
        <label htmlFor="password">Password</label>
          <input type="password" v-model="registerDetails.password" name="password" :class="{ 'is-invalid': submitted && !registerDetails.password }" />
          <div v-show="submitted && !registerDetails.password" class="invalid-feedback">Password is required</div>
      </div>
      <div>
        <label htmlFor="full_name">Full Name</label>
          <input type="text" v-model="registerDetails.full_name" name="full_name" :class="{ 'is-invalid': submitted && !registerDetails.full_name }" />
          <div v-show="submitted && !registerDetails.full_name" class="invalid-feedback">full_name is required</div>
      </div>
      <div>
        <label htmlFor="job_description">Job Description</label>
          <input type="text" v-model="registerDetails.job_description" name="job_description" :class="{ 'is-invalid': submitted && !registerDetails.job_description }" />
          <div v-show="submitted && !registerDetails.job_description" class="invalid-feedback">job_description is required</div>
      </div>
      <div>
        <label htmlFor="business_id">Business Id</label>
          <input type="text" v-model="registerDetails.business_id" name="business_id" :class="{ 'is-invalid': submitted && !registerDetails.business_id }" />
          <div v-show="submitted && !registerDetails.business_id" class="invalid-feedback">business_id is required</div>
      </div>
      <div>
        <label htmlFor="account_type">Account Type</label>
          <input type="text" v-model="registerDetails.account_type" name="account_type" :class="{ 'is-invalid': submitted && !registerDetails.account_type }" />
          <div v-show="submitted && !registerDetails.account_type" class="invalid-feedback">account_type is required</div>
      </div>
      <div>
        <label htmlFor="permission_type">Permission Type</label>
          <input type="text" v-model="registerDetails.permission_type" name="permission_type" :class="{ 'is-invalid': submitted && !registerDetails.permission_type }" />
          <div v-show="submitted && !registerDetails.permission_type" class="invalid-feedback">permission_type is required</div>
      </div>
      <div>
        <button v-on:click="registerShow = !registerShow">Switch</button>
        <button :disabled="status.loggingIn" v-on:click="registerUser()">Login</button>
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
      registerDetails: {
        email: '',
        password: '',
        full_name: '',
        job_description: '',
        business_id: '',
        account_type: '',
        permission_type: ''
      },
      submitted: false,
      registerShow: false
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
	    ...mapActions('account', ['login','register']),
	    loginUser () {
	        this.submitted = true;
          this.login( this.loginDetails )
	    },
      registerUser () {
        this.submitted = true;
        this.register( this.registerDetails )
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
