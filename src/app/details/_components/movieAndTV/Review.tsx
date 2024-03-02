import { ReviewType } from "@/types/reviews.types";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
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
      <div className="flex gap-4 max-lg:flex-col max-lg:items-center max-lg:text-center ">
        <div className="h-[70px]  w-full max-w-[70px] overflow-hidden rounded-full  max-lg:hidden">
          {author_details.avatar_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w45/${author_details.avatar_path}`}
              alt="avatar"
              width={70}
              height={70}
              className="flex h-full w-full items-center justify-center"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-cyan-500 text-2xl">
              {author.at(0)?.toUpperCase()}
            </div>
          )}
        </div>
        <div>
          <h2 className="mb-1 text-xl font-semibold  max-lg:hidden">
            A review by {author}
          </h2>
          <div className="flex items-center gap-3 max-lg:flex-col max-lg:gap-4">
            <span className="text-lg font-extralight max-sm:text-center">
              Written by <span className="font-semibold">{author}</span> on{" "}
              {createdDate}
            </span>
            <div className="flex items-center gap-2  rounded-full bg-white px-4 py-1 text-xl font-semibold  text-black">
              {author_details?.rating ? (
                <span> {author_details?.rating} </span>
              ) : (
                <span className="whitespace-nowrap text-lg">No rating</span>
              )}
              <IoIosStar size={15} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        {paragraphs.map((paragraph) => (
          <p
            className="text-lg font-medium leading-relaxed max-xsm:text-base "
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
