import Link from "next/link";
import React from "react";
import Review from "./Review";
import { ReviewsType } from "@/types/reviews.types";

type Props = {
  reviews: ReviewsType;
  id: string;
};

const PreviewReview = ({ reviews, id }: Props) => {
  return (
    <>
      <h2 className=" text-2xl font-bold max-lg:text-center max-xsm:text-xl">
        Reviews
      </h2>
      {reviews.results.length ? (
        <Link href={`/details/reviews/${id}`}>
          <Review reviewInfo={reviews.results[0]} />
        </Link>
      ) : (
        <p className="text-lg">No Reviews</p>
      )}
    </>
  );
};

export default PreviewReview;
