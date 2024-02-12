import Image from "next/image";
import SearchForm from "@/components/search/SearchForm";

type Props = {
  randomBackDropImageUrl: string;
};

const Hero = ({ randomBackDropImageUrl }: Props) => {
  return (
    <section className="flex  h-[900px] w-full flex-col items-center justify-center max-sm:h-[900px]">
      <Image
        src={randomBackDropImageUrl}
        alt="backdrop"
        fill={true}
        className="absolute left-0 top-0  min-h-full w-full object-cover opacity-50 max-lg:object-contain"
        style={{ objectFit: "cover" }}
      />

      <div className="absolute bottom-0 left-0 h-[400px]  w-full bg-gradient max-sm:h-[100px]"></div>
      <SearchForm />
    </section>
  );
};

export default Hero;
