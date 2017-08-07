<template lang="html">
    <img class="game-achievements-badge"
         :src="'/static/images/' + badge.name + '.svg'"
         alt="">
</template>

<script>
export default {
  props: ['badge']
}
</script>

<style lang="css">

.game-achievements-badge {
  width: 50px;
  height: 50px;
  margin: 15px;
}

</style>
