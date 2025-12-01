"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToSection() {
  const params = useSearchParams();
  const sectionId = params.get("scroll");

  useEffect(() => {
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        const navHeight = 80;

        window.scrollTo({
          top: section.offsetTop - navHeight,
          behavior: "smooth",
        });
      }
    }
  }, [sectionId]);

  return null;
}
