module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1aa8db',
        secondary: '#d23838',
      },
    },
  },
  variants: {},
  plugins: [],
};
