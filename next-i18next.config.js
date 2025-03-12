// module.exports = {
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en', 'hi', 'mr'], // Add all your supported locales
//   },
//   localePath: typeof window === 'undefined'
//     ? require('path').resolve('./public/locales')
//     : '/locales',
// };
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Replace fs-backend with http-backend
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Adjust path as needed
    },
  });