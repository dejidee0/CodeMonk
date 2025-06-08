"use client";

import React from "react";

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center">
      {/* Animated Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 overflow-hidden bg-white/10">
        <div className="h-full w-1/3 bg-blue-500 animate-loaderBar" />
      </div>

      {/* Spinner */}
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:-0.3s]" />
        <div className="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:-0.15s]" />
        <div className="w-3 h-3 rounded-full bg-white animate-bounce" />
      </div>
    </div>
  );
};

export default GlobalLoader;
