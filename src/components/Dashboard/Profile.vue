<template lang="html">
  <v-container class="game-profile">
    <v-layout column align-center justify-center>
      <img :src="activeUser.photoURL"
           alt="user-photo"
           class="game-profile__photo">
      <span class="game-profile__name">{{ activeUser.displayName }}</span>
      <v-divider></v-divider>
      <v-layout row nowrap justify-space-around
                class="game-profile-info">
        <v-flex xs4 class="game-profile-info__item">
          <span class="game-profile-info__item__heading">480</span>
          <span class="game-profile-info__item__copy">Overall Points</span>
        </v-flex>
        <v-flex xs4 class="game-profile-info__item">
          <span class="game-profile-info__item__heading">24</span>
          <span class="game-profile-info__item__copy">Ranking</span>
        </v-flex>
        <v-flex xs4 class="game-profile-info__item">
          <span class="game-profile-info__item__heading">32</span>
          <span class="game-profile-info__item__copy">Activity Logs</span>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['activeUser']
}
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';

.game-profile {

  &__photo {
    width: 150px;
    border-radius: 100px;
    margin: 20px 0;
  }

  &__name {
    @include font(24, 600);
    margin-bottom: 20px;
  }

  &-info {
    width: 100%;

    &__item {
      height: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &__heading {
        @include font(26, 500);
      }

      &__copy {
        @include font(10, 500);
        color: pal(gray);
        text-align: center;
      }
    }

    :nth-child(2) {
      border-left: 1px solid pal(white, mid-dark);
      border-right: 1px solid pal(white, mid-dark);
    }
  }
}

</style>
