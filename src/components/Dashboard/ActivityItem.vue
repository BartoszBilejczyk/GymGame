<template lang="html">
  <li class="gym-activity-history-list__item">
    <v-icon class="gym-activity-history-list__item-icon black--text">schedule</v-icon>
    <div class="gym-activity-history-list__item-time">{{ fromNow }}</div>
    <v-layout row align-center justify-space-between class="gym-activity-history-list__item-inside">
      <v-icon>thumb_up</v-icon>
      <div class="gym-activity-history-list__item-inside-activity-name">
        {{ activities[index].activity }}
      </div>
      <div class="gym-activity-history-list__item-inside-activity-category">
        Siłownia
      </div>
      <div class="gym-activity-history-list__item-inside-activity-points">
        +{{ activities[index].points }}!
      </div>
    </v-layout>
  </li>
</template>

<script>
import moment from 'moment'
export default {
  props: ['activeUser', 'activities', 'index'],
  computed: {
    fromNow() {
      return moment(this.activities[this.index].timestamp)
    }
  }
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

.gym-activity-history-list__item {
  max-height: 100px;
  display: flex;
  align-items: center;
  padding: 8px 0;
  margin: 40px 20px 20px;
  background: pal(white, light);
  border-radius: 10px;
  position: relative;

  &-icon {
    @include font(12, 0);
    color: black;
    position: absolute;
    left: -29px;
    top: -20px;
  }

  &-time {
    @include font(11, 500);
    position: absolute;
    top: -25px;
  }

  &-inside {
    width: 100%;
    padding: 0 15px;

    &-activity {
      &-name {
        @include font(10, 400);
      }
      &-category {
        @include font(9, 400);
        color: pal(gray);
      }
      &-points {
        color: pal(blue);
        @include font(14, 500)
      }
    }
  }
}


</style>
