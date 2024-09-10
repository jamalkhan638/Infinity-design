import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const [authenticate, setAuthenticate] = useState(false);

    useEffect(() => {
      const userToken = localStorage.getItem("userToken");
      //   const user = localStorage.getItem('user');
      if (!userToken) {
        router.replace("/login");
      } else {
        setAuthenticate(true);
      }
    }, []);
 

    return authenticate && <WrappedComponent {...props} />;
  };
};

export default withAuth;
