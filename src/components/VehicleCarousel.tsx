import {useEffect, useState} from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {motor, pickup, sedan, suv, truck2, truck4} from "@/constants/images";
import type {CarouselApi} from "@/components/ui/carousel";

const images = [
  {src: motor, alt: "Motorcycle"},
  {src: pickup, alt: "Pickup Truck"},
  {src: suv, alt: "Van"},
  {src: sedan, alt: "Tricycle"},
  {src: truck4, alt: "SUV"},
  {src: truck2, alt: "Sedan"},
];

export default function VehicleCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <Carousel opts={{align: "start", loop: true}} setApi={setApi}>
        <CarouselContent className="-ml-2 md:max-w-md xl:max-w-lg">
          {images.map((img, index) => (
            <CarouselItem key={index} className="basis-1/3 pl-2">
              <Card image={img.src} alt={img.alt} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-2 cursor-pointer lg:ml-0" />
        <CarouselNext className="mr-2 cursor-pointer lg:mr-0" />
      </Carousel>
    </div>
  );
}

const Card = ({image, alt}: {image: string; alt: string}) => {
  return (
    <div className="w-full aspect-square mx-auto rounded-xl flex items-center justify-center bg-white border border-primary shadow-md">
      <img
        src={image}
        alt={alt}
        className="h-12 w-16 md:h-16 md:w-24 lg:h-20 lg:w-28 xl:h-24 xl:w-32 drop-shadow-md object-contain"
      />
    </div>
  );
};
