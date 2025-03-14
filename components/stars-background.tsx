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
      opacity: 1, // Default opacity
    }));
    setStars(generatedStars);
  }, []);

  const handleClick = () => {
    setStars((prevStars) => {
      const newStars = [...prevStars];
      const shootingCount = Math.floor(Math.random() * 4) + 2; // 2 to 5 stars
      const randomIndexes = new Set<number>();

      while (randomIndexes.size < shootingCount) {
        randomIndexes.add(Math.floor(Math.random() * prevStars.length));
      }

      randomIndexes.forEach((index) => {
        const shootDuration = `${Math.random() * 8 + 2}s`; // Random speed between 2s and 10s

        newStars[index] = {
          ...newStars[index],
          isShooting: true,
          moveX: `${Math.random() * 1200 - 300}px`, // Move further left or right
          moveY: `${Math.random() * 800 + 200}px`, // Move further downward
          shootDuration,
          opacity: 1, // Start fully visible
        };

        // Step 1: Start fading out after most of the shooting duration
        setTimeout(() => {
          setStars((currentStars) => {
            const updatedStars = [...currentStars];
            updatedStars[index] = {
              ...updatedStars[index],
              opacity: 0, // Fade out
            };
            return updatedStars;
          });
        }, parseFloat(shootDuration) * 800); // Fade out before disappearing

        // Step 2: Remove the star completely after it fades out, then respawn at a new location
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
              opacity: 1, // Reset opacity
            };
            return updatedStars;
          });
        }, parseFloat(shootDuration) * 1000); // Reset after full shooting duration
      });

      return [...newStars];
    });
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-auto overflow-hidden" onClick={handleClick}>
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
            opacity: star.opacity, // Controls fade-out
          }}
        />
      ))}
    </div>
  );
}
