"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const plugin = React.useRef(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        className="mx-auto max-h-96 w-full max-w-lg "
        plugins={[plugin.current]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 bg-transparent">
                <CardContent className="flex min-h-96 items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white" />
        <CarouselNext className="bg-black" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}

//     {
//   return (
//     <section className="testimonial-container">
//       <div className="title">
//         <h2>Testimonial</h2>
//         <p>What members are saying.</p>
//       </div>

//       <div className="slider-container">
//         <Splide
//           options={{
//             perPage: 1,
//             autoplay: true,
//             speed: 1000,
//             rewind: true,
//             rewindByDrag: true,
//           }}
//         >
//           {reviews.map(
//             (review: {
//               id: number;
//               image: string;
//               text: string;
//               name: string;
//             }) => (
//               <SplideSlide key={review.id}>
//                 <img className="review-img" src={review.image} alt="" />
//                 <div className="content">
//                   <p className="text">{review.text}</p>
//                   <div className="info">
//                     <div className="rating">
//                       <span className="star">&#9733;</span>
//                       <span className="star">&#9733;</span>
//                       <span className="star">&#9733;</span>
//                       <span className="star">&#9733;</span>
//                       <span className="star">&#9734;</span>
//                     </div>
//                     <p className="user">{review.name}</p>
//                   </div>
//                 </div>
//               </SplideSlide>
//             ),
//           )}
//         </Splide>
//       </div>
//     </section>
//   );
// };

export default CarouselDApiDemo;
