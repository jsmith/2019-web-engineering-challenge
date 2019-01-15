<template>
  <button class="search-button primary" @click="$emit('click', $event)">
    <magnify class="icon" scale="1.5"></magnify>
  </button>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SearchButton extends Vue {}
</script>

<style lang="sass" scoped>
.search-button
  border: 1px solid #eee
  border-radius: 3px
  cursor: pointer
  font-size: 12pt
  padding: 2px 5px

.icon
  color: white
  transform: scaleX(-1)

.icon, .icon /deep/ .material-design-icon__svg
  height: 2.5em
  width: 2.5em
</style>