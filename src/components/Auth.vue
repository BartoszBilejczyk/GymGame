<template lang="html">

  <div class="game-authentication-wrapper">
    <div class="game-authentication">
      <div class="game-authentication__logo-wrapper">
        <img class="game-authentication__logo" src="../assets/dumbbell.svg" alt="dumbbell">
        <img class="game-authentication__logo" src="../assets/fresh-juice.svg" alt="juice">
      </div>
      <h6 class="game-authentication__title white--text">GYM GAME</h6>
      <div class="game-authentication-textfields">
        <v-text-field
          name="input-1-3"
          label="Email"
          single-line
          prepend-icon="mail_outline"
          dark
          v-model="email"
        ></v-text-field>
        <v-text-field
          name="input-1-3"
          label="Password"
          single-line
          prepend-icon="lock_outline"
          dark
          v-model="password"
        ></v-text-field>
      </div>
      <v-btn
        primary
        dark
        block
        @click="signIn()"
      >Sign in</v-btn>
    </div>
  </div>



  <!--
  <div class="">
    <v-text-field name="email" label="Login" type="text" v-model="email"></v-text-field>
    <v-text-field name="password" label="Password" type="text" v-model="password"></v-text-field>
    <v-btn @click="signUp()">Sign Up</v-btn>
    <v-btn @click="signIn()">Sign in</v-btn>
    <v-btn @click="signOut()">Sign Out</v-btn>
    <v-btn @click="signInWithGoogle()">Sign In Google</v-btn>
    <br>
    {{ user }}
  </div> -->
</template>

<script>
import {auth} from '../firebase'
import firebase from 'firebase'

export default {
  name: 'auth',
  data() {
    return {
      user: null,
      email: '',
      password: ''
    }
  },
  beforeCreate: function() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user
        // this.$bindAsArray('items', db.ref(`items/${user.uid}`))
      }
      this.loading = false
    })
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    },
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        this.$store.dispatch('logUser', result)
      })
      .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
      });
    },
    signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider).then((result) => {
        this.user = result.user
      })
      .catch(err => console.log(error))
    },
    signOut() {
      firebase.auth().signOut()
      this.$router.push('/')
      // .then(() => {
      //   this.user = null
      // }).catch(err => console.log(error))
    },
  }
}
</script>

<style lang="scss">

.game-authentication {
  &-wrapper {
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #3e3b4c 0%,#686675 100%);
  }

  &__logo {
    height: 120px;

    &-wrapper {
      margin-bottom: 25px;
    }
  }

  &__name {
    font-size: 25px;
    font-weight: 300;
  }

  &-textfields {
    margin-top: 40px;
  }
}

</style>
