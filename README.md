# Spotify Web Engineer Challenge - Summer 2019
My repository for the Summer 2019 Web Engineer Challenge. This application makes use of Vue, TypeScript, and a few utility libraries to create the Toronto Waste Lookup application.

See the deployed application [here](https://jacobsmith.me/2019-web-engineering-challenge/).

### Environment Setup
Just install the dependencies. This step assumes you have `npm` and `Node.js` already installed.
```
npm i
```

### Development
Vue CLI 3 comes with a hot reload development server. Just use the following command and you're good to go.
```
npm run serve
```

### Storybook
Storybook is being used as a development environment. To view the stories, run the following command.
```
npm run storybook:serve
```

### Deployment
Run the following commands. This will build the application to the `docs/` folder and will use `GitHub Pages` to host the website.
```
npm run build
git add .
git commit -m "YOUR COMMIT MESSAGE"
git push
```
