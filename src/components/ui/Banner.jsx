import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="position-relative banner-cover">
      <Image
        className="object-fit-cover bg-black"
        src="/assets/images/banner.jpg"
        alt="banner"
        fill
        priority
      />
    </section>
  );
};

export default Banner;
