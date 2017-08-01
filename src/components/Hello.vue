<template>
  <div class="hello">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--4-col"></div>
      <div class="mdl-cell mdl-cell--4-col">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="email" id="txtEmail" v-model="authInput.txtEmail">
        <label class="mdl-textfield__label" for="txtEmail">Email</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="Password" id="txtPassword" v-model="authInput.txtPassword">
        <label class="mdl-textfield__label" for="txtPassword">Password</label>
        </div>
        <button id="btnLogin" v-on:click="Login()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary">
      Log in
    </button>
    <button id="btnSignUp" v-on:click="SignUp()"  class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
      Sign Up
    </button>
    <button id="btnLogout" v-on:click="LogOut()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button" style="display:none">
      Log out
    </button>
    <button v-on:click="googleLogin()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button">
      Google in
    </button>
      </div>
      <div class="mdl-cell mdl-cell--4-col"></div>
    </div>
    {{ result }}

  </div>

</template>

<script>
    import Firebase from 'firebase'
    import {initializeApp} from '../firebase'
    var provider = new Firebase.auth.GoogleAuthProvider();
    export default {
        name: 'hello',
        data() {
            return {
                authInput: {
                    txtEmail: '',
                    txtPassword: ''
                },
                user: null
            }
        },
        methods: {
            Login: function(event) {
                var self = this;
                const email = this.authInput.txtEmail;
                const pass = this.authInput.txtPassword;
                // const auth = Firebase.auth();
                // const promise = auth.signInWithEmailAndPassword(email, pass);
                this.authInput.txtEmail = '';
                this.authInput.txtPassword = '';

                Firebase.auth().signInWithEmailAndPassword(email, pass)
                .then(result => {
                  console.log(result);
                  self.user = result
                })
                .catch(event => console.log(event.message));

            },
            SignUp: function(event) {
                const email = this.authInput.txtEmail;
                const pass = this.authInput.txtPassword;
                const auth = Firebase.auth();
                const promise = auth.createUserWithEmailAndPassword(email, pass);
                this.authInput.txtEmail = '';
                this.authInput.txtPassword = '';
                promise.catch(event => console.log(event.message));
            },
            googleLogin: function() {
              let self = this;
                Firebase.auth().signInWithPopup(provider)
                .then(function(result) {
                  self.user = result
                  console.log(result);
                })
                .catch(function(error) {});
            },
            LogOut: function() {
                Firebase.auth().signOut();
            }
        }
    }
</script>
