// components/WelcomeModal.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 7000); // auto-close after 7s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white dark:bg-zinc-900 rounded-xl p-6 max-w-sm w-[90%] shadow-2xl text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button
              className="absolute top-4 right-4 text-zinc-400 hover:text-red-500 text-xl"
              onClick={() => setIsVisible(false)}
            >
              &times;
            </button>

            {/* Simple SVG animation or Emoji */}
            <div className="mb-4 flex justify-center">
              <svg
                className="w-20 h-20 animate-bounce text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.75l2.938 5.958L21 11.25l-4.531 4.531L17.875 21 12 18.375 6.125 21l1.406-5.219L3 11.25l6.063-.542L12 4.75z"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-zinc-800 dark:text-white">
              Welcome to CodewithMonk Company Website 💫
            </h2>
            <p className="mt-2 text-zinc-500 dark:text-zinc-300">
              Connect, Explore and Partner with us in giving you a wonderful web
              experience in both Education and Solution
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
