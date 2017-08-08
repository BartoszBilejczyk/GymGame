<template lang="html">
  <div class="game-authentication-wrapper">
    <div class="game-authentication">
      <div class="game-authentication__logo-wrapper">
        <img class="game-authentication__logo" src="../assets/images/dumbbell.svg" alt="dumbbell">
        <img class="game-authentication__logo" src="../assets/images/fresh-juice.svg" alt="juice">
      </div>
      <h1 class="game-authentication__title white--text">GYM GAME</h1>
      <div v-if="signIn" class="game-authentication-textfields">
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
          type="password"
          label="Password"
          single-line
          prepend-icon="lock_outline"
          dark
          v-model="password"
        ></v-text-field>
      </div>
      <v-btn
        v-if="isSigningIn"
        block
        @click="signIn()"
        class="game-authentication__button">
          Sign In
      </v-btn>
      <v-btn
        v-else
        block
        @click="signUp()"
        class="game-authentication__button">
          Sign Up
      </v-btn>

      <div v-if="isSigningIn"
           class="game-authentication-social-wrapper
                  grey--text
                  grey-lighten-4">
        <span>Or sign in easily with</span>
        <div class="game-authentication-social">
          <v-card @click="signInWithGoogle()"
                  class="game-authentication-social__item">
            <img class="game-authentication-social__icon"
                 src="../assets/images/google.svg"
                 alt="Google">
                 Sign in with Google
          </v-card>
          <v-card class="game-authentication-social__item">
            <img class="game-authentication-social__icon"
                 src="../assets/images/facebook.svg"
                 alt="Facebook">
                 Log in with Facebook
          </v-card>
        </div>
      </div>
      <p class=" game-authentication__signup
                 grey--text
                 grey-lighten-4">{{isSigningIn ? 'Don\'t have an account?' : 'Back to'}}
        <a @click="signUp(); isSigningIn = !isSigningIn"
           class=" white--text">{{isSigningIn ? 'Sign up' : 'Log In'}}</a>
      </p>
    </div>
  </div>
</template>

<script>
import {auth, db} from '../firebase'
import firebase from 'firebase'

export default {
  name: 'auth',
  data() {
    return {
      user: null,
      email: '',
      password: '',
      isSigningIn: true
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
  firebase: {
    users: db.ref('users')
  },
  methods: {
    signUp() {
      auth.createUserWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          this.$store.dispatch('logUser', result)
          this.$firebaseRefs.users.push({uid: result.uid, providerData: result.providerData});
        })
        .catch(function(error) {
          console.log(error.code);
          console.log(error.message);
        });
    },
    signIn() {
      auth.signInWithEmailAndPassword(this.email, this.password)
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
      auth.signInWithRedirect(provider).then((result) => {
        this.user = result.user
      })
      .catch(err => console.log(error))
    },
    signOut() {
      auth.signOut()
      this.$router.push('/')
      // .then(() => {
      //   this.user = null
      // }).catch(err => console.log(error))
    },
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';

.game-authentication {
  &-wrapper {
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #3e3b4c 0%, #686675 100%);
    position: relative;
  }

  &__logo {
    height: 50px;
    @include sm-up {
      height: 120px;
    }

    &-wrapper {
      margin-bottom: 25px;
    }
  }

  &__title {
    @include font(30, 200);

    @include sm-up {
      @include font(30, 200)
    }
  }

  &-textfields {
    margin-top: 40px;
  }

  &__button {
    margin-bottom: 30px;
  }

  &__signup {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;

    @include sm-up {
      position: relative;
      margin-top: 20px;
      bottom: 0;
    }
  }

  &-social {
    &-wrapper {

    }

    &__item {
      margin-top: 10px;
      padding: 7px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      &:hover {
        transition: 0.2s;
        background-color: pal(white, light);
      }
    }

    &__icon {
      width: 20px;
    }
  }
}


/* OTHER STYLES */

.input-group {
  padding: 5px 0;
}

.input-group--text-field label {
  top: 5px;
}

.input-group__details {
  &:before {
    top: 5px;
  }
  &:after {
    background-color: pal(blue, x-light);
    top: 5px;
    height: 1px;
  }
}

.input-group--text-field.input-group--prepend-icon .input-group__details:after, .input-group--text-field.input-group--prepend-icon .input-group__details:before {
  margin: 0;
  max-width: 100%;
}

.input-group.input-group--focused .input-group__input .icon {
  color: pal(blue, x-light)
}

</style>
