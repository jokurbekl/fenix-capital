import React from "react";
import { Carousel, Image } from "antd";

const PhotoCarousel: React.FC = () => (
  // <div className="bg-gray-100">
  <Carousel
    autoplay
    className="mx-auto w-[250px] bg-transparent"
    dots={{ className: "" }}
    arrows={true}
  >
    {/* <div
      // className="mx-auto"
      style={{ width: "fit-content", blockSize: "fit-content" }}
    > */}
    <Image
      className="pb-10"
      style={{ paddingBottom: "30px" }}
      width={250}
      src="https://fncapital.io/wp-content/uploads/2024/03/5.webp"
      alt="placeholder"
    />
    <Image
      className="pb-10"
      style={{ paddingBottom: "30px" }}
      width={250}
      src="https://fncapital.io/wp-content/uploads/2024/03/4.webp"
      alt="placeholder"
    />
    <Image
      // style={}
      width={250}
      src="https://fncapital.io/wp-content/uploads/2024/03/3.webp"
      alt="placeholder"
    />
    <Image
      // style={}
      width={250}
      src="https://fncapital.io/wp-content/uploads/2024/03/2.webp"
      alt="placeholder"
    />
    <Image
      // style={}
      width={250}
      src="https://fncapital.io/wp-content/uploads/2024/03/1.webp"
      alt="placeholder"
    />
    {/* </div> */}
  </Carousel>
  // </div>
);

export default PhotoCarousel;
