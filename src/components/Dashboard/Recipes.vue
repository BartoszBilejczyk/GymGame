<template lang="html">
  <v-container>
    <v-layout row>
      <v-flex xs4 v-for="(i, index) in 3" :key="i">
        <recipe :recipes="recipes" :index="index" />
      </v-flex>
    </v-layout>
    <more-button :path="'recipes'"/>
    <v-btn @click="addRecipe()">Dodaj Przepis</v-btn>
  </v-container>
</template>

<script>
import {db} from '../../firebase'
import firebase from 'firebase'

import Recipe from './Recipe'
import MoreButton from './Helpers/MoreButton'

export default {
  name: 'Recipes',
  props: ['activeUser'],
  components: {
    Recipe,
    MoreButton
  },
  methods: {
    addRecipe() {
      this.$firebaseRefs.recipes.push({
        image: 'http://cupcakefactory.pl/wp-content/uploads/2013/07/DSCF5758.jpg',
        name: 'Super tarta owocowa',
        ingredients: ['ingredient', 'ingredient'],
        description: ['descriptionItem', 'descriptionItem'],
        calories: [350, 10, 25, 17]
      });
    }
  },
  firebase: {
    recipes: db.ref('recipes')
  },
  beforeCreate: function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.user = user
        this.$bindAsArray('recipes', db.ref('recipes/' + user.uid))
      } else {
        firebase.auth().signInAnonymously().catch(console.error)
      }
    }.bind(this))
  }
}
</script>

<style lang="scss">
</style>
