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
    </v-layout>
    <more-button :activeUser="activeUser" :path="'profile'"/>
  </v-container>
</template>

<script>
import MoreButton from './Helpers/MoreButton'

export default {
  props: ['activeUser'],
  components: {
    MoreButton
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/main.scss';

.game-profile {

  &__photo {
    width: 130px;
    border-radius: 100px;
    margin: 12px 0;
  }

  &__name {
    @include font(18, 600);
    margin-bottom: 20px;
  }

  &-info {
    width: 100%;

    &__item {
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &__heading {
        @include font(22, 500);
      }

      &__copy {
        @include font(10, 500);
        color: pal(gray);
        text-align: center;
      }
    }
  }
}

</style>
