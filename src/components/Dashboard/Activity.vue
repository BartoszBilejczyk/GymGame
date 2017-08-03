<template lang="html">
  <section class="game-activity">
    <div class="container">
      <h2 class="game-activity__heading">Recent Activity</h2>
      <v-list three-line>
        <template v-for="item in items">
          <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
          <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
          <v-list-tile avatar v-else v-bind:key="item.title">
            <v-list-tile-avatar>
              <img v-bind:src="item.avatar"/>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>

      <h2 class="game-activity__heading">My streaks</h2>
      <p>Days without negative points: <span>2</span></p>
      <p>Days with more than 40+ points: <span>2</span></p>
      <p>Days with more than 40+ points: <span>2</span></p>
      <p>Days with more than 40+ points: <span>2</span></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Activity',
  props: ['activeUser'],
  data() {
    return {
      items: [
        { avatar: this.activeUser.photoURL, title: 'Brunch this weekend?', subtitle: "<span class='grey--text text--darken-2'>Ali Connors</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { divider: true, inset: true },
        { avatar: this.activeUser.photoURL, title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend." },
        { divider: true, inset: true },
        { avatar: this.activeUser.photoURL, title: 'Oui oui', subtitle: "<span class='grey--text text--darken-2'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?" },
        { divider: true, inset: true },
        { avatar: this.activeUser.photoURL, title: 'Birthday gift', subtitle: "<span class='grey--text text--darken-2'>Trevor Hansen</span> — Have any ideas about what we should get Heidi for her birthday?" },
      ]
    }
  }
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

.game-activity {
  height: 100vh;
  width: 20%;
}
</style>
