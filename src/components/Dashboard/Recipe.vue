<template lang="html">
  <v-card flat>
    <v-card-media
      class="white--text"
      height="200px"
      :src="recipes[index].image"
    >
    </v-card-media>
    <v-card-title>
      <div>
        <span class="grey--text">{{ recipes[index].name }}</span><br>
        <ul>
          <li v-for="ingredient in recipes[index].ingredients">{{ ingredient }}</li>
        </ul>
        <ul>
          <li v-for="step in recipes[index].description">{{ step }}</li>
        </ul>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat class="orange--text">Share</v-btn>
      <v-btn flat class="orange--text">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Recipe',
  props: ['recipes', 'index']
}
</script>

<style lang="css">

</style>
