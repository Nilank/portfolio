import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router";
import * as React from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("fadeOut");
      setTimeout(() => {
        setTransitionStage("fadeIn");
        setDisplayLocation(location);
        // Scroll to top when transitioning to a new page
        window.scrollTo(0, 0);
      }, 300);
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`min-h-[calc(100vh-6rem)] w-full ${
        transitionStage === "fadeIn" ? "animate-fade-in" : "animate-fade-out"
      }`}
      style={{
        animationDuration: "300ms",
        perspective: "1000px",
      }}
    >
      {children}
    </div>
  );
}
