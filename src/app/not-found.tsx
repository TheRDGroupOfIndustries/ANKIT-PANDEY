"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function NotFound() {
    const [elements, setElements] = useState<{ x: string, y: string, opacity: number, duration: number }[]>([]);

    useEffect(() => {
        const newElements = Array.from({ length: 20 }).map(() => ({
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random(),
            duration: Math.random() * 5 + 5
        }));

        const timeout = setTimeout(() => {
            setElements(newElements);
        }, 0);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-center items-center justify-center px-6 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

            <div className="max-w-3xl w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-[12rem] md:text-[16rem] font-black text-white/5 leading-none select-none"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    >
                        404
                    </motion.h1>

                    <div className="-mt-16 md:-mt-24 space-y-6">
                        <h2 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Lost in the Digital Wild?
                        </h2>
                        <p className="text-xl text-slate-400 max-w-xl mx-auto leading-relaxed">
                            The page you're looking for seems to have vanished into the grid.
                            Let's get you back on the growth track.
                        </p>

                        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] cursor-pointer"
                                >
                                    Back to Growth Track
                                </motion.button>
                            </Link>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border-2 border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 cursor-pointer"
                                >
                                    Need Help?
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {elements.map((el, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                        initial={{
                            x: el.x,
                            y: el.y,
                            opacity: el.opacity
                        }}
                        animate={{
                            y: [null, "-10%"],
                            opacity: [null, 0]
                        }}
                        transition={{
                            duration: el.duration,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
