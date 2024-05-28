# Commerce demo (Cosmetics Shop)

The Hygraph Cosmetics shop "SKNCRE" is a fictitious cosmetics brand selling costly snail slime skin care products: face serum, face cream, eye contour, and the SKNCRE bundle. What you often see in composable e-commerce is that the product information lives in a specialized management system (a PIM), the content of the website in a CMS, and commerce features such as a cart, checkout, account, and payments in yet another system (a commerce engine).

In this example, all pages, content, and media are stored in Hygraph, but the products come from an external system – in this case, a mock API called Federate This _(TBD: potentially use shopify)_. We expose the data in Hygraph via Content Federation. Developers query the CMS for product data, while editors can use the data inside the CMS while they combine editing native and federated content as if it were the same. The beauty is that developers and content editors do not need to understand the external product API as they use it directly through Hygraph.

This demo’s architecture is highly composable, and it would be relatively easy to add a system like Commerce Layer to facilitate shopping cart and checkout functionality.

## Hygraph ICP: Promotions CMS

- Audience: Marketing, operations & tech team
- Goals: Commerce integrations, rich content via remote sources
- Demo needs: Commerce demo (page builder style, with integrations)

## About this demo

- Name: Commerce Shop
- ICP: Promotions CMS
- Hygraph features: Page builder (components), integrations, localization, mutations, preview
- Integrations: Shopify, Federate This
- Pages: Landing page, Product list page, Product page, Shopping Cart
- Notes: Newsletter subscription mutations

## Teachable moments

This demo has a few teachable moments:

- Navigation builder
  - This demo has a the simplest form of a navigation builder schema. It has a Page field that can hold multiple pages. One GraphQL query will receive all pages for the front-end to render.
- Localisation (EN, FR)
  - For the simplicity of this demo only the homepage and its components have been localized. Both the navigation and the newsletter have not been localized.
- Newsletter subscription
  - The newsletter subscription works via a mutation which adds a new content entry to the Newsletter Subscriber model with an email address. There is a specific token setup in this demo which allows emails to be added in draft mode.
- Page builder setup by using components.
  - This demo makes use of [components](https://hygraph.com/docs/guides/schema/components) attached to the page schema. There are 10 components, all usable to make content editor more easy.
- Preview which queries the Hygraph draft API.
  - Each page has [preview](https://hygraph.com/docs/guides/schema/preview-urls) set up from the sidebar. The front-end will read the DRAFT API in case there preview URL has been used.
- Remote sources for product data (Federate this, later Shopify or commercetools)
  - Currently [Federate This](https://federatethis.com) has been connected as a remote GraphQL source. Read more about [remote sources](https://hygraph.com/docs/guides/schema/remote-sources).

## Setup without running the code

Prerequisites:

- Vercel Account
- Github Account
- Hygraph Account

Steps:

1. [Clone](https://app.hygraph.com/clone/f67b7c52af504cd9a19de912423b2e40?name=Hygraph%20Cosmetics%20Shop) the hygraph project.
2. Deploy to Vercel with this [quick link](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftimbenniks%2Fhygraph-cosmetics-shop-demo-next&env=NEXT_HYGRAPH_ENDPOINT&envDescription=Hygraph%20Performance%20endpioint&project-name=hygraph-cosmetics-shop-demo-next&repository-name=hygraph-cosmetics-shop-demo-next&demo-title=Hygraph%20Cosmetics%20Shop%20Demo&demo-description=Commerce%20demo%20with%20composability%20inthe%20cosmetics%20space&demo-url=https%3A%2F%2Fskncre-cosmetics-hygraph.vercel.app%2F&demo-image=https%3A%2F%2Fmedia.graphassets.com%2F2rkpPVMT6mliFXMg3AYS).
3. Make sure to copy the live URL Vercel gives you and set up preview in the Schema editor in Hygraph by replacing the link in there with the link you got from Vercel.
4. Make sure to set up the permissions for the content delivery API to be “read all models on all stages for all locales”. This allows for preview functionality.
5. Add a permanent auth token to allow for read, create update and delete on the Newsletter Subscriber schema. add this token to the .env file of the demo (see below).

## For developers

This is a monorepo (pnpm workspace). Each package has its own git repository. The monorepo is a private repo on github where the packages are public facing.

### Hygraph Setup

Make sure to set up the permissions for the content delivery API to be “read all models on all stages for all locales”. This allows for preview functionality.

Add a permanent auth token to allow for read, create update and delete on the Newsletter Subscriber schema. add this token to the .env file of the demo (see below).

### Install

```
pnpm i
```

### Codegen

Nuxt has its own codegen on project start. The others need codegen when queries are updated.

```
pnpm run codegen:next
pnpm run codegen:astro
```

### Run locally

Each packages ha it’s own port assigned.

```
pnpm run dev:nuxt
pnpm run dev:next
pnpm run dev:astro
```

### Build all apps

```
pnpm run build
```

### Publishing

First run `pnpm changeset` and follow the steps. Commit everything.
Than run `pnpm changeset version` and follow the steps. Commit everything.

Push all packages to their indiviual repos.

### Environment variables

The mono repo has one `.env` file which contains all variables for all packages. Upon running any npm script the `.env` is copied to the current package.

See the `.env.example` file.

```
HYGRAPH_ENDPOINT="<endpoint>"
HYGRAPH_TOKEN="<token>"

NUXT_HYGRAPH_ENDPOINT=$HYGRAPH_ENDPOINT
NEXT_HYGRAPH_ENDPOINT=$HYGRAPH_ENDPOINT
ASTRO_HYGRAPH_ENDPOINT=$HYGRAPH_ENDPOINT

NUXT_HYGRAPH_TOKEN=$HYGRAPH_TOKEN
NEXT_HYGRAPH_TOKEN=$HYGRAPH_TOKEN
ASTRO_HYGRAPH_TOKEN=$HYGRAPH_TOKEN

ASTRO_HYGRAPH_IS_PREVIEW="no"
```
