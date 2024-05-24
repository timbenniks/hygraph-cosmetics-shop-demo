import { request } from "graphql-request";
import { graphql } from "../gql"

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

export async function getNavigation() {
  const data = await request(
    process.env.NEXT_HYGRAPH_ENDPOINT as string,
    query
  );

  return data;
}