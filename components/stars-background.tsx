"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  duration: string;
  delay: string;
  isShooting: boolean;
  moveX: string;
  moveY: string;
  shootDuration: string;
  opacity: number;
}

export function StarsBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 1 + 2}px`,
      duration: `${Math.random() * 4 + 2}s`,
      delay: `${Math.random() * 2}s`,
      isShooting: false,
      moveX: "0px",
      moveY: "0px",
      shootDuration: "1s",
      opacity: 1,
    }));
    setStars(generatedStars);
  }, []);

  // ⭐ Random auto-trigger
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const scheduleNext = () => {
      const delay = Math.floor(Math.random() * 5000) + 10000; // 10–30 secs
      timer = setTimeout(() => {
        handleClick();
        scheduleNext(); // Schedule again after firing
      }, delay);
    };

    scheduleNext();

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleClick = () => {
    setStars((prevStars) => {
      const newStars = [...prevStars];
      const shootingCount = Math.floor(Math.random() * 4) + 2; // 2–5 stars
      const randomIndexes = new Set<number>();

      while (randomIndexes.size < shootingCount) {
        randomIndexes.add(Math.floor(Math.random() * prevStars.length));
      }

      randomIndexes.forEach((index) => {
        const shootDuration = `${Math.random() * 8 + 2}s`;

        newStars[index] = {
          ...newStars[index],
          isShooting: true,
          moveX: `${Math.random() * 1200 - 300}px`,
          moveY: `${Math.random() * 800 + 200}px`,
          shootDuration,
          opacity: 1,
        };

        setTimeout(() => {
          setStars((currentStars) => {
            const updatedStars = [...currentStars];
            updatedStars[index] = { ...updatedStars[index], opacity: 0 };
            return updatedStars;
          });
        }, parseFloat(shootDuration) * 800);

        setTimeout(() => {
          setStars((currentStars) => {
            const updatedStars = [...currentStars];
            updatedStars[index] = {
              id: updatedStars[index].id,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              size: `${Math.random() * 1 + 2}px`,
              duration: `${Math.random() * 4 + 2}s`,
              delay: `${Math.random() * 2}s`,
              isShooting: false,
              moveX: "0px",
              moveY: "0px",
              shootDuration: "1s",
              opacity: 1,
            };
            return updatedStars;
          });
        }, parseFloat(shootDuration) * 1000);
      });

      return [...newStars];
    });
  };

  return (
    <div
      className="stars-bg fixed inset-0 z-0 pointer-events-auto overflow-hidden"
      onClick={handleClick}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star absolute ${star.isShooting ? "shooting-star" : ""}`}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            transform: star.isShooting
              ? `translate(${star.moveX}, ${star.moveY})`
              : "none",
            transition: star.isShooting
              ? `transform ${star.shootDuration} linear, opacity 0.5s ease-out`
              : "",
            animationDuration: star.duration,
            animationDelay: star.delay,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
