import { fetchMovieData } from "@/app/api/fetchMovieData";
import { ReviewType } from "@/types/reviews.types";
import Review from "../../_components/movieAndTV/Review";

type Props = {
  params: {
    id: string;
  };
};

type ReviewsType = {
  results: ReviewType[];
};

const page = async ({ params: { id } }: Props) => {
  const reviewsData: ReviewsType = await fetchMovieData(`movie/${id}/reviews`);
  return (
    <section className="mt-24 flex flex-col gap-11">
      {reviewsData.results.map((reviewInfo) => (
        <Review key={reviewInfo.id} reviewInfo={reviewInfo} />
      ))}
    </section>
  );
};

export default page;
