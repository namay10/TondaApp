import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import s1 from '../images/s1.png';
export default function Carousel({
  photos,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? photos.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === photos.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {photos.map((photo, index) => (
          <div key={index} className="min-w-full flex flex-col items-center">
            <img src={photo.src} alt="" className="mt-3 size-fit h-[75%]  object-cover" />
            {/* <img src={s1} alt="" className="mt-3 size-fit object-cover" /> */}
            <p className="mt-2 text-center text-xl text-black font-serif ">
              <i>
                {photo.description}
            </i>
            </p>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <button
          onClick={prev}
          className="p-1 rounded-full  bg-card/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full  bg-card/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      {/* <div className="absolute bottom-4 right-0 left-0 flex items-center justify-center gap-2">
        {photos.map((_, i) => (
          <div
            key={i}
            className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
          />
        ))}
      </div> */}
    </div>
  );
}
