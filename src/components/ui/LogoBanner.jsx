import Image from "next/image";
import React from "react";

const LogoBanner = () => {
  return (
    <section className="position-relative bg-primary py-5">
      <div className="text-cenrer d-flex justify-content-center">
        <Image
          width={260}
          height={80}
          className="object-fit-contain"
          src="/assets/images/logo.png"
          alt="logo"
        />
      </div>
    </section>
  );
};

export default LogoBanner;
