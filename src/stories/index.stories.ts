import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import SearchButton from '@/components/SearchButton.vue';
import Item from '@/components/Item.vue';
import Banner from '@/components/Banner.vue';

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
  .add('default', () => ({
    components: { SearchButton },
    template: `<search-button @click="action"></search-button>`,
    methods: { action: action('clicked') },
  }));

// tslint:disable-next-line:max-line-length
const body = '&lt;ul&gt;\n&lt;li&gt;Empty and rinse (if necessary and possible) this item before placing it in the&amp;nbsp;&lt;strong&gt;Blue Bin&lt;/strong&gt;.&lt;/li&gt;\n&lt;li&gt;Any type of black or compostable plastic is not accepted and should be placed in the &lt;strong&gt;Garbage Bin&lt;/strong&gt;.&lt;/li&gt;\n&lt;/ul&gt;';
const data = () => ({
  title: 'Blue Bin (plastic takeout food and produce containers)',
  body,
  favorited: false,
});

storiesOf('Item', module)
  .add('default', () => ({
    components: { Item },
    template: `
    <item
      :title="title"
      :body="body"
      :favorited.sync="favorited"
      style="max-width: 500px"
    ></item>
    `,
    data,
  }));

storiesOf('Banner', module)
  .add('default', () => ({
    components: { Banner },
    template: `<banner></banner>`,
  }));
