type TitleProps = {
  name: string;
  title: string;
  tagline: string;
};

export const Title = ({ name, title, tagline }: Partial<TitleProps>) => {
  return (
    <div>
      <h3 className="mb-1 text-4xl  max-lg:text-center max-xsm:text-3xl">
        {name || title}
      </h3>
      <h4 className="text-xl italic text-gray-200 max-lg:text-center max-xsm:text-lg">
        {tagline}{" "}
      </h4>
    </div>
  );
};
