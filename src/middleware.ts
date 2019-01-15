import Vue from 'vue';
import 'vue-material-design-icons/styles.css';
import '@/global.sass';
import Star from 'vue-material-design-icons/Star.vue';
import StarOutline from 'vue-material-design-icons/StarOutline.vue';
import Magnify from 'vue-material-design-icons/Magnify.vue';


export default () => {
  Vue.component('Star', Star);
  Vue.component('StarOutline', StarOutline);
  Vue.component('Magnify', Magnify);
};
