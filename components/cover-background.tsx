"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingEffect() {
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typedRef.current) {
        const typed = new Typed(typedRef.current, {
            strings: [
                "&lt;Zach Yamio/&gt;",
                "&lt;Developer/&gt;",
                "&lt;Freelancer/&gt;",
                "&lt;Designer/&gt;", 
            ],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        });

        return () => typed.destroy(); // Cleanup on unmount
        }
    }, []);

    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">Hi I`m</h2>
        <h1 className="text-4xl md:text-9xl font-bold uppercase bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            <span ref={typedRef} className="bg-gradient-to-r from-700 to-gray-900 bg-clip-text text-transparent" />
        </h1>
        </div>
    );
}
