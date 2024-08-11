import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { usePathname } from "next/navigation";
const LogoBanner = () => {
  const router = useRouter()
  const pathname = usePathname();
  const hidebtn = pathname === "/login" || pathname === "/signup"
  return (
    <section className="position-relative bg-primary py-5">
 { !hidebtn && <p onClick={()=>{router.push("/login"), localStorage.clear()}} className="logoutbtn">Logout</p> }
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
