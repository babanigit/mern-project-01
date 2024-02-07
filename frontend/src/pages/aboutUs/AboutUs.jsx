import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const history = useNavigate();

  const callAboutPage = async () => {
    try {


      const res = await fetch("/about", {
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          // "SameSite":"none"
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log("data...");
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

      
    } catch (error) {
      console.log("error from AboutUs...");
      console.log(error);

      history("/signin", { replace: true });
    }
  };

  useEffect(() => {
    return () => {
      callAboutPage();
    };
  }, []);

  return (
    <>
      <div>AboutUs</div>
    </>
  );
};

export default AboutUs;
