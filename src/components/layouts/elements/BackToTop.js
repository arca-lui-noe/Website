import Image from "next/image";
import { useEffect, useState } from "react";

export default function WhatsappButton() {
  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => {
  //     setVisible(window.scrollY > 100);
  //   };
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  const whatsappLink = "https://wa.me/36301234567"; // Cseréld saját WhatsApp számra

  return (
    <>
      {/* {visible && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Kapcsolat WhatsAppon"
        >
          <Image  width={30}
            height={30}
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp ikon"
            className="whatsapp-logo"
          />
        </a>
      )} */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Kapcsolat WhatsAppon"
      >
        <Image
          width={30}
          height={30}
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp ikon"
          className="whatsapp-logo"
        />
      </a>
      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: #25d366;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: popUp 0.5s ease-out;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          z-index: 1000;
        }

        .whatsapp-float:hover {
          transform: scale(1.1) translateY(-4px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .whatsapp-logo {
          width: 32px;
          height: 32px;
        }

        @keyframes popUp {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
}
