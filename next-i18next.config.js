// module.exports = {
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en', 'hi', 'mr'], // Add all your supported locales
//   },
//   localePath: typeof window === 'undefined'
//     ? require('path').resolve('./public/locales')
//     : '/locales',
// };
module.exports = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  backend: {
    use: [], // Prevents `fs` from being used
  },
};