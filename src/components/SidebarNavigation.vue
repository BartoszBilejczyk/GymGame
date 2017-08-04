<template lang="html">
  <div class="game-sidebar-navigation">
    <ul class="game-sidebar-navigation-list">
      <router-link class="game-sidebar-navigation-list__link"
                   v-for="navigationItem in navigation"
                   :key="navigationItem.text"
                   :to="navigationItem.to">
        <li class="game-sidebar-navigation-list__item">
          <v-icon class="game-sidebar-navigation-list__item__icon">{{ navigationItem.icon }}</v-icon>
          {{ navigationItem.text }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'SidebarNavigation',
  props: ['activeUser'],
  data() {
    return {
    }
  },
  computed: {
    navigation() {
      return this.$store.state.navigation
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

@import '../assets/styles/main.scss';

.game-sidebar-navigation {
  width: 140px;
  background: white;
  height: calc(100vh - 120px);

  &-list {
    padding: 0;
    list-style: none;

    &__link {
      text-decoration: none;
      color: inherit;
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 50px 0;
      padding: 0 10px;
      @include font(12, 300);

      &__icon {
        @include font(32);
      }
    }
  }
}

.router-link-exact-active {
  li {
    border-right: 2px solid pal(orange, dark);
  }

  i {
    transition: 0.4s;
    color: pal(orange, dark) !important;
  }
}
  //
  // .navigation-drawer--mini-variant:not(.navigation-drawer--close) ~ main, .navigation-drawer--persistent:not(.navigation-drawer--is-mobile).navigation-drawer--open:not(.navigation-drawer--right) ~ main {
  //   padding-left: 134px !important;
  // }
  //
  // .game {
  //   &-main {
  //     background: rgba(0, 0, 0, 0.06);
  //     height: 100vh;
  //     max-width: 100vw;
  //     padding: 0;
  //   }
  //   &-navigation {
  //     margin-top: 0;
  //     max-height: 100vh;
  //     width: 130px;
  //
  //     &-list {
  //       height: 100vh;
  //       padding: 0;
  //       background: linear-gradient(to bottom, #2f96ea 0%,#30c8ca 100%) !important;
  //       &__item {
  //         a {
  //           display: flex;
  //           justify-content: center;
  //           height: 110px;
  //         }
  //
  //         a.list__tile:hover {
  //           background: transparent;
  //         }
  //
  //         a.list__tile--active {
  //           background: linear-gradient(45deg, #57a9ec 0%, #56a6ef 100%) !important;
  //           .icon {
  //             color: white !important
  //           }
  //         }
  //
  //         &-action {
  //           justify-content: center;
  //         }
  //
  //         &-icon {
  //           font-size: 40px;
  //           color: white;
  //         }
  //       }
  //     }
  //   }
  // }
</style>
