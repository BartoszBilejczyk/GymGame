<template lang="html">
  <div class="game-main-data-hello">
    <div class="container">
      <h1 class="game-main-data-hello__heading">Hi <span class="game-main-data-hello__heading--name">{{ firstName }}</span>, it seems you are in</h1>
      <h2 class="game-main-data-hello__subheading"><span class="game-main-data-hello__subheading--color">Good </span>Shape</h2>
      <v-dialog v-model="dialog"
                lazy
                absolute
                width="500">
        <v-btn class="game-main-data-hello__add-button" @click="addActivity()" primary slot="activator">Add activity</v-btn>
        <v-card>
          <v-card-title>
            <div class="headline">Use Google's location service?</div>
          </v-card-title>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
            <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: ['activeUser'],
  data() {
    return {
      dialog: false,
      test: true
    }
  },
  computed: {
    firstName() {
      return this.activeUser.displayName.split(' ')[0]
    }
  }
}
</script>

<style lang="scss">

@import '../../../assets/styles/main.scss';

.game-main-data-hello {
  height: 380px;
  background: pal(white);
  padding: 50px;
  position: relative;

  &__heading {
    text-transform: uppercase;
    @include font(14, 300);
    letter-spacing: 0.7px;
    margin: 0;

    &--name {
      font-weight: 500
    }
  }

  &__subheading {
    text-transform: lowercase;
    @include font(70, 200);
    margin: 0;
    letter-spacing: 2px;
    color: pal(grey);

    &--color {
      color: pal(purple);
    }
  }

  &__add-button {
    position: absolute;
    top: 40px;
    right: 150px;
  }
}
</style>
