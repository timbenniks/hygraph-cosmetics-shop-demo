# Hygraph Cosmetics shop demo

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

## Developer quick start

### Install

```
pnpm i
```

### Run locally

```
pnpm run dev:nuxt
pnpm run dev:next
pnpm run dev:astro
```

### Build all apps

```
pnpm run build
```

### Publish

Install `jq`

```
brew install jq
sh publish.sh
```
