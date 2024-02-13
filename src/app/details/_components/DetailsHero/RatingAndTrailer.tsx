import CircularRating from "@/components/CircularRating";
import WatchTrailer from "../WatchTrailer";

export const RatingAndTrailer = ({
  voteAverage,
  videoTrailerKey,
}: {
  voteAverage: number;
  videoTrailerKey?: string;
}) => {
  return (
    <div className="flex gap-7 max-lg:flex-col max-lg:items-center max-lg:gap-0 max-xsm:mt-4   max-xsm:gap-2">
      <div className="w-20 max-xsm:self-center">
        <CircularRating vote_average={voteAverage} />
      </div>
      <WatchTrailer videoTrailerKey={videoTrailerKey} />
    </div>
  );
};
