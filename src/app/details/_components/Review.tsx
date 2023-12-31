import { ReviewType } from "@/types/reviews.types";
import Image from "next/image";

type Props = {
  reviewInfo: ReviewType | undefined;
};

const Review = ({ reviewInfo }: Props) => {
  if (!reviewInfo) {
    return;
  }
  const { author, author_details, content, created_at } = reviewInfo;
  const createdDate = new Date(created_at).toLocaleDateString();
  const paragraphs = content.split("\r\n");

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex gap-4 max-sm:flex-col max-sm:items-center ">
        <div className="h-[70px]  max-w-[70px] w-full rounded-full overflow-hidden ">
          {author_details.avatar_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w45/${author_details.avatar_path}`}
              alt="avatar"
              width={70}
              height={70}
              className="h-full w-full flex justify-center items-center"
            />
          ) : (
            <div className="flex justify-center items-center text-2xl bg-cyan-500 w-full h-full">
              {author.at(0)?.toUpperCase()}
            </div>
          )}
        </div>
        <div className="">
          <h2 className="mb-1 text-xl font-semibold max-sm:text-center">
            A review by {author}
          </h2>
          <div className="flex items-center gap-3 max-sm:flex-col max-sm:gap-1">
            <div className="flex gap-2  items-center   px-3 rounded-xl bg-white text-xl font-semibold  text-black">
              <span>&#9733;</span>
              <span>{author_details?.rating || <span className="text-base whitespace-nowrap">No rating</span>}</span>
            </div>
            <span className="text-lg font-extralight max-sm:text-center">
              Written by <span className="font-semibold">{author}</span> on{" "}
              {createdDate}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {paragraphs.map((paragraph) => (
          <p
            className="leading-relaxed text-lg font-medium max-xsm:text-base"
            key={paragraph}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Review;
