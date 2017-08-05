<template lang="html">
  <div class="gym-activity-history">
    <ul class="gym-activity-history-list">
      <li v-for="i in 4" :key="i" class="gym-activity-history-list__item">
        <v-icon class="gym-activity-history-list__item-icon black--text">schedule</v-icon>
        <div class="gym-activity-history-list__item-time">12m ago</div>

        <v-layout row align-center justify-space-around class="gym-activity-history-list__item-inside">
          <v-icon>thumb_up</v-icon>
          <div class="gym-activity-history-list__item-inside-activity-name">
            Shake białkowy
          </div>
          <div class="gym-activity-history-list__item-inside-activity-category">
            Siłownia
          </div>
          <div class="gym-activity-history-list__item-inside-activity-points">
            +10!
          </div>
        </v-layout>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['activeUser']
}
</script>

<style lang="scss">

@import '../../assets/styles/main.scss';

$black: #202020;
$white: #fff;
$dark-grey: #808080;
$light-grey: #d9d9d9;
$purple: #B97CFC;
$pink: #F93B69;
$green: #B0E8E2;
$orange: #EB8B6E;

.gym-activity-history {
  &-list {
    padding: 10px 30px 10px 36px;
    margin: 0;
    list-style: none;
    position: relative;

    &::before {
      content: ' ';
      height: 100%;
      width: 1px;
      border-left: 1px dashed pal(white, light-dark);
      position: absolute;
      top: 0;
      left: 2.5em;
      z-index: 0;
    }

    &__item {
      max-height: 100px;
      display: flex;
      align-items: center;
      padding: 12px 0;
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
        width: 20%;
        @include font(11, 500);
        position: absolute;
        top: -25px;
      }

      &-inside {
        width: 100%;

        &-activity {
          &-name {
            @include font(12, 400);
          }
          &-category {
            color: pal(gray);
          }
          &-points {
            color: pal(blue);
            @include font(14, 500)
          }
        }
      }
    }
  }

  .people img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}

</style>
