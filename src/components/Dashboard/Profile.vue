<template lang="html">
  <v-container class="game-profile">

    <more-button :activeUser="activeUser" :path="'profile'"/>
    <component-name :componentName="this.$options.name" />

    <v-layout column align-center justify-center>
      <img :src="activeUser.photoURL ? activeUser.photoURL : 'http://facebookcraze.com/wp-content/uploads/2010/10/alternative-facebook-profile-picture-superman-funny-joke.jpg'"
           alt="user-photo"
           class="game-profile__photo">
      <!-- <img v-else src="http://facebookcraze.com/wp-content/uploads/2010/10/alternative-facebook-profile-picture-superman-funny-joke.jpg" alt="user-photo" class="game-profile__photo"> -->
      <div class="game-profile__name">
        {{ activeUser.displayName }}
      </div>
      <div class="game-profile__stats">
        <span class="game-profile__stats-level-name">Newbie</span>
        <span class="game-profile__stats-divider">|</span>
        <span class="game-profile__stats-points">10 points</span>
      </div>
      <v-layout row align-center justify-space-around class="game-profile-progress">
        <img class="game-profile-progress-badge"
             src="/static/images/new.svg"
             alt="">
        <span class="game-profile-progress-level">1</span>
        <v-progress-linear value="45" height="10" color-front="purple" color-back="purple lighten-3" class="game-profile-progress-progress"></v-progress-linear>
        <span class="game-profile-progress-next-level">Level 2</span>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import MoreButton from './Helpers/MoreButton'
import ComponentName from './Helpers/ComponentName'

export default {
  name: 'Profile',
  props: ['activeUser'],
  components: {
    MoreButton,
    ComponentName
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
  }

  &__stats {
    color: pal(purple);

    &-level-name {
      @include font(11, 600);
      text-transform: uppercase;
    }

    &-points {
      @include font(11, 400);
    }

    &-divider {
      margin: 0 5px;
    }
  }

  &-progress {
    text-align: center;
    width: 100%;
    padding: 40px 10px 10px;
    color: pal(purple);

    &-badge {
      width: 40px;
    }

    &-level {
      width: 40px;
    }

    &-next-level {

    }

    &-progress {
      max-width: 50%;
    }
  }
}

.progress-linear__bar {
  border-radius: 20px;

  &__determinate {
    border-radius: 20px;
  }
}

</style>
