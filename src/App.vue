<template>
  <div id="app">
    <banner></banner>
    <div class="content">
      <div class="search">
        <input 
          ref="input"
          v-model="searchText" 
          class="input" 
          @keydown="keydown"
        >
        <search-button @click="search"></search-button>
      </div>
      <div class="results">
        <item
          v-for="item in results"
          :key="item.title"
          :title="item.title"
          :body="item.body"
          :favorited="item.id in favorites"
          @update:favorited="checkFavorite($event, item)"
        ></item>
      </div>
      <div class="favorites">
        <div class="favorites-content">
          <div class="favorites-title primary--text">Favorites</div>
          <div v-if="!showFavorites">No favorites selected yet.</div>
          <div v-else class="favorites-items">
            <item
              v-for="item in favorites"
              :key="item.title"
              :title="item.title"
              :body="item.body"
              favorited
              @update:favorited="checkFavorite($event, item.id)"
            ></item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Fuse from 'fuse.js';
import Banner from '@/components/Banner.vue';
import Item from '@/components/Item.vue';
import SearchButton from '@/components/SearchButton.vue';

const URL = 'https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000';

interface RawItem {
  id: string;
  title: string;
  body: string;
  category: string;
  keywords: string;
}

@Component({
  components: {
    Banner,
    SearchButton,
    Item,
  },
})
export default class App extends Vue {
  public searchText = '';
  public favorites: { [k: string]: RawItem } = {};
  public results: RawItem[] = [];
  public raw: RawItem[] = JSON.parse(localStorage.getItem('raw') || '[]');

  get showFavorites() {
    return !!Object.keys(this.favorites).length;
  }

  get fuse() {
    return new Fuse(this.raw, {
      keys: ['title', 'keywords'],
      threshold: 0,
      tokenize: true,
    });
  }

  get madeApiCall() {
    return this.raw.length;
  }

  public keydown(e: KeyboardEvent) {
    if (e.keyCode === 13) { // if enter
      this.search();
    }
  }

  public search() {
    if (!this.madeApiCall) {
      this.getData(this.search);
      return;
    }

    this.results = this.fuse.search(this.searchText);
  }

  public getData(callback: () => void) {
    const http = new XMLHttpRequest();
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        this.raw = JSON.parse(http.responseText) as RawItem[];
        localStorage.setItem('raw', http.responseText);
        callback();
      }
    };

    http.open('GET', URL, true);
    http.send();
  }

  public checkFavorite(favorite: boolean, item: RawItem) {
    if (favorite) {
      this.$set(this.favorites, item.id, item);
    } else {
      Vue.delete(this.favorites, item.id);
    }
  }

  public mounted() {
    const input = this.$refs.input as HTMLElement;
    input.focus();
  }

  @Watch('searchText')
  public clearOnEmpty() {
    if (this.searchText === '') {
      this.results = [];
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  color: #2c3e50
  padding-top: 12px
  height: calc(100vh - 12px)
  display: flex
  overflow: auto
  flex-direction: column

.content
  display: flex
  flex-direction: column
  flex: 1
  overflow: auto

.search, .favorites-content, .results
  margin: 0 15px

.results
  min-height: min-content
  display: flex
  flex-direction: column

.input
  flex: 1
  font-size: 18px
  padding: 0 5px
  margin-right: 10px

.search
  display: flex
  flex-shrink: 0
  padding: 20px 0

.favorites
  margin-top: 30px
  padding: 30px 0
  background-color: #f7fefa
  flex: 1

.favorites-title
  font-size: 1.8em
  font-weight: 600

.favorites-items
  margin-top: 15px
</style>
