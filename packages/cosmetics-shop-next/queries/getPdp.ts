
import { request } from "graphql-request";
import { graphql } from "../gql"
import type { Stage } from "../gql/graphql";

const query = graphql(`
  query Pdp($slug: String!, $stage: Stage! = PUBLISHED) {
    pdp(where: { slug: $slug }, stage: $stage) {
      id
      __typename
      slug
      title
      description
      ogImage {
        url
      }
      components {
        ... on Tutorial {
          __typename
          id
          title
          image {
            url
          }
          items {
            __typename
            text
          }
        }
        ... on Routine {
          __typename
          id
          chapeau
          cta
          description
          image {
            url
          }
          title
          url
        }
        ... on ProductList {
          __typename
          title
          relatedProductList {
            relatedProductId
            relatedProducts {
              products {
                description
                id
                images {
                  alt
                  url
                }
                ingredients
                name
                price
                shortDescription
                slug
                stock
              }
            }
          }
        }
      }

      commercetoolsProduct {
        id
        masterData {
          current {
            slug(locale: "en-GB")
            metaTitle(locale: "en-GB")
            metaDescription(locale: "en-GB")
            name(locale: "en-GB")
            description(locale: "en-GB")
            categories {
              name(locale: "en-GB")
            }
            allVariants {
              id
              attributesRaw {
                name
                value
              }
              images {
                url
                label
              }
              price(currency: "EUR") {
                value {
                  type
                  currencyCode
                  centAmount
                  fractionDigits
                }
              }
              sku
            }
          }
        }
      }

      reviews {
        data {
          comment
          id
          name
          product
          productSlug
          rating
        }
      }
    }
  }
`);

export async function getPdp(slug: string, stage: "PUBLISHED" | "DRAFT") {
  const variables = {
    slug: slug || "face-serum",
    stage: stage as Stage || "PUBLISHED" as Stage
  };

  const data = await request(
    process.env.NEXT_HYGRAPH_ENDPOINT as string,
    query,
    variables
  );

  return data;
}