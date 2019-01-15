<template>
  <div class="banner">Toronto Waste Lookup</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Banner extends Vue {}
</script>

<style lang="sass" scoped>
.banner
  background-image: linear-gradient(to right, #1c5b92, #22955f)
  color: white
  text-align: center
  font-size: 2.3em
  font-weight: 600
  padding: 30px 0
</style>