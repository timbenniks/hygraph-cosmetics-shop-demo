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
- Localisation (EN, FR)
- Newsletter subscription
- Page builder setup by using components
- Preview which queries the Hygraph draft API
- Remote sources for product data (Federate this, later Shopify or cmmercetools)

## For developers

This is a monorepo (pnpm workspace). Each package has its own git repository.
The monorepo is a private repo on github where the packages are public facing.

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
