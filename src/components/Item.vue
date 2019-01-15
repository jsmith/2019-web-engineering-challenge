<template>
  <div class="item">
    <star 
      :class="{ 'primary--text': favorited }"
      class="icon" 
      @click.native="toggle"
    ></star>
    <div class="title">{{ title }}</div>
    <div class="body" v-html="html"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Item extends Vue {
  @Prop({ type: String, required: true }) public title!: string;
  @Prop({ type: String, required: true }) public body!: string;
  @Prop({ type: Boolean, required: true }) public favorited!: boolean;

  get html() {
    const txt = document.createElement('textarea');
    txt.innerHTML = this.body;
    return txt.value;
  }

  public toggle() {
    this.$emit('update:favorited', !this.favorited);
  }
}
</script>

<style lang="sass" scoped>
.body /deep/ ul
  margin: 0

.body /deep/ li
  margin: 8px

.item
  display: flex
  align-items: flex-start

.title, .body
  flex-basis: 0

.title
  flex-grow: 1

.body
  flex-grow: 1.6

.icon
  align-self: unset
  margin-right: 10px
  flex-shrink: 0
  color: #a9a9a9
  margin-top: -4px
  
  &:hover
    cursor: pointer

.icon, .icon /deep/ .material-design-icon__svg
  height: 1.5em
  width: 1.5em
</style>