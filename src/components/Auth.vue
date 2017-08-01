<template lang="html">
  <div class="">
    test
    <v-text-field name="login" label="Login" type="text" v-model="login"></v-text-field>
    <v-text-field name="password" label="Password" type="text" v-model="password"></v-text-field>
    <v-btn @click="logIn()">login</v-btn>
    <v-btn @click="signUp()">signin</v-btn>
    <v-btn @click="signOut()">singout</v-btn>
    <v-btn @click="signInWithGoogle()">login google</v-btn>
  </div>
</template>

<script>
import {auth} from '../firebase'
import firebase from 'firebase'

export default {
  name: 'auth',
  data() {
    return {
      user: null,
      login: '',
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
    // signUp() {
    //   auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
    //     // Handle Errors here.
    //     let errorCode = error.code;
    //     let errorMessage = error.message;
    //     // ...
    //   });
    // },

    signInWithGoogle: function() {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithRedirect(provider).then((result) => {
        this.user = result.user
      }).catch(err => console.log(error))
    },
    signOut: function() {
      auth.signOut().then(() => {
        this.user = null
      }).catch(err => console.log(error))
    },
  }
}
</script>

<style lang="css">
</style>
