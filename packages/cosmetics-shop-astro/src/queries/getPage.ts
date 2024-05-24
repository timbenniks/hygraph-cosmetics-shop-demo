import { request } from "graphql-request";
import { graphql } from "../gql"
import type { Stage, Locale } from "../gql/graphql";

const endpoint = import.meta.env.ASTRO_HYGRAPH_ENDPOINT;

const query = graphql(`
  query Page($slug: String!, $stage: Stage! = PUBLISHED, $locale: Locale!) {
    page(locales: [$locale], where: { slug: $slug }, stage: $stage) {
      __typename
      id
      slug
      title
      description
      ogImage(locales: [$locale, en]) {
        url
      }
      components {
        ... on Editorial {
          id
          __typename
          image(locales: [$locale, en]) {
            url
          }
          components {
            ... on Card {
              id
              __typename
              cta
              image(locales: [$locale, en]) {
                url
              }
              title
              url
            }
            ... on Cta {
              id
              __typename
              chapeau
              cta
              description
              title
              url
            }
          }
        }
        ... on Hero {
          id
          __typename
          description
          image(locales: [$locale, en]) {
            url
          }
          title
        }
        ... on ProductHighlight {
          id
          __typename
          productFocus {
            id
            __typename
            cta
            description
            image(locales: [$locale, en]) {
              url
            }
            productId
            title
            url
            product {
              description
              id
              images {
                alt
                url
              }
              ingredients
              price
              name
              shortDescription
              slug
              stock
            }
          }
        }
        ... on Routine {
          id
          __typename
          chapeau
          cta
          description
          image(locales: [$locale, en]) {
            url
          }
          title
          url
        }
      }
    }
  
  }
`);

export default async function (slug: string, stage: "PUBLISHED" | "DRAFT", locale: "en" | "fr") {
  const variables = {
    slug: slug || "home",
    stage: stage as Stage || "PUBLISHED" as Stage,
    locale: locale as Locale || "en" as Locale
  };

  const data = await request(
    endpoint,
    query,
    variables
  );

  return data;
}
