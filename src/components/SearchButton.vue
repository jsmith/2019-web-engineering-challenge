<template>
  <button class="search-button" @click="emit$('click', $event)">
    <icon name="search" color="white"></icon>
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
  background-color: #000
  cursor: pointer
  font-size: 15pt
  padding: 3px 10px
  margin: 10px
</style>