import {
  FederateThisReviews_Review,
  FederateThisReviews_Reviews,
} from "@/gql/graphql";

interface Props {
  reviews: FederateThisReviews_Reviews;
}

export default function ProductRevies({ reviews }: Props) {
  return (
    <section className="bg-tertiary">
      <div className="px-12 py-24 md:px-16 md:py-12">
        <h1 className="text-4xl font-bold mb-12 text-dark">reviews</h1>

        <ul>
          {reviews?.data?.map((review) => {
            return (
              <li className="mb-8 max-w-screen-md border-b border-b-secondary pb-8">
                <h3 className="text-primary text-lg font-bold mb-2">
                  {review?.name} ({review?.rating}/5)
                </h3>
                <p>{review?.comment}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
