"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface Partner {
  image: string;
  name: string;
}

export default function InfiniteScrollCarousel({
  partners,
  dir = "right",
  speed = "fast",
}: {
  partners: Partner[];
  dir?: "left" | "right";
  speed?: "fast" | "slow";
}) {
  // Explicitly type scrollerRefs as an array of HTMLDivElement or null
  const scrollerRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Check if user hasn't opted in for reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollerRefs.current.forEach((scroller: HTMLDivElement | null) => {
        if (!scroller) return;

        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", "true");

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(
          ".scroller__inner"
        ) as HTMLElement;
        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
  }, []);

  return (
    <div className="container">
      <style jsx>{`
        .container {
          display: grid;
          // min-height: 200px;
          min-width: 100vw;

          place-content: center;
          font-family: system-ui;
          font-size: 1.125rem;
          //   background-color: hsl(217, 33%, 17%);
          //   color: white;
        }

        h1 {
          text-align: center;
          margin-bottom: 2rem;
          color: hsl(0, 0%, 100%);
        }

        .scroller {
          max-width: 1200px;
          margin-bottom: 2rem;
        }

        .scroller__inner {
          padding-block: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .scroller[data-animated="true"] {
          overflow: hidden;
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
          mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
        }

        .scroller[data-animated="true"] .scroller__inner {
          width: max-content;
          flex-wrap: nowrap;
          animation: scroll var(--_animation-duration, 40s)
            var(--_animation-direction, forwards) linear infinite;
        }

        .scroller[data-direction="right"] {
          --_animation-direction: reverse;
        }

        .scroller[data-direction="left"] {
          --_animation-direction: forwards;
        }

        .scroller[data-speed="fast"] {
          --_animation-duration: 20s;
        }

        .scroller[data-speed="slow"] {
          --_animation-duration: 60s;
        }

        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 0.5rem));
          }
        }

        .tag-list {
          margin: 0;
          padding-inline: 0;
          list-style: none;
        }

        .tag-list li {
          padding: 1rem;
          background: hsl(215, 25%, 27%);
          border-radius: 0.5rem;
          box-shadow: 0 0.5rem 1rem -0.25rem hsl(218, 33%, 9%);
          color: white;
        }

        .scroller__inner img {
          width: 150px;
          height: 150px;
          border-radius: 0.5rem;
          object-fit: cover;
          box-shadow: 0 0.5rem 1rem -0.25rem hsl(218, 33%, 9%);
        }

        .yt {
          display: block;
          text-align: center;
          margin-top: 2rem;
          color: hsl(205, 15%, 58%);
          text-decoration: none;
          transition: color 0.3s;
        }

        .yt:hover {
          color: hsl(0, 0%, 100%);
        }
      `}</style>

      <div className="w-full h-full flex items-center justify-center flex-col">
        <div
          className={`scroller`}
          data-direction={dir}
          data-speed={speed}
          ref={(el: HTMLDivElement | null) =>
            (scrollerRefs.current[0] = el) as any
          }
        >
          <div className="scroller__inner">
            {partners.map((partner, index) => (
              <Image
                key={index}
                src={partner.image}
                className="shadow-md rounded-xl"
                alt={partner.name}
                width={150}
                height={150}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
