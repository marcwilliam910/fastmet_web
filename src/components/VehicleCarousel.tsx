import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { CarouselApi } from "@/components/ui/carousel";
import { useVehicles } from "@/hooks/useVehicleQueries";

export default function VehicleCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  const { data, isPending, isError } = useVehicles();

  const images =
    data?.map((vehicle) => ({
      src: vehicle.imageUrl,
      alt: vehicle.name,
    })) ?? [];

  // ✅ autoplay ONLY when data is ready
  useEffect(() => {
    if (!api || isPending || isError || images.length === 0) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api, isPending, isError, images.length]);

  if (isError) return null;

  // ✅ EMPTY STATE
  if (!isPending && images.length === 0) return null;

  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
        <CarouselContent className="-ml-2 md:max-w-md xl:max-w-lg">
          {isPending
            ? Array.from({ length: 5 }).map((_, index) => (
                <VehicleCardSkeleton key={index} />
              ))
            : images.map((img, index) => (
                <CarouselItem key={index} className="basis-1/3 pl-2">
                  <Card image={img.src} alt={img.alt} />
                </CarouselItem>
              ))}
        </CarouselContent>

        {!isPending && images.length > 0 && (
          <>
            <CarouselPrevious className="ml-2 cursor-pointer lg:ml-0" />
            <CarouselNext className="mr-2 cursor-pointer lg:mr-0" />
          </>
        )}
      </Carousel>
    </div>
  );
}

const Card = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <div className="w-full aspect-square mx-auto rounded-xl flex items-center justify-center bg-white/20 border border-primary shadow-md">
      <img
        src={image}
        alt={alt}
        className="h-12 w-16 md:h-16 md:w-24 lg:h-20 lg:w-28 xl:h-24 xl:w-32 drop-shadow-md object-contain"
      />
    </div>
  );
};

const VehicleCardSkeleton = () => {
  return (
    <div className="basis-1/3 pl-2">
      <div className="relative w-full aspect-square mx-auto rounded-xl border border-primary/30 bg-white/10 backdrop-blur-sm shadow-md overflow-hidden">
        {/* Centered logo placeholder */}
        <div className="flex items-center justify-center h-full">
          <div className="relative">
            <div className="h-12 w-16 md:h-16 md:w-24 lg:h-20 lg:w-28 xl:h-24 xl:w-32 rounded-md bg-white/20" />

            {/* Shimmer */}
            <div className="absolute inset-0 overflow-hidden rounded-md">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Subtle outer shimmer sweep */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
};
