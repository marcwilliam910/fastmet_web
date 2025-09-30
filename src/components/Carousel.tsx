import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import truck from "../assets/fastmet_truck.png";

const trucks = [truck, truck, truck, truck, truck, truck];

export default function TruckCarousel() {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center gap-6 ">
      <Carousel
        setApi={setApi}
        className="w-full max-w-5xl px-3"
        opts={{align: "center", loop: true, dragFree: false}}
      >
        <CarouselContent>
          {trucks.map((truck, i) => {
            const isActive = i === current;
            return (
              <CarouselItem key={i} className="lg:basis-1/3 basis-1/3 ">
                <img
                  src={truck}
                  alt={`truck-${i}`}
                  className={`transition-all duration-500 object-contain cursor-grab ${
                    isActive
                      ? "scale-150 lg:scale-130 opacity-100 z-10"
                      : "scale-100 lg:scale-90  opacity-50"
                  }`}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 w-full">
        {Array.from({length: count}).map((_, i) => (
          <Button
            key={i}
            variant="ghost"
            size="icon"
            onClick={() => api && api.scrollTo(i)}
            className={`md:size-3 size-2 rounded-full p-0 cursor-pointer ${
              current === i
                ? "bg-orange-400"
                : "hover:border hover:border-orange-400  bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
