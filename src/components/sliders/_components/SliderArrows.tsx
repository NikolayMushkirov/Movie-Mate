import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SwiperUseRef } from "../MovieSlider";

type Props = {
  sliderRef: React.RefObject<SwiperUseRef>;
};

const SliderArrows = ({ sliderRef }: Props) => {
  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  return (
    <>
      <IoIosArrowBack
        className="absolute -left-16 top-[28%] h-14 w-20 cursor-pointer text-cyan-500"
        onClick={handlePrev}
      />
      <IoIosArrowForward
        className="absolute -right-16 top-[28%] h-14 w-20 cursor-pointer text-cyan-500"
        onClick={handleNext}
      />
    </>
  );
};

export default SliderArrows;
