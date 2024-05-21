# SKNCRE cosmetics shop demo

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/timbenniks/hygraph-cosmetics-shop-demo-nuxt)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftimbenniks%2Fhygraph-cosmetics-shop-demo-nuxt&env=NUXT_HYGRAPH_ENDPOINT&envDescription=Hygraph%20Performance%20endpioint&project-name=hygraph-cosmetics-shop-demo-nuxt&repository-name=hygraph-cosmetics-shop-demo-nuxt&demo-title=Hygraph%20Cosmetics%20Shop%20Demo&demo-description=Commerce%20demo%20with%20composability%20inthe%20cosmetics%20space&demo-url=https%3A%2F%2Fskncre-cosmetics-hygraph.vercel.app%2F&demo-image=https%3A%2F%2Fmedia.graphassets.com%2F2rkpPVMT6mliFXMg3AYS)

## Setup

## Add GraphQL and Hygraph connections

In `.env` add and make sure to add content viewing permissions in Hygraph API settings

```
GQL_HOST=https://<HYGRAPH_CDN_LOCATION>.cdn.hygraph.com/content/<ID>/master
```

See `.env.example` for the setup requirements.

Add `.gql` query files in the `./queries` folder and use them like this:

```js
const { data } = await useAsyncGql("<QUERY_NAME>", { foo: "bar" });
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
