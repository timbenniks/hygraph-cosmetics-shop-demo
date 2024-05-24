import { request } from "graphql-request";
import { graphql } from "../gql"

const endpoint = import.meta.env.ASTRO_HYGRAPH_ENDPOINT;

const query = graphql(`
  query Navigation {
    navigation(where: { id: "clwknjrk14u4807w4krsfrz0z" }) {
      page {
        ... on Page {
          __typename
          slug
          title
        }
        ... on Pdp {
          __typename
          slug
          title
        }
      }
    }
  }
`);

export default async function getNavigation() {
  const data = await request(
    endpoint,
    query
  );

  return data;
}