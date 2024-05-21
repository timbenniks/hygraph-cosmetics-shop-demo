# SKNCRE cosmetics shop demo

- See the [running demo](https://skncre-cosmetics-hygraph-astro.vercel.app/).
- Join [the Hygraph community](https://slack.hygraph.com) for any questions or read the [Hygraph docs](https://hygraph.com/docs).

[![Clone project](https://hygraph.com/button)](https://app.hygraph.com/clone/f67b7c52af504cd9a19de912423b2e40?name=Hygraph%20Cosmetics%20Shop)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/timbenniks/hygraph-cosmetics-shop-demo-astro)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftimbenniks%2Fhygraph-cosmetics-shop-demo-astro&env=ASTRO_HYGRAPH_ENDPOINT&envDescription=Hygraph%20Performance%20endpioint&project-name=hygraph-cosmetics-shop-demo-astro&repository-name=hygraph-cosmetics-shop-demo-astro&demo-title=Hygraph%20Cosmetics%20Shop%20Demo&demo-description=Commerce%20demo%20with%20composability%20inthe%20cosmetics%20space&demo-url=https%3A%2F%2Fskncre-cosmetics-hygraph.vercel.app%2F&demo-image=https%3A%2F%2Fmedia.graphassets.com%2F2rkpPVMT6mliFXMg3AYS)

## Add GraphQL and Hygraph connections

In `.env` add and make sure to add content viewing permissions in Hygraph API settings

```
GQL_HOST=https://<HYGRAPH_CDN_LOCATION>.cdn.hygraph.com/content/<ID>/master
```

See `.env.example` for the setup requirements.

run `npm run codegen` for GraphQL types.

## Development Server

Start the development server on `http://localhost:4321`:

```bash
npm dev
```

Feel free to check [the Astro documentation](https://docs.astro.build) or jump into the [Astro Discord server](https://astro.build/chat).
