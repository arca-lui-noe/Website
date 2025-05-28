import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "404 error",
};

const Page404 = () => {
  return (
    <>
      <section className="error_section bg-white position-relative">
        {/* String element that stretches from top to ball */}
        <div className="string-container position-absolute w-100 h-100 d-flex justify-content-center">
          <Image
             width={190}
            height={700}
            src="/images/string2.png"
            alt="String"
            className="string-image"
            style={{
              position: "absolute",
              top: "0",
              left: "49.9%",
              transform: "translateX(-50%)",
              height: "calc(50% + 40px)", // Adjust this value based on your ball position
              width: "auto",
              objectFit: "fill",
              zIndex: 1,
            }}
          />
        </div>

        <div
          className="container text-center position-relative bg-white"
          style={{ zIndex: 2 }}
        >
          <h1>
            4{" "}
            <Image
              width={216}
              height={230}
              src="/images/ball.png"
              alt="Pet Food Bowl"
            />{" "}
            4
          </h1>
          <h2>Page Not Found</h2>
          <p>
            The link you clicked may be broken or the page{" "}
            <span className="d-md-block">may have been removed</span>
          </p>
          <Link className="btn btn_primary" href="/">
            {" "}
            <i className="fas fa-paw"></i> Home Page{" "}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page404;
