import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import SearchButton from '@/components/SearchButton.vue';

// storiesOf('Button', module)
//   .add('with text', () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">Hello Button</my-button>',
//     methods: { action: linkTo('Button', 'with some emoji') },
//   }))
//   .add('with some emoji', () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
//     methods: { action: action('clicked') },
//   }));


storiesOf('SearchButton', module)
  .add('Default', () => ({
    components: { SearchButton },
    template: `<search-button @click="action"></search-button>`,
    methods: { action: action('clicked') },
  }));
